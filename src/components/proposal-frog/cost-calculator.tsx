"use client";

import { useMemo, useState } from "react";
import { COST, PLANS } from "@/lib/proposal-frog/content";
import { formatBRL, formatInt } from "@/lib/proposal-frog/format";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

const DIFF = COST.soldadoPrice - COST.recrutaPrice;
/** Referência de payback é sempre o parcelado do pacote funcional — é o
 *  pacote que de fato entrega o objetivo de conversão desta proposta. */
const REFERENCE_PRICE = PLANS.funcional.price;

export function CostCalculator() {
  const [migrating, setMigrating] = useState(COST.defaultMigration);

  const { monthlyGain, percentOfBase, paybackMonths, fillPct } = useMemo(() => {
    const monthlyGain = migrating * DIFF;
    const percentOfBase = (migrating / COST.activeStudents) * 100;
    const paybackMonths = monthlyGain > 0 ? REFERENCE_PRICE / monthlyGain : Infinity;
    const fillPct = ((migrating - COST.minMigration) / (COST.maxMigration - COST.minMigration)) * 100;
    return { monthlyGain, percentOfBase, paybackMonths, fillPct };
  }, [migrating]);

  return (
    <Section id="custo">
      <SectionHead
        num="02"
        title="Quanto o selo errado custa"
        lead="O achado 03 não é estético, é financeiro. Mexa no número abaixo e faça a conta com os seus próprios critérios."
        maxWidth="58ch"
      />

      <Reveal className="flex flex-col divide-y divide-line border border-line">
        <Row k="Membros ativos hoje" v={formatInt(COST.activeStudents)} />
        <Row k="Proporção que assina o Recruta" v="80%" />
        <Row k="Recruta" v={`${formatBRL(COST.recrutaPrice)} / mês`} />
        <Row k="Soldado" v={`${formatBRL(COST.soldadoPrice)} / mês`} />
        <div className="flex items-baseline justify-between gap-4 bg-[rgba(124,108,255,0.09)] px-5 py-3.5">
          <span className="text-[14.5px] font-medium">Diferença por aluno, por mês</span>
          <span className="text-metal tnum text-[clamp(20px,2.6vw,26px)] font-semibold">
            {formatBRL(DIFF)}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-6 border border-[rgba(154,134,255,0.4)] bg-[linear-gradient(150deg,rgba(124,108,255,0.14),rgba(255,255,255,0.02))] p-6 sm:p-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <label htmlFor="migrating" className="text-[14px] text-ink-dim">
            Alunos migrando do Recruta pro Soldado
          </label>
          <span className="tnum text-[15px] font-semibold whitespace-nowrap">
            {migrating} <span className="font-normal text-muted">({percentOfBase.toFixed(1).replace(".", ",")}% da base)</span>
          </span>
        </div>

        <input
          id="migrating"
          type="range"
          className="payback-slider"
          min={COST.minMigration}
          max={COST.maxMigration}
          value={migrating}
          onChange={(e) => setMigrating(Number(e.target.value))}
          style={{ "--fill": `${fillPct}%` } as React.CSSProperties}
          aria-valuetext={`${migrating} alunos, ${percentOfBase.toFixed(1)} por cento da base`}
        />
        <div className="mt-2 flex justify-between text-[11px] text-faint">
          <span>{COST.minMigration}</span>
          <span>{COST.maxMigration}</span>
        </div>

        <div className="mt-7 border-t border-line pt-6">
          <p className="text-[13.5px] text-ink-dim">Ganho mensal recorrente</p>
          <div className="text-metal tnum mt-1 text-[clamp(30px,4.4vw,44px)] leading-none font-semibold tracking-tight">
            {formatBRL(monthlyGain)}
            <span className="ml-1 text-[15px] font-normal text-muted"> / mês</span>
          </div>
          <p className="mt-3 text-[15px] text-ink-dim">
            Nessas condições, o pacote funcional (
            <span className="tnum">{formatBRL(REFERENCE_PRICE)}</span>) se paga em{" "}
            <b className="text-ink">
              {Number.isFinite(paybackMonths) ? `${paybackMonths.toFixed(1).replace(".", ",")} meses` : "—"}
            </b>
            . Depois disso, é margem que já estava na mesa e não estava sendo recolhida.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-5 text-[13.5px] text-muted">
          Os 350 ativos e os 80% no Recruta são números que você mesmo passou. A migração é
          hipótese sua — arraste o controle para o cenário que parecer realista.
        </p>
      </Reveal>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 bg-sheet px-5 py-3.5">
      <span className="text-[14.5px] text-ink-dim">{k}</span>
      <span className="tnum text-[16px] font-semibold whitespace-nowrap">{v}</span>
    </div>
  );
}
