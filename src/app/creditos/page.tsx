import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Créditos de imagem",
  description: "Origem das imagens usadas no site da Vetrium.",
  alternates: { canonical: "/creditos" },
};

export default function CreditosPage() {
  return (
    <LegalPage title="Créditos de imagem">
      <p>
        Os fundos do site são padrões gráficos desenhados pela Vetrium, sem
        imagens de terceiros.
      </p>
      <p>
        As imagens de projetos do portfólio são capturas de tela de produtos
        criados pela Vetrium.
      </p>
    </LegalPage>
  );
}
