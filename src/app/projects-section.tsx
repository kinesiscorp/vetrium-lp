"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES, PROJECTS } from "./projects-data";

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Todos");

  const visible =
    filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors " +
              (filter === cat
                ? "border-transparent bg-metal text-accent-ink"
                : "border-line text-muted hover:border-accent-solid hover:text-ink")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <div
            key={project.slug}
            className="group overflow-hidden rounded-2xl border border-line bg-bg-elevated transition-shadow hover:shadow-xl hover:shadow-black/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-elevated-2">
              <Image
                src={project.image}
                alt={`Prévia do projeto ${project.name}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
                <span className="whitespace-nowrap text-xs font-medium text-muted">
                  {project.year}
                </span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-bg-elevated-2 px-3 py-1 text-xs font-semibold text-metal">
                {project.category}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
