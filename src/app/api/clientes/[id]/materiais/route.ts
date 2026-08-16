import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/require-auth";
import { salvarMaterial } from "@/lib/uploads";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { id: clienteId } = await params;
  const formData = await request.formData();
  const file = formData.get("arquivo");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "arquivo é obrigatório" }, { status: 400 });
  }

  const { nomeArquivo, caminho, tipo } = await salvarMaterial(file);

  const material = await prisma.material.create({
    data: { clienteId, nomeArquivo, caminho, tipo },
  });

  return NextResponse.json(material, { status: 201 });
}
