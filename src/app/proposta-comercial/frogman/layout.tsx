import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta comercial, Esquadrão do Frog | Vetrium",
  description:
    "Proposta interativa da Vetrium para o redesign do site do Esquadrão do Frog: diagnóstico, demonstração ao vivo, calculadora de retorno e escolha de pacote.",
};

/** Paleta fixa e sempre escura (classe `pf-scope`, ver globals.css),
 *  isolada do tema claro/escuro do site: documento comercial precisa
 *  abrir igual pra todo mundo, independente do tema de quem visita. */
export default function ProposalFrogmanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pf-scope min-h-screen">{children}</div>;
}
