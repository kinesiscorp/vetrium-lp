import { COMPARISONS, FINDINGS } from "@/lib/diagnostico-frog/content";
import { BeforeAfter } from "./before-after";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

function StatusBadge({ status }: { status: "resolvido" | "parcial" }) {
  const resolved = status === "resolvido";
  return (
    <span
      className={`label inline-flex items-center gap-1.5 border px-2 py-0.5 text-[10px] ${
        resolved ? "border-frog-acid/35 text-frog-acid" : "border-frog-warn/40 text-frog-warn"
      }`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${resolved ? "bg-frog-acid" : "bg-frog-warn"}`}
      />
      {resolved ? "Resolvido" : "Parcial"}
    </span>
  );
}

export function VisualAudit() {
  return (
    <Section id="auditoria" tint>
      <SectionHead
        tag="Antes e depois"
        title="Arraste pra comparar"
        lead="Três telas, lado a lado com o que já foi construído. Os achados de cada uma vêm logo abaixo."
        maxWidth="62ch"
      />

      <div className="flex flex-col gap-14 sm:gap-20">
        {COMPARISONS.map((c, i) => {
          const items = FINDINGS.filter((f) => c.findings.includes(f.n));
          return (
            <Reveal key={c.id} delay={i * 0.06}>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="chev" aria-hidden>
                  &gt;&gt;&gt;
                </span>
                <span className="label text-[#8e958d]">{c.tag}</span>
              </div>
              <h3 className="d h3 mb-2.5">{c.title}</h3>
              <p className="mb-5 max-w-[64ch] text-[15px] leading-relaxed text-[#b6bcb3]">
                {c.body}
              </p>

              <BeforeAfter before={c.before} after={c.after} />

              <div className="mt-6 flex flex-col divide-y divide-frog-edge border-y border-frog-edge">
                {items.map((f) => (
                  <div key={f.n} className="grid grid-cols-[auto_1fr] items-start gap-4 bg-frog-panel px-5 py-5 sm:px-6">
                    <span className="tabular font-display min-w-6 text-lg font-bold text-frog-steel">
                      {f.n}
                    </span>
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2.5">
                        <h4 className="font-display text-[15.5px] font-bold tracking-wide text-frog-bone uppercase">
                          {f.title}
                        </h4>
                        <StatusBadge status={f.status} />
                      </div>
                      <p className="mb-1.5 text-[14px] text-frog-steel italic">{f.before}</p>
                      <p className="text-[14.5px] text-[#b6bcb3]">
                        <span className="font-medium text-frog-bone">O que mudou:</span> {f.fix}
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
