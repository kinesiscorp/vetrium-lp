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
  // TODO(vetrium): confirmar que a caixa contato@vetrium.com.br recebe e-mail
  // (o domínio do site é vetrium.space).
  email: "contato@vetrium.com.br",
  whatsappNumber: "5511941889077",
  whatsappDisplay: "(11) 94188-9077",
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
  { label: "SEO e GEO", href: "/#busca" },
  { label: "Dúvidas", href: "/#duvidas" },
] as const;

/* ------------------------------------------------------------------ */
/* Proposta de valor                                                   */
/* ------------------------------------------------------------------ */

export const PILLARS = [
  {
    n: "01",
    title: "Estratégia antes da estética",
    body: "Antes de desenhar, entendemos o que o site precisa fazer pelo seu negócio: quem você quer atrair, o que essa pessoa precisa saber e qual é o próximo passo dela.",
    outcome: "Uma página com um objetivo claro, não uma vitrine genérica.",
  },
  {
    n: "02",
    title: "Design pensado para quem visita",
    body: "Organizamos a informação na ordem em que o visitante tem dúvidas. O visual é autoral, mas cada bloco existe para explicar, gerar confiança ou facilitar o contato.",
    outcome: "Menos gente perdida, mais gente chegando ao botão de contato.",
  },
  {
    n: "03",
    title: "Estrutura para ser encontrado",
    body: "O código, os títulos e o conteúdo são preparados para que o Google e as ferramentas de IA consigam entender quem você é e o que você oferece.",
    outcome: "Uma base técnica sólida para a descoberta orgânica crescer.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  name: string;
  summary: string;
  delivers: string;
  solves: string;
  when: string;
  connects: string;
};

/** O carro-chefe ganha destaque próprio; o resto vem agrupado por etapa. */
export const FEATURED_SERVICE: Service = {
  id: "landing-pages",
  name: "Landing pages",
  summary:
    "Uma página focada em um único objetivo: fazer o visitante entender sua oferta e entrar em contato.",
  delivers:
    "Página completa — estratégia, texto organizado, design, desenvolvimento e publicação — com formulário ou botão de WhatsApp funcionando.",
  solves:
    "Sites confusos, lentos ou genéricos que recebem visitas mas não geram conversas.",
  when: "Para lançar um serviço, divulgar um produto, receber tráfego de anúncios ou substituir um site que não funciona mais.",
  connects:
    "Reúne todos os outros serviços abaixo em uma entrega só.",
};

export const SERVICE_GROUPS: { label: string; verb: string; services: Service[] }[] = [
  {
    label: "Planejar",
    verb: "Antes do visual",
    services: [
      {
        id: "wireframes",
        name: "Wireframes e arquitetura da informação",
        summary: "O esqueleto da página, antes das cores e imagens.",
        delivers:
          "Mapa das seções, ordem do conteúdo e rascunhos de cada tela, para aprovar a estrutura antes do design.",
        solves: "Retrabalho e páginas onde a informação importante fica escondida.",
        when: "Quando o projeto tem muito conteúdo ou quando você quer validar a ideia com rapidez.",
        connects: "É a base do design visual e do desenvolvimento.",
      },
    ],
  },
  {
    label: "Desenhar",
    verb: "Como o site parece e funciona",
    services: [
      {
        id: "ux-ui",
        name: "UX/UI e design visual",
        summary: "A interface final, com identidade própria.",
        delivers:
          "Layout completo para celular e computador, com tipografia, cores, componentes e estados de interação definidos.",
        solves: "Aparência amadora ou de template, que reduz a confiança de quem visita.",
        when: "Quando sua marca precisa transmitir a qualidade real do seu trabalho.",
        connects: "Parte do wireframe e vira o guia do desenvolvimento.",
      },
    ],
  },
  {
    label: "Construir",
    verb: "Do design ao ar",
    services: [
      {
        id: "desenvolvimento",
        name: "Desenvolvimento web",
        summary: "O site programado, rápido e pronto para publicar.",
        delivers:
          "Código moderno, responsivo e acessível, com formulários e integrações configurados e publicação no seu domínio.",
        solves: "Sites lentos, quebrados no celular ou difíceis de manter.",
        when: "Quando o design está pronto — nosso ou da sua equipe — e precisa virar um site de verdade.",
        connects: "Implementa o design e aplica os fundamentos de SEO e GEO.",
      },
    ],
  },
  {
    label: "Ser encontrado",
    verb: "Depois de publicar",
    services: [
      {
        id: "seo",
        name: "SEO",
        summary: "Otimização para mecanismos de busca como o Google.",
        delivers:
          "Estrutura de títulos, metadados, dados estruturados, desempenho técnico e orientação de conteúdo.",
        solves: "Páginas que o Google não entende bem ou que demoram para carregar.",
        when: "Quando você quer que clientes encontrem seu negócio pesquisando, não só por anúncio.",
        connects: "Funciona melhor quando planejado junto com o conteúdo e o código.",
      },
      {
        id: "geo",
        name: "GEO",
        summary: "Conteúdo organizado para ferramentas de IA, como ChatGPT e Gemini.",
        delivers:
          "Respostas diretas às perguntas do seu público, informações consistentes sobre a empresa e uma estrutura fácil de interpretar.",
        solves: "Informações vagas ou espalhadas, que dificultam a compreensão por sistemas de IA.",
        when: "Quando seu público já pesquisa conversando com assistentes de IA.",
        connects: "Usa a mesma base do SEO, com foco em clareza e contexto.",
      },
    ],
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
 * Projetos exibidos na home. Os nomes antigos do portfólio que vieram do
 * template (Master Crypto, Achievo, Memory it, Cycleit, Gatômetro, Layerio)
 * ficaram de fora até alguém confirmar que são trabalhos reais.
 *
 * TODO(vetrium): Respawn (public/portfolio/respawn-paintball.jpg) mostra a
 * marca "Impacto Paintball" — confirmar se é cliente e se há autorização
 * antes de voltar com ele para cá (kind: "cliente").
 */
export const WORK: WorkItem[] = [
  {
    slug: "bbrflow",
    name: "Bbr Flow",
    kind: "produto-proprio",
    segment: "SaaS para barbearias",
    goal: "Explicar um sistema de gestão para donos de barbearia que não são técnicos e levar ao teste.",
    scope: ["Estratégia", "Landing page", "UX/UI", "Desenvolvimento"],
    image: "/portfolio/bbrflow.png",
    imageAlt: "Landing page do Bbr Flow, sistema de agenda e gestão para barbearias",
    year: "2026",
    href: "https://kinesiscorp.github.io/barberflow-lp/",
  },
  {
    slug: "flow-pedidos",
    name: "Flow Pedidos",
    kind: "produto-proprio",
    segment: "Pedidos online para alimentação",
    goal: "Apresentar um app de pedidos white-label para pequenos negócios de comida.",
    scope: ["Produto", "Landing page", "Desenvolvimento"],
    image: "/portfolio/salgados-flow-lp.png",
    imageAlt: "Landing page do Flow Pedidos, app de pedidos online para negócios de alimentação",
    year: "2026",
    href: "https://kinesiscorp.github.io/salgados-flow-lp/",
  },
  {
    slug: "ironstreak",
    name: "IronStreak",
    kind: "produto-proprio",
    segment: "App de treino",
    goal: "Lançar um app de treino com gamificação e uma página que explica o produto em segundos.",
    scope: ["Produto", "UX/UI", "PWA", "Landing page"],
    image: "/portfolio/ironstreak.png",
    imageAlt: "Telas e landing page do IronStreak, app de treino com sequências e conquistas",
    year: "2026",
    href: "https://kinesiscorp.github.io/ironstreak-lp/",
  },
];

/* ------------------------------------------------------------------ */
/* Processo                                                            */
/* ------------------------------------------------------------------ */

export const STEPS = [
  {
    n: "01",
    title: "Diagnóstico e objetivos",
    body: "Uma conversa para entender seu negócio, seu público e o que o site precisa resolver.",
    output: "Objetivo e escopo definidos",
  },
  {
    n: "02",
    title: "Estratégia e arquitetura",
    body: "Definimos a mensagem principal, as seções e a ordem em que a informação aparece.",
    output: "Mapa do conteúdo",
  },
  {
    n: "03",
    title: "Wireframe e experiência",
    body: "Desenhamos o esqueleto da página para você aprovar a estrutura antes do visual.",
    output: "Wireframe aprovado",
  },
  {
    n: "04",
    title: "Direção visual e interface",
    body: "Aplicamos identidade, imagens e tipografia, no celular e no computador.",
    output: "Design final",
  },
  {
    n: "05",
    title: "Desenvolvimento e otimização",
    body: "Programamos o site com foco em velocidade, acessibilidade, SEO e GEO.",
    output: "Site testado",
  },
  {
    n: "06",
    title: "Publicação e evolução",
    body: "Colocamos no ar, conferimos tudo e indicamos os próximos ajustes com base no uso real.",
    output: "Site no ar",
  },
] as const;

/* ------------------------------------------------------------------ */
/* SEO e GEO                                                           */
/* ------------------------------------------------------------------ */

export const SEO_POINTS = [
  ["Rastreamento e indexação", "O Google consegue acessar e registrar todas as páginas importantes."],
  ["Estrutura semântica", "Títulos e seções em ordem lógica, que fazem sentido para pessoas e robôs."],
  ["Metadados", "Título e descrição de cada página escritos para quem pesquisa."],
  ["Links internos", "Caminhos claros entre as páginas, com textos que dizem para onde levam."],
  ["Conteúdo útil", "Textos que respondem ao que o seu cliente realmente procura."],
  ["Desempenho técnico", "Páginas leves, que abrem rápido no celular."],
] as const;

export const GEO_POINTS = [
  ["Conteúdo claro", "Frases diretas e bem organizadas, fáceis de resumir."],
  ["Entidades e contexto", "Quem é a empresa, o que faz e para quem, dito de forma explícita."],
  ["Respostas diretas", "Perguntas frequentes respondidas sem rodeios."],
  ["Informação consistente", "Os mesmos dados em todo lugar, verificáveis."],
  ["Estrutura legível", "Marcação que ajuda sistemas de IA a interpretar a página."],
] as const;

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export const STANDARDS = [
  {
    title: "Estratégia ligada ao seu objetivo comercial",
    body: "Cada página começa por uma pergunta: o que o visitante precisa fazer aqui? O resto é decidido a partir disso.",
  },
  {
    title: "Design feito para o seu contexto",
    body: "Não usamos templates prontos. Layout, imagens e textos são definidos para o seu negócio e o seu público.",
  },
  {
    title: "Hierarquia clara da informação",
    body: "O visitante entende o que você faz em poucos segundos e encontra o botão de contato sem procurar.",
  },
  {
    title: "Implementação técnica cuidadosa",
    body: "Código próprio, responsivo e acessível — sem uma pilha de plugins deixando o site lento.",
  },
  {
    title: "SEO e GEO desde o início",
    body: "A base para ser encontrado é construída junto com o site, não adicionada depois.",
  },
  {
    title: "Processo e entregáveis definidos",
    body: "Você sabe em que etapa o projeto está e o que vai receber em cada uma.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQ = [
  {
    q: "O que está incluído em uma landing page?",
    a: "Diagnóstico do objetivo, organização do conteúdo, wireframe, design para celular e computador, desenvolvimento, configuração do formulário ou botão de WhatsApp, fundamentos de SEO e GEO e publicação. O escopo exato é confirmado na proposta, conforme o tamanho do projeto.",
  },
  {
    q: "A Vetrium também desenvolve o site?",
    a: "Sim. O mesmo time que planeja e desenha também programa e publica. Se você já tem um design pronto, também podemos apenas desenvolver.",
  },
  {
    q: "Qual é a diferença entre wireframe e design final?",
    a: "O wireframe é o esqueleto: mostra quais seções existem e em que ordem, sem cores nem imagens. O design final é a versão visual completa, pronta para ser programada. Aprovar o wireframe primeiro evita retrabalho.",
  },
  {
    q: "Como SEO e GEO são considerados no projeto?",
    a: "Desde o início: a estrutura de títulos, o texto, os metadados, os dados estruturados e o desempenho são pensados junto com o design. Isso cria uma boa base, mas posições no Google e citações em ferramentas de IA dependem também de concorrência, conteúdo, autoridade e de mudanças nesses sistemas — por isso não prometemos resultados específicos.",
  },
  {
    q: "Preciso ter textos e imagens prontos?",
    a: "Não. Ajudamos a organizar a mensagem e indicamos o que falta. Informações sobre o seu negócio, fotos reais e depoimentos de clientes vêm de você, porque são eles que tornam a página confiável.",
  },
  {
    q: "Como funciona o início de um projeto?",
    a: "Você envia uma solicitação de orçamento contando o que precisa. Analisamos, conversamos para entender os detalhes e enviamos uma proposta com escopo, etapas e investimento.",
  },
  {
    q: "Como solicitar uma proposta?",
    a: "Pelo formulário de orçamento, que leva cerca de dois minutos, ou pelo WhatsApp. As duas formas chegam diretamente ao time da Vetrium.",
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
