import { SCOPE_ROWS } from "@/lib/proposal-frog/content";
import { Reveal } from "./reveal";
import { Section, SectionHead } from "./section";

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="text-[16px] leading-none text-accent-solid" aria-label="incluso">
      ●
    </span>
  ) : (
    <span className="text-[14px] leading-none text-[#3f3e52]" aria-label="não incluso">
      ✕
    </span>
  );
}

export function ScopeTable() {
  return (
    <Section id="escopo">
      <SectionHead num="05" title="O que entra em cada pacote" />

      <Reveal className="overflow-x-auto border border-line">
        <table className="w-full min-w-[480px] border-collapse text-[14.5px]">
          <thead>
            <tr>
              <th scope="col" className="bg-sheet-hi px-3.5 py-3 text-left text-[10.5px] font-medium tracking-[0.15em] text-muted uppercase">
                Entrega
              </th>
              <th scope="col" className="w-[118px] bg-sheet-hi px-3.5 py-3 text-center text-[10.5px] font-medium tracking-[0.15em] text-muted uppercase">
                Protótipo
              </th>
              <th scope="col" className="w-[118px] bg-sheet-hi px-3.5 py-3 text-center text-[10.5px] font-medium tracking-[0.15em] text-muted uppercase">
                Funcional
              </th>
            </tr>
          </thead>
          <tbody>
            {SCOPE_ROWS.map((row) => (
              <tr key={row.label} className="border-t border-line">
                <td className="px-3.5 py-2.5">{row.label}</td>
                <td className="px-3.5 py-2.5 text-center">
                  <Check ok={row.prototipo} />
                </td>
                <td className="px-3.5 py-2.5 text-center">
                  <Check ok={row.funcional} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
