export const META = {
  client: "Esquadrão do Frog",
  contact: "Lucas Marques · Frogman1",
  date: "04.08.2026",
  validity: "15 dias corridos",
};

/** wa.me só aceita dígitos (código do país + DDD + número). */
export const WHATSAPP_NUMBER = "5511941889077";

export const DEMO_URL = "/diagnostico/frogman";

export type SectionId =
  | "capa"
  | "diagnostico"
  | "custo"
  | "objetivo"
  | "demonstracao"
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
  { id: "custo", label: "O custo disso" },
  { id: "objetivo", label: "Objetivo" },
  { id: "demonstracao", label: "Demonstração" },
  { id: "escopo", label: "Escopo" },
  { id: "quem-faz", label: "Quem faz" },
  { id: "investimento", label: "Investimento" },
  { id: "pagamento", label: "Pagamento" },
  { id: "prazos", label: "Prazos" },
  { id: "perguntas", label: "Perguntas" },
  { id: "fora-do-escopo", label: "Fora do escopo" },
  { id: "fechamento", label: "Próximo passo" },
];

export const FINDINGS = [
  {
    n: "01",
    title: "As cores brigam entre si",
    body: "Gradiente marrom no headline, verde neon nos botões, roxo no fundo. Três direções competindo na mesma tela, sem hierarquia definindo onde olhar primeiro.",
  },
  {
    n: "02",
    title: "O site não pede contato em nenhum ponto",
    body: "Não tem campo de e-mail nem material para baixar. Quem entra, vê o preço e quer pensar antes de decidir, fecha a aba. Depois disso não existe como retomar o assunto com essa pessoa.",
  },
  {
    n: "03",
    title: "O selo “mais escolhido” está no plano errado",
    body: "Ele aparece no Veterano, o mais caro. Mas 80% dos alunos assinam o Recruta, e você mesmo aponta o Soldado como o que entrega mais pela maioria.",
  },
  {
    n: "04",
    title: "O funil empurra para o que não escala",
    body: "A procura hoje é por aula individual, que depende da sua agenda. O site não explica por que o esquadrão resolve o mesmo problema sem esse limite.",
  },
];

/** Números-base da calculadora de payback — vieram do próprio Frog. */
export const COST = {
  activeStudents: 350,
  recrutaShare: 0.8,
  recrutaPrice: 120,
  soldadoPrice: 249,
  defaultMigration: 10,
  minMigration: 1,
  maxMigration: 40,
};

export const TARGETS = [
  {
    tag: "Alvo 01",
    title: "Captura de lead",
    body: "Ninguém que visita e não compra na hora sai sem deixar contato.",
  },
  {
    tag: "Alvo 02",
    title: "Conversão pro plano certo",
    body: "Novos alunos direcionados pro Soldado, não pro Recruta por omissão.",
  },
];

export const DEMO_COPY =
  "Antes de pedir qualquer coisa, construímos a página. Hero com o seu vídeo ao fundo, comparativo entre aula e esquadrão, painel de evolução de rank, seção do mentor, prova social, planos reestruturados, captura de lead e FAQ. Tudo funcionando, no seu verde, com o seu logotipo. Preparamos um raio-x comparando cada uma dessas mudanças com o site atual, pra você ver o antes e o depois sem precisar navegar na versão completa antes de aprovar.";

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
  { label: "Integração com o checkout já existente", prototipo: false, funcional: true },
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
    deadline: "até 10 dias úteis",
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
      "Formulários, botões e integração com o checkout",
      "Testes básicos e publicação",
    ],
    foot: "Valor de projeto inicial, condicionado ao uso do trabalho como case da Vetrium.",
    deadline: "até 15 dias úteis",
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
    body: "Entrada de 40%, briefing fechado e recebimento dos conteúdos, imagens e acessos. O prazo só começa a contar aqui.",
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
    body: "Ajustes aprovados aplicados, conteúdo real no lugar dos exemplos, integração do checkout e testes.",
  },
  {
    n: 4,
    key: true,
    client: false,
    who: "Entrega",
    title: "Protótipo em até 10 dias úteis · Funcional em até 15",
    body: "Saldo de 60%, publicação e transferência de arquivos e acessos. Os dias que você usa pra aprovar não consomem o prazo produtivo da equipe.",
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
    a: "Você aprova antes do saldo de 60%, e nada vai ao ar sem o seu aval. E diferente do normal, aqui você não está comprando uma promessa: a página já existe e você navega nela antes de pagar qualquer coisa.",
  },
  {
    q: "Vou precisar mexer na Kiwify?",
    a: "Não. O checkout continua exatamente o mesmo. O que muda é o caminho que a pessoa percorre até chegar nele.",
  },
  {
    q: "E o meu endereço atual, esquadraofrog.com?",
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
    a: "Sim, e é a parte que mais atrasa projeto. Precisamos de dois ou três casos de aluno com rank antes e depois, um depoimento e os links de checkout. O resto é com a gente.",
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
