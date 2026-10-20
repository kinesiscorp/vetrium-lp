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
        O céu e o mar das cenas vêm do conjunto{" "}
        <a href="https://polyhaven.com/a/cape_hill" target="_blank" rel="noopener noreferrer">
          Cape Hill
        </a>
        ; o busto é o{" "}
        <a href="https://polyhaven.com/a/marble_bust_01" target="_blank" rel="noopener noreferrer">
          Marble Bust 01
        </a>{" "}
        (Rico Cilliers) e as oliveiras são o modelo{" "}
        <a href="https://polyhaven.com/a/island_tree_01" target="_blank" rel="noopener noreferrer">
          Island Tree 01
        </a>
        , todos do Poly Haven em domínio público (CC0). As ruínas do templo, as
        colunas, a duna, o mármore e o tratamento de cor são criações da
        Vetrium, feitas em 3D.
      </p>
      <p>
        As imagens de projetos do portfólio são capturas de tela de produtos
        criados pela Vetrium.
      </p>
    </LegalPage>
  );
}
