"use client";

import { useMemo, useState } from "react";

/**
 * Base ranges anchored on real proposals already sent by the Vetrium:
 * - "redesign" médio = exact numbers from proposal-frog / proposal-jjl
 *   (R$3.500 prototype / R$4.700 functional, rounded into one médio range).
 * - "branding" pequeno = Dá o Play quote (R$1.100 identidade visual).
 * - "redesign" pequeno = Dá o Play quote (R$700 wireframe + copy).
 * Everything else (pequeno/grande on redesign+branding, all of "produto")
 * is extrapolated from the same implied hourly rate (~R$90–100/h) since no
 * client has been quoted at those sizes yet — treat as a starting point,
 * not a fixed rule.
 */
type Category = "redesign" | "branding" | "produto";
type SizeId = "pequeno" | "medio" | "grande";
type StyleId = "padrao" | "autoral";
type TimelineId = "flexivel" | "urgente";
type Mode = "unico" | "recorrente";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "redesign", label: "Redesign / Landing page" },
  { id: "branding", label: "Identidade visual" },
  { id: "produto", label: "Produto digital" },
];

const SIZES: { id: SizeId; label: string }[] = [
  { id: "pequeno", label: "Pequeno" },
  { id: "medio", label: "Médio" },
  { id: "grande", label: "Grande" },
];

const SIZE_DESC: Record<Category, Record<SizeId, string>> = {
  redesign: {
    pequeno: "Wireframe enxuto, até 5 seções",
    medio: "Protótipo completo, 6 a 10 seções",
    grande: "Multi-página ou escopo funcional maior",
  },
  branding: {
    pequeno: "Essencial — logo, paleta e tipografia",
    medio: "+ manual de marca básico",
    grande: "Sistema completo de aplicações",
  },
  produto: {
    pequeno: "MVP / wireframe, poucas telas",
    medio: "Produto com design system",
    grande: "App completo, múltiplos fluxos",
  },
};

const STYLES: { id: StyleId; label: string }[] = [
  { id: "padrao", label: "Padrão — dentro do nosso sistema visual" },
  { id: "autoral", label: "Autoral — identidade do zero, mais exploração" },
];

const TIMELINES: { id: TimelineId; label: string }[] = [
  { id: "flexivel", label: "Flexível — sem pressa" },
  { id: "urgente", label: "Urgente — prioridade na fila" },
];

const PRICE_TABLE: Record<
  Category,
  Record<SizeId, { min: number; max: number; days: [number, number] }>
> = {
  redesign: {
    pequeno: { min: 700, max: 1400, days: [5, 8] },
    medio: { min: 3500, max: 4700, days: [10, 20] },
    grande: { min: 5500, max: 7500, days: [20, 30] },
  },
  branding: {
    pequeno: { min: 1100, max: 1600, days: [7, 10] },
    medio: { min: 2000, max: 2800, days: [12, 18] },
    grande: { min: 3500, max: 5000, days: [20, 28] },
  },
  produto: {
    pequeno: { min: 2500, max: 4000, days: [10, 15] },
    medio: { min: 6000, max: 9000, days: [20, 30] },
    grande: { min: 10000, max: 15000, days: [35, 50] },
  },
};

const STYLE_MULT: Record<StyleId, number> = { padrao: 1, autoral: 1.25 };
const TIMELINE_MULT: Record<TimelineId, number> = { flexivel: 1, urgente: 1.25 };
const AVISTA_DESCONTO = 0.15; // mesmo desconto já praticado nas propostas Frog/JJL
const ROUND_TO = 50;

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function round(n: number) {
  return Math.round(n / ROUND_TO) * ROUND_TO;
}

export function PricingCalculator() {
  const [mode, setMode] = useState<Mode>("unico");
  const [category, setCategory] = useState<Category>("redesign");
  const [size, setSize] = useState<SizeId>("medio");
  const [style, setStyle] = useState<StyleId>("padrao");
  const [timeline, setTimeline] = useState<TimelineId>("flexivel");

  const estimate = useMemo(() => {
    const base = PRICE_TABLE[category][size];
    const mult = STYLE_MULT[style] * TIMELINE_MULT[timeline];
    const min = round(base.min * mult);
    const max = round(base.max * mult);
    const avistaMin = round(min * (1 - AVISTA_DESCONTO));
    const avistaMax = round(max * (1 - AVISTA_DESCONTO));
    return { min, max, avistaMin, avistaMax, days: base.days };
  }, [category, size, style, timeline]);

  const mailBody = `Categoria: ${CATEGORIES.find((c) => c.id === category)?.label}%0ATamanho: ${SIZES.find((s) => s.id === size)?.label}%0AEstilo: ${STYLES.find((s) => s.id === style)?.label}%0APrazo desejado: ${TIMELINES.find((t) => t.id === timeline)?.label}%0AFaixa estimada: ${brl.format(estimate.min)} – ${brl.format(estimate.max)}`;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_1fr]">
      <div data-anim="fade" className="js-anim">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent-solid">
          Investimento
        </p>
        <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tighter">
          Orçamento <span className="serif-accent">simples</span>
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted">
          A maioria dos projetos já sai com faixa de valor e prazo claros
          aqui. Fora da régua, ajustamos numa conversa rápida.
        </p>
      </div>

      <div data-anim="fade" data-delay={100} className="js-anim">
        <div className="mb-6 inline-flex rounded-full border border-line p-1">
          {(
            [
              { id: "unico" as const, label: "Projeto único" },
              { id: "recorrente" as const, label: "Recorrente" },
            ]
          ).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                mode === m.id
                  ? "bg-metal text-accent-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {mode === "recorrente" ? (
          <div className="gradient-frame glass rounded-3xl p-10 text-center">
            <p className="text-lg font-semibold tracking-tight">
              Ainda não temos um plano de recorrência fechado
            </p>
            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
              Se o seu caso é demanda contínua, não pontual, manda uma
              mensagem que a gente monta uma proposta sob medida.
            </p>
            <a
              href="mailto:contato@vetrium.com.br?subject=Demanda%20recorrente"
              className="mt-7 inline-block rounded-full bg-metal px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              Falar com a Vetrium
            </a>
          </div>
        ) : (
          <div className="gradient-frame glass rounded-3xl p-6 sm:p-8">
            <Row n={1} label="Tipo de projeto">
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value as Category);
                  setSize("medio");
                }}
                className="calc-select"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Row>

            <Row n={2} label="Tamanho">
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as SizeId)}
                className="calc-select"
              >
                {SIZES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label} — {SIZE_DESC[category][s.id]}
                  </option>
                ))}
              </select>
            </Row>

            <Row n={3} label="Estilo">
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value as StyleId)}
                className="calc-select"
              >
                {STYLES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </Row>

            <Row n={4} label="Prazo" last>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value as TimelineId)}
                className="calc-select"
              >
                {TIMELINES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Row>

            <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Faixa estimada
                </p>
                <p className="tnum mt-2 text-[clamp(1.6rem,3.4vw,2.25rem)] font-semibold tracking-tight">
                  {brl.format(estimate.min)} – {brl.format(estimate.max)}
                </p>
                <p className="tnum mt-1 text-sm text-muted">
                  À vista: {brl.format(estimate.avistaMin)} –{" "}
                  {brl.format(estimate.avistaMax)} · {estimate.days[0]}–
                  {estimate.days[1]} dias úteis
                </p>
              </div>
              <a
                href={`mailto:contato@vetrium.com.br?subject=Or%C3%A7amento%20estimado&body=${mailBody}`}
                className="inline-block rounded-full bg-ink px-6 py-3 text-center text-[13px] font-semibold text-bg transition-opacity hover:opacity-85"
              >
                Fechar esse orçamento
              </a>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted">
              Estimativa de referência — Redesign/Landing page médio e
              Identidade essencial refletem valores já praticados em
              propostas reais; as demais faixas ainda não foram testadas com
              cliente e podem mudar após um diagnóstico.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({
  n,
  label,
  last,
  children,
}: {
  n: number;
  label: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={last ? "" : "mb-5"}>
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bg-sunken text-[10px] font-semibold text-muted">
          {n}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
