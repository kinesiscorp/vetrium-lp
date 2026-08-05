import { CHANNELS } from "@/lib/diagnostico-frog/content";
import { Reveal } from "../proposal-frog/reveal";
import { Section, SectionHead } from "./section";

export function BrandSubstrate() {
  return (
    <Section id="substrato">
      <SectionHead
        num="01"
        title="O que já funcionava fora do site"
        lead="A marca já tem equity real fora do site — o redesign refina o que existe, não substitui."
        maxWidth="60ch"
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {CHANNELS.map((c, i) => (
          <Reveal
            key={c.name}
            delay={i * 0.08}
            className="border border-line bg-sheet p-6 sm:p-7"
          >
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="text-[17px] font-semibold tracking-tight">
                {c.name} <span className="font-normal text-muted">{c.handle}</span>
              </h3>
            </div>
            <p className="mb-3 text-[14.5px] font-medium text-accent-solid">{c.stat}</p>
            <p className="text-[14.5px] leading-relaxed text-ink-dim">{c.note}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
