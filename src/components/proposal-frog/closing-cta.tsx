"use client";

import { META, WHATSAPP_NUMBER, type PaymentMode } from "@/lib/proposal-frog/content";
import { formatBRL } from "@/lib/proposal-frog/format";
import { useProposal } from "./proposal-state";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

const PAYMENT_LABELS: Record<PaymentMode, string> = {
  parcelado: "parcelado",
  avista: "à vista",
};

function buildAcceptMessage(planName: string, paymentMode: PaymentMode, price: number) {
  const lines = [
    `Olá! Sou o Lucas, do ${META.client}.`,
    `Quero aceitar a proposta de redesign do site.`,
    ``,
    `Pacote: ${planName}`,
    `Pagamento: ${PAYMENT_LABELS[paymentMode]} · ${formatBRL(price)}`,
    ``,
    `Vamos seguir com o contrato e a entrada.`,
  ];
  return lines.join("\n");
}

const ADJUST_MESSAGE =
  "Olá! Vi a proposta de redesign do site do Esquadrão do Frog e quero ajustar escopo ou prazo antes de fechar.";

export function ClosingCta() {
  const { plan, planPrice, paymentMode } = useProposal();

  const acceptHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildAcceptMessage(plan.name, paymentMode, planPrice),
  )}`;
  const adjustHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ADJUST_MESSAGE)}`;

  return (
    <Section id="fechamento" className="relative overflow-hidden">
      <div
        aria-hidden
        data-no-print
        className="halo pointer-events-none absolute bottom-[-40%] left-1/2 aspect-square w-[min(720px,140%)] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(124,108,255,0.2), transparent 66%)" }}
      />

      <div className="relative">
        <SectionHead num="12" title="Próximo passo" />

        <Reveal>
          <p className="max-w-[50ch] text-[clamp(16px,1.9vw,18.5px)] leading-relaxed text-ink-dim">
            Responda esta proposta escolhendo o pacote acima. Na sequência enviamos o contrato e a
            entrada de 40%, e a agenda fica reservada no seu nome.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 flex max-w-md flex-col gap-2 border border-line-strong bg-card p-5">
          <span className="text-[10.5px] tracking-[0.16em] text-muted uppercase">Seu pacote agora</span>
          <span className="text-[17px] font-semibold">{plan.name}</span>
          <span className="tnum text-[14.5px] text-ink-dim">
            {PAYMENT_LABELS[paymentMode]} · {formatBRL(planPrice)}
          </span>
        </Reveal>

        <Reveal delay={0.14} className="mt-7 flex flex-wrap items-center gap-3" >
          <a
            href={acceptHref}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-metal inline-flex items-center gap-3 px-6 py-3.5 text-[15.5px] font-semibold text-accent-ink transition-shadow hover:shadow-[0_14px_40px_-14px_rgba(124,108,255,0.8)]"
          >
            Aceitar e reservar a agenda <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            data-no-print
            onClick={() => window.print()}
            className="border border-line-strong px-6 py-3.5 text-[15.5px] text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
          >
            Baixar como PDF
          </button>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[54ch] text-[13.5px] text-muted">
            Se quiser ajustar escopo ou prazo antes de fechar,{" "}
            <a href={adjustHref} target="_blank" rel="noreferrer noopener" className="underline decoration-line-strong underline-offset-2 hover:text-ink-dim">
              chama a gente
            </a>
            , a proposta é ponto de partida, não ultimato.
          </p>
        </Reveal>

        <div
          aria-hidden
          data-no-print
          className="mt-10 text-[clamp(48px,13vw,140px)] leading-[0.85] font-semibold tracking-tight text-transparent select-none"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
        >
          vetrium
        </div>
      </div>
    </Section>
  );
}
