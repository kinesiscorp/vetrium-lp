import { WORKING } from "@/lib/diagnostico-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Working() {
  return (
    <Section id="substrato">
      <SectionHead
        num="01"
        title="O que já funciona"
        lead="Antes da lista de problemas: isso aqui é ativo real, e não se joga fora numa reformulação."
        maxWidth="60ch"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {WORKING.map((w, i) => (
          <Reveal
            key={w.title}
            delay={i * 0.06}
            className="border border-line bg-sheet p-6"
          >
            <h3 className="mb-1.5 text-[15.5px] font-semibold tracking-tight">{w.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-ink-dim">{w.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
