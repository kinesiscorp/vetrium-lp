import Image from "next/image";
import { STEPS } from "@/lib/site/content";
import { SplitHeading } from "./primitives";

/**
 * Como funciona: um painel largo com a duna e as sombras das colunas; os três
 * passos ficam em vidro por cima, ligados por uma linha que se desenha.
 */
export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="px-5 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading id="processo-title" lead="Simples assim," it="em três passos" className="vds-h2" />
        </div>

        <div
          data-rise
          className="relative mt-14 overflow-hidden rounded-[2rem] bg-nox-2 ring-1 ring-white/8"
        >
          <Image
            src="/art/v2/process.webp"
            alt="Duna de areia ao entardecer com as sombras longas de quatro colunas"
            fill
            sizes="(min-width: 1152px) 72rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nox/80 via-nox/30 to-nox/20" />

          <div className="relative px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
            {/* fio que conecta os passos */}
            <svg
              aria-hidden
              viewBox="0 0 1000 10"
              preserveAspectRatio="none"
              className="vds-draw absolute left-[16%] right-[16%] top-[calc(50%-1px)] hidden h-[2px] w-[68%] md:block"
            >
              <path d="M0 5 H1000" pathLength={1} stroke="rgb(238 232 221 / 0.45)" strokeWidth="2" fill="none" />
            </svg>

            <ol className="relative grid gap-3 md:grid-cols-3 md:gap-6">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  data-rise
                  style={{ ["--d" as string]: `${200 + i * 140}ms` }}
                  className="vds-glass rounded-[1.4rem] p-6"
                >
                  <p className="font-num text-[0.8rem] text-gold">
                    {i + 1}/{STEPS.length}
                  </p>
                  <h3 className="vds-it mt-3 text-[2.3rem] leading-none text-marble">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-marble/75">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
