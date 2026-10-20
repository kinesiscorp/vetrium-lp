/**
 * Eventos de analytics do funil de orçamento.
 *
 * Nenhuma ferramenta está configurada hoje. Esta função só repassa o evento
 * se encontrar uma instalada na página (Google Tag Manager/GA4 via
 * dataLayer/gtag, ou Plausible) — sem nada instalado, não faz nada.
 * Para ativar, basta incluir o script da ferramenta no layout.
 */
export type QuoteEvent =
  | "quote_start"
  | "quote_step"
  | "quote_submit"
  | "quote_success"
  | "quote_error";

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
};

export function track(event: QuoteEvent, props: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  try {
    if (w.gtag) w.gtag("event", event, props);
    else if (w.dataLayer) w.dataLayer.push({ event, ...props });
    if (w.plausible) w.plausible(event, { props });
  } catch {
    // Analytics nunca pode quebrar o formulário.
  }
}
