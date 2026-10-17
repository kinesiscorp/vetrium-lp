/**
 * Símbolo Oficial da Vetrium — Faceta Geométrica 3D com Luminescência Violeta.
 * Renderiza o emblema facetado de alta precisão em todas as plataformas e tamanhos.
 */

export const MARK_SILHOUETTE =
  "M14 20 L30 9 L58 6 L84 16 L90 40 L52 94 L10 44 Z";
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
export const MARK_RIDGES = [
  "M34 30 L52 26 L70 28",
  "M14 20 L34 30 L10 44",
  "M84 16 L70 28 L90 40",
  "M44 56 L52 94 L64 54",
  "M34 30 L44 56",
  "M70 28 L64 54",
  "M30 9 L52 26 L58 6",
];
export const MARK_CORE = "M32 28 L52 88 L72 26 L62 26 L52 56 L44 28 Z";
export const MARK_CORE_LEFT = "M32 28 L52 88 L52 56 L44 28 Z";
export const MARK_CORE_RIGHT = "M52 88 L72 26 L62 26 L52 56 Z";
export const MARK_TONE_FILL = {
  hi: "var(--mark-hi)",
  mid: "var(--mark-mid)",
  lo: "var(--mark-lo)",
} as const;

export function VetriumMark({
  size = 32,
  variant = "solid",
  className = "",
  title,
}: {
  size?: number;
  variant?: "solid" | "line";
  className?: string;
  title?: string;
}) {
  const labelled = title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true };

  return (
    <span
      className={`relative inline-flex items-center justify-center flex-none select-none ${className}`}
      style={{ width: size, height: size }}
      {...labelled}
    >
      <img
        src="/brand/vetrium-emblem.svg"
        alt={title || "Vetrium"}
        width={size * 2}
        height={size * 2}
        className="h-full w-full object-contain filter drop-shadow-[0_2px_12px_rgba(124,58,237,0.45)] transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />
    </span>
  );
}

/**
 * Lockup oficial da marca: Símbolo Facetado + "VETRIUM"
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
  detailsClassName?: string;
}) {
  const wordmark = (
    <span className={orientation === "stacked" ? "text-center" : ""}>
      <span
        className="block font-display font-semibold leading-none text-ink"
        style={{
          fontSize: markSize * 0.46,
          letterSpacing: "0.26em",
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
