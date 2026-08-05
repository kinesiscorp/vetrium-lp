import { COMPARISONS, FINDINGS } from "@/lib/diagnostico-frog/content";
import { BeforeAfter } from "./before-after";
import { Reveal } from "../proposal-frog/reveal";
import { Section, SectionHead } from "./section";

function StatusBadge({ status }: { status: "resolvido" | "parcial" }) {
  const resolved = status === "resolvido";
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-[10px] font-semibold tracking-[0.1em] uppercase ${
        resolved
          ? "border-frog/35 text-frog"
          : "border-accent-solid/40 text-accent-solid"
      }`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${resolved ? "bg-frog" : "bg-accent-solid"}`}
      />
      {resolved ? "Resolvido" : "Parcial"}
    </span>
  );
}

export function VisualAudit() {
  return (
    <Section id="auditoria" tint>
      <SectionHead
        num="02"
        title="Auditoria visual"
        lead="Três telas, lado a lado. Arraste o divisor pra ver o antes e o depois na mesma moldura — os achados de cada uma vêm logo abaixo."
        maxWidth="62ch"
      />

      <div className="flex flex-col gap-14 sm:gap-20">
        {COMPARISONS.map((c, i) => {
          const items = FINDINGS.filter((f) => c.findings.includes(f.n));
          return (
            <Reveal key={c.id} delay={i * 0.06}>
              <div className="mb-4 flex items-baseline gap-3">
                <span className="serif-accent text-[14px] text-accent-solid">{c.n}</span>
                <span className="text-[11px] tracking-[0.16em] text-faint uppercase">{c.tag}</span>
              </div>
              <h3 className="mb-2.5 text-[22px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mb-5 max-w-[64ch] text-[15px] leading-relaxed text-ink-dim">{c.body}</p>

              <BeforeAfter before={c.before} after={c.after} />

              <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
                {items.map((f) => (
                  <div key={f.n} className="grid grid-cols-[auto_1fr] items-start gap-4 bg-sheet py-5">
                    <span className="serif-accent min-w-6 text-lg text-accent-solid">{f.n}</span>
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
                        <h4 className="text-[15.5px] font-semibold tracking-tight">{f.title}</h4>
                        <StatusBadge status={f.status} />
                      </div>
                      <p className="mb-1.5 text-[14px] text-muted italic">{f.before}</p>
                      <p className="text-[14.5px] text-ink-dim">
                        <span className="font-medium text-ink">O que mudou:</span> {f.fix}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
