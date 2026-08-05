import { FINDINGS, type FindingCategory } from "@/lib/diagnostico-frog/content";
import { Reveal } from "../proposal-frog/reveal";
import { Section, SectionHead } from "./section";

const CATEGORY_LABEL: Record<FindingCategory, string> = {
  visual: "Visual",
  ux: "UX",
  estrategia: "Estratégia",
};

export function Consolidated() {
  const resolved = FINDINGS.filter((f) => f.status === "resolvido").length;

  return (
    <Section id="consolidado">
      <SectionHead
        num="03"
        title="Todos os achados"
        lead={`${resolved} de ${FINDINGS.length} totalmente resolvidos no que já foi construído. Os demais têm a estrutura pronta e dependem de conteúdo real do cliente.`}
        maxWidth="64ch"
      />

      <Reveal className="overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-line bg-sheet-hi/60">
              <th className="w-10 px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                #
              </th>
              <th className="w-28 px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                Categoria
              </th>
              <th className="px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                Achado &amp; impacto
              </th>
              <th className="w-28 px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((f) => (
              <tr key={f.n} className="border-b border-line last:border-b-0">
                <td className="px-4 py-4 align-top text-muted">{f.n}</td>
                <td className="px-4 py-4 align-top text-[12.5px] text-ink-dim">
                  {CATEGORY_LABEL[f.category]}
                </td>
                <td className="px-4 py-4 align-top">
                  <p className="mb-1 font-medium text-ink">{f.title}</p>
                  <p className="text-[13px] leading-relaxed text-ink-dim">{f.impact}</p>
                </td>
                <td className="px-4 py-4 align-top">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[12px] font-medium ${
                      f.status === "resolvido" ? "text-frog" : "text-accent-solid"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 rounded-full ${
                        f.status === "resolvido" ? "bg-frog" : "bg-accent-solid"
                      }`}
                    />
                    {f.status === "resolvido" ? "Resolvido" : "Parcial"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
