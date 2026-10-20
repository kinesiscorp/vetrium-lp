import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { parseQuote, serviceLabels, validateAll } from "@/lib/site/quote";

/**
 * Recebe a solicitação de orçamento do site e cria um lead no CRM
 * (/admin → Clientes, estágio LEAD). Público por natureza, então:
 *  - honeypot (`website`) e tempo mínimo de preenchimento contra bots;
 *  - limite de envios por IP (memória do processo — suficiente para uma
 *    instância única no Dokku; com várias réplicas, trocar por Redis);
 *  - deduplicação: mesmo e-mail em 10 minutos não cria outro lead.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 4000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Bot preencheu o campo invisível ou enviou rápido demais: responde 200
  // sem gravar nada, para não ensinar o bot a contornar a regra.
  const startedAt = Number(raw.startedAt);
  if (raw.website || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "desconhecido";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas solicitações em pouco tempo. Tente novamente em alguns minutos." },
      { status: 429 },
    );
  }

  const data = parseQuote(raw);
  if (!data) return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });

  const errors = validateAll(data);
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Revise os campos destacados.", errors }, { status: 422 });
  }

  const descricao = [
    `Solicitação de orçamento enviada pelo site em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}.`,
    "",
    `Serviço: ${serviceLabels(data.services).join(", ")}`,
    `Negócio: ${data.business}`,
    `Objetivo: ${data.goal}`,
    `Investimento previsto: ${data.budget || "não informado"}`,
    `Empresa: ${data.company || "não informada"}`,
    "",
    "Descrição:",
    data.message || "(sem descrição)",
    "",
    `Contato: ${data.name} <${data.email}>`,
  ].join("\n");

  try {
    const duplicate = await prisma.cliente.findFirst({
      where: {
        origem: "Site — formulário de orçamento",
        descricao: { contains: `<${data.email}>` },
        createdAt: { gte: new Date(Date.now() - WINDOW_MS) },
      },
      select: { id: true },
    });
    if (duplicate) return NextResponse.json({ ok: true, duplicate: true });

    await prisma.cliente.create({
      data: {
        nome: data.company ? `${data.name} — ${data.company}` : data.name,
        descricao,
        origem: "Site — formulário de orçamento",
        estagio: "LEAD",
        proximoPasso: `Responder a solicitação de orçamento (${data.email})`,
      },
    });
  } catch (err) {
    console.error("[orcamento] falha ao gravar no CRM", err);
    return NextResponse.json(
      { error: "Não conseguimos registrar sua solicitação agora." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
