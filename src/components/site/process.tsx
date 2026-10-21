import { STEPS } from "@/lib/site/content";
import { SplitHeading } from "./primitives";

/**
 * Como funciona: painel largo com a grade da marca; os três
 * passos em vidro claro por cima, ligados por uma linha que se desenha.
 */
export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="px-5 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading id="processo-title" lead="Simples assim," it="em três passos" className="vds-h2" />
        </div>

        <div data-rise className="relative mt-14 overflow-hidden rounded-[2rem] bg-raised ring-1 ring-fg/8">
          <div aria-hidden className="absolute inset-0 vds-grid" />
          <div aria-hidden className="vds-halo absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />

          <div className="relative px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
            <svg
              aria-hidden
              viewBox="0 0 1000 10"
              preserveAspectRatio="none"
              className="vds-draw absolute left-[16%] top-[calc(50%-1px)] hidden h-[2px] w-[68%] md:block"
            >
              <path d="M0 5 H1000" pathLength={1} stroke="var(--line-strong)" strokeWidth="2" fill="none" />
            </svg>

            <ol className="relative grid gap-3 md:grid-cols-3 md:gap-6">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  data-rise
                  style={{ ["--d" as string]: `${200 + i * 140}ms` }}
                  className="vds-glass rounded-[1.4rem] p-6"
                >
                  <p className="text-[0.85rem] tabular-nums text-accent">
                    {i + 1} de {STEPS.length}
                  </p>
                  <h3 className="vds-it mt-2 text-[2.3rem] leading-none text-fg">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-fg-2">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
