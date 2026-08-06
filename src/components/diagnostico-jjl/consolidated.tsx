import { FINDINGS, type FindingCategory } from "@/lib/diagnostico-jjl/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

const CATEGORY_LABEL: Record<FindingCategory, string> = {
  visual: "Visual",
  ux: "UX",
  estrategia: "Estratégia",
};

export function Consolidated() {
  return (
    <Section id="consolidado">
      <SectionHead
        num="03"
        title="Todos os achados"
        lead="Visão de tabela, pra circular internamente antes de decidir o que priorizar."
        maxWidth="60ch"
      />

      <Reveal className="overflow-x-auto border border-line">
        <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-line bg-sheet-hi/60">
              <th className="w-10 px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                #
              </th>
              <th className="w-28 px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                Categoria
              </th>
              <th className="px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                Achado
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
                  <p className="font-medium text-ink">{f.title}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
