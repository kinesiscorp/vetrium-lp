import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diagnóstico, Esquadrão do Frog",
  description:
    "O que já mudou no site do Esquadrão do Frog: achados, antes/depois e o que falta pra fechar.",
};

/** Visual do próprio site do Frog (verde ácido, void, Rajdhani), não o
 *  editorial da Vetrium: quem lê este documento é o Frog, precisa parecer
 *  a marca dele, não outro PDF interno. Tokens isolados em .df-scope,
 *  ver globals.css. */
export default function DiagnosticoFrogmanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`df-scope min-h-screen ${rajdhani.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
