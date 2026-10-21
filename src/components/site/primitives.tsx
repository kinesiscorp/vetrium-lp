import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ICON_PILL, ICON_V, WORDMARK_REST, WORDMARK_V, WORDMARK_VIEWBOX } from "./brand-paths";

/* ------------------------------------------------------------------ */
/* Marca                                                              */
/* ------------------------------------------------------------------ */

/**
 * Logo oficial: "vetrium" em sans com o "v" em serifa itálica violeta.
 * SVG inline, então segue o tema (texto em --ink, v em --accent-solid).
 */
export function Logo({ height = 20, className = "" }: { height?: number; className?: string }) {
  return (
    <svg
      viewBox={WORDMARK_VIEWBOX}
      height={height}
      role="img"
      aria-label="Vetrium"
      className={`w-auto ${className}`}
      style={{ height }}
    >
      <path d={WORDMARK_V} fill="var(--accent-solid)" />
      <path d={WORDMARK_REST} fill="var(--ink)" />
    </svg>
  );
}

/** Logo resumida (só ícone): v + pílula violeta. Para avatar, favicon, espaços pequenos. */
export function LogoIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Vetrium" className={className}>
      <line x1={ICON_PILL.x1} y1={ICON_PILL.y1} x2={ICON_PILL.x2} y2={ICON_PILL.y2} strokeWidth={ICON_PILL.width} stroke="var(--accent-solid)" strokeLinecap="round" />
      <path d={ICON_V} fill="var(--ink)" stroke="var(--ink)" strokeWidth={2.4} strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Ícones lineares (24×24, stroke currentColor)                        */
/* ------------------------------------------------------------------ */

type IconProps = ComponentProps<"svg">;
const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const IconArrow = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M14 6l6 6-6 6" />
  </svg>
);
export const IconArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const IconPlus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IconMenu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const IconClose = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const IconWhatsapp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" />
    <path d="M9.2 8.6c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c.6 1.2 1.6 2.1 2.8 2.7l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.8-.6.4-1.4.5-2.2.2a8.4 8.4 0 0 1-4.9-4.9c-.3-.8-.2-1.6.2-2.2Z" />
  </svg>
);
export const IconMail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
/* Ícones de serviço — mesma família do brandkit */
export const IconTarget = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);
export const IconLayers = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="9" width="11" height="11" />
    <path d="M9 9V4h11v11h-5" />
  </svg>
);
export const IconWire = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="4" width="17" height="16" />
    <path d="M3.5 8.5h17M8 12.5h8M8 15.5h5" />
  </svg>
);
export const IconCode = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </svg>
);
export const IconBars = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20h16M6.5 20v-5M10.5 20v-8M14.5 20v-11M18.5 20V5" />
  </svg>
);
export const IconGlobe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.6 3.6 5.4 3.6 8.5s-1.1 5.9-3.6 8.5c-2.5-2.6-3.6-5.4-3.6-8.5s1.1-5.9 3.6-8.5Z" />
  </svg>
);
export const IconSparkle = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <path d="M12 0c.5 6.2 5.8 11.5 12 12-6.2.5-11.5 5.8-12 12-.5-6.2-5.8-11.5-12-12C6.2 11.5 11.5 6.2 12 0Z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Botão pílula (com círculo de seta, como na referência)              */
/* ------------------------------------------------------------------ */

type Variant = "light" | "ghost";

export function PillLink({
  href,
  variant = "light",
  children,
  className = "",
  external,
  dot = variant === "light",
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  dot?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const cls = `vds-pill vds-pill-${variant} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {dot && (
        <span className="vds-pill-dot" aria-hidden>
          <IconArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Título revelado palavra a palavra                                   */
/* ------------------------------------------------------------------ */

/**
 * `lead` em Inter Tight, `it` em Instrument Serif itálica (quebra de linha
 * entre as duas partes no desktop). Cada palavra vira um span com índice,
 * e o CSS (vds-split) faz a entrada com desfoque quando o título entra na
 * tela. Leitores de tela recebem a frase inteira via aria-label.
 */
export function SplitHeading({
  as: Tag = "h2",
  id,
  lead,
  it,
  className = "",
  delay = 0,
  breakLine = true,
}: {
  as?: "h1" | "h2";
  id?: string;
  lead: string;
  it?: string;
  className?: string;
  delay?: number;
  breakLine?: boolean;
}) {
  let i = 0;
  const words = (text: string, italic: boolean) =>
    text.split(" ").map((w, k, arr) => (
      <span
        key={`${italic}-${k}`}
        className={"w " + (italic ? "vds-it" : "")}
        style={{ ["--i" as string]: i++ }}
      >
        {w}
        {k < arr.length - 1 ? " " : ""}
      </span>
    ));
  return (
    <Tag
      id={id}
      aria-label={it ? `${lead} ${it}` : lead}
      className={`vds-split ${className}`}
      style={{ ["--d" as string]: `${delay}ms` }}
      data-split
    >
      <span aria-hidden>
        {words(lead, false)}
        {it && (
          <>
            {breakLine ? <br className="hidden sm:block" /> : " "}
            <span className="sm:hidden"> </span>
            {words(it, true)}
          </>
        )}
      </span>
    </Tag>
  );
}
