import { ProjectsSection } from "@/app/projects-section";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-anim="fade" className="js-anim">
          <SectionHeading
            title={
              <>
                Trabalho que já <span className="emph">está no ar</span>
              </>
            }
            lead="Alguns dos projetos que desenvolvemos — do primeiro rascunho ao que está rodando hoje."
            action={{ label: "Quero um projeto assim", href: "#contato" }}
          />
        </div>

        <div data-anim="fade" className="js-anim mt-14">
          <ProjectsSection />
        </div>
      </div>
    </section>
  );
}
