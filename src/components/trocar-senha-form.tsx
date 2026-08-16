"use client";

import { useState } from "react";

export function TrocarSenhaForm() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [mensagem, setMensagem] = useState<{ tipo: "erro" | "ok"; texto: string } | null>(null);
  const [salvando, setSalvando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSalvando(true);
    setMensagem(null);

    const res = await fetch("/api/conta/senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senhaAtual, senhaNova }),
    });

    setSalvando(false);

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setMensagem({ tipo: "erro", texto: body.error ?? "Não foi possível trocar a senha." });
      return;
    }

    setSenhaAtual("");
    setSenhaNova("");
    setMensagem({ tipo: "ok", texto: "Senha alterada com sucesso." });
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-400">Senha atual</label>
        <input
          type="password"
          required
          value={senhaAtual}
          onChange={(e) => setSenhaAtual(e.target.value)}
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-400">Nova senha</label>
        <input
          type="password"
          required
          minLength={8}
          value={senhaNova}
          onChange={(e) => setSenhaNova(e.target.value)}
          className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-600"
        />
      </div>
      {mensagem && (
        <p className={`text-sm ${mensagem.tipo === "erro" ? "text-red-400" : "text-green-400"}`}>
          {mensagem.texto}
        </p>
      )}
      <button
        type="submit"
        disabled={salvando}
        className="self-start rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900 disabled:opacity-50"
      >
        {salvando ? "Salvando…" : "Trocar senha"}
      </button>
    </form>
  );
}
