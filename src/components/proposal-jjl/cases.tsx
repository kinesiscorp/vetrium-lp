import Image from "next/image";
import { CASES } from "@/lib/proposal-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Cases() {
  return (
    <Section id="quem-faz">
      <SectionHead
        num="04"
        title="Quem está do outro lado"
        lead="A Vetrium é um estúdio de design e tecnologia tocado por dois sócios. A gente desenha e desenvolve, então não existe etapa onde o projeto passa de mão e perde a intenção original."
        maxWidth="56ch"
      />

      <div className="grid gap-3 sm:grid-cols-3">
        {CASES.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08} className="flex flex-col overflow-hidden border border-line bg-card">
            <div className="relative aspect-video bg-sheet-hi">
              <Image src={c.img} alt={c.name} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-4">
              <div className="text-[14.5px] font-semibold">{c.name}</div>
              <div className="mt-1 text-[12px] text-muted">{c.kicker}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6 border-l-2 border-accent-solid bg-[rgba(124,108,255,0.06)] py-4 px-5 text-[14.5px] text-ink-dim">
        Sendo direto: a Vetrium é nova como estúdio, e{" "}
        <b className="font-semibold text-ink">é exatamente por isso que o preço desta proposta é o que é</b>.
        A gente está trocando margem por um case forte. Você recebe um trabalho que já custaria mais
        caro daqui a seis meses.
      </Reveal>

      <Reveal delay={0.26}>
        <p className="mt-5 text-[13.5px] text-muted">
          O raio-x que você já viu é a prova de como a gente trabalha: achado concreto, com
          print, sem achismo. É o mesmo rigor que entra no redesign.
        </p>
      </Reveal>
    </Section>
  );
}
