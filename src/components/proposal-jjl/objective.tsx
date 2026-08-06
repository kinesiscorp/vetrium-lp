import { TARGETS } from "@/lib/proposal-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Objective() {
  return (
    <Section id="objetivo">
      <SectionHead
        num="02"
        title="O objetivo é confiança"
        lead="Não é “deixar bonito”. Toda decisão do redesign serve a um destes dois alvos, e o que não servir a nenhum dos dois fica de fora."
        maxWidth="56ch"
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        {TARGETS.map((t, i) => (
          <Reveal key={t.tag} delay={i * 0.08} className="flex flex-col gap-2.5 border border-line bg-card p-6 sm:p-7">
            <span className="text-[11px] tracking-[0.18em] text-accent-solid uppercase">{t.tag}</span>
            <h3 className="text-[17px] font-semibold tracking-tight">{t.title}</h3>
            <p className="text-ink-dim">{t.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16} className="mt-6 border-l-2 border-accent-solid bg-[rgba(124,108,255,0.06)] py-4 px-5 text-[14.5px] text-ink-dim">
        Os dois alvos são mensuráveis, dá pra comparar quantos contatos qualificados entram
        por canal antes e depois, <b className="font-semibold text-ink">e é assim que a gente sabe se o trabalho funcionou</b>.
      </Reveal>
    </Section>
  );
}
