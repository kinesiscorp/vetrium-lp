import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Créditos de imagem",
  description: "Origem e licença das imagens usadas no site da Vetrium.",
  alternates: { canonical: "/creditos" },
};

export default function CreditosPage() {
  return (
    <LegalPage title="Créditos de imagem">
      <p>
        O céu do topo e da chamada final vem do panorama{" "}
        <a href="https://polyhaven.com/a/cape_hill" target="_blank" rel="noopener noreferrer">
          Cape Hill
        </a>
        , publicado no Poly Haven em domínio público (CC0). Os campos de cor e o
        tratamento das imagens são criações da Vetrium.
      </p>
      <p>
        As imagens de projetos do portfólio são capturas de tela de produtos
        criados pela Vetrium.
      </p>
    </LegalPage>
  );
}
