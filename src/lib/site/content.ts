/**
 * Conteúdo da landing page da Vetrium — fonte única de copy e dados.
 *
 * Regra da casa: nada aqui é inventado. Projetos, contatos e opções do
 * formulário refletem o que a Vetrium tem hoje; o que depende de confirmação
 * está marcado com TODO(vetrium) e listado no relatório do redesign.
 */

export const SITE = {
  name: "Vetrium",
  url: "https://www.vetrium.space",
  tagline: "Landing pages / UX/UI / SEO / GEO",
  description:
    "A Vetrium cria sites e landing pages que explicam bem o seu negócio, aparecem nas buscas e ajudam o visitante a entrar em contato. Estratégia, design, desenvolvimento, SEO e GEO no mesmo time.",
} as const;

export const CONTACT = {
  // E-mail provisório: a Vetrium ainda não tem e-mail corporativo.
  email: "gabrielcarlos1023@gmail.com",
  whatsappNumber: "5517936309413",
  whatsappDisplay: "(17) 93630-9413",
  whatsappMessage:
    "Olá! Vim pelo site da Vetrium e gostaria de conversar sobre um projeto.",
  area: "Atendimento remoto em todo o Brasil",
} as const;

export const whatsappHref = (message: string = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Dúvidas", href: "/#duvidas" },
] as const;

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

export type Service = { id: string; name: string; line: string };

/** Uma linha por serviço — o detalhe mora nas Dúvidas e na proposta. */
export const SERVICES: Service[] = [
  {
    id: "landing-pages",
    name: "Landing pages",
    line: "Uma página feita para explicar sua oferta e levar o visitante até o contato.",
  },
  {
    id: "design",
    name: "Design e UX/UI",
    line: "Estrutura, wireframe e visual autoral — você aprova antes de programarmos.",
  },
  {
    id: "desenvolvimento",
    name: "Desenvolvimento",
    line: "Site rápido no celular, com formulário ou WhatsApp funcionando.",
  },
  {
    id: "seo-geo",
    name: "SEO e GEO",
    line: "Base para ser encontrado no Google e entendido por IAs como o ChatGPT.",
  },
];

/* ------------------------------------------------------------------ */
/* Projetos                                                            */
/* ------------------------------------------------------------------ */

export type WorkKind = "produto-proprio" | "cliente" | "conceito";

export const WORK_KIND_LABEL: Record<WorkKind, string> = {
  "produto-proprio": "Produto próprio Vetrium",
  cliente: "Projeto de cliente",
  conceito: "Projeto conceitual",
};

export type WorkItem = {
  slug: string;
  name: string;
  kind: WorkKind;
  segment: string;
  goal: string;
  scope: string[];
  image: string;
  imageAlt: string;
  year: string;
  href?: string;
  /** Só preencher com resultado medido, com período e fonte. */
  result?: { value: string; context: string };
};

/**
 * Projetos exibidos na home — escolha do Gabriel (20/10/2026): só o
 * landing de streamer de PUBG (Lynx Platoon, projeto conceitual com marca fictícia) e o Bbr Flow.
 *
 * TODO(vetrium): Respawn (public/portfolio/respawn-paintball.jpg) mostra a
 * marca "Impacto Paintball" — confirmar se é cliente e se há autorização
 * antes de voltar com ele para cá (kind: "cliente").
 */
export const WORK: WorkItem[] = [
  {
    slug: "lynx-platoon",
    name: "Lynx Platoon",
    kind: "conceito",
    segment: "Landing page de curso para jogadores de PUBG",
    goal: "Conceito de landing para streamer que vende curso: leva o visitante ao plano certo e captura quem ainda não decidiu. Marca e dados fictícios.",
    scope: ["Brandkit", "Redesign", "Landing page", "Desenvolvimento"],
    image: "/portfolio/lynx-platoon-case.jpg",
    imageAlt: "Case Lynx Platoon: landing \"From Bronze to Master\" em verde tático, com mira e escudo de rank sobre mapa topográfico",
    year: "2026",
    href: "https://lynx-platoon.vercel.app/",
  },
  {
    slug: "bbrflow",
    name: "Bbrflow",
    kind: "produto-proprio",
    segment: "SaaS para barbearias",
    goal: "Explicar um sistema de gestão para donos de barbearia que não são técnicos e levar ao teste.",
    scope: ["Estratégia", "Landing page", "UX/UI", "Desenvolvimento"],
    image: "/portfolio/bbrflow-case.jpg",
    imageAlt: "Case Bbrflow: \"Agenda, clientes e caixa no automático\", com o painel do app no celular, caderno de agenda e mensagens de WhatsApp",
    year: "2026",
    href: "https://www.bbrflow.com/landingpage",
  },
];

/* ------------------------------------------------------------------ */
/* Como funciona                                                       */
/* ------------------------------------------------------------------ */

export const STEPS = [
  { title: "Conversa", body: "Você conta o que precisa. Entendemos o negócio e o objetivo." },
  { title: "Desenho", body: "Mostramos a estrutura e o visual. Nada avança sem a sua aprovação." },
  { title: "No ar", body: "Programamos, testamos e publicamos. Você recebe o site funcionando." },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ — também alimenta o JSON-LD FAQPage                             */
/* ------------------------------------------------------------------ */

export const FAQ = [
  {
    q: "O que está incluído em uma landing page?",
    a: "Organização do conteúdo, wireframe, design para celular e computador, desenvolvimento, formulário ou botão de WhatsApp, fundamentos de SEO e GEO e publicação. O escopo exato vem na proposta.",
  },
  {
    q: "O que são SEO e GEO?",
    a: "SEO é preparar o site para aparecer no Google: títulos, textos, velocidade e estrutura técnica. GEO é organizar as informações para que ferramentas de IA, como ChatGPT e Gemini, entendam com clareza quem você é e o que oferece.",
  },
  {
    q: "Vocês garantem primeira página no Google?",
    a: "Não, e desconfie de quem garante. Entregamos uma base técnica bem feita; posição no Google e citação em IAs dependem também de concorrência, conteúdo publicado ao longo do tempo e mudanças nesses sistemas.",
  },
  {
    q: "Preciso ter textos e fotos prontos?",
    a: "Não. Ajudamos a organizar a mensagem e dizemos o que falta. Informações do negócio, fotos reais e depoimentos vêm de você — são eles que dão confiança à página.",
  },
  {
    q: "Já tenho um design. Vocês só desenvolvem?",
    a: "Sim. Também fazemos só o planejamento ou só o design, se for o que você precisa.",
  },
  {
    q: "Como começo?",
    a: "Envie o pedido de orçamento (leva uns dois minutos) ou chame no WhatsApp. Respondemos para entender os detalhes e mandamos uma proposta com escopo, etapas e investimento.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Formulário de orçamento                                             */
/* ------------------------------------------------------------------ */

export const QUOTE_SERVICES = [
  { id: "landing-page", label: "Landing page", hint: "Uma página focada em gerar contatos" },
  { id: "site", label: "Site institucional", hint: "Algumas páginas sobre a empresa" },
  { id: "redesign", label: "Redesign", hint: "Melhorar um site que já existe" },
  { id: "design", label: "Wireframe ou UX/UI", hint: "Só o planejamento ou o design" },
  { id: "desenvolvimento", label: "Desenvolvimento", hint: "Já tenho o design pronto" },
  { id: "seo-geo", label: "SEO e GEO", hint: "Ser encontrado em buscas e IAs" },
  { id: "nao-sei", label: "Ainda não sei", hint: "Quero uma orientação" },
] as const;

export const QUOTE_GOALS = [
  "Receber mais contatos e pedidos",
  "Apresentar um serviço ou produto novo",
  "Passar mais credibilidade",
  "Aparecer no Google e em IAs",
  "Substituir um site antigo",
  "Outro",
] as const;

/**
 * Faixas que o cliente usa para dizer quanto pretende investir — não são
 * preços da Vetrium. Campo opcional. Ajuste livremente aqui.
 */
export const QUOTE_BUDGETS = [
  "Até R$ 2.000",
  "R$ 2.000 a R$ 5.000",
  "R$ 5.000 a R$ 10.000",
  "Acima de R$ 10.000",
  "Prefiro conversar",
] as const;
