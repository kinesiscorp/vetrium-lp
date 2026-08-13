import { ScrollEngine } from "./scroll-engine";
import { SiteNav } from "@/components/home/site-nav";
import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { Approach } from "@/components/home/approach";
import { BrandManifesto } from "@/components/home/brand-manifesto";
import { Services } from "@/components/home/services";
import { Projects } from "@/components/home/projects";
import { Audiences } from "@/components/home/audiences";
import { Process } from "@/components/home/process";
import { Investment } from "@/components/home/investment";
import { AboutContact } from "@/components/home/about-contact";
import { SiteFooter } from "@/components/home/site-footer";

/**
 * Ordem da página: quem somos → em quem confiar → como pensamos → o que
 * fazemos → o que já entregamos → pra quem → como trabalhamos → quanto custa
 * → conversar. O bloco de investimento entra depois do processo de propósito:
 * o número só faz sentido depois de o leitor saber o que está comprando.
 */
export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-bg text-ink">
      {/* Motor único de scroll: lê os data-anim/data-parallax do markup abaixo */}
      <ScrollEngine />

      <SiteNav />

      <main id="top" className="flex-1">
        <Hero />
        <TrustedBy />
        <Approach />
        <BrandManifesto />
        <Services />
        <Projects />
        <Audiences />
        <Process />
        <Investment />
        <AboutContact />
      </main>

      <SiteFooter />
    </div>
  );
}
