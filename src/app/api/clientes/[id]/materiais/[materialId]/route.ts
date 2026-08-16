import fs from "fs/promises";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/require-auth";
import { caminhoAbsolutoMaterial } from "@/lib/uploads";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string; materialId: string }> },
) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { materialId } = await params;
  const material = await prisma.material.findUnique({ where: { id: materialId } });
  if (!material) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  const buffer = await fs.readFile(caminhoAbsolutoMaterial(material.caminho));
  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": material.tipo ?? "application/octet-stream",
      "Content-Disposition": `attachment; filename="${encodeURIComponent(material.nomeArquivo)}"`,
    },
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string; materialId: string }> },
) {
  const userId = await requireUserId();
  if (!userId) return NextResponse.json({ error: "não autenticado" }, { status: 401 });

  const { materialId } = await params;
  const material = await prisma.material.findUnique({ where: { id: materialId } });
  if (!material) return NextResponse.json({ error: "não encontrado" }, { status: 404 });

  await fs.unlink(caminhoAbsolutoMaterial(material.caminho)).catch(() => {});
  await prisma.material.delete({ where: { id: materialId } });

  return NextResponse.json({ ok: true });
}
