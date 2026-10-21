"use client";

import { Fragment, useEffect, useRef } from "react";
import type { ComponentProps } from "react";

/* Ícones originais do manifesto (mesma família linear do site antigo) */
type P = ComponentProps<"svg">;
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;
const IconForm = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="8" width="11" height="11" rx="2.2" />
    <circle cx="16.3" cy="8.3" r="5.3" />
  </svg>
);
const IconAmbition = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 17 9.5 11.5 13.5 14.5 20 7" />
    <path d="M14.5 7h5.5v5.5" />
  </svg>
);
const IconBusiness = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="8" width="18" height="12" rx="2.2" />
    <path d="M8.5 8V6.2a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8V8" />
    <path d="M3 13.6h18" />
  </svg>
);

const PARAGRAPH =
  "Tudo que sua marca precisa já existe dentro do seu negócio — a Vetrium torna isso visível. Diagnóstico primeiro, design depois: cada decisão visual responde a um problema real de conversão.";

const GLYPH =
  "vds-glass inline-flex h-[0.95em] w-[1.32em] items-center justify-center rounded-[0.26em] align-middle";

/**
 * Manifesto do site antigo, na paleta nova. Dois momentos ligados ao scroll:
 *  1. o título fica preso na tela enquanto palavras e ícones chegam de
 *     posições espalhadas, desfocados, e se encaixam (pin + scrub);
 *  2. o parágrafo acende palavra a palavra conforme a leitura avança.
 * Sem JavaScript ou com movimento reduzido, tudo aparece montado e legível.
 */
export function Manifesto() {
  const pinRef = useRef<HTMLElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !pinRef.current || !paraRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const pieces = gsap.utils.toArray<HTMLElement>("[data-piece]", pinRef.current!);
        const dir = (i: number) => (i % 2 === 0 ? -1 : 1);
        gsap
          .timeline({
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              end: "+=70%",
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
            },
          })
          .fromTo(
            pieces,
            {
              x: (i: number) => dir(i) * (240 + ((i * 97) % 220)),
              y: (i: number) => ((i * 61) % 180) - 90,
              rotation: (i: number) => dir(i) * (6 + ((i * 13) % 10)),
              scale: 0.84,
              opacity: 0.12,
              filter: "blur(14px)",
            },
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              ease: "power2.out",
              duration: 0.7,
              stagger: 0.09,
            },
          )
          .to({}, { duration: 0.35 });

        const words = gsap.utils.toArray<HTMLElement>("[data-word]", paraRef.current!);
        gsap.fromTo(
          words,
          { opacity: 0.18, filter: "blur(3px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.5,
            scrollTrigger: { trigger: paraRef.current, start: "top 80%", end: "bottom 55%", scrub: 0.5 },
          },
        );
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={pinRef}
        aria-label="Manifesto"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--halo),transparent_65%)]"
        />
        <h2 className="vds-display relative mx-auto max-w-5xl text-center text-[clamp(2.6rem,7.6vw,6rem)] font-medium leading-[1.08] text-fg">
          <span className="flex flex-wrap items-center justify-center gap-x-[0.22em]">
            <span data-piece>Damos</span>
            <span data-piece className={GLYPH}>
              <IconForm className="h-[0.56em] w-[0.56em] text-accent" />
            </span>
            <span data-piece>forma</span>
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-[0.22em]">
            <span data-piece>à</span>
            <span data-piece className={GLYPH}>
              <IconAmbition className="h-[0.56em] w-[0.56em] text-accent" />
            </span>
            <span data-piece className="vds-it font-normal text-accent">
              ambição
            </span>
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-[0.22em]">
            <span data-piece>do seu</span>
            <span data-piece className={GLYPH}>
              <IconBusiness className="h-[0.56em] w-[0.56em] text-accent" />
            </span>
            <span data-piece>negócio</span>
          </span>
        </h2>
      </section>

      <section aria-label="Nossa abordagem" className="px-5 pb-28 pt-8 sm:pb-36">
        <p
          ref={paraRef}
          className="mx-auto max-w-4xl text-center text-[clamp(1.35rem,3vw,2.2rem)] font-medium leading-[1.4] tracking-[-0.025em] text-fg"
        >
          {/* O espaço fica FORA do span: dentro de inline-block ele some no fim da linha */}
          {PARAGRAPH.split(" ").map((w, i) => (
            <Fragment key={`${w}-${i}`}>
              <span data-word className="inline-block">
                {w}
              </span>{" "}
            </Fragment>
          ))}
        </p>
      </section>
    </>
  );
}
