import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico, Esquadrão do Frog | Vetrium",
  description:
    "Raio-x da Vetrium comparando o site atual do Esquadrão do Frog com o que já foi construído na demonstração: achados, o que mudou e o impacto de cada mudança.",
};

/** Mesma paleta fixa e escura da proposta comercial (classe `pf-scope`,
 *  ver globals.css): as duas páginas se linkam uma na outra e precisam
 *  abrir com a mesma identidade, sem depender do tema de quem visita. */
export default function DiagnosticoFrogmanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pf-scope min-h-screen">{children}</div>;
}
