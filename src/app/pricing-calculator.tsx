"use client";

import { useMemo, useState, type ReactNode } from "react";
import { IconArrowRight } from "@/components/home/icons";

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

const MODES: { id: Mode; label: string }[] = [
  { id: "unico", label: "Projeto único" },
  { id: "recorrente", label: "Recorrente" },
];

/* CTA da marca: pílula em bg-metal com a seta em cápsula. Repetida nas duas
   abas, então mora numa constante em vez de ser copiada. */
const CTA =
  "btn-glow group inline-flex items-center justify-center gap-2.5 rounded-full bg-metal py-3.5 pl-6 pr-3 text-sm font-semibold text-accent-ink";

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
    <div>
      {/* Ação é pílula, superfície é faceta — por isso o seletor de modo
          continua redondo mesmo com o painel de cantos curtos embaixo. */}
      <div
        role="group"
        aria-label="Tipo de contratação"
        className="mb-6 inline-flex rounded-full border border-line p-1"
      >
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            aria-pressed={mode === m.id}
            className={
              "rounded-full px-5 py-2 text-[13px] font-medium transition-colors duration-300 " +
              (mode === m.id
                ? "bg-metal text-accent-ink"
                : "text-muted hover:text-ink")
            }
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === "recorrente" ? (
        <div className="crystal-panel p-10 text-center sm:p-14">
          <h3 className="t-h3 mx-auto max-w-[26ch] text-[clamp(1.15rem,2.4vw,1.5rem)]">
            Ainda não temos um plano de recorrência fechado
          </h3>
          <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
            Se o seu caso é demanda contínua, não pontual, manda uma mensagem
            que a gente monta uma proposta sob medida.
          </p>
          <a
            href="mailto:contato@vetrium.com.br?subject=Demanda%20recorrente"
            className={`${CTA} mt-8`}
          >
            Falar com a Vetrium
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      ) : (
        /* overflow-hidden pra que as duas colunas respeitem o raio do painel;
           a aresta iluminada de .crystal-panel é absolute e sobrevive a ele. */
        <div className="crystal-panel overflow-hidden">
          {/* 24rem na coluna do resultado é o mínimo pra faixa inteira
              ("R$ 10.000 – R$ 15.000") caber numa linha só — abaixo disso o
              travessão sobra sozinho no fim da primeira linha. */}
          <div className="grid lg:grid-cols-[1fr_minmax(0,24rem)]">
            {/* ---------- Entradas ---------- */}
            <div className="space-y-6 p-6 sm:p-9">
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

              <Row n={4} label="Prazo">
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
            </div>

            {/* ---------- Resultado ----------
                aria-live: o número muda sem que nada receba foco, então sem
                isso a mudança passa em silêncio pra quem usa leitor de tela. */}
            <div
              aria-live="polite"
              className="flex flex-col border-t border-line bg-bg-elevated/70 p-6 sm:p-9 lg:border-l lg:border-t-0"
            >
              <p className="t-label text-ink-dim">Faixa estimada</p>
              {/* Peso e tracking de .t-h2, mas sem o `text-wrap: balance` dela:
                  numa faixa de dois valores o balance parte a linha no meio de
                  propósito, e o travessão fica órfão no fim da primeira. */}
              <p className="font-display tnum mt-3 text-[clamp(1.3rem,2.4vw,1.65rem)] font-semibold leading-tight tracking-[-0.022em]">
                <span className="whitespace-nowrap">
                  {brl.format(estimate.min)}
                </span>
                <span className="mx-1.5 font-normal text-muted">–</span>
                <span className="whitespace-nowrap">
                  {brl.format(estimate.max)}
                </span>
              </p>

              <dl className="mt-7 space-y-3.5 border-t border-line pt-6 text-[13.5px]">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted">
                    {`À vista (−${Math.round(AVISTA_DESCONTO * 100)}%)`}
                  </dt>
                  <dd className="tnum text-right font-medium text-ink-dim">
                    {brl.format(estimate.avistaMin)} –{" "}
                    {brl.format(estimate.avistaMax)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted">Prazo</dt>
                  <dd className="tnum text-right font-medium text-ink-dim">
                    {estimate.days[0]}–{estimate.days[1]} dias úteis
                  </dd>
                </div>
              </dl>

              <a
                href={`mailto:contato@vetrium.com.br?subject=Or%C3%A7amento%20estimado&body=${mailBody}`}
                className={`${CTA} mt-8 w-full`}
              >
                Fechar esse orçamento
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <IconArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              {/* mt-auto: a ressalva encosta no rodapé da coluna em vez de
                  flutuar logo abaixo do botão quando a coluna estica. */}
              <p className="mt-auto pt-7 text-xs leading-relaxed text-muted">
                Estimativa de referência — Redesign/Landing page médio e
                Identidade essencial refletem valores já praticados em propostas
                reais; as demais faixas ainda não foram testadas com cliente e
                podem mudar após um diagnóstico.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Linha de entrada. O cabeçalho repete o nó facetado + fio + número do
 * processo (ver components/home/process.tsx): é a mesma ideia de sequência,
 * então usa o mesmo desenho em vez de inventar outro marcador.
 *
 * É um <label> de verdade envolvendo o campo: os quatro seletores não tinham
 * nome acessível nenhum antes — um leitor de tela anunciava só o valor atual,
 * sem dizer do que ele era resposta. O número fica aria-hidden pra não entrar
 * no nome do campo ("Tipo de projeto 01").
 */
function Row({
  n,
  label,
  children,
}: {
  n: number;
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2.5 flex items-center gap-3">
        <span
          aria-hidden
          className="h-[9px] w-[9px] flex-none rotate-45 border border-accent-solid bg-accent-solid/25"
        />
        <span className="t-label text-[10px] text-ink-dim">{label}</span>
        <span aria-hidden className="h-px flex-1 bg-line" />
        <span
          aria-hidden
          className="t-label tnum text-[10px] text-accent-solid"
        >
          {`0${n}`}
        </span>
      </span>
      {children}
    </label>
  );
}
