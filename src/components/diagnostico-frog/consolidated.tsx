import { FINDINGS, type FindingCategory } from "@/lib/diagnostico-frog/content";
import { Reveal } from "./reveal";
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
        tag="Consolidado"
        title="Todos os achados"
        lead={`${resolved} de ${FINDINGS.length} já totalmente resolvidos. Os demais têm a estrutura pronta e dependem só do seu conteúdo.`}
        maxWidth="64ch"
      />

      <Reveal className="bracket overflow-x-auto border border-frog-edge">
        <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-frog-edge bg-frog-panel-hi/60">
              <th className="label w-10 px-4 py-3 text-[11px] text-frog-steel">#</th>
              <th className="label w-28 px-4 py-3 text-[11px] text-frog-steel">Categoria</th>
              <th className="label px-4 py-3 text-[11px] text-frog-steel">Achado &amp; impacto</th>
              <th className="label w-28 px-4 py-3 text-[11px] text-frog-steel">Status</th>
            </tr>
          </thead>
          <tbody>
            {FINDINGS.map((f) => (
              <tr key={f.n} className="border-b border-frog-edge bg-frog-panel last:border-b-0">
                <td className="tabular px-4 py-4 align-top text-frog-steel">{f.n}</td>
                <td className="px-4 py-4 align-top text-[12.5px] text-[#b6bcb3]">
                  {CATEGORY_LABEL[f.category]}
                </td>
                <td className="px-4 py-4 align-top">
                  <p className="mb-1 font-medium text-frog-bone">{f.title}</p>
                  <p className="text-[13px] leading-relaxed text-[#b6bcb3]">{f.impact}</p>
                </td>
                <td className="px-4 py-4 align-top">
                  <span
                    className={`label inline-flex items-center gap-1.5 text-[11px] ${
                      f.status === "resolvido" ? "text-frog-acid" : "text-frog-warn"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 rounded-full ${
                        f.status === "resolvido" ? "bg-frog-acid" : "bg-frog-warn"
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
