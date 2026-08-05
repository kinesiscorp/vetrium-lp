import Image from "next/image";
import { META } from "@/lib/diagnostico-frog/content";
import { Reveal } from "../proposal-frog/reveal";

export function Hero() {
  return (
    <section id="topo" className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-24 pb-20 sm:px-10">
      <div
        aria-hidden
        className="halo pointer-events-none absolute top-[-30%] left-1/2 aspect-square w-[min(760px,150%)] -translate-x-1/2"
      />
      <Image
        src="/brand-frog/frog-logo.png"
        alt=""
        aria-hidden
        width={620}
        height={298}
        priority
        className="pointer-events-none absolute right-[-9%] bottom-[-4%] w-[min(560px,105%)] opacity-[0.085] select-none"
        style={{
          filter: "grayscale(1) brightness(1.5) contrast(.85)",
          maskImage: "linear-gradient(200deg,#000 30%,rgba(0,0,0,.35) 78%,transparent)",
          WebkitMaskImage: "linear-gradient(200deg,#000 30%,rgba(0,0,0,.35) 78%,transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[920px]">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11.5px] tracking-[0.2em] text-muted uppercase">
            <span className="h-px w-6 bg-line-strong" aria-hidden />
            Diagnóstico &amp; anamnese
          </p>
          <h1 className="text-balance text-[clamp(34px,5.8vw,58px)] leading-[1.02] font-semibold tracking-tight">
            O que mudou no site do
            <br />
            <span className="serif-accent text-metal">Esquadrão do Frog</span>
          </h1>
          <p className="mt-5 max-w-[52ch] text-[clamp(16px,1.9vw,18.5px)] leading-relaxed text-ink-dim">
            Auditamos o site publicado e comparamos, ponto a ponto, com o que já foi
            construído na demonstração. Este raio-x existe pra você decidir com prints
            reais na mão, sem precisar navegar no ambiente completo antes de aprovar.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#auditoria"
            className="bg-metal px-6 py-3 text-[14.5px] font-semibold text-accent-ink transition-shadow hover:shadow-[0_14px_40px_-14px_rgba(124,108,255,0.8)]"
          >
            Ver a auditoria visual →
          </a>
          <a
            href="#consolidado"
            className="border border-line-strong px-6 py-3 text-[14.5px] text-ink-dim transition-colors hover:border-accent-solid hover:text-ink"
          >
            Ir direto pro consolidado
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {[
              { dt: "Cliente", dd: META.client },
              { dt: "Site atual", dd: META.old },
              { dt: "Achados", dd: "9, ao todo" },
              { dt: "Comparado com", dd: META.new },
            ].map((m) => (
              <div key={m.dt} className="bg-sheet p-4">
                <dt className="mb-1.5 text-[10.5px] tracking-[0.16em] text-muted uppercase">{m.dt}</dt>
                <dd className="text-[14.5px]">{m.dd}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
