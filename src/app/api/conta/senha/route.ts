import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/require-auth";

export async function POST(request: Request) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const body = await request.json();
  const { senhaAtual, senhaNova } = body;

  if (!senhaAtual || !senhaNova || senhaNova.length < 8) {
    return NextResponse.json(
      { error: "senha atual obrigatória; senha nova precisa ter ao menos 8 caracteres" },
      { status: 400 },
    );
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  const valid = await bcrypt.compare(senhaAtual, user.passwordHash);
  if (!valid) return NextResponse.json({ error: "senha atual incorreta" }, { status: 400 });

  const passwordHash = await bcrypt.hash(senhaNova, 10);
  await prisma.user.update({ where: { id: userId }, data: { passwordHash } });

  return NextResponse.json({ ok: true });
}
