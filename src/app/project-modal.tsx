"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconArrowRight } from "@/components/home/icons";
import type { Project } from "./projects-data";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Lightbox do projeto. Feito à mão em vez de <dialog> nativo porque o elemento
 * nativo não aceita as animações de entrada/saída do `motion` sem malabarismo —
 * então acessibilidade (Escape, clique fora, foco preso, devolução do foco)
 * está toda coberta manualmente aqui.
 *
 * Só mostra dado que já existe em PROJECTS: nome, categoria, ano, descrição e
 * imagem. Nenhuma métrica, depoimento ou link de case inventado.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();
  const open = project !== null;

  /* Escape fecha; Tab circula dentro do painel. */
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);

      if (items.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey && (activeEl === first || activeEl === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", onKeyDown);

    /* Trava o scroll da página e compensa a barra pra não deslocar o layout. */
    const root = document.documentElement;
    const gutter = window.innerWidth - root.clientWidth;
    const prevOverflow = root.style.overflow;
    const prevPad = root.style.paddingRight;
    root.style.overflow = "hidden";
    if (gutter > 0) root.style.paddingRight = `${gutter}px`;

    /* Foco vai pro painel — o leitor de tela anuncia o diálogo inteiro. */
    const raf = requestAnimationFrame(() => panelRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(raf);
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPad;
    };
  }, [open, onKeyDown]);

  /* O pulo pra #contato só pode rodar depois que o lock de overflow sai do
     <html>, senão o navegador não consegue rolar. */
  function goToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    onClose();
    requestAnimationFrame(() => {
      window.location.hash = "contato";
    });
  }

  /* Portal pro <body> por necessidade, não por gosto: o GSAP deixa um
     `transform` inline no wrapper [data-anim] da seção, e qualquer transform
     num ancestral vira containing block de `position: fixed` — sem o portal o
     overlay ficaria preso dentro da seção em vez de cobrir a viewport.
     No servidor não há document; como `project` começa null, o markup inicial
     é vazio nos dois lados e a hidratação bate. */
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.22 }}
        >
          {/* Backdrop: clique fora fecha. aria-hidden porque o botão de fechar
              do painel já expõe a mesma ação de forma acessível. */}
          <div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            tabIndex={-1}
            initial={
              reduced ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.97 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{
              duration: reduced ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="crystal-panel relative z-10 flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden bg-bg-elevated shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] outline-none"
          >
            {/* O scroll mora no filho pra que a aresta iluminada do painel
                (.crystal-panel::before é position:absolute) não role junto. */}
            <div className="overflow-y-auto">
              <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={`Prévia do projeto ${project.name}`}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
                />
                <span className="t-label absolute left-4 top-4 rounded-[6px] border border-white/25 bg-black/50 px-2.5 py-1 text-[10px] text-white backdrop-blur">
                  {project.category}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar detalhes do projeto"
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/70"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3
                    id={titleId}
                    className="t-h2 text-[clamp(1.35rem,3vw,1.9rem)]"
                  >
                    {project.name}
                  </h3>
                  <span className="tnum text-sm font-medium text-muted">
                    {project.category} · {project.year}
                  </span>
                </div>

                <p
                  id={descId}
                  className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted"
                >
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#contato"
                    onClick={goToContact}
                    className="btn-glow bg-metal group inline-flex items-center gap-2.5 rounded-full py-3 pl-5 pr-3 text-sm font-semibold text-accent-ink"
                  >
                    Quero um projeto assim
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-black/20 transition-transform duration-300 group-hover:translate-x-0.5">
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
                  >
                    Voltar para a galeria
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
