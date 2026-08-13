import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

/* A raiz do site passou a carregar Sora + Inter (brandkit novo, sem serifa).
   Este documento já foi enviado ao cliente com a ênfase em serifa itálica
   (.serif-accent), então a fonte fica carregada aqui, no escopo dele. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

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
  return (
    <div className={`pf-scope min-h-screen ${instrumentSerif.variable}`}>
      {children}
    </div>
  );
}
