import { PricingCalculator } from "@/app/pricing-calculator";
import { SectionHeading } from "./section-heading";

/**
 * Bloco de investimento. A calculadora em si é client component e mora em
 * app/ junto das outras peças interativas (projects-section, modal); aqui
 * fica só a abertura de seção, no mesmo padrão de todas as outras.
 *
 * O título e o apoio vieram da coluna esquerda que a calculadora carregava
 * sozinha — subir isso pro SectionHeading é o que faz a seção abrir igual às
 * demais em vez de inventar um segundo formato de cabeçalho na mesma página.
 */
export function Investment() {
  return (
    <section id="investimento" className="relative scroll-mt-28 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-anim="fade" className="js-anim">
          <SectionHeading
            title={
              <>
                Orçamento <span className="emph">simples</span>
              </>
            }
            lead="A maioria dos projetos já sai com faixa de valor e prazo claros aqui. Fora da régua, ajustamos numa conversa rápida."
            action={{ label: "Falar sobre o meu caso", href: "#contato" }}
          />
        </div>

        <div data-anim="fade" data-delay={100} className="js-anim mt-14">
          <PricingCalculator />
        </div>
      </div>
    </section>
  );
}
