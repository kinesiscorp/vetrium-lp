import { PROPOSAL_URL } from "@/lib/diagnostico-frog/content";

export function Footer() {
  return (
    <footer data-no-print className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-6 text-[10.5px] tracking-[0.16em] text-faint uppercase sm:px-10">
      <span>Vetrium · Design &amp; Technology</span>
      <div className="flex items-center gap-6">
        <a href={PROPOSAL_URL} className="transition-colors hover:text-ink-dim">
          Proposta comercial
        </a>
        <a href="#topo" className="transition-colors hover:text-ink-dim">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
