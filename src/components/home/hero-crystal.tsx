import { IconCode, IconSparkle, IconStrategy } from "./icons";
import {
  MARK_CORE,
  MARK_CORE_LEFT,
  MARK_CORE_RIGHT,
  MARK_FACETS,
  MARK_RIDGES,
  MARK_SILHOUETTE,
  MARK_TONE_FILL,
} from "./vetrium-mark";

/**
 * Peça-assinatura do hero: o mesmo cristal do símbolo, em escala grande e
 * com a lapidação visível — a geometria vem literalmente de vetrium-mark.tsx,
 * então símbolo e hero nunca divergem.
 *
 * O que a escala grande acrescenta: um anel de medição girando devagar (o
 * lado "preciso" da marca), raios de refração saindo da ponta e três badges
 * ligadas ao cristal por fios finos. Nada de WebGL — SVG + CSS.
 *
 * O sistema de coordenadas dos fios é o do container (0–100 em cada eixo,
 * que é quadrado), então as pontas batem com o `top/left` das badges.
 */
const BADGES = [
  {
    label: "Estratégia",
    Icon: IconStrategy,
    place: "left-0 top-[2%]",
    anchor: { x: 21, y: 10 },
    tip: { x: 41, y: 30 },
    delay: "0s",
    duration: "7.5s",
  },
  {
    label: "Tecnologia",
    Icon: IconCode,
    place: "bottom-[12%] left-[1%]",
    anchor: { x: 20, y: 80 },
    tip: { x: 42, y: 68 },
    delay: "1.1s",
    duration: "8.5s",
  },
  {
    label: "Experiência",
    Icon: IconSparkle,
    place: "right-0 top-[38%]",
    anchor: { x: 82, y: 44 },
    tip: { x: 66, y: 45 },
    delay: "2.2s",
    duration: "6.8s",
  },
];

/** Marcas do anel de medição — 60 traços, um a cada 6°, os múltiplos de 5 maiores. */
const TICKS = Array.from({ length: 60 }, (_, i) => i * 6);

export function HeroCrystal() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[32rem]">
      <div
        aria-hidden
        className="halo absolute inset-[10%] rounded-full opacity-90"
      />

      {/* Fios que ligam as badges ao cristal */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-ink"
      >
        {BADGES.map((b) => (
          <g key={b.label}>
            <line
              x1={b.anchor.x}
              y1={b.anchor.y}
              x2={b.tip.x}
              y2={b.tip.y}
              stroke="currentColor"
              strokeOpacity="0.24"
              strokeWidth="1"
              strokeDasharray="1 4"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={b.tip.x} cy={b.tip.y} r="0.7" fill="var(--accent-solid)" />
          </g>
        ))}
      </svg>

      <div className="float-soft absolute inset-0">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
          className="h-full w-full text-ink"
        >
          <defs>
            <linearGradient id="vt-hero-core" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="var(--accent-from)" />
              <stop offset="55%" stopColor="var(--accent-solid)" />
              <stop offset="100%" stopColor="var(--accent-to)" />
            </linearGradient>
            <radialGradient id="vt-hero-bloom" cx="0.5" cy="0.78" r="0.6">
              <stop offset="0%" stopColor="var(--accent-to)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent-from)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Anel de medição: precisão, não ornamento */}
          <g
            className="spin-slow"
            style={{ transformOrigin: "100px 100px" }}
            stroke="currentColor"
          >
            <circle cx="100" cy="100" r="94" strokeOpacity="0.08" strokeWidth="0.6" />
            {TICKS.map((deg) => {
              const long = deg % 30 === 0;
              return (
                <line
                  key={deg}
                  x1="100"
                  y1={long ? 88 : 91}
                  x2="100"
                  y2="94"
                  strokeOpacity={long ? 0.28 : 0.12}
                  strokeWidth={long ? 0.9 : 0.6}
                  transform={`rotate(${deg} 100 100)`}
                />
              );
            })}
          </g>

          <g transform="translate(28 24) scale(1.44)">
            {/* Refração: a luz escapa pela ponta e se abre em dois fios */}
            <g
              stroke="var(--accent-to)"
              strokeWidth="0.5"
              strokeOpacity="0.35"
              strokeDasharray="1 3"
            >
              <path d="M52 90 L41 114" />
              <path d="M52 90 L63 114" />
            </g>

            {/* Bloom do núcleo, por baixo da pedra */}
            <path
              d={MARK_CORE}
              fill="url(#vt-hero-bloom)"
              style={{ filter: "blur(7px)" }}
            />

            {/* Casca facetada */}
            <path d={MARK_SILHOUETTE} fill="var(--mark-lo)" />
            {MARK_FACETS.map(({ d, tone }) => (
              <path key={d} d={d} fill={MARK_TONE_FILL[tone]} />
            ))}

            {/* Lapidação */}
            <g
              stroke="var(--mark-edge)"
              strokeWidth="0.55"
              strokeLinejoin="round"
              fill="none"
            >
              {MARK_RIDGES.map((d) => (
                <path key={d} d={d} opacity="0.5" />
              ))}
              <path d={MARK_SILHOUETTE} strokeWidth="0.8" />
            </g>

            {/* Núcleo de luz, em duas faces */}
            <path d={MARK_CORE_LEFT} fill="url(#vt-hero-core)" />
            <path d={MARK_CORE_RIGHT} fill="url(#vt-hero-core)" opacity="0.72" />
            <path
              d={MARK_CORE}
              fill="none"
              stroke="var(--accent-to)"
              strokeWidth="0.45"
              strokeLinejoin="round"
              opacity="0.8"
            />
            <path
              d="M52 56 L52 88"
              stroke="var(--accent-to)"
              strokeWidth="0.4"
              opacity="0.55"
            />
          </g>
        </svg>
      </div>

      {/* Badges de vidro, cada uma flutuando fora de fase */}
      {BADGES.map(({ label, Icon, place, delay, duration }) => (
        <div
          key={label}
          className={`float-soft absolute ${place}`}
          style={{ animationDelay: delay, animationDuration: duration }}
        >
          <div className="crystal-panel flex items-center gap-2.5 px-3 py-2 backdrop-blur-md">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-line text-accent-solid">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="t-label text-[10px] text-ink-dim">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
