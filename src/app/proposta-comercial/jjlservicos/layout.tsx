import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta comercial, JJL Serviços | Vetrium",
  description:
    "Proposta interativa da Vetrium para o redesign do site da JJL Serviços: diagnóstico, escopo, investimento e prazos.",
};

export default function ProposalJjlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pf-scope min-h-screen">{children}</div>;
}
