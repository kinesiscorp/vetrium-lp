export const META = {
  client: "JJL Serviços",
  site: "jjlservicos.com.br",
  date: "06.08.2026",
  validity: "15 dias corridos",
};

/** wa.me só aceita dígitos (código do país + DDD + número). */
export const WHATSAPP_NUMBER = "5511941889077";

export const DIAGNOSTIC_URL = "/diagnostico/jjlservicos";

export type SectionId =
  | "capa"
  | "diagnostico"
  | "objetivo"
  | "escopo"
  | "quem-faz"
  | "investimento"
  | "pagamento"
  | "prazos"
  | "perguntas"
  | "fora-do-escopo"
  | "fechamento";

export const NAV_SECTIONS: { id: SectionId; label: string }[] = [
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "objetivo", label: "Objetivo" },
  { id: "escopo", label: "Escopo" },
  { id: "quem-faz", label: "Quem faz" },
  { id: "investimento", label: "Investimento" },
  { id: "pagamento", label: "Pagamento" },
  { id: "prazos", label: "Prazos" },
  { id: "perguntas", label: "Perguntas" },
  { id: "fora-do-escopo", label: "Fora do escopo" },
  { id: "fechamento", label: "Próximo passo" },
];

/** Recorte de 4 achados do diagnóstico completo (10 achados), só pra dar
 *  gosto de quem ainda não abriu o raio-x. */
export const FINDINGS = [
  {
    n: "01",
    title: "As fotos reais estão escondidas atrás das compradas",
    body: "Vocês têm acervo próprio: equipe uniformizada, obra de verdade, van adesivada. A home usa foto de banco de imagens, e a mesma se repete no S.A.C. e no Contato, exatamente onde a venda seria decidida.",
  },
  {
    n: "02",
    title: "O botão de WhatsApp do Contato leva pra outro número",
    body: "O bloco de contato mostra um número na tela, mas o link aponta pra outro, diferente do que está em todos os outros botões do site. Quem clica na página feita pra converter cai num contato errado.",
  },
  {
    n: "03",
    title: "Os logos passam correndo e nenhum vira projeto",
    body: "Catorze marcas grandes giram num carrossel, e nenhuma tem nome de obra, foto ou escopo. Num setor onde a compra passa por engenharia e compliance, número sem origem pesa contra, não a favor.",
  },
  {
    n: "04",
    title: "Curso técnico e obra industrial entram pela mesma porta",
    body: "O eletricista que quer se capacitar e o gerente de facilities de uma indústria caem no mesmo menu, mesmo formulário, mesmo WhatsApp. Nenhum dos dois recebe uma página que fale a língua dele.",
  },
];

export const TARGETS = [
  {
    tag: "Alvo 01",
    title: "Confiança institucional",
    body: "Prova social nomeada e verificável, não um carrossel anônimo de logo.",
  },
  {
    tag: "Alvo 02",
    title: "Funil por público",
    body: "Obra industrial (B2B) e curso técnico (B2C) deixam de dividir menu, formulário e WhatsApp.",
  },
];

export const SCOPE_ROWS: { label: string; prototipo: boolean; funcional: boolean }[] = [
  { label: "Estratégia e arquitetura da página", prototipo: true, funcional: true },
  { label: "Wireframe", prototipo: true, funcional: true },
  { label: "Design desktop e mobile", prototipo: true, funcional: true },
  { label: "Protótipo navegável no Figma", prototipo: true, funcional: true },
  { label: "Organização dos componentes", prototipo: true, funcional: true },
  { label: "Arquivos preparados para desenvolvimento", prototipo: true, funcional: true },
  { label: "Desenvolvimento responsivo", prototipo: false, funcional: true },
  { label: "Animações previstas no projeto", prototipo: false, funcional: true },
  { label: "Formulários e botões implementados", prototipo: false, funcional: true },
  { label: "Integração com WhatsApp e e-mail de contato", prototipo: false, funcional: true },
  { label: "Testes básicos", prototipo: false, funcional: true },
  { label: "Publicação no ambiente acordado", prototipo: false, funcional: true },
];

export const CASES = [
  {
    name: "Memoryiit",
    kicker: "Redesign de produto e landing page",
    img: "/brand-frog/case-memoryiit.jpg",
  },
  {
    name: "Drawincad Studio",
    kicker: "Site de estúdio de arquitetura 3D",
    img: "/brand-frog/case-drawincad.jpg",
  },
  {
    name: "Startruck",
    kicker: "App e landing page de logística para mudanças",
    img: "/brand-frog/case-startruck.jpg",
  },
];

export type PlanId = "prototipo" | "funcional";

export const PLANS: Record<
  PlanId,
  {
    id: PlanId;
    name: string;
    badge?: string;
    tablePrice: number;
    price: number;
    avistaPrice: number;
    savingsPct: number;
    desc: string;
    features: string[];
    foot: string;
    deadline: string;
  }
> = {
  prototipo: {
    id: "prototipo",
    name: "Protótipo estratégico",
    tablePrice: 4200,
    price: 3500,
    avistaPrice: 3250,
    savingsPct: 17,
    desc: "A página inteira desenhada, navegável e pronta para desenvolvimento, por vocês ou por quem você quiser.",
    features: [
      "Estratégia, arquitetura e wireframe",
      "Design desktop e mobile",
      "Protótipo navegável no Figma",
      "Componentes organizados para entrega",
    ],
    foot: "Não inclui desenvolvimento, publicação, domínio, hospedagem ou integrações.",
    deadline: "até 12 dias úteis",
  },
  funcional: {
    id: "funcional",
    name: "Landing page funcional",
    badge: "Recomendado",
    tablePrice: 5500,
    price: 4700,
    avistaPrice: 4370,
    savingsPct: 15,
    desc: "Tudo do protótipo, construído, testado e no ar. É o pacote que entrega o objetivo desta proposta.",
    features: [
      "Tudo do pacote protótipo",
      "Desenvolvimento responsivo e animações",
      "Formulários, botões e integração com WhatsApp e e-mail",
      "Testes básicos e publicação",
    ],
    foot: "Valor de projeto inicial, condicionado ao uso do trabalho como case da Vetrium.",
    deadline: "até 20 dias úteis",
  },
};

export type PaymentMode = "parcelado" | "avista";

export const TIMELINE = [
  {
    n: 1,
    key: true,
    client: false,
    who: "Início",
    title: "Aceite da proposta",
    body: "Entrada de 50%, briefing fechado e recebimento dos conteúdos, imagens e acessos. O prazo só começa a contar aqui.",
  },
  {
    n: 2,
    key: false,
    client: true,
    who: "Com você · 3 dias úteis por rodada",
    title: "Aprovação e rodadas de revisão",
    body: "Você navega no que já está construído e devolve um conjunto consolidado de ajustes. São duas rodadas inclusas. Passou de 3 dias úteis, o cronograma fica suspenso até o retorno.",
  },
  {
    n: 3,
    key: false,
    client: false,
    who: "Vetrium",
    title: "Produção",
    body: "Design e desenvolvimento das telas aprovadas, conteúdo real no lugar dos exemplos, integração com WhatsApp e formulários, e testes.",
  },
  {
    n: 4,
    key: true,
    client: false,
    who: "Entrega",
    title: "Protótipo em até 12 dias úteis · Funcional em até 20",
    body: "Saldo de 50%, publicação e transferência de arquivos e acessos. Os dias que você usa pra aprovar não consomem o prazo produtivo da equipe.",
  },
];

export const RULES = [
  {
    term: "O que é uma revisão",
    detail:
      "Um conjunto consolidado de solicitações enviado após a apresentação da etapa. Duas rodadas inclusas.",
  },
  {
    term: "O que não é revisão",
    detail:
      "Mudança de direção em etapa já aprovada, nova seção ou alteração de escopo. Uma revisão corrige a solução; ela não reinicia o projeto.",
  },
  {
    term: "Rodadas extras",
    detail: "Bloco de 5 horas por R$ 450, ou R$ 100 por hora avulsa.",
  },
  {
    term: "Validade da proposta",
    detail: "15 dias corridos a partir do envio. Depois disso, valores, disponibilidade e cronograma podem ser revistos.",
  },
];

export const FAQ = [
  {
    q: "E se eu não gostar do resultado?",
    a: "Você aprova cada etapa antes do saldo de 50%, e nada vai ao ar sem o seu aval. As duas rodadas de revisão inclusas servem exatamente pra isso.",
  },
  {
    q: "Vou precisar mexer no WhatsApp ou nos formulários atuais?",
    a: "Não. Os números e e-mails de contato continuam os mesmos, só muda o caminho até eles, e a divergência entre o número mostrado e o número do link é corrigida.",
  },
  {
    q: "E o meu domínio atual, jjlservicos.com.br?",
    a: "Continua o seu. Apontamos o domínio para o novo site na publicação, sem trocar nada que o seu público já conhece.",
  },
  {
    q: "Depois de pronto, fico dependente de vocês?",
    a: "Não. Arquivos e acessos são transferidos na entrega. O site é seu, e qualquer desenvolvedor consegue tocar dali em diante.",
  },
  {
    q: "E se eu só quiser o design?",
    a: "É o pacote protótipo. Você recebe tudo desenhado e organizado no Figma, e leva para quem quiser desenvolver.",
  },
  {
    q: "Preciso mandar conteúdo?",
    a: "Sim. Além das fotos e vídeos reais de obra que vocês já têm, precisamos das respostas das perguntas em aberto do diagnóstico, principalmente de onde vêm os leads hoje e se dá pra nomear os clientes da carteira. É a parte que mais atrasa projeto, então quanto antes, melhor.",
  },
];

export const EXCLUSIONS = [
  "Manutenção e suporte contínuo",
  "Atualização de conteúdo após a entrega",
  "Criação de novas seções",
  "Acompanhamento de métricas",
  "Produção de vídeo e fotografia",
  "Redesign de logotipo ou brand kit",
  "Gestão de tráfego",
  "Criação do conteúdo do material de captura",
];
