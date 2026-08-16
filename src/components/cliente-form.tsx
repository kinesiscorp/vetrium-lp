"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ESTAGIO_LABEL, ESTAGIOS } from "@/lib/estagios";
import type { EstagioFunil } from "@/generated/prisma/enums";

type ClienteInicial = {
  id?: string;
  nome: string;
  descricao: string;
  origem: string;
  estagio: EstagioFunil;
  proximoPasso: string;
  bloqueio: string;
};

const VAZIO: ClienteInicial = {
  nome: "",
  descricao: "",
  origem: "",
  estagio: "LEAD",
  proximoPasso: "",
  bloqueio: "",
};

export function ClienteForm({ inicial }: { inicial?: ClienteInicial }) {
  const router = useRouter();
  const [dados, setDados] = useState<ClienteInicial>(inicial ?? VAZIO);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const editando = Boolean(inicial?.id);

  function set<K extends keyof ClienteInicial>(campo: K, valor: ClienteInicial[K]) {
    setDados((d) => ({ ...d, [campo]: valor }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSalvando(true);
    setErro(null);

    const url = editando ? `/api/clientes/${inicial!.id}` : "/api/clientes";
    const method = editando ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    setSalvando(false);

    if (!res.ok) {
      setErro("Não foi possível salvar. Tente novamente.");
      return;
    }

    const cliente = await res.json();
    router.push(`/admin/clientes/${cliente.id}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-400">Nome</label>
        <input
          required
          value={dados.nome}
          onChange={(e) => set("nome", e.target.value)}
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-400">Descrição</label>
        <textarea
          value={dados.descricao}
          onChange={(e) => set("descricao", e.target.value)}
          rows={3}
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">Origem</label>
          <input
            value={dados.origem}
            onChange={(e) => set("origem", e.target.value)}
            className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-neutral-400">Estágio</label>
          <select
            value={dados.estagio}
            onChange={(e) => set("estagio", e.target.value as EstagioFunil)}
            className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
          >
            {ESTAGIOS.map((estagio) => (
              <option key={estagio} value={estagio}>
                {ESTAGIO_LABEL[estagio]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-400">Próximo passo</label>
        <input
          value={dados.proximoPasso}
          onChange={(e) => set("proximoPasso", e.target.value)}
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-400">Bloqueio</label>
        <input
          value={dados.bloqueio}
          onChange={(e) => set("bloqueio", e.target.value)}
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
      </div>

      {erro && <p className="text-sm text-red-400">{erro}</p>}

      <button
        type="submit"
        disabled={salvando}
        className="self-start rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 disabled:opacity-50"
      >
        {salvando ? "Salvando…" : editando ? "Salvar alterações" : "Criar cliente"}
      </button>
    </form>
  );
}
