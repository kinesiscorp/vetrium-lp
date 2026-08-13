/**
 * Set de ícones lineares desenhados à mão para a home.
 *
 * Mesmo peso visual do ícone do ThemeToggle (24x24, stroke currentColor) —
 * não vale puxar uma lib de ícones inteira para meia dúzia de traços, e
 * currentColor garante que tudo continue trocando junto com o tema.
 */

import type { SVGProps } from "react";

/* SVGProps (não só className) pra deixar passar data-anim="icon-draw" nos
   pontos de uso que precisam do desenho-ao-entrar do scroll engine. */
type IconProps = SVGProps<SVGSVGElement>;

const svgBase = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* ---------- Serviços ---------- */

export function IconStrategy({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <circle className="i-ring" cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="3.4" />
      <path className="i-ticks" d="M12 3.8V1.8M12 22.2v-2M3.8 12h-2M22.2 12h-2" />
    </svg>
  );
}

export function IconBranding({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path className="i-gem" d="M12 3 4.6 8.4 12 21l7.4-12.6L12 3Z" />
      <path d="M4.6 8.4h14.8" />
      <path className="i-facet" d="m12 3-3.1 5.4L12 21l3.1-12.6L12 3Z" />
    </svg>
  );
}

export function IconWeb({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <rect x="2.8" y="4" width="18.4" height="16" rx="2.6" />
      <path d="M2.8 9h18.4" />
      <path d="M6 6.5h.01M8.6 6.5h.01" />
      <g className="i-swap">
        <path d="m10.2 13-1.9 1.9 1.9 1.9" />
        <path d="m13.8 13 1.9 1.9-1.9 1.9" />
      </g>
    </svg>
  );
}

export function IconProduct({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path className="i-layer-top" d="m12 3 8.6 4.6L12 12.2 3.4 7.6 12 3Z" />
      <path d="m3.4 12 8.6 4.6 8.6-4.6" />
      <path className="i-layer-bottom" d="m3.4 16.4 8.6 4.6 8.6-4.6" />
    </svg>
  );
}

/* ---------- Processo ---------- */

export function IconSearch({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <g className="i-lens">
        <circle cx="10.8" cy="10.8" r="6.6" />
        <path d="m15.7 15.7 4.6 4.6" />
      </g>
    </svg>
  );
}

export function IconCompass({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <circle className="i-dial" cx="12" cy="12" r="8.6" />
      <path className="i-needle" d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1Z" />
    </svg>
  );
}

export function IconPen({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path d="M12.4 4.2H6a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2h11.8a2 2 0 0 0 2-2v-6.4" />
      <path className="i-nib" d="M18.2 3.4a1.9 1.9 0 0 1 2.7 2.7l-8 8-3.5.8.8-3.5 8-8Z" />
    </svg>
  );
}

export function IconLaunch({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path className="i-rocket" d="M21 3 2.9 9.9l7 2.7 2.7 7L21 3Z" />
      <path className="i-trail" d="m9.9 12.6 4.2-4.2" />
    </svg>
  );
}

/* ---------- Hero / contato / genéricos ---------- */

export function IconSparkle({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path d="M11 3c.9 3.9 2.5 5.5 6.4 6.4-3.9.9-5.5 2.5-6.4 6.4-.9-3.9-2.5-5.5-6.4-6.4C8.5 8.5 10.1 6.9 11 3Z" />
      <path d="M18.2 15.4c.4 1.7 1 2.3 2.7 2.7-1.7.4-2.3 1-2.7 2.7-.4-1.7-1-2.3-2.7-2.7 1.7-.4 2.3-1 2.7-2.7Z" />
    </svg>
  );
}

export function IconCode({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path className="i-lt" d="m8.4 8.2-4.2 3.8 4.2 3.8" />
      <path className="i-gt" d="m15.6 8.2 4.2 3.8-4.2 3.8" />
      <path d="m13.4 4.6-2.8 14.8" />
    </svg>
  );
}

export function IconArrowRight({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path d="M4 12h14.5" />
      <path d="m12.8 5.8 6.2 6.2-6.2 6.2" />
    </svg>
  );
}

export function IconMail({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <rect x="2.6" y="5" width="18.8" height="14" rx="2.4" />
      <path d="m3.4 7.2 8.6 6 8.6-6" />
    </svg>
  );
}

export function IconClock({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.2 1.9" />
    </svg>
  );
}

export function IconMenu({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconPin({ className = "", ...rest }: IconProps) {
  return (
    <svg {...svgBase} {...rest} className={className} aria-hidden>
      <path d="M12 21c4.2-4.4 6.3-7.7 6.3-10.2A6.3 6.3 0 0 0 5.7 10.8C5.7 13.3 7.8 16.6 12 21Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </svg>
  );
}
