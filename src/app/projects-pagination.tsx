"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconArrowRight } from "@/components/home/icons";

const SPRING = { type: "spring", stiffness: 420, damping: 36, mass: 0.7 } as const;

const ARROW =
  "grid h-11 w-11 place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-line-strong hover:text-ink disabled:pointer-events-none disabled:opacity-30";

/**
 * Paginação da galeria. O indicador ativo é um único elemento com `layoutId`,
 * então ele desliza de um número pro outro em vez de piscar — é a razão de o
 * `motion` existir aqui. Nada de GSAP nesta subárvore.
 */
export function ProjectsPagination({
  page,
  pageCount,
  total,
  onChange,
}: {
  page: number;
  pageCount: number;
  total: number;
  onChange: (page: number) => void;
}) {
  const reduced = useReducedMotion();
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <nav
        aria-label="Paginação dos projetos"
        className="flex items-center gap-2.5"
      >
        <button
          type="button"
          onClick={() => onChange(page - 1)}
          disabled={page <= 1}
          aria-label="Página anterior"
          className={ARROW}
        >
          <IconArrowRight className="h-3.5 w-3.5 rotate-180" />
        </button>

        <ul className="glass flex items-center gap-1 rounded-full p-1">
          {pages.map((n) => {
            const active = n === page;
            return (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => onChange(n)}
                  aria-label={`Ir para a página ${n} de ${pageCount}`}
                  aria-current={active ? "page" : undefined}
                  className={
                    "tnum relative grid h-11 min-w-11 place-items-center rounded-full px-3 text-[13px] font-semibold transition-colors duration-300 " +
                    (active ? "text-accent-ink" : "text-muted hover:text-ink")
                  }
                >
                  {active && (
                    <motion.span
                      aria-hidden
                      layoutId="projects-page-indicator"
                      transition={reduced ? { duration: 0 } : SPRING}
                      className="bg-metal absolute inset-0 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{n}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => onChange(page + 1)}
          disabled={page >= pageCount}
          aria-label="Próxima página"
          className={ARROW}
        >
          <IconArrowRight className="h-3.5 w-3.5" />
        </button>
      </nav>

      <p aria-live="polite" className="tnum text-xs text-muted">
        {`Página ${page} de ${pageCount} · ${total} ${total === 1 ? "projeto" : "projetos"}`}
      </p>
    </div>
  );
}
