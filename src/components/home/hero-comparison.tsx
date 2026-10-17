"use client";

import { useState } from "react";

export function HeroComparison() {
  const [activeTab, setActiveTab] = useState<"common" | "vetrium">("vetrium");

  return (
    <div className="relative mx-auto w-full max-w-[34rem] select-none">
      {/* Halo de luz de fundo */}
      <div
        aria-hidden
        className="halo absolute -inset-2 rounded-3xl bg-accent-solid/20 blur-2xl opacity-60"
      />

      {/* Card Principal */}
      <div className="crystal-panel relative rounded-2xl border border-line-strong bg-bg-elevated/95 p-5 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-6">
        {/* Seletor Tátil: Comum vs Vetrium */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            No celular do seu cliente:
          </p>
          <div className="flex items-center rounded-lg border border-line bg-bg-sunken p-1">
            <button
              type="button"
              onClick={() => setActiveTab("common")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeTab === "common"
                  ? "bg-red-500/15 text-red-400 border border-red-500/30"
                  : "text-muted hover:text-ink"
              }`}
            >
              Site comum / linktree
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("vetrium")}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all ${
                activeTab === "vetrium"
                  ? "bg-accent-solid text-white shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              Com a Vetrium
            </button>
          </div>
        </div>

        {/* Visualização da Simulação */}
        {activeTab === "common" ? (
          <div className="mt-5 space-y-3.5">
            <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-red-500/20 text-red-400 font-bold text-xs">
                  ✕
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-400">
                    Demora para abrir e passa impressão amadora
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">
                    Página pesada que trava no 4G, fotos distorcidas e textos colados. O cliente não sente firmeza no seu preço, fecha a aba e vai procurar outro lugar.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 flex-none" />
                <span>O cliente tem que procurar onde clica para falar com você</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 flex-none" />
                <span>Visual simples que faz o cliente chorar desconto</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 flex-none" />
                <span>Zero destaque para o que você faz de melhor</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-3.5">
            <div className="rounded-xl border border-accent-solid/30 bg-accent-solid/10 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-accent-solid text-white font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold text-ink">
                      Abre instantaneamente e transmite autoridade
                    </p>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                      ABRE EM 1S
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-dim">
                    Design limpo e feito sob medida para celular. O cliente entra, entende exatamente a qualidade do seu serviço e sente segurança em fechar negócio com você.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulação do Botão de WhatsApp */}
            <div className="rounded-xl border border-line bg-surface/70 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500 text-white font-bold text-xs">
                    💬
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink">
                      Conversa Direta no WhatsApp
                    </p>
                    <p className="text-[11px] text-muted">
                      1 clique e o cliente já cai conversando com você
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400">
                  Pronto →
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs text-muted">
              <div className="flex items-center gap-2 text-ink-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-none" />
                <span>Página que funciona perfeito em qualquer iPhone ou Android</span>
              </div>
              <div className="flex items-center gap-2 text-ink-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-none" />
                <span>Apresentação elegante que justifica o valor do seu trabalho</span>
              </div>
            </div>
          </div>
        )}

        {/* Rodapé com Garantias Práticas */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3 text-[11px] text-muted">
          <div className="flex items-center gap-1.5 font-medium text-ink-dim">
            <span className="text-accent-solid font-bold">📱</span>
            100% focado no celular
          </div>
          <div className="flex items-center gap-1.5 font-medium text-ink-dim">
            <span className="text-emerald-400 font-bold">⚡</span>
            Carregamento ultrarrápido
          </div>
          <div className="flex items-center gap-1.5 font-medium text-ink-dim">
            <span className="text-accent-solid font-bold">🔒</span>
            Sem mensalidades surpresa
          </div>
        </div>
      </div>

      {/* Pill Flutuante */}
      <div className="absolute -bottom-3 -right-2 rounded-full border border-accent-solid/50 bg-bg-elevated/95 px-3 py-1 shadow-lg backdrop-blur-md">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          A primeira impressão certa
        </p>
      </div>
    </div>
  );
}
