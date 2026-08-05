import { NEXT_STEPS } from "@/lib/diagnostico-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function NextSteps() {
  return (
    <Section id="proximos" tint>
      <SectionHead
        tag="Com você"
        title="O que falta vir do seu lado"
        lead="O design tá fechado. O que falta agora é conteúdo real, sem isso a gente não troca os exemplos por dados de verdade."
        strat
      />

      <ul className="flex flex-col gap-3">
        {NEXT_STEPS.map((step, i) => (
          <Reveal key={step} delay={i * 0.05}>
            <li className="flex items-start gap-3.5 border border-frog-edge bg-frog-panel px-5 py-4">
              <span className="crosshair mt-[3px] text-frog-strat" aria-hidden />
              <span className="text-[14.5px] leading-relaxed text-[#b6bcb3]">{step}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
