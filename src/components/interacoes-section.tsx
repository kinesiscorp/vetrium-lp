"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Interacao = {
  id: string;
  nota: string;
  data: string | Date;
  autor: { name: string };
};

export function InteracoesSection({
  clienteId,
  interacoes,
}: {
  clienteId: string;
  interacoes: Interacao[];
}) {
  const router = useRouter();
  const [nota, setNota] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nota.trim()) return;

    setEnviando(true);
    await fetch(`/api/clientes/${clienteId}/interacoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nota }),
    });

    setEnviando(false);
    setNota("");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-neutral-300">Histórico de interações</h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <textarea
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          rows={2}
          placeholder="Registrar uma conversa, follow-up, decisão…"
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
        <button
          type="submit"
          disabled={enviando}
          className="self-start rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900 disabled:opacity-50"
        >
          {enviando ? "Salvando…" : "Adicionar"}
        </button>
      </form>

      <ul className="flex flex-col gap-3">
        {interacoes.length === 0 && (
          <li className="text-sm text-neutral-500">Nenhuma interação registrada ainda.</li>
        )}
        {interacoes.map((i) => (
          <li key={i.id} className="rounded-md border border-neutral-800 px-3 py-2 text-sm">
            <p className="text-neutral-200">{i.nota}</p>
            <p className="mt-1 text-xs text-neutral-500">
              {i.autor.name} · {new Date(i.data).toLocaleString("pt-BR")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
