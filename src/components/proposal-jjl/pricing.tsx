"use client";

import { PLANS, type PaymentMode, type PlanId } from "@/lib/proposal-jjl/content";
import { formatBRL } from "@/lib/proposal-frog/format";
import { useProposal } from "./proposal-state";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

const PAYMENT_LABELS: Record<PaymentMode, string> = {
  parcelado: "Parcelado",
  avista: "À vista (−7%)",
};

export function Pricing() {
  const { planId, setPlanId, paymentMode, setPaymentMode } = useProposal();

  return (
    <Section id="investimento">
      <SectionHead
        num="05"
        title="Investimento"
        lead="Os dois valores abaixo são condição de primeiro projeto. A tabela riscada é o que a Vetrium pratica normalmente. Escolha a forma de pagamento e o pacote, a escolha segue com você até o fechamento."
        maxWidth="60ch"
      />

      <Reveal className="mb-6 inline-flex gap-1 border border-line p-1">
        {(Object.keys(PAYMENT_LABELS) as PaymentMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setPaymentMode(mode)}
            aria-pressed={paymentMode === mode}
            className={`px-4 py-2 text-[13px] font-medium transition-colors ${
              paymentMode === mode ? "bg-metal text-accent-ink" : "text-ink-dim hover:text-ink"
            }`}
          >
            {PAYMENT_LABELS[mode]}
          </button>
        ))}
      </Reveal>

      <div className="grid items-stretch gap-4 sm:grid-cols-2">
        {(Object.keys(PLANS) as PlanId[]).map((id, i) => (
          <PlanCard
            key={id}
            id={id}
            selected={planId === id}
            onSelect={() => setPlanId(id)}
            paymentMode={paymentMode}
            delay={i * 0.08}
          />
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6 border-l-2 border-accent-solid bg-[rgba(124,108,255,0.06)] py-4 px-5 text-[14.5px] text-ink-dim">
        O desconto de case existe porque este é o{" "}
        <b className="font-semibold text-ink">primeiro projeto da Vetrium com a JJL Serviços</b>, e em
        troca a gente usa o trabalho como portfólio. Vale para esta proposta, dentro do prazo de
        validade.
      </Reveal>
    </Section>
  );
}

function PlanCard({
  id,
  selected,
  onSelect,
  paymentMode,
  delay,
}: {
  id: PlanId;
  selected: boolean;
  onSelect: () => void;
  paymentMode: PaymentMode;
  delay: number;
}) {
  const plan = PLANS[id];
  const isAvista = paymentMode === "avista";
  const nowPrice = isAvista ? plan.avistaPrice : plan.price;
  const altPrice = isAvista ? plan.price : plan.avistaPrice;

  return (
    <Reveal delay={delay}>
      <div
        className={`relative flex h-full flex-col gap-3.5 border bg-card p-6 transition-[border-color,box-shadow] sm:p-7 ${
          selected
            ? "border-[rgba(154,134,255,0.55)] shadow-[0_30px_80px_-50px_rgba(124,108,255,0.9)]"
            : "border-line"
        }`}
        style={
          selected
            ? { background: "linear-gradient(165deg,rgba(124,108,255,0.13),rgba(255,255,255,0.03) 55%)" }
            : undefined
        }
      >
        {plan.badge && (
          <span className="bg-metal absolute top-0 left-6 -translate-y-1/2 px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.16em] text-accent-ink uppercase sm:left-7">
            {plan.badge}
          </span>
        )}

        <span className="text-[11.5px] tracking-[0.2em] text-muted uppercase">{plan.name}</span>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-baseline gap-2">
            <span className="text-[10.5px] tracking-[0.16em] text-faint uppercase">Tabela</span>
            <span className="tnum text-[clamp(22px,2.8vw,28px)] font-medium text-faint line-through decoration-[1.5px] decoration-[rgba(154,134,255,0.75)]">
              {formatBRL(plan.tablePrice)}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[15px] text-muted">R$</span>
            <span className="tnum text-[clamp(32px,4.2vw,42px)] leading-none font-semibold tracking-tight">
              {formatBRL(nowPrice).replace("R$", "").trim()}
            </span>
          </div>
          <span className="self-start border border-[rgba(154,134,255,0.4)] px-2.5 py-1 text-[11px] tracking-[0.1em] text-accent-solid uppercase">
            Condição de case · {plan.savingsPct}% de desconto
          </span>
        </div>

        <p className="text-[14.5px] text-ink-dim">{plan.desc}</p>

        <ul className="flex flex-col gap-2">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-dim">
              <span className="mt-2 h-[5px] w-[5px] flex-none rounded-full bg-accent-solid" aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        <p className="border-t border-line pt-3 text-[13.5px] text-ink-dim">
          {isAvista ? "Parcelado" : "À vista com 7% de desconto"}:{" "}
          <b className="tnum font-semibold text-ink">{formatBRL(altPrice)}</b>
        </p>

        <div className="mt-auto flex flex-col gap-2.5 pt-2">
          <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            className={`px-5 py-2.5 text-[14px] font-semibold transition-colors ${
              selected
                ? "bg-metal text-accent-ink"
                : "border border-line-strong text-ink-dim hover:border-accent-solid hover:text-ink"
            }`}
          >
            {selected ? "Pacote selecionado ✓" : "Escolher este pacote"}
          </button>
          <p className="text-[12.5px] text-muted">{plan.foot}</p>
        </div>
      </div>
    </Reveal>
  );
}
