import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/require-auth";

export async function GET() {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const clientes = await prisma.cliente.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(clientes);
}

export async function POST(request: Request) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const body = await request.json();
  const { nome, descricao, origem, estagio, proximoPasso, bloqueio } = body;

  if (!nome || typeof nome !== "string") {
    return NextResponse.json({ error: "nome é obrigatório" }, { status: 400 });
  }

  const cliente = await prisma.cliente.create({
    data: { nome, descricao, origem, estagio, proximoPasso, bloqueio },
  });

  return NextResponse.json(cliente, { status: 201 });
}
