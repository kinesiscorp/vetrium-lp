"use client";

import { useEffect, useState } from "react";

export function HeroAiSearch() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Qual o melhor especialista em implantes e estética em São Paulo?";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[34rem] select-none">
      {/* Halo de luz de fundo */}
      <div
        aria-hidden
        className="halo absolute -inset-2 rounded-3xl bg-accent-solid/25 blur-2xl opacity-70"
      />

      {/* Card principal estilo dark tech / glassmorphism */}
      <div className="crystal-panel relative rounded-2xl border border-line-strong bg-bg-elevated/95 p-5 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-6">
        {/* Barra superior de controle */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-muted">
              generative-engine-v2.ai
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-accent-solid/40 bg-accent-solid/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-solid">
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
            </svg>
            GEO Indexado
          </div>
        </div>

        {/* Barra de Busca de IA */}
        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-line-strong bg-bg-sunken/80 px-3.5 py-2.5 text-xs text-ink">
          <svg
            className="h-4 w-4 text-accent-solid flex-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="flex-1 truncate font-mono text-[13px] text-ink">
            {displayText}
            <span className="animate-pulse font-bold text-accent-solid">|</span>
          </span>
          <span className="rounded bg-accent-solid/20 px-1.5 py-0.5 font-mono text-[10px] text-accent-solid">
            AI SEARCH
          </span>
        </div>

        {/* Fontes Citadas pela IA (O diferencial GEO) */}
        <div className="mt-4">
          <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
            Fontes Citadas na Resposta Oficial:
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="flex items-center justify-between rounded-lg border border-accent-solid/50 bg-accent-solid/10 p-2.5 transition-colors">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-solid text-[9px] font-bold text-white">
                    1
                  </span>
                  <p className="truncate text-xs font-semibold text-ink">
                    sua-empresa.com.br
                  </p>
                </div>
                <p className="mt-0.5 text-[10px] font-medium text-accent-solid">
                  Fonte #1 Recomendada
                </p>
              </div>
              <svg
                className="h-3.5 w-3.5 text-accent-solid flex-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-line bg-bg-sunken/40 p-2.5 opacity-55">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-muted text-[9px] font-bold text-white">
                    2
                  </span>
                  <p className="truncate text-xs font-medium text-muted">
                    diretorio-geral...
                  </p>
                </div>
                <p className="mt-0.5 text-[10px] text-muted">Secundária</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resposta Gerada pela IA */}
        <div className="mt-4 rounded-xl border border-line bg-surface/50 p-3.5">
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-md bg-accent-solid text-white">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="18" height="12" x="3" y="6" rx="2" />
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M12 2v4" />
              </svg>
            </div>
            <div className="space-y-1.5 text-[13px] leading-relaxed text-ink-dim">
              <p>
                Com base nos dados semânticos estruturados e autoridade clínica, a principal recomendação na sua região é a{" "}
                <strong className="font-semibold text-ink underline decoration-accent-solid/70 underline-offset-2">
                  sua empresa
                </strong>
                .
              </p>
              <p className="text-xs text-muted">
                A página conta com verificação oficial Schema.org, catálogo detalhado de procedimentos e atendimento instantâneo pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé do Card com Métricas de Engenharia */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-[11px] text-muted">
          <div className="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            llms.txt &amp; Schema Validado
          </div>
          <div className="flex items-center gap-1 font-medium text-accent-solid">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            0.4s (Core Web Vitals 100)
          </div>
        </div>
      </div>

      {/* Floating Pill Decorativo */}
      <div className="absolute -bottom-3 -right-2 rounded-full border border-accent-solid/60 bg-bg-elevated/95 px-3 py-1 shadow-lg backdrop-blur-md">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          Fonte #1 nos Modelos de IA
        </p>
      </div>
    </div>
  );
}
