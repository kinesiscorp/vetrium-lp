import { whatsappHref } from "@/lib/site/content";
import { ButtonLink, IconSparkle, IconWhatsapp } from "./primitives";
import { Sculpture } from "./sculpture";

/**
 * Primeira dobra. A mensagem comercial vem antes da metáfora: quem não
 * "lê" a escultura entende o negócio pelo texto. No mobile a imagem desce
 * para baixo do CTA e nunca fica atrás do texto.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="vds-dark vds-night relative isolate overflow-hidden"
    >
      {/* Grade técnica muito discreta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7F4EE 1px, transparent 1px), linear-gradient(to bottom, #F7F4EE 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
          maskImage: "radial-gradient(ellipse at 70% 40%, black, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl px-4 pt-32 sm:px-8 lg:min-h-[100svh] lg:grid-cols-12 lg:pt-0">
        {/* ---------- Texto ---------- */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pb-20 lg:pt-32">
          <p className="vds-label vds-enter text-marble">
            Estratégia digital <span className="text-rose">/</span> Design{" "}
            <span className="text-rose">/</span> Performance
          </p>

          <h1
            id="hero-title"
            className="vds-display vds-enter mt-7 text-[clamp(2.6rem,6.4vw,5.6rem)]"
            style={{ ["--enter-delay" as string]: "80ms" }}
          >
            Seu site não precisa apenas impressionar.{" "}
            <span className="vds-em text-rose">Precisa gerar oportunidades.</span>
          </h1>

          <p
            className="vds-lead vds-enter mt-8 text-marble"
            style={{ ["--enter-delay" as string]: "160ms" }}
          >
            Criamos landing pages estratégicas que unem design autoral,
            experiência do usuário e otimização para mecanismos de busca —
            com foco em transformar visitas em oportunidades de negócio.
          </p>

          <div
            className="vds-enter mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ ["--enter-delay" as string]: "240ms" }}
          >
            <ButtonLink href="/orcamento" variant="light">
              Vamos construir seu projeto
            </ButtonLink>
            <ButtonLink href="#projetos" variant="outline" arrow={false}>
              Explorar projetos
            </ButtonLink>
          </div>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="vds-link vds-enter mt-7 self-start text-sm text-marble hover:text-ivory"
            style={{ ["--enter-delay" as string]: "320ms" }}
          >
            <IconWhatsapp className="h-4 w-4 text-rose" />
            Prefere conversar antes? Chame no WhatsApp
          </a>
        </div>

        {/* ---------- Arte ---------- */}
        <div className="relative mt-14 lg:col-span-5 lg:mt-0">
          {/* Largura limitada pela altura da tela: a cabeça inteira cabe na
              primeira dobra (proporção da imagem ≈ 0,8). */}
          <div className="relative mx-auto w-[min(88vw,26rem)] lg:absolute lg:bottom-0 lg:-right-6 lg:w-[min(44vw,calc((100svh-6rem)*0.8),40rem)]">
            <Sculpture
              art="jovem"
              priority
              sizes="(min-width: 1024px) 46vw, 88vw"
              sphere={{ x: 60, y: 80, size: 30, float: true }}
            />
            <IconSparkle
              aria-hidden
              className="absolute left-[2%] top-[12%] h-4 w-4 text-ivory/80"
            />
            <IconSparkle
              aria-hidden
              className="absolute right-[6%] top-[46%] h-3 w-3 text-rose"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
