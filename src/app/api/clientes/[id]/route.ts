import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/require-auth";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { id } = await params;
  const cliente = await prisma.cliente.findUnique({
    where: { id },
    include: {
      materiais: { orderBy: { uploadedAt: "desc" } },
      interacoes: { orderBy: { data: "desc" }, include: { autor: true } },
    },
  });

  if (!cliente) return NextResponse.json({ error: "não encontrado" }, { status: 404 });
  return NextResponse.json(cliente);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();
  const { nome, descricao, origem, estagio, proximoPasso, bloqueio } = body;

  const cliente = await prisma.cliente.update({
    where: { id },
    data: { nome, descricao, origem, estagio, proximoPasso, bloqueio },
  });

  return NextResponse.json(cliente);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { id } = await params;
  await prisma.cliente.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
