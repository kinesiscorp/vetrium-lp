/**
 * Símbolo da Vetrium — cristal facetado em forma de "V".
 *
 * Geometria vetorizada à mão a partir do brandkit (não há export vetorial
 * do arquivo original): um mineral assimétrico, mais largo em cima e
 * terminando em ponta embaixo, com a casca em facetas de grafite e um
 * núcleo em "V" atravessado por luz — Electric Violet no topo, Soft Lilac
 * na ponta, onde o brilho é mais forte.
 *
 * Todas as cores saem de custom properties (--mark-*, --accent-*), então a
 * peça re-tematiza sozinha; nenhum hex vive aqui.
 *
 * Malha de facetas (viewBox 0 0 100 100):
 *   contorno   T1(14,20) T2(30,9) T3(58,6) T4(84,16) R1(90,40) B(52,94) L1(10,44)
 *   nós        N1(34,30) N2(52,26) N3(70,28) N4(44,56) N5(64,54)
 *   luz        chevron 32,28 → 52,88 → 72,26 → 62,26 → 52,56 → 44,28
 *
 * Os ids dos defs são fixos: todas as instâncias desenham exatamente os
 * mesmos gradientes, então repetir a definição é inofensivo (o navegador
 * resolve pela primeira) e evita transformar o símbolo em client component
 * só pra chamar useId.
 */

export const MARK_SILHOUETTE =
  "M14 20 L30 9 L58 6 L84 16 L90 40 L52 94 L10 44 Z";
const SILHOUETTE = MARK_SILHOUETTE;

/** Facetas da casca, do canto mais iluminado para o mais fundo. */
export const MARK_FACETS = [
  { d: "M14 20 L30 9 L52 26 L34 30 Z", tone: "hi" },
  { d: "M30 9 L58 6 L52 26 Z", tone: "hi" },
  { d: "M58 6 L84 16 L70 28 L52 26 Z", tone: "mid" },
  { d: "M84 16 L90 40 L70 28 Z", tone: "lo" },
  { d: "M90 40 L70 28 L64 54 L52 94 Z", tone: "lo" },
  { d: "M14 20 L34 30 L10 44 Z", tone: "mid" },
  { d: "M10 44 L34 30 L44 56 L52 94 Z", tone: "mid" },
  { d: "M34 30 L52 26 L70 28 L64 54 L44 56 Z", tone: "lo" },
  { d: "M44 56 L64 54 L52 94 Z", tone: "lo" },
] as const;
const FACETS = MARK_FACETS;

/** Arestas internas: onde duas facetas se encontram, a luz risca. */
export const MARK_RIDGES = [
  "M34 30 L52 26 L70 28",
  "M14 20 L34 30 L10 44",
  "M84 16 L70 28 L90 40",
  "M44 56 L52 94 L64 54",
  "M34 30 L44 56",
  "M70 28 L64 54",
  "M30 9 L52 26 L58 6",
];
const RIDGES = MARK_RIDGES;

/** Núcleo de luz em "V" — mais estreito do lado direito (assimetria).
 *  Ele é desenhado em duas metades: a luz também é lapidada, e as duas
 *  faces pegam a claridade em intensidades diferentes. */
export const MARK_CORE = "M32 28 L52 88 L72 26 L62 26 L52 56 L44 28 Z";
export const MARK_CORE_LEFT = "M32 28 L52 88 L52 56 L44 28 Z";
export const MARK_CORE_RIGHT = "M52 88 L72 26 L62 26 L52 56 Z";
const CORE = MARK_CORE;

export const MARK_TONE_FILL = {
  hi: "var(--mark-hi)",
  mid: "var(--mark-mid)",
  lo: "var(--mark-lo)",
} as const;
const TONE_FILL = MARK_TONE_FILL;

export function VetriumMark({
  size = 32,
  variant = "solid",
  className = "",
  title,
}: {
  size?: number;
  /** `solid` = pedra facetada; `line` = variante monocromática em contorno. */
  variant?: "solid" | "line";
  className?: string;
  /** Só quando o símbolo é o único portador do nome (ex.: favicon inline). */
  title?: string;
}) {
  const labelled = title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true };

  if (variant === "line") {
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        className={className}
        {...labelled}
      >
        <g
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <path d={SILHOUETTE} />
          <path d={CORE} strokeWidth="2.4" />
          {RIDGES.slice(0, 4).map((d) => (
            <path key={d} d={d} strokeWidth="1.6" opacity="0.6" />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      className={className}
      {...labelled}
    >
      <defs>
        {/* Luz do núcleo: violeta em cima, lilás na ponta */}
        <linearGradient id="vt-core" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="var(--accent-from)" />
          <stop offset="55%" stopColor="var(--accent-solid)" />
          <stop offset="100%" stopColor="var(--accent-to)" />
        </linearGradient>
        {/* Brilho difuso que escapa da pedra pela ponta */}
        <radialGradient id="vt-bloom" cx="0.5" cy="0.78" r="0.55">
          <stop offset="0%" stopColor="var(--accent-to)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--accent-from)" stopOpacity="0" />
        </radialGradient>
        <filter id="vt-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Casca facetada */}
      <path d={SILHOUETTE} fill="var(--mark-lo)" />
      {FACETS.map(({ d, tone }) => (
        <path key={d} d={d} fill={TONE_FILL[tone]} />
      ))}

      {/* Arestas internas + contorno */}
      <g
        stroke="var(--mark-edge)"
        strokeWidth="0.9"
        strokeLinejoin="round"
        fill="none"
      >
        {RIDGES.map((d) => (
          <path key={d} d={d} opacity="0.45" />
        ))}
        <path d={SILHOUETTE} strokeWidth="1.2" />
      </g>

      {/* Núcleo: bloom por baixo, as duas faces de luz por cima */}
      <path d={CORE} fill="url(#vt-bloom)" filter="url(#vt-soft)" />
      <path d={MARK_CORE_LEFT} fill="url(#vt-core)" />
      <path d={MARK_CORE_RIGHT} fill="url(#vt-core)" opacity="0.72" />
      <path
        d={CORE}
        fill="none"
        stroke="var(--accent-to)"
        strokeWidth="0.7"
        strokeLinejoin="round"
        opacity="0.75"
      />
      {/* Aresta central: onde as duas faces de luz se encontram */}
      <path
        d="M52 56 L52 88"
        stroke="var(--accent-to)"
        strokeWidth="0.6"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * Lockup completo: símbolo + "VETRIUM" em Sora caixa alta com tracking
 * largo e a assinatura menor embaixo. Horizontal (nav/rodapé) separa os
 * dois blocos por um fio vertical; empilhado (marca de seção) centraliza.
 */
export function VetriumLockup({
  orientation = "horizontal",
  markSize = 30,
  tagline = true,
  className = "",
  detailsClassName = "flex",
}: {
  orientation?: "horizontal" | "stacked";
  markSize?: number;
  tagline?: boolean;
  className?: string;
  /** Classe do bloco "fio + wordmark" no lockup horizontal — permite
   *  esconder o texto em telas estreitas sem duplicar o lockup. */
  detailsClassName?: string;
}) {
  const wordmark = (
    <span className={orientation === "stacked" ? "text-center" : ""}>
      <span
        className="block font-display font-semibold leading-none"
        style={{
          fontSize: markSize * 0.46,
          letterSpacing: "0.26em",
          // O tracking largo cria um vão fantasma depois do M; puxar de volta
          // mantém o bloco opticamente centrado no lockup empilhado.
          marginRight: "-0.26em",
        }}
      >
        VETRIUM
      </span>
      {tagline && (
        <span
          className="mt-1.5 block leading-none text-muted"
          style={{
            fontSize: Math.max(7.5, markSize * 0.2),
            letterSpacing: "0.2em",
            marginRight: "-0.2em",
          }}
        >
          DIGITAL DESIGN &amp; DEVELOPMENT
        </span>
      )}
    </span>
  );

  if (orientation === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-4 ${className}`}>
        <VetriumMark size={markSize} />
        {wordmark}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <VetriumMark size={markSize} className="flex-none" />
      <span className={`items-center gap-3 ${detailsClassName}`}>
        <span
          aria-hidden
          className="w-px flex-none bg-line-strong"
          style={{ height: markSize * 0.8 }}
        />
        {wordmark}
      </span>
    </span>
  );
}
