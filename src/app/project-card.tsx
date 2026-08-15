"use client";

import Image from "next/image";
import { IconArrowRight } from "@/components/home/icons";
import type { Project } from "./projects-data";

/**
 * Card do portfólio. O card inteiro é um <button> porque a única ação dele é
 * abrir o modal do projeto — não existe URL de case pra linkar, então um <a>
 * seria mentira semântica.
 *
 * Hover/foco revelam a pílula "Ver projeto" sobre a imagem. O lift vem da
 * `.hover-lift` do globals.css (nenhum data-anim aqui, então o GSAP não
 * disputa o transform deste elemento) — o tilt em 3D saiu com o rebrand:
 * a marca é lapidação precisa, não perspectiva de vitrine.
 */
export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project, trigger: HTMLElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onOpen(project, e.currentTarget)}
      aria-haspopup="dialog"
      aria-label={`${project.name} — ${project.category}, ${project.year}. Ver detalhes do projeto`}
      className="crystal-panel hover-lift group flex h-full w-full flex-col overflow-hidden text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Prévia do projeto ${project.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
        />

        {/* Categoria: some no hover pra dar lugar ao "Ver projeto" */}
        <span
          aria-hidden
          className="t-label absolute left-3.5 top-3.5 rounded-[6px] border border-white/25 bg-black/50 px-2.5 py-1 text-[9.5px] text-white backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-0 group-focus-visible:-translate-y-1 group-focus-visible:opacity-0"
        >
          {project.category}
        </span>

        {/* CTA visual: aparece no hover E no foco de teclado */}
        <span
          aria-hidden
          className="absolute inset-x-3.5 bottom-3.5 flex translate-y-2 items-center justify-between gap-2 rounded-full border border-white/25 bg-black/55 px-4 py-2 text-[12px] font-semibold text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
        >
          Ver projeto
          <IconArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="t-h3 text-[15px] font-semibold">{project.name}</h3>
          <span className="tnum flex-none text-xs font-medium text-muted">
            {project.year}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Badge de LP ao vivo */}
        {project.href && (
          <span
            aria-hidden
            className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-solid/40 bg-accent-soft px-2.5 py-1 text-[10.5px] font-semibold text-accent-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-solid" />
            Landing page ao vivo
          </span>
        )}
      </div>
    </button>
  );
}
