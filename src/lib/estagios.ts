import type { EstagioFunil } from "@/generated/prisma/enums";

export const ESTAGIOS: EstagioFunil[] = [
  "LEAD",
  "CONTATO",
  "PROPOSTA",
  "NEGOCIACAO",
  "FECHADO",
  "PERDIDO",
];

export const ESTAGIO_LABEL: Record<EstagioFunil, string> = {
  LEAD: "Lead",
  CONTATO: "Contato",
  PROPOSTA: "Proposta",
  NEGOCIACAO: "Negociação",
  FECHADO: "Fechado",
  PERDIDO: "Perdido",
};
