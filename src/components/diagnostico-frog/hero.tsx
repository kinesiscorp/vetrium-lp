import { FINDINGS, META } from "@/lib/diagnostico-frog/content";
import { Reveal } from "./reveal";

export function Hero() {
  const resolved = FINDINGS.filter((f) => f.status === "resolvido").length;

  return (
    <section id="topo" className="sec relative overflow-hidden pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-20%] right-[-10%] aspect-square w-[min(620px,90vw)] rounded-full bg-[radial-gradient(circle,rgba(124,255,0,0.14),transparent_70%)]"
      />

      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow mb-5">
            <span className="slash">{"///"}</span> Raio-x do redesign
          </p>
          <h1 className="d h1">
            O que já mudou
            <br />
            no seu <span className="grad">site</span>
          </h1>
          <p className="mt-5 max-w-[56ch] text-xl leading-relaxed text-[#cfd4cb]">
            Comparamos o {META.old} com o que a gente já construiu, ponto a ponto. Dá pra
            ver o antes e o depois com prints reais, sem precisar navegar na página
            inteira antes de decidir.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          <a href="#auditoria" className="btn btn-pri">
            <span className="lab">Ver o antes e depois</span>
            <span className="arw" aria-hidden>
              →
            </span>
          </a>
          <a href="#consolidado" className="btn btn-ghost">
            <span className="lab">Ir direto pros achados</span>
            <span className="arw" aria-hidden>
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mt-11 grid grid-cols-2 gap-px border border-frog-edge bg-frog-edge sm:grid-cols-4">
          {[
            { value: `${FINDINGS.length}`, label: "achados no total" },
            { value: `${resolved}`, label: "já resolvidos" },
            { value: "158 mil", label: "inscritos no YouTube" },
            { value: "103 mil", label: "seguidores no Instagram" },
          ].map((m) => (
            <div key={m.label} className="bg-frog-panel p-4">
              <div className="tabular font-display text-[22px] leading-none font-bold text-frog-bone">
                {m.value}
              </div>
              <div className="mt-1.5 text-[11px] tracking-wide text-frog-steel uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
