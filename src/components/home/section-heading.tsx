import type { ReactNode } from "react";
import { IconArrowRight } from "./icons";

/**
 * Abertura padrão de seção.
 *
 * Em vez do rótulo em caixa alta que antecedia cada título (um kicker por
 * seção deixava a página falando sobre si mesma), a hierarquia vem da
 * estrutura: um fio de largura total com um nó facetado marcando o começo
 * do bloco, o título em Sora e o apoio em Inter. A âncora opcional fica na
 * mesma linha do fio, à direita — é navegação, não enfeite.
 */
export function SectionHeading({
  title,
  lead,
  action,
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  action?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="h-2 w-2 flex-none rotate-45 border border-accent-solid bg-accent-solid/25"
        />
        <span aria-hidden className="h-px flex-1 bg-line" />
        {action && (
          <a
            href={action.href}
            className="group hidden items-center gap-2 text-[13px] font-medium text-ink-dim transition-colors hover:text-ink sm:inline-flex"
          >
            {action.label}
            <IconArrowRight className="h-3.5 w-3.5 text-accent-solid transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>

      <div className="mt-8 grid gap-x-12 gap-y-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end">
        <h2 className="t-h2 text-[clamp(1.9rem,4.2vw,3rem)]">{title}</h2>
        {lead && (
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted lg:pb-1">
            {lead}
          </p>
        )}
      </div>

      {/* Abaixo do sm o fio não tem largura pra segurar a âncora ao lado do
          título, então ela reaparece aqui embaixo — o link nunca some. */}
      {action && (
        <a
          href={action.href}
          className="group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-ink-dim transition-colors hover:text-ink sm:hidden"
        >
          {action.label}
          <IconArrowRight className="h-3.5 w-3.5 text-accent-solid transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}
