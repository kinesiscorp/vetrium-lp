"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WORK } from "@/lib/site/content";
import { Logo } from "./primitives";

const MS = 5200;

/**
 * Card de "stories" com os projetos reais (linguagem da referência): barras
 * de progresso no topo, troca automática a cada ~5 s, pausa com o cursor ou
 * o foco em cima. Com movimento reduzido não avança sozinho; os botões
 * invisíveis nas metades do card trocam manualmente.
 */
export function StoryCard() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setI((v) => (v + 1) % WORK.length), MS);
    return () => clearTimeout(t);
  }, [i, paused, reduced]);

  const w = WORK[i];
  return (
    <div
      className="vds-glass relative w-[15.5rem] overflow-hidden rounded-[1.6rem] p-2 sm:w-[17.5rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Projetos da Vetrium"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-nox-3">
        {WORK.map((p, k) => (
          <Image
            key={p.slug}
            src={p.image}
            alt={k === i ? p.imageAlt : ""}
            fill
            sizes="18rem"
            className={
              "object-cover object-left-top transition-[opacity,transform] duration-[1200ms] ease-[var(--ease-cinema)] " +
              (k === i ? "scale-100 opacity-100" : "scale-[1.06] opacity-0")
            }
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-nox/85 via-nox/10 to-nox/40" />

        {/* progresso */}
        <div className="absolute inset-x-3 top-3 flex gap-1" aria-hidden>
          {WORK.map((p, k) => (
            <span key={p.slug} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              {k < i && <span className="block h-full w-full bg-marble" />}
              {k === i && (
                <span
                  key={`${i}-${paused}`}
                  className={"block h-full bg-marble " + (paused ? "w-full" : "vds-story-fill")}
                  style={{ ["--story-ms" as string]: `${MS}ms` }}
                />
              )}
            </span>
          ))}
        </div>
        <div className="absolute left-3 top-6 flex items-center gap-2 text-[0.78rem]">
          <Logo size={16} />
        </div>

        <div className="absolute inset-x-4 bottom-4" aria-live="polite">
          <p className="text-[1.25rem] leading-tight tracking-[-0.03em] text-marble">{w.name}</p>
          <p className="mt-1 text-[0.82rem] text-sand">{w.segment}</p>
        </div>

        <button
          type="button"
          className="absolute inset-y-0 left-0 w-1/2 cursor-w-resize"
          aria-label="Projeto anterior"
          onClick={() => setI((v) => (v - 1 + WORK.length) % WORK.length)}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 w-1/2 cursor-e-resize"
          aria-label="Próximo projeto"
          onClick={() => setI((v) => (v + 1) % WORK.length)}
        />
      </div>
    </div>
  );
}
