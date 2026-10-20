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
        As paisagens do site são fotografias do conjunto{" "}
        <a href="https://polyhaven.com/a/cape_hill" target="_blank" rel="noopener noreferrer">
          Cape Hill
        </a>
        , publicado no Poly Haven em domínio público (CC0). As ruínas de
        mármore, a duna com as sombras das colunas e o tratamento de cor são
        criações da Vetrium, feitas em 3D com texturas também CC0 do Poly Haven.
      </p>
      <p>
        As imagens de projetos do portfólio são capturas de tela de produtos
        criados pela Vetrium.
      </p>
    </LegalPage>
  );
}
