"use client";

import { RULES, TIMELINE } from "@/lib/proposal-jjl/content";
import { useProposal } from "./proposal-state";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Timeline() {
  const { plan } = useProposal();

  return (
    <Section id="prazos">
      <SectionHead
        num="07"
        title="Como o projeto anda"
        lead="Quatro etapas: aceite, aprovação, produção e entrega. Sem enrolação no meio."
        maxWidth="56ch"
      />

      <div className="flex flex-col">
        {TIMELINE.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.06} className="relative grid grid-cols-[34px_1fr] gap-4 pb-5 last:pb-0">
            <span
              className={`relative grid h-[34px] w-[34px] flex-none place-items-center rounded-full border text-[12.5px] font-semibold ${
                step.key
                  ? "bg-metal border-transparent text-accent-ink"
                  : "border-line-strong bg-sheet-hi text-ink-dim"
              }`}
            >
              {step.n}
              {i < TIMELINE.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-[calc(100%+5px)] left-1/2 h-[calc(100%_-_6px)] min-h-5 w-px -translate-x-1/2 bg-line"
                />
              )}
            </span>
            <div>
              <span className={`mb-1.5 inline-block text-[10.5px] tracking-[0.16em] uppercase ${step.client ? "text-accent-solid" : "text-faint"}`}>
                {step.who}
              </span>
              <h3 className="mb-1 text-[17px] font-semibold tracking-tight">
                {step.n === 4 ? `Entrega, ${plan.name} em ${plan.deadline}` : step.title}
              </h3>
              <p className="text-[14px] text-ink-dim">
                {step.n === 4
                  ? `Saldo de 50%${plan.id === "funcional" ? ", publicação" : ""} e transferência ${
                      plan.id === "funcional" ? "de arquivos e acessos" : "dos arquivos do Figma"
                    }. Os dias que você usa pra aprovar não consomem o prazo produtivo da equipe.`
                  : step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-8">
        <dl className="flex flex-col divide-y divide-line border border-line">
          {RULES.map((r) => (
            <div key={r.term} className="grid gap-2 bg-sheet p-4 sm:grid-cols-[170px_1fr] sm:gap-4 sm:p-4.5">
              <dt className="text-[10.5px] tracking-[0.16em] text-muted uppercase">{r.term}</dt>
              <dd className="text-[14px] text-ink-dim">{r.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
