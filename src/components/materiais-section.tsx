"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type Material = {
  id: string;
  nomeArquivo: string;
  uploadedAt: string | Date;
};

export function MateriaisSection({
  clienteId,
  materiais,
}: {
  clienteId: string;
  materiais: Material[];
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [enviando, setEnviando] = useState(false);

  async function onUpload(e: React.FormEvent) {
    e.preventDefault();
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    setEnviando(true);
    const formData = new FormData();
    formData.append("arquivo", file);

    await fetch(`/api/clientes/${clienteId}/materiais`, {
      method: "POST",
      body: formData,
    });

    setEnviando(false);
    if (inputRef.current) inputRef.current.value = "";
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-neutral-300">Materiais</h2>

      <ul className="flex flex-col divide-y divide-neutral-800 rounded-md border border-neutral-800">
        {materiais.length === 0 && (
          <li className="px-3 py-3 text-sm text-neutral-500">Nenhum material anexado.</li>
        )}
        {materiais.map((m) => (
          <li key={m.id} className="flex items-center justify-between px-3 py-2 text-sm">
            <a
              href={`/api/clientes/${clienteId}/materiais/${m.id}`}
              className="text-neutral-200 hover:underline"
            >
              {m.nomeArquivo}
            </a>
            <span className="text-xs text-neutral-500">
              {new Date(m.uploadedAt).toLocaleDateString("pt-BR")}
            </span>
          </li>
        ))}
      </ul>

      <form onSubmit={onUpload} className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="file"
          required
          className="text-sm text-neutral-400 file:mr-2 file:rounded-md file:border-0 file:bg-neutral-800 file:px-3 file:py-1.5 file:text-sm file:text-neutral-200"
        />
        <button
          type="submit"
          disabled={enviando}
          className="rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900 disabled:opacity-50"
        >
          {enviando ? "Enviando…" : "Anexar"}
        </button>
      </form>
    </div>
  );
}
