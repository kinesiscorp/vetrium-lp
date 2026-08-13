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
  title: "Diagnóstico, JJL Serviços | Vetrium",
  description:
    "Raio-x da Vetrium sobre o site atual da JJL Serviços: achados, o que já funciona e o que falta esclarecer antes de propor um redesign.",
};

/** Paleta fixa e sempre escura (classe `pf-scope`, ver globals.css),
 *  igual à proposta comercial: documento de prospecção precisa abrir
 *  igual pra todo mundo, e aqui é a própria marca da Vetrium quem
 *  assina, não a do prospect (que ainda nem tem brandkit definido). */
export default function DiagnosticoJjlLayout({
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
