import { NEXT_STEPS } from "@/lib/diagnostico-frog/content";
import { Reveal } from "../proposal-frog/reveal";
import { Section, SectionHead } from "./section";

export function NextSteps() {
  return (
    <Section id="proximos" tint>
      <SectionHead
        num="04"
        title="Próximos passos"
        lead="O que falta pra fechar os achados que hoje estão parciais."
      />

      <ul className="flex flex-col gap-3">
        {NEXT_STEPS.map((step, i) => (
          <Reveal key={step} delay={i * 0.05}>
            <li className="flex items-start gap-3.5 border border-line bg-sheet px-5 py-4">
              <span
                aria-hidden
                className="mt-[3px] h-4 w-4 flex-none border border-line-strong"
              />
              <span className="text-[14.5px] leading-relaxed text-ink-dim">{step}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
