import Image from "next/image";
import { STEPS } from "@/lib/site/content";
import { SplitHeading } from "./primitives";

/**
 * Como funciona: painel largo em campo de cor; os três
 * passos em vidro claro por cima, ligados por uma linha que se desenha.
 */
export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="px-5 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading id="processo-title" lead="Simples assim," it="em três passos" className="vds-h2" />
        </div>

        <div data-rise className="relative mt-14 overflow-hidden rounded-[2rem] bg-paper-2 ring-1 ring-night/8">
          <Image
            src="/art/v4/process.webp"
            alt=""
            fill
            sizes="(min-width: 1152px) 72rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/50 via-transparent to-paper/30" />

          <div className="relative px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
            <svg
              aria-hidden
              viewBox="0 0 1000 10"
              preserveAspectRatio="none"
              className="vds-draw absolute left-[16%] top-[calc(50%-1px)] hidden h-[2px] w-[68%] md:block"
            >
              <path d="M0 5 H1000" pathLength={1} stroke="rgb(16 22 43 / 0.35)" strokeWidth="2" fill="none" />
            </svg>

            <ol className="relative grid gap-3 md:grid-cols-3 md:gap-6">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  data-rise
                  style={{ ["--d" as string]: `${200 + i * 140}ms` }}
                  className="vds-glass rounded-[1.4rem] p-6"
                >
                  <p className="text-[0.85rem] tabular-nums text-cobalt">
                    {i + 1} de {STEPS.length}
                  </p>
                  <h3 className="vds-it mt-2 text-[2.3rem] leading-none text-night">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
