import { STEPS } from "@/lib/site/content";
import { SectionHeader } from "./primitives";

/**
 * Como funciona em três passos. A numeração fica porque é uma sequência
 * real; o trilho liga os passos e termina no losango rosa (site no ar).
 */
export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="bg-ivory px-4 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="processo-title"
          title={
            <>
              Simples assim, <span className="vds-em">em três passos.</span>
            </>
          }
        />

        <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          <span aria-hidden className="absolute left-[7px] top-0 h-full w-px bg-obsidian/20 md:left-0 md:top-[7px] md:h-px md:w-full" />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="relative pl-10 md:pl-0"
            >
              <span
                aria-hidden
                className={
                  "absolute left-0 top-1 block h-[15px] w-[15px] rotate-45 border border-obsidian md:relative md:top-0 " +
                  (i === STEPS.length - 1 ? "bg-rose" : "bg-ivory")
                }
              />
              <p className="font-editorial text-lg text-rose-ink md:mt-8">{i + 1}.</p>
              <h3 className="font-editorial mt-1 text-[2.2rem] leading-none">{s.title}</h3>
              <p className="mt-4 max-w-[32ch] leading-relaxed text-stone-ink">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
