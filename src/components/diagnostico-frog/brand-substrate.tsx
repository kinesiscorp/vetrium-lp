import { CHANNELS } from "@/lib/diagnostico-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function BrandSubstrate() {
  return (
    <Section id="substrato">
      <SectionHead
        tag="Fora do site"
        title="O que já funciona"
        lead="Sua marca já tem peso fora do site. A gente não mexe nisso, só traz esse mesmo padrão pra dentro da página."
        maxWidth="60ch"
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {CHANNELS.map((c, i) => (
          <Reveal
            key={c.name}
            delay={i * 0.08}
            className="bracket border border-frog-edge bg-frog-panel p-6 sm:p-7"
          >
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="label text-[15px] tracking-[0.18em] text-[#cfd4cb]">
                {c.name} <span className="text-frog-steel normal-case">{c.handle}</span>
              </h3>
            </div>
            <p className="tabular mb-3 font-display text-[22px] font-bold text-frog-acid">
              {c.stat}
            </p>
            <p className="text-[14.5px] leading-relaxed text-[#b6bcb3]">{c.note}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
