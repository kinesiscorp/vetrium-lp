"use client";

import { formatBRL } from "@/lib/proposal-frog/format";
import { useProposal } from "./proposal-state";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

export function Payment() {
  const { plan, planPrice, paymentMode } = useProposal();
  const upfront = Math.round(planPrice * 0.4);
  const balance = planPrice - upfront;

  return (
    <Section id="pagamento">
      <SectionHead num="08" title="Como o pagamento acontece" />

      <Reveal>
        <p className="mb-5 text-[13.5px] text-muted">
          Valores já considerando o pacote selecionado:{" "}
          <b className="text-ink-dim">{plan.name}</b>
          {paymentMode === "avista" ? " · à vista" : " · parcelado"} ·{" "}
          <span className="tnum">{formatBRL(planPrice)}</span>.
        </p>
      </Reveal>

      <Reveal delay={0.06} className="grid gap-px border border-line bg-line sm:grid-cols-2">
        <div className="bg-sheet p-5 sm:p-6">
          <div className="text-metal tnum text-[clamp(24px,3.2vw,32px)] leading-none font-semibold tracking-tight">
            40% · {formatBRL(upfront)}
          </div>
          <p className="mt-2 text-[14px] text-ink-dim">
            No aceite da proposta. Reserva a agenda e libera o acesso à versão completa do que já
            está construído.
          </p>
        </div>
        <div className="bg-sheet p-5 sm:p-6">
          <div className="text-metal tnum text-[clamp(24px,3.2vw,32px)] leading-none font-semibold tracking-tight">
            60% · {formatBRL(balance)}
          </div>
          <p className="mt-2 text-[14px] text-ink-dim">
            Antes da entrega
            {plan.id === "funcional"
              ? ", antes da publicação definitiva e da transferência de arquivos e acessos."
              : ", antes da transferência dos arquivos do Figma organizados para desenvolvimento."}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-5 max-w-[58ch] text-[15px] text-ink-dim">
          A entrada é maior do que o usual porque boa parte do trabalho já foi feita antes de você
          pagar qualquer coisa. Os 40% reconhecem o que já existe; os 60% seguem atrelados à
          entrega.
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mt-6 border-l-2 border-accent-solid bg-[rgba(124,108,255,0.06)] py-4 px-5 text-[14.5px] text-ink-dim">
        O desconto de 7% à vista vale para{" "}
        <b className="font-semibold text-ink">pagamento integral antes do início do projeto</b>.
      </Reveal>
    </Section>
  );
}
