"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import {
  QUOTE_BUDGETS,
  QUOTE_GOALS,
  QUOTE_SERVICES,
  whatsappHref,
} from "@/lib/site/content";
import { track } from "@/lib/site/analytics";
import {
  EMPTY_QUOTE,
  LIMITS,
  serviceLabels,
  validateStep,
  type QuoteErrors,
  type QuoteInput,
} from "@/lib/site/quote";
import { IconArrow, IconWhatsapp } from "./primitives";

const STEPS = ["Serviço", "Seu projeto", "Contato"] as const;
const DRAFT_KEY = "vetrium:orcamento:rascunho";

type Status = "idle" | "submitting" | "success";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-accent">
      {msg}
    </p>
  );
}

export function QuoteForm({ initialService }: { initialService?: string }) {
  const uid = useId();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteInput>(() => ({
    ...EMPTY_QUOTE,
    services:
      initialService && QUOTE_SERVICES.some((s) => s.id === initialService) ? [initialService] : [],
  }));
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef<number>(0);
  const submitting = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const touched = useRef(false);

  // Rascunho local: conveniência para quem fecha a aba sem querer.
  useEffect(() => {
    startedAt.current = Date.now();
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<QuoteInput>;
        // sessionStorage só existe no cliente: restaurar no mount é o jeito
        // de não quebrar a hidratação.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData((d) => ({ ...d, ...parsed, services: parsed.services?.length ? parsed.services : d.services }));
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (status === "success") return;
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    } catch {}
  }, [data, status]);

  const set = <K extends keyof QuoteInput>(k: K, v: QuoteInput[K]) => {
    if (!touched.current) {
      touched.current = true;
      track("quote_start");
    }
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const focusFirstError = (e: QuoteErrors) => {
    const first = Object.keys(e)[0];
    if (!first) return;
    requestAnimationFrame(() => {
      const el = document.querySelector<HTMLElement>(`[data-field="${first}"]`);
      el?.focus();
    });
  };

  const goTo = (n: number) => {
    setStep(n);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = () => {
    const e = validateStep(step, data);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);
    track("quote_step", { step: step + 1 });
    goTo(step + 1);
  };

  const submit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (step < 3) return next();
    if (submitting.current) return;

    const e = validateStep(3, data);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);

    submitting.current = true;
    setStatus("submitting");
    track("quote_submit", { services: data.services.join(",") });

    // O WhatsApp é o canal principal: abre na hora do toque (antes de qualquer
    // await, senão o iOS bloqueia a janela) com a mensagem completa pronta.
    const opened = window.open(whatsappLink, "_blank", "noopener,noreferrer");
    track("quote_whatsapp", { opened: opened ? 1 : 0 });

    // Registro no CRM é "melhor esforço": se o banco estiver fora, o cliente
    // não vê erro nenhum — a solicitação já foi pelo WhatsApp.
    const form = new FormData(ev.currentTarget);
    fetch("/api/orcamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        ...data,
        website: form.get("website") ?? "",
        startedAt: startedAt.current,
      }),
    }).catch(() => {});

    setStatus("success");
    try {
      sessionStorage.removeItem(DRAFT_KEY);
    } catch {}
    requestAnimationFrame(() => headingRef.current?.focus());
    submitting.current = false;
  };

  const whatsappLink = whatsappHref(
    [
      `Olá! Sou ${data.name}${data.company ? ` (${data.company})` : ""} e vim pelo site da Vetrium pedir um orçamento.`,
      "",
      `Serviço: ${serviceLabels(data.services).join(", ")}`,
      `Negócio: ${data.business}`,
      `Objetivo: ${data.goal}`,
      `Investimento previsto: ${data.budget || "não informado"}`,
      data.message ? `\nDescrição: ${data.message}` : "",
      "",
      `E-mail: ${data.email}`,
    ]
      .filter((l, i, arr) => l !== "" || (arr[i - 1] !== "" && i !== arr.length - 1))
      .join("\n"),
  );

  /* ---------------- Sucesso ---------------- */
  if (status === "success") {
    return (
      <div className="vds-glass rounded-[1.6rem] p-8 sm:p-12" role="status">
        <span className="grid h-12 w-12 place-items-center bg-accent text-canvas">
          <IconWhatsapp className="h-6 w-6" />
        </span>
        <h2 ref={headingRef} tabIndex={-1} className="vds-h2 mt-8 outline-none">
          Falta só enviar no WhatsApp, {data.name.split(" ")[0]}.
        </h2>
        <p className="vds-lead mt-5 text-fg-2">
          Abrimos o WhatsApp com a sua solicitação já escrita. É só tocar em
          enviar. Se a conversa não abriu, use o botão abaixo.
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="vds-pill vds-pill-light pr-5"
            onClick={() => track("quote_whatsapp_again")}
          >
            <IconWhatsapp className="h-4 w-4" />
            Abrir WhatsApp
          </a>
        </div>
        <ol className="mt-10 space-y-3 text-fg-2">
          {["Você envia a mensagem pronta", "Respondemos e entendemos os detalhes", "Proposta com escopo, etapas e investimento"].map(
            (t, i) => (
              <li key={t} className="flex gap-3">
                <span className="tabular-nums text-accent">{i + 1}.</span>
                {t}
              </li>
            ),
          )}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/#projetos" className="vds-pill vds-pill-ghost">
            Ver projetos enquanto isso
          </Link>
          <Link href="/" className="vds-pill vds-pill-ghost">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const errId = (k: string) => `${uid}-${k}-erro`;
  const busy = status === "submitting";

  return (
    <form onSubmit={submit} noValidate aria-describedby={`${uid}-progresso`}>
      {/* Honeypot: invisível para pessoas, irresistível para bots */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Site
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* ---------- Progresso ---------- */}
      <nav aria-label="Etapas do orçamento">
        <p id={`${uid}-progresso`} className="text-[0.85rem] text-fg-2">
          Etapa {step} de 3
        </p>
        <ol className="mt-4 grid grid-cols-3 gap-2">
          {STEPS.map((label, i) => {
            const n = i + 1;
            const state = n < step ? "done" : n === step ? "current" : "todo";
            return (
              <li key={label} aria-current={state === "current" ? "step" : undefined}>
                <span
                  aria-hidden
                  className={
                    "block h-1 transition-colors duration-300 " +
                    (state === "todo" ? "bg-fg/10" : state === "current" ? "bg-accent" : "bg-fg")
                  }
                />
                <span
                  className={
                    "mt-3 block text-[0.8rem] " +
                    (state === "todo" ? "text-fg-2/80" : "text-fg")
                  }
                >
                  <span className="tabular-nums">{n}.</span> {label}
                  {state === "done" && <span className="sr-only"> (concluída)</span>}
                </span>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="mt-12">
        {/* ---------- Etapa 1 ---------- */}
        {step === 1 && (
          <fieldset aria-describedby={errors.services ? errId("services") : undefined}>
            <legend>
              <h2 ref={headingRef} tabIndex={-1} className="text-[2rem] leading-tight tracking-[-0.04em] outline-none">
                O que você precisa?
              </h2>
              <span className="mt-2 block text-fg-2">Pode marcar mais de uma opção.</span>
            </legend>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {QUOTE_SERVICES.map((s, i) => (
                <label key={s.id} className="vds-choice">
                  <input
                    type="checkbox"
                    name="services"
                    value={s.id}
                    data-field={i === 0 ? "services" : undefined}
                    checked={data.services.includes(s.id)}
                    aria-invalid={errors.services ? true : undefined}
                    onChange={(e) =>
                      set(
                        "services",
                        e.target.checked
                          ? [...data.services, s.id]
                          : data.services.filter((x) => x !== s.id),
                      )
                    }
                  />
                  <span>
                    <span className="block font-semibold">{s.label}</span>
                    <span className="mt-0.5 block text-sm text-fg-2">{s.hint}</span>
                  </span>
                </label>
              ))}
            </div>
            <FieldError id={errId("services")} msg={errors.services} />
          </fieldset>
        )}

        {/* ---------- Etapa 2 ---------- */}
        {step === 2 && (
          <div>
            <h2 ref={headingRef} tabIndex={-1} className="text-[2rem] leading-tight tracking-[-0.04em] outline-none">
              Conte sobre o seu projeto
            </h2>
            <p className="mt-2 text-fg-2">Quanto mais contexto, melhor a nossa resposta.</p>

            <div className="mt-8 space-y-7">
              <div>
                <label htmlFor={`${uid}-business`} className="font-semibold">
                  Qual é o seu negócio ou segmento?
                </label>
                <input
                  id={`${uid}-business`}
                  data-field="business"
                  className="vds-field mt-2"
                  placeholder="Ex.: clínica odontológica em Campinas"
                  value={data.business}
                  maxLength={LIMITS.business}
                  autoComplete="organization-title"
                  aria-invalid={errors.business ? true : undefined}
                  aria-describedby={errors.business ? errId("business") : undefined}
                  onChange={(e) => set("business", e.target.value)}
                />
                <FieldError id={errId("business")} msg={errors.business} />
              </div>

              <fieldset aria-describedby={errors.goal ? errId("goal") : undefined}>
                <legend className="font-semibold">Qual é o objetivo principal?</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {QUOTE_GOALS.map((g, i) => (
                    <label key={g} className="vds-choice py-3">
                      <input
                        type="radio"
                        name="goal"
                        value={g}
                        data-field={i === 0 ? "goal" : undefined}
                        checked={data.goal === g}
                        onChange={() => set("goal", g)}
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
                <FieldError id={errId("goal")} msg={errors.goal} />
              </fieldset>

              <div>
                <label htmlFor={`${uid}-budget`} className="font-semibold">
                  Quanto pretende investir? <span className="font-normal text-fg-2">(opcional)</span>
                </label>
                <select
                  id={`${uid}-budget`}
                  data-field="budget"
                  className="vds-field mt-2"
                  value={data.budget}
                  aria-invalid={errors.budget ? true : undefined}
                  aria-describedby={`${uid}-budget-hint`}
                  onChange={(e) => set("budget", e.target.value)}
                >
                  <option value="">Selecione uma faixa</option>
                  {QUOTE_BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <p id={`${uid}-budget-hint`} className="mt-2 text-sm text-fg-2">
                  Ajuda a indicar o escopo mais adequado. Não é um preço fechado.
                </p>
              </div>

              <div>
                <label htmlFor={`${uid}-message`} className="font-semibold">
                  Quer contar mais alguma coisa? <span className="font-normal text-fg-2">(opcional)</span>
                </label>
                <textarea
                  id={`${uid}-message`}
                  data-field="message"
                  className="vds-field mt-2 min-h-36 resize-y"
                  placeholder="Ex.: já tenho um site, mas ele não gera contatos. Quero algo mais profissional."
                  value={data.message}
                  maxLength={LIMITS.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? errId("message") : undefined}
                  onChange={(e) => set("message", e.target.value)}
                />
                <FieldError id={errId("message")} msg={errors.message} />
              </div>
            </div>
          </div>
        )}

        {/* ---------- Etapa 3 ---------- */}
        {step === 3 && (
          <div>
            <h2 ref={headingRef} tabIndex={-1} className="text-[2rem] leading-tight tracking-[-0.04em] outline-none">
              Para quem enviamos a resposta?
            </h2>
            <p className="mt-2 text-fg-2">Só usamos estes dados para responder à sua solicitação.</p>

            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor={`${uid}-name`} className="font-semibold">Seu nome</label>
                <input
                  id={`${uid}-name`}
                  data-field="name"
                  className="vds-field mt-2"
                  value={data.name}
                  maxLength={LIMITS.name}
                  autoComplete="name"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? errId("name") : undefined}
                  onChange={(e) => set("name", e.target.value)}
                />
                <FieldError id={errId("name")} msg={errors.name} />
              </div>
              <div>
                <label htmlFor={`${uid}-email`} className="font-semibold">E-mail profissional</label>
                <input
                  id={`${uid}-email`}
                  data-field="email"
                  type="email"
                  inputMode="email"
                  className="vds-field mt-2"
                  value={data.email}
                  maxLength={LIMITS.email}
                  autoComplete="email"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? errId("email") : undefined}
                  onChange={(e) => set("email", e.target.value)}
                />
                <FieldError id={errId("email")} msg={errors.email} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor={`${uid}-company`} className="font-semibold">
                  Empresa <span className="font-normal text-fg-2">(opcional)</span>
                </label>
                <input
                  id={`${uid}-company`}
                  data-field="company"
                  className="vds-field mt-2"
                  value={data.company}
                  maxLength={LIMITS.company}
                  autoComplete="organization"
                  aria-invalid={errors.company ? true : undefined}
                  aria-describedby={errors.company ? errId("company") : undefined}
                  onChange={(e) => set("company", e.target.value)}
                />
                <FieldError id={errId("company")} msg={errors.company} />
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-fg-2">
              Ao enviar, o WhatsApp abre com a sua solicitação pronta. Você
              concorda que a Vetrium use estes dados para responder a ela,
              conforme a{" "}
              <Link href="/privacidade" className="vds-link text-fg" target="_blank">
                política de privacidade
              </Link>
              .
            </p>
          </div>
        )}
      </div>

      {/* ---------- Navegação ---------- */}
      <div className="mt-12 flex flex-col-reverse gap-3 border-t border-fg/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 ? (
          <button type="button" onClick={() => goTo(step - 1)} className="vds-pill vds-pill-ghost" disabled={busy}>
            Voltar
          </button>
        ) : (
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="vds-link inline-flex items-center justify-center gap-2 text-sm text-fg-2 hover:text-fg"
          >
            <IconWhatsapp className="h-4 w-4" />
            Prefiro falar pelo WhatsApp
          </a>
        )}

        <button type="submit" className="vds-pill vds-pill-light pr-5" disabled={busy} aria-disabled={busy}>
          {busy ? (
            <>
              <span className="vds-spinner" aria-hidden />
              Enviando…
            </>
          ) : step < 3 ? (
            <>
              Continuar
              <IconArrow className="h-4 w-4" />
            </>
          ) : (
            <>
              <IconWhatsapp className="h-4 w-4" />
              Enviar pelo WhatsApp
            </>
          )}
        </button>
      </div>
    </form>
  );
}
