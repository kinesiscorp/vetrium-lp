import { DEMO_URL, FINDINGS } from "@/lib/proposal-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Diagnosis() {
  return (
    <Section id="diagnostico">
      <SectionHead
        num="01"
        title="O que encontramos"
        lead="Auditamos o site atual, o canal e o Instagram antes de desenhar qualquer coisa. Quatro pontos concentram a maior parte da perda."
        maxWidth="54ch"
      />

      <div className="flex flex-col divide-y divide-line border-y border-line">
        {FINDINGS.map((f, i) => (
          <Reveal key={f.n} delay={i * 0.06} className="bg-sheet py-5">
            <div className="grid grid-cols-[auto_1fr] items-start gap-4">
              <span className="serif-accent min-w-6 text-lg text-accent-solid">{f.n}</span>
              <div>
                <h3 className="mb-1.5 text-[17px] font-semibold tracking-tight">{f.title}</h3>
                <p className="text-ink-dim">{f.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-5 text-[13.5px] text-muted">
        Diagnóstico completo com nove achados,{" "}
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent-solid underline decoration-accent-solid/40 underline-offset-2 hover:text-ink"
        >
          disponível à parte
        </a>
        .
      </p>
    </Section>
  );
}
