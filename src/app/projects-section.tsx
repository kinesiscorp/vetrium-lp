"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CATEGORIES, PROJECTS, type Project } from "./projects-data";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { ProjectsPagination } from "./projects-pagination";

/**
 * 8 por página = 2 linhas × 4 colunas no breakpoint largo, que é o pedido do
 * cliente. Em telas menores o grid reflui pra 2 ou 1 coluna, mas o tamanho da
 * página continua 8 — só muda quantas linhas isso ocupa.
 */
const PAGE_SIZE = 8;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<Project | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);
  // Guarda o card que abriu o modal pra devolver o foco quando ele fechar.
  const triggerRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const current = page > pageCount ? 1 : page;
  const items = visible.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  function changeFilter(cat: (typeof CATEGORIES)[number]) {
    setFilter(cat);
    setPage(1); // filtro novo, contagem nova — página 1 sempre.
  }

  function changePage(next: number) {
    if (next < 1 || next > pageCount || next === current) return;
    setPage(next);

    // Se o topo do grid já saiu da tela (típico no mobile, onde a paginação
    // fica lá embaixo), traz ele de volta — senão a página nova abre no rodapé.
    const rect = gridRef.current?.getBoundingClientRect();
    if (rect && rect.top < 0) {
      window.scrollTo({
        top: window.scrollY + rect.top - 110, // 110px = folga da nav flutuante
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

      <div ref={gridRef} className="mt-12">
        {/* A troca de página/filtro é uma transição de conteúdo local: fade +
            leve y, sem GSAP envolvido (o data-anim fica no wrapper da seção). */}
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
