import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/require-auth";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { id: clienteId } = await params;
  const body = await request.json();
  const { nota } = body;

  if (!nota || typeof nota !== "string") {
    return NextResponse.json({ error: "nota é obrigatória" }, { status: 400 });
  }

  const interacao = await prisma.interacao.create({
    data: { clienteId, autorId: userId, nota },
    include: { autor: true },
  });

  return NextResponse.json(interacao, { status: 201 });
}
