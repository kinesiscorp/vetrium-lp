import { PROPOSAL_URL } from "@/lib/diagnostico-frog/content";

export function Footer() {
  return (
    <footer className="border-t border-frog-edge">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-6 text-xs text-[#5c635a]">
        <span>Diagnóstico preparado por Frogman1 × Vetrium.</span>
        <div className="flex items-center gap-5">
          <a href={PROPOSAL_URL} className="transition-colors hover:text-frog-acid">
            Proposta comercial
          </a>
          <a href="#topo" className="transition-colors hover:text-frog-acid">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
