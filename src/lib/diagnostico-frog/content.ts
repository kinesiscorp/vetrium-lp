export const META = {
  old: "esquadraofrog.com",
  new: "nova versão (ainda não publicada)",
};

export const WHATSAPP_NUMBER = "5511941889077";
export const PROPOSAL_URL = "/proposta-comercial/frogman";

export type SectionId = "topo" | "substrato" | "auditoria" | "consolidado" | "proximos";

export const NAV_SECTIONS: { id: SectionId; label: string }[] = [
  { id: "substrato", label: "O que já funciona" },
  { id: "auditoria", label: "Antes e depois" },
  { id: "consolidado", label: "Todos os achados" },
  { id: "proximos", label: "O que falta" },
];

export const CHANNELS = [
  {
    name: "YouTube",
    handle: "@FROGMAN1_",
    stat: "158 mil inscritos",
    note: "Banner já usa a mesma paleta verde/roxo do site, com execução mais limpa: logo bem construído, thumbnails de alto CTR. É o ativo de marca que preservamos no redesign.",
  },
  {
    name: "Instagram",
    handle: "@frogman1_",
    stat: "103 mil seguidores",
    note: "Bio já usa a mesma copy de dor do site. O número diverge do site (400+ lá, 350+ aqui) — não é erro: 400+ já passaram pelo método, ~350 seguem ativos hoje. Os dois números aparecem agora, rotulados.",
  },
] as const;

export type FindingCategory = "visual" | "ux" | "estrategia";
export type FindingStatus = "resolvido" | "parcial";

export type Finding = {
  n: string;
  category: FindingCategory;
  title: string;
  before: string;
  status: FindingStatus;
  fix: string;
  impact: string;
};

export const FINDINGS: Finding[] = [
  {
    n: "01",
    category: "visual",
    title: "Contraste quebrado no headline principal",
    before: "“Do bronze ao mestre” em gradiente marrom/dourado sobre fundo escuro — quase ilegível no primeiro impacto, o pior lugar pra perder legibilidade.",
    status: "resolvido",
    fix: "Headline em branco sólido, com “mestre” destacado no verde da marca. Legível em qualquer luminosidade de tela.",
    impact: "A primeira coisa que o olho encontra agora é a promessa da página, não uma textura.",
  },
  {
    n: "02",
    category: "visual",
    title: "Paleta genérica de comunidade gamer",
    before: "Verde neon sobre roxo é o padrão visual de comunidade gamer desde ~2018 — sem um segundo elemento que diferencie a marca do restante do nicho.",
    status: "parcial",
    fix: "Paleta mantida por equity de marca (é o que seus 158 mil inscritos no YouTube já reconhecem), mas reorganizada com grid consistente, cartões e hierarquia tipográfica própria.",
    impact: "Resolve a confusão visual sem jogar fora o reconhecimento que a marca já constrói fora do site. Um segundo elemento diferenciador segue em aberto — ver próximos passos.",
  },
  {
    n: "03",
    category: "visual",
    title: "Duas fontes competindo sem hierarquia",
    before: "Fonte grunge nos headlines, fonte pixel/mono nos botões, sem hierarquia tipográfica clara guiando o que é título e o que é ação.",
    status: "resolvido",
    fix: "Uma família de display única em todos os títulos, com pesos e tamanhos definindo uma hierarquia clara entre título, rótulo e corpo de texto.",
    impact: "A página para de parecer montada em pedaços — cada bloco de texto agora sabe o que é.",
  },
  {
    n: "04",
    category: "visual",
    title: "CTA sem hierarquia — 5 repetições do mesmo verde",
    before: "O mesmo verde saturado se repete em 5 lugares (3 planos + hero + WhatsApp). Nada se destaca como “a” ação principal.",
    status: "resolvido",
    fix: "Um CTA primário sólido por seção; ações secundárias em contorno, sem competir pela mesma atenção.",
    impact: "Quem chega sabe, em cada tela, qual é o próximo passo — em vez de cinco convites visuais idênticos.",
  },
  {
    n: "05",
    category: "ux",
    title: "Vídeo em autoplay travando a primeira interação",
    before: "Pill “Ativar o Som” cobre o vídeo de fundo e exige uma decisão antes de deixar continuar — fricção alta pra quem abre em ambiente silencioso ou público.",
    status: "resolvido",
    fix: "Vídeo decorativo em loop, mudo por padrão, com um controle discreto de som e tela cheia no canto — sem popup obrigatório.",
    impact: "Ninguém precisa decidir nada pra continuar lendo. O vídeo apoia a página, não interrompe ela.",
  },
  {
    n: "06",
    category: "ux",
    title: "Nenhuma captura de lead",
    before: "Depois do preço, só resta comprar ou sair. Sem e-mail, isca de conteúdo ou qualquer caminho pra quem ainda não decidiu.",
    status: "resolvido",
    fix: "Bloco novo de captura, com isca de conteúdo real (“os 3 erros que travam o diamante”) antes do rodapé.",
    impact: "Quem fecha a aba sem comprar deixa de ser uma visita perdida — vira um contato pra retomar depois.",
  },
  {
    n: "07",
    category: "estrategia",
    title: "Prova social rasa",
    before: "Só prints de conversa no WhatsApp e comentários do Instagram — nenhum dado concreto de evolução de aluno, o gatilho mais forte pra esse público.",
    status: "parcial",
    fix: "Estrutura pronta para caso de aluno: progressão de rank antes/depois, métricas (K/D, dano, tempo até o salto) e linha do tempo de como foi na prática, mais espaço para depoimento em vídeo.",
    impact: "A estrutura já entrega o que mais converte nesse nicho — rank não mente. Os números exibidos hoje são um exemplo de formato, não dados reais: falta você enviar 2 ou 3 casos de aluno pra trocar.",
  },
  {
    n: "08",
    category: "estrategia",
    title: "Selo “Mais indicado” no plano errado",
    before: "O selo aparece no Veterano, o mais caro. Mas ~80% dos alunos assina o Recruta, e você mesmo aponta o Soldado como o de melhor custo-benefício.",
    status: "resolvido",
    fix: "Selo movido para o Soldado, com nota explícita na própria página confirmando que agora é uma recomendação real, não o plano mais caro.",
    impact: "O selo para de empurrar pro plano errado e passa a reforçar a decisão que você mesmo recomendaria.",
  },
  {
    n: "09",
    category: "estrategia",
    title: "Funil não resolve o descompasso aula 1:1 vs. curso",
    before: "A procura de quem chega é por aula individual, que depende da sua agenda. O site não explicava por que o esquadrão resolve o mesmo problema sem esse limite.",
    status: "resolvido",
    fix: "Seção dedicada comparando lado a lado a aula avulsa e o esquadrão, deixando claro pra quem serve cada um.",
    impact: "Quem procura aula individual entende, sem precisar perguntar, por que o esquadrão é a versão que escala do mesmo método.",
  },
];

export type Comparison = {
  id: string;
  n: string;
  tag: string;
  title: string;
  before: { img: string; label: string };
  after: { img: string; label: string };
  findings: string[];
  body: string;
};

export const COMPARISONS: Comparison[] = [
  {
    id: "hero",
    n: "01",
    tag: "Primeiro impacto",
    title: "Hero",
    before: { img: "/diagnostico-frog/hero-antes.jpg", label: "esquadraofrog.com" },
    after: { img: "/diagnostico-frog/hero-depois.jpg", label: "Nova versão" },
    findings: ["01", "03", "04", "05"],
    body: "A tela que decide se alguém continua lendo ou fecha a aba. Contraste, hierarquia de fonte, CTA e o vídeo de fundo — os quatro problemas mais na cara do site — se concentram aqui.",
  },
  {
    id: "resultados",
    n: "02",
    tag: "Prova social",
    title: "Resultados",
    before: { img: "/diagnostico-frog/resultados-antes.jpg", label: "esquadraofrog.com" },
    after: { img: "/diagnostico-frog/resultados-depois.jpg", label: "Nova versão" },
    findings: ["07"],
    body: "De print de conversa pra progressão de rank com data e número do lado — o formato que mais converte pra quem joga PUBG competitivo.",
  },
  {
    id: "precos",
    n: "03",
    tag: "Decisão",
    title: "Preço & encerramento",
    before: { img: "/diagnostico-frog/precos-antes.jpg", label: "esquadraofrog.com" },
    after: { img: "/diagnostico-frog/precos-depois.jpg", label: "Nova versão" },
    findings: ["08"],
    body: "O selo que recomendava o plano mais caro pra maioria agora recomenda o que o próprio Frog considera o melhor custo-benefício — e a página explica por quê.",
  },
];

export const NEXT_STEPS = [
  "Manda 2 ou 3 casos de aluno com rank antes/depois — é o que falta pra trocar o exemplo de formato por dados reais na prova social.",
  "Confirma se topa manter a paleta verde/roxo (recomendamos).",
  "Diz pra gente onde o lead capturado deve cair — e-mail, CRM ou até uma planilha — pra ligar o formulário a um destino de verdade.",
  "Confirma as respostas do FAQ sobre cancelamento e prazo de acesso, pra bater com o que já está configurado na Kiwify.",
];
