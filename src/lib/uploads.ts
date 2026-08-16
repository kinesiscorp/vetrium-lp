import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";

export const UPLOAD_DIR = process.env.UPLOAD_DIR ?? path.join(process.cwd(), "uploads");

export async function ensureUploadDir(): Promise<void> {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
}

export async function salvarMaterial(file: File): Promise<{ nomeArquivo: string; caminho: string; tipo: string | null }> {
  await ensureUploadDir();
  const ext = path.extname(file.name);
  const nomeArmazenado = `${randomUUID()}${ext}`;
  const caminho = path.join(/* turbopackIgnore: true */ UPLOAD_DIR, nomeArmazenado);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(caminho, buffer);
  return { nomeArquivo: file.name, caminho: nomeArmazenado, tipo: file.type || null };
}

export function caminhoAbsolutoMaterial(caminhoArmazenado: string): string {
  return path.join(/* turbopackIgnore: true */ UPLOAD_DIR, caminhoArmazenado);
}
