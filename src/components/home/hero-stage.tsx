"use client";

import { useState } from "react";

type PresetKey = "clinica" | "advocacia" | "comercio";

interface Preset {
  id: PresetKey;
  label: string;
  url: string;
  eyebrow: string;
  name: string;
  headline: string;
  description: string;
  rating: string;
  badges: string[];
  cta: string;
  conversionStat: string;
}

const PRESETS: Record<PresetKey, Preset> = {
  clinica: {
    id: "clinica",
    label: "Clínica & Estética",
    url: "dramarianasantos.com.br",
    eyebrow: "DERMATOLOGIA & ESTÉTICA AVANÇADA",
    name: "Dra. Mariana Santos",
    headline: "Realce a sua beleza natural com segurança e medicina de precisão.",
    description: "Protocolos personalizados, tecnologia de ponta e um espaço pensado exclusivamente para o seu conforto.",
    rating: "★ 5.0 (180+ avaliações no Google)",
    badges: ["Atendimento VIP", "Procedimentos Guiados", "São Paulo / SP"],
    cta: "Agendar Avaliação no WhatsApp",
    conversionStat: "+73% de agendamentos diretos",
  },
  advocacia: {
    id: "advocacia",
    label: "Escritório de Advocacia",
    url: "almeidaecastro.adv.br",
    eyebrow: "ADVOCACIA EMPRESARIAL & DIREITO MÉDICO",
    name: "Almeida & Castro Advogados",
    headline: "Assessoria jurídica estratégica para blindar o seu patrimônio e empresa.",
    description: "Atuação ágil, sigilosa e com foco em soluções eficientes para defender os interesses do seu negócio.",
    rating: "★ 4.9 (Mais de 400 causas concluídas)",
    badges: ["Consultoria Preventiva", "Atendimento Nacional", "Equipe Especializada"],
    cta: "Falar com Advogado Especialista",
    conversionStat: "Contato qualificado em 1 clique",
  },
  comercio: {
    id: "comercio",
    label: "Gastronomia & Comércio",
    url: "emporiogourmet.com.br",
    eyebrow: "CAFÉ ESPECIAL & GASTRONOMIA ARTESANAL",
    name: "Empório & Bistrô Raízes",
    headline: "Sabores autênticos com ingredientes frescos selecionados todos os dias.",
    description: "Cardápio sazonal, reserva rápida de mesas e pedidos sem intermediários nem taxas abusivas.",
    rating: "★ 4.9 (Mais de 500 clientes semanais)",
    badges: ["Reserva Instantânea", "Sem Taxas Abusivas", "Prêmios de Gastronomia"],
    cta: "Reservar Mesa ou Pedir no WhatsApp",
    conversionStat: "Pedidos diretos sem comissão",
  },
};

export function HeroStage() {
  const [active, setActive] = useState<PresetKey>("clinica");
  const current = PRESETS[active];

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none">
      {/* Halo de luz decorativo */}
      <div
        aria-hidden
        className="halo absolute -inset-6 rounded-[2.5rem] bg-accent-solid/25 blur-3xl opacity-60"
      />

      {/* Seletor de Nichos — Tátil e Simples */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="tech-label text-[10.5px] text-ink-dim font-mono">
            SIMULAÇÃO EM TEMPO REAL:
          </p>
        </div>

        <div className="flex items-center rounded-xl border border-line-strong bg-bg-sunken/90 p-1 backdrop-blur-md">
          {(["clinica", "advocacia", "comercio"] as PresetKey[]).map((key) => {
            const isSelected = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-accent-solid text-white shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                {PRESETS[key].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chassi do Navegador / Hardware com Border-Beam */}
      <div className="industrial-panel relative overflow-hidden rounded-2xl border border-line-strong bg-bg-elevated/95 p-3 sm:p-5 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
        <div className="border-beam" />

        {/* Barra de Topo do Browser */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          </div>

          {/* Barra de URL com cadeado SSL */}
          <div className="flex items-center gap-2 rounded-lg border border-line bg-bg-sunken px-3.5 py-1 text-xs font-mono text-ink-dim">
            <svg
              className="h-3 w-3 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-muted">https://</span>
            <span className="font-medium text-ink">{current.url}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-muted">
            <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-semibold text-emerald-500">
              ABRE EM 0.3s
            </span>
            <span className="rounded bg-accent-solid/15 px-2 py-0.5 font-semibold text-accent-solid">
              100% CELULAR
            </span>
          </div>
        </div>

        {/* Corpo da Simulação da Landing Page */}
        <div className="relative mt-5 rounded-xl border border-line bg-surface/40 p-5 sm:p-8">
          <div className="max-w-2xl">
            {/* Tag / Avaliação */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="tech-label text-accent-solid text-[10px]">
                {current.eyebrow}
              </span>
              <span className="text-muted">•</span>
              <span className="text-[11px] font-medium text-amber-500 dark:text-amber-400">
                {current.rating}
              </span>
            </div>

            {/* Headline de Alto Impacto */}
            <h3 className="t-display mt-4 text-[clamp(1.5rem,3.2vw,2.3rem)] leading-tight text-ink">
              {current.headline}
            </h3>

            {/* Descrição Limpa */}
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
              {current.description}
            </p>

            {/* Badges de Confiança */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {current.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-md border border-line bg-bg-sunken/80 px-2.5 py-1 text-xs text-ink-dim"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Botão de Ação / WhatsApp */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5511941889077?text=Olá!%20Gostaria%20de%20um%20diagnóstico%20gratuito%20para%20minha%20empresa%20com%20a%20Vetrium."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-semibold text-white shadow-md transition-all"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20">
                  💬
                </span>
                <span>{current.cta}</span>
              </a>

              <span className="text-xs font-medium text-emerald-500 dark:text-emerald-400">
                ✓ {current.conversionStat}
              </span>
            </div>
          </div>
        </div>

        {/* Rodapé Técnico Discreto do Chassis */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3 text-[10px] font-mono text-muted">
          <div className="flex items-center gap-3">
            <span>DISPOSITIVO: RETINA / MOBILE / DESKTOP</span>
            <span className="opacity-30">•</span>
            <span>SEGURANÇA: SSL NATIVO</span>
          </div>
          <div className="flex items-center gap-2 text-ink-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-solid" />
            <span>ENGENHARIA VETRIUM STUDIO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
