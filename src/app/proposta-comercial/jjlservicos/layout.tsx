import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

/* Ver comentário na proposta do Frogman: a raiz agora carrega Sora + Inter,
   e a serifa itálica destes documentos vive no escopo deles. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

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
  return (
    <div className={`pf-scope min-h-screen ${instrumentSerif.variable}`}>
      {children}
    </div>
  );
}
