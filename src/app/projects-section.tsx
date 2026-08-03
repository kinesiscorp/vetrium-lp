"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES, PROJECTS } from "./projects-data";

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Todos");

  const visible =
    filter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={
              "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 " +
              (filter === cat
                ? "border-transparent bg-metal text-accent-ink"
                : "border-line text-muted hover:border-line-strong hover:text-ink")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.slug}
            className="gradient-frame group overflow-hidden rounded-3xl glass transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={`Prévia do projeto ${project.name}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70" />
              <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                {project.category}
              </span>
            </div>
            <div className="relative z-10 p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.name}
                </h3>
                <span className="text-xs font-medium text-muted tabular-nums">
                  {project.year}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
