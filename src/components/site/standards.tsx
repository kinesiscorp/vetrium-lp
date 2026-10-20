import Image from "next/image";
import { STANDARDS } from "@/lib/site/content";
import { SectionHeader } from "./primitives";

/**
 * Diferenciais: afirmações que a operação sustenta, numeradas e regradas
 * como um documento — sem selos, estrelas ou números de autoridade.
 */
export function Standards() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="vds-dark relative isolate overflow-hidden bg-obsidian-2 px-4 py-24 sm:px-8 lg:pb-0 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:col-start-1">
          <SectionHeader
            tone="light"
            index="06"
            eyebrow="Diferenciais"
            title={
              <span id="diferenciais-title">
                O que você pode <span className="vds-em text-rose">esperar</span> da Vetrium.
              </span>
            }
            lead="Sem promessas vagas: estes são os compromissos que fazem parte de todo projeto."
          />
          {/* Escultura no fluxo da coluna (nunca por cima do texto), sangrando
              para a esquerda */}
          <div aria-hidden className="relative -ml-20 mt-14 hidden w-[24rem] lg:block">
            <Image
              src="/art/busto-antinoo.webp"
              alt=""
              width={1346}
              height={1400}
              loading="lazy"
              sizes="24rem"
              className="h-auto w-full"
            />
            <span className="vds-sphere vds-sphere-violet absolute right-[6%] top-[18%] block aspect-square w-[14%]" />
          </div>
        </div>

        <ol className="grid gap-x-12 self-start border-t vds-rule-dark sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:mb-36">
          {STANDARDS.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}
              className="border-b vds-rule-dark py-8"
            >
              <span className="vds-num text-sm text-rose">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="vds-h3 mt-3 text-ivory">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-marble">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
