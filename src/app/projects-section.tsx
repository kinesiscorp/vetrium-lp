"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CATEGORIES, PROJECTS, type Project } from "./projects-data";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { ProjectsPagination } from "./projects-pagination";
import { IconArrowRight } from "@/components/home/icons";

/**
 * Galeria do portfólio.
 *
 * Hierarquia visual em duas camadas:
 *
 * 1. "Destaques" — projetos com `featured: true` (as LPs do ecossistema
 *    VeTrium: IronStreak, Bbr Flow, Flow Pedidos). Ganham uma faixa própria
 *    no topo, com card largo (2 colunas), link direto pra LP ao vivo e um
 *    halo de cor de fundo. São a prova social de "coisa nova no ar".
 *
 * 2. "Galeria" — todos os projetos (incluindo os destaques, quando o filtro
 *    for "Todos") no grid 4×2 com paginação, modal e filtro por categoria.
 *
 * A faixa de destaques some quando um filtro está ativo (o filtro limita a
 * galeria; os destaques são sempre "Todos").
 */
const PAGE_SIZE = 8;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<Project | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  const featured =
    filter === "Todos" ? PROJECTS.filter((p) => p.featured) : [];

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const current = page > pageCount ? 1 : page;
  const items = visible.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  function changeFilter(cat: (typeof CATEGORIES)[number]) {
    setFilter(cat);
    setPage(1);
  }

  function changePage(next: number) {
    if (next < 1 || next > pageCount || next === current) return;
    setPage(next);
    const rect = gridRef.current?.getBoundingClientRect();
    if (rect && rect.top < 0) {
      window.scrollTo({
        top: window.scrollY + rect.top - 110,
        behavior: reduced ? "auto" : "smooth",
      });
    }
  }

  function openProject(project: Project, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setActive(project);
  }

  function closeProject() {
    setActive(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar projetos por categoria"
        className="flex flex-wrap gap-2"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => changeFilter(cat)}
            aria-pressed={filter === cat}
            className={
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 " +
              (filter === cat
                ? "border-transparent bg-metal text-accent-ink"
                : "border-line text-muted hover:border-accent-solid hover:text-ink")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Destaques: as LPs do ecossistema, com link ao vivo */}
      {featured.length > 0 && (
        <div className="mt-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="t-label text-muted">
              Recém-lançado no ar
            </span>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <a
                key={project.slug}
                href={project.href ?? "#"}
                target={project.href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href?.startsWith("http") ? "noreferrer" : undefined
                }
                className="group relative isolate overflow-hidden rounded-[14px] border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-solid/60 hover:shadow-[0_24px_60px_-20px_rgba(108,59,255,0.35)]"
              >
                <div className="absolute inset-0 -z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent-solid/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`Prévia da landing page ${project.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  />
                  <span className="t-label absolute left-3.5 top-3.5 rounded-[6px] border border-white/25 bg-black/50 px-2.5 py-1 text-[9.5px] text-white backdrop-blur">
                    {project.category}
                  </span>
                  <span className="absolute bottom-3.5 left-3.5 inline-flex translate-y-2 items-center gap-1.5 rounded-full border border-white/25 bg-black/55 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver ao vivo
                    <IconArrowRight className="h-3 w-3" />
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="t-h3 text-[15px] font-semibold">
                      {project.name}
                    </h3>
                    <span className="tnum flex-none text-xs text-muted">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div ref={gridRef} className="mt-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${filter}-${current}`}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {items.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onOpen={openProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {pageCount > 1 && (
        <ProjectsPagination
          page={current}
          pageCount={pageCount}
          total={visible.length}
          onChange={changePage}
        />
      )}

      <ProjectModal project={active} onClose={closeProject} />
    </div>
  );
}