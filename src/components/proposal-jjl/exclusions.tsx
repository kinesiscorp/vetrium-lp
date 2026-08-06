import { EXCLUSIONS } from "@/lib/proposal-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Exclusions() {
  return (
    <Section id="fora-do-escopo">
      <SectionHead
        num="09"
        title="O que não está incluso"
        lead="Deixar isso claro agora evita ruído depois. Nada aqui é impossível, só não está neste orçamento."
        maxWidth="54ch"
      />

      <Reveal>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {EXCLUSIONS.map((item) => (
            <li key={item} className="flex gap-2.5 text-[14.5px] text-ink-dim">
              <span className="flex-none text-faint" aria-hidden>
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-5 text-[13.5px] text-muted">
          Quando necessários, esses serviços são contratados separadamente, por hora ou por pacote
          mensal, mediante orçamento. O funil de WhatsApp e e-mail continua como está, não mexemos
          nesse fluxo.
        </p>
      </Reveal>
    </Section>
  );
}
