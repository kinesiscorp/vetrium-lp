import { QUOTE_BUDGETS, QUOTE_GOALS, QUOTE_SERVICES } from "./content";

/** Dados do formulário de orçamento — compartilhado entre cliente e API. */
export type QuoteInput = {
  services: string[];
  business: string;
  goal: string;
  budget: string;
  message: string;
  name: string;
  email: string;
  company: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

export const EMPTY_QUOTE: QuoteInput = {
  services: [],
  business: "",
  goal: "",
  budget: "",
  message: "",
  name: "",
  email: "",
  company: "",
};

export const LIMITS = { business: 160, message: 2000, name: 120, email: 160, company: 120 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Campos validados por etapa (1, 2, 3). */
export function validateStep(step: number, d: QuoteInput): QuoteErrors {
  const e: QuoteErrors = {};
  if (step === 1) {
    const valid = new Set<string>(QUOTE_SERVICES.map((s) => s.id));
    if (!d.services.length) e.services = "Escolha pelo menos uma opção.";
    else if (d.services.some((s) => !valid.has(s))) e.services = "Opção inválida.";
  }
  if (step === 2) {
    if (d.business.trim().length < 2) e.business = "Conte em poucas palavras qual é o seu negócio.";
    else if (d.business.length > LIMITS.business) e.business = `Use até ${LIMITS.business} caracteres.`;
    if (!(QUOTE_GOALS as readonly string[]).includes(d.goal)) e.goal = "Escolha o objetivo principal.";
    if (d.budget && !(QUOTE_BUDGETS as readonly string[]).includes(d.budget)) e.budget = "Opção inválida.";
    if (d.message.length > LIMITS.message) e.message = `Use até ${LIMITS.message} caracteres.`;
  }
  if (step === 3) {
    if (d.name.trim().length < 2) e.name = "Informe seu nome.";
    else if (d.name.length > LIMITS.name) e.name = "Nome muito longo.";
    if (!EMAIL_RE.test(d.email.trim())) e.email = "Informe um e-mail válido, por exemplo nome@empresa.com.br.";
    else if (d.email.length > LIMITS.email) e.email = "E-mail muito longo.";
    if (d.company.length > LIMITS.company) e.company = "Use até 120 caracteres.";
  }
  return e;
}

export function validateAll(d: QuoteInput): QuoteErrors {
  return { ...validateStep(1, d), ...validateStep(2, d), ...validateStep(3, d) };
}

/** Normaliza um payload desconhecido vindo da rede. */
export function parseQuote(raw: unknown): QuoteInput | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const str = (k: string) => (typeof r[k] === "string" ? (r[k] as string).trim() : "");
  const services = Array.isArray(r.services)
    ? r.services.filter((s): s is string => typeof s === "string").slice(0, 10)
    : [];
  return {
    services,
    business: str("business"),
    goal: str("goal"),
    budget: str("budget"),
    message: str("message"),
    name: str("name"),
    email: str("email").toLowerCase(),
    company: str("company"),
  };
}

export function serviceLabels(ids: string[]) {
  return ids.map((id) => QUOTE_SERVICES.find((s) => s.id === id)?.label ?? id);
}
