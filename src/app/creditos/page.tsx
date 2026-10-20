import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Créditos de imagem",
  description: "Origem e licença da arte 3D usada no site da Vetrium.",
  alternates: { canonical: "/creditos" },
};

export default function CreditosPage() {
  return (
    <LegalPage title="Créditos de imagem">
      <p>
        O busto de mármore do site é um escaneamento 3D real,{" "}
        <a href="https://polyhaven.com/a/marble_bust_01" target="_blank" rel="noopener noreferrer">
          Marble Bust 01
        </a>
        , de Rico Cilliers, publicado no Poly Haven em domínio público (CC0). A
        iluminação, a bola de chiclete e as imagens estáticas derivadas dele
        são criações da Vetrium.
      </p>
      <p>
        As imagens de projetos do portfólio são capturas de tela de produtos
        criados pela Vetrium.
      </p>
    </LegalPage>
  );
}
