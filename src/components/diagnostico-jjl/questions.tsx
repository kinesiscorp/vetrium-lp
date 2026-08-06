import { QUESTIONS } from "@/lib/diagnostico-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Questions() {
  return (
    <Section id="perguntas" tint>
      <SectionHead
        num="04"
        title="Antes de propor qualquer coisa"
        lead="O que dá pra ver de fora já está listado acima. O resto só o cliente sabe."
      />

      <ul className="flex flex-col gap-3">
        {QUESTIONS.map((q, i) => (
          <Reveal key={q} delay={i * 0.04}>
            <li className="flex items-start gap-3.5 border border-line bg-sheet px-5 py-4">
              <span className="serif-accent min-w-6 text-[15px] text-accent-solid">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14.5px] leading-relaxed text-ink-dim">{q}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
