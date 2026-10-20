import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Créditos de imagem",
  description: "Origem e licença das imagens de esculturas usadas no site da Vetrium.",
  alternates: { canonical: "/creditos" },
};

const ITEMS = [
  {
    title: "Marble head of a youth",
    use: "Hero",
    url: "https://www.metmuseum.org/art/collection/search/248895",
  },
  {
    title: "Marble head of Herakles",
    use: "Chamada final",
    url: "https://www.metmuseum.org/art/collection/search/252932",
  },
  {
    title: "Marble portrait head of Antinoos",
    use: "Diferenciais",
    url: "https://www.metmuseum.org/art/collection/search/256530",
  },
];

export default function CreditosPage() {
  return (
    <LegalPage eyebrow="Créditos" title="Créditos de imagem">
      <p>
        As esculturas usadas na direção de arte deste site pertencem ao acervo
        do The Metropolitan Museum of Art, Nova York, e foram disponibilizadas
        em domínio público (CC0) pelo programa Open Access do museu. As imagens
        foram recortadas e tratadas pela Vetrium; as esferas e demais
        intervenções gráficas são criações próprias.
      </p>
      <ul>
        {ITEMS.map((i) => (
          <li key={i.url}>
            <a href={i.url} target="_blank" rel="noopener noreferrer">
              {i.title}
            </a>{" "}
            — The Met, Open Access (CC0). Uso: {i.use}.
          </li>
        ))}
      </ul>
      <p>
        As imagens de projetos do portfólio são capturas de tela de produtos
        criados pela Vetrium.
      </p>
    </LegalPage>
  );
}
