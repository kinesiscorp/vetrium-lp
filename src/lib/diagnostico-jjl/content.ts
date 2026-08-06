export const META = {
  client: "JJL Serviços",
  site: "jjlservicos.com.br",
  sector: "Empreiteira técnica B2B em São Paulo",
};

export const WHATSAPP_NUMBER = "5511941889077";
export const PROPOSAL_URL = "#";

export type SectionId = "topo" | "substrato" | "achados" | "consolidado" | "perguntas";

export const NAV_SECTIONS: { id: SectionId; label: string }[] = [
  { id: "substrato", label: "O que já funciona" },
  { id: "achados", label: "Achados" },
  { id: "consolidado", label: "Todos os achados" },
  { id: "perguntas", label: "Perguntas" },
];

export type FindingCategory = "visual" | "ux" | "estrategia";

export type Finding = {
  n: string;
  category: FindingCategory;
  title: string;
  body: string;
  img?: string;
};

/** Auditoria a frio: nada foi redesenhado ainda, então não existe "depois"
 *  aqui, só o problema e por que ele custa caro. As capturas foram feitas
 *  em jjlservicos.com.br em 06.08.2026. */
export const FINDINGS: Finding[] = [
  {
    n: "01",
    category: "visual",
    title: "A página de Cursos foi ao ar com o rascunho dentro",
    body: "Ao lado da chamada de inscrição, cinco itens marcados com check dizem apenas “Cursos”. É a única página do site que pede dinheiro direto do bolso de uma pessoa física, e é a que prova que ninguém revisou antes de publicar.",
    img: "/diagnostico-jjl/finding-cursos-placeholder.jpg",
  },
  {
    n: "02",
    category: "visual",
    title: "As fotos reais estão escondidas atrás das compradas",
    body: "A empresa tem acervo próprio: equipe uniformizada, painel elétrico aberto, van adesivada, obra de verdade. A home não usa nenhuma dessas fotos, usa uma mulher de banco de imagens numa sala de reunião, e a mesma foto se repete no S.A.C. e no Contato, exatamente onde a venda seria decidida.",
    img: "/diagnostico-jjl/finding-foto-stock.jpg",
  },
  {
    n: "03",
    category: "visual",
    title: "Metade de dois títulos some dentro do fundo laranja",
    body: "Em Sobre Nós os blocos são “Economia e Segurança” e “Economia e rápida”. A segunda palavra dos dois está num contorno claro que quase desaparece sobre o laranja, então o que se lê de longe é “Economia e” duas vezes.",
    img: "/diagnostico-jjl/finding-titulo-baixo-contraste.jpg",
  },
  {
    n: "04",
    category: "ux",
    title: "O botão de WhatsApp da página de Contato leva pra outro número",
    body: "O bloco de contato mostra um número na tela, mas o link daquele bloco aponta pra um número diferente do que aparece em todos os outros botões do site. Quem clica na página feita pra converter cai num contato diferente do que acabou de ler.",
    img: "/diagnostico-jjl/finding-whatsapp-divergente.jpg",
  },
  {
    n: "05",
    category: "ux",
    title: "O vídeo do topo pesa 24 MB e não tem imagem de reserva",
    body: "O fundo da home é um vídeo de 55 segundos, 1920x1080, 24 MB, sem imagem de reserva enquanto carrega. Em qualquer conexão mais lenta ou celular que bloqueie autoplay, o visitante vê o título branco em cima de um retângulo preto.",
    img: "/diagnostico-jjl/finding-video-nao-carregado.jpg",
  },
  {
    n: "06",
    category: "ux",
    title: "O formulário de reclamação é mais bem feito que o de orçamento",
    body: "O S.A.C. tem campos de obra, cidade, estado e assunto, tudo rotulado em português. O de orçamento aparece em duas versões, uma com rótulos em inglês (“Name”, “Message”), a outra com doze campos sem dizer em quanto tempo o retorno chega, e as duas terminam num botão que diz “Enviar mensagem”, não “Solicitar orçamento”.",
    img: "/diagnostico-jjl/finding-form-orcamento.jpg",
  },
  {
    n: "07",
    category: "ux",
    title: "O link compartilhado no WhatsApp chega como URL crua",
    body: "O site não tem nenhuma tag Open Graph. Colado no WhatsApp, o link aparece sem imagem, sem título e sem descrição. Como todo o funil termina em WhatsApp, e numa obra industrial o link circula entre quem pediu e quem aprova, é o pedaço mais frágil da comunicação bem na mesa de quem decide.",
  },
  {
    n: "08",
    category: "estrategia",
    title: "Os logos passam correndo e nenhum vira projeto",
    body: "Catorze marcas giram sozinhas num carrossel, Bridgestone, Santander, Renner, BTG Pactual. Nenhuma tem nome de obra, foto, escopo ou prazo. O único case do site não nomeia ninguém e vem ilustrado com um aperto de mão de banco de imagens. Num setor onde a compra passa por engenharia e compliance, número sem origem pesa contra.",
    img: "/diagnostico-jjl/finding-logos-sem-case.jpg",
  },
  {
    n: "09",
    category: "estrategia",
    title: "A página Sobre desmente a home",
    body: "A home vende cinco frentes com peso igual. O primeiro parágrafo de Sobre Nós diz que a JJL é reconhecida pela excelência em sistemas de combate a incêndio, e para por aí. Quem entrou procurando painel elétrico ou drenagem lê que a especialidade é outra e passa a duvidar do que a empresa realmente domina.",
    img: "/diagnostico-jjl/finding-sobre-contradiz.jpg",
  },
  {
    n: "10",
    category: "estrategia",
    title: "Curso técnico e obra industrial entram pela mesma porta",
    body: "O curso é pro eletricista que quer se capacitar, a obra é pro gerente de facilities de uma indústria. Os dois dividem o mesmo menu, os mesmos formulários e o mesmo WhatsApp, e a página de cursos ainda manda “verificar quais cursos e datas serão ofertados pelo whats”, sem data, sem preço. Nenhum dos dois públicos recebe uma página que fale a língua dele.",
    img: "/diagnostico-jjl/finding-curso-obra-mesma-porta.jpg",
  },
];

export const MINOR_NOTES = [
  "Ícones de “Sistemas Contra Incêndio” e “Drenagem Profunda” trocados na página Serviços (na home estão certos).",
  "Copyright do rodapé diz “JLL services”, o nome da marca errado no próprio rodapé, em todas as páginas.",
  "Home não tem nenhum h1. O título da aba tem 183 caracteres, e não existe meta description em lugar nenhum.",
  "Página /latest-news/ publicada, vazia, título em inglês, dentro do sitemap, sobra do tema.",
  "Sem política de privacidade nem aviso de LGPD, com formulários coletando nome, e-mail, telefone e CEP.",
  "Cabeçalho não é fixo: numa home com mais de 4000px, o menu some no primeiro scroll e só sobra o balão do WhatsApp.",
];

export const WORKING = [
  {
    title: "A carteira de clientes",
    body: "Bridgestone, Santander, Renner, BTG Pactual, Casas Bahia, Prometeon. É o ativo mais caro que a empresa tem, e nenhum concorrente genérico de instalação industrial em SP consegue copiar. Está mal apresentado, não está errado.",
  },
  {
    title: "O acervo fotográfico próprio",
    body: "Equipe uniformizada com a marca no peito, van adesivada, painel elétrico aberto, vala de drenagem, plataforma elevatória. É material de obra de verdade, bem enquadrado, e é raro um cliente desse porte já ter isso pronto.",
  },
  {
    title: "O logo e o laranja",
    body: "A marca é limpa, o laranja é consistente em todas as páginas e funciona bem em cima do cinza escuro. O sistema de cor não é o problema, o problema é o que está preenchendo ele.",
  },
  {
    title: "A avaliação real no Google",
    body: "4,7 estrelas no embed do mapa, endereço físico com CEP no topo de todas as páginas. Sinal de negócio real, hoje escondido dentro de um iframe no pé de duas páginas.",
  },
  {
    title: "O S.A.C. estruturado",
    body: "Ter canal formal de manifestação com campo de obra é coisa de fornecedor homologado, não de empreiteira pequena. Está na prateleira errada, mas é diferencial.",
  },
];

export const QUESTIONS = [
  "De onde vêm os negócios hoje: indicação, licitação, cadastro de fornecedor, prospecção ativa ou o site? Quanto do faturamento realmente passa pelo site?",
  "Os catorze logos são clientes diretos da JJL ou a JJL entrou como subcontratada de uma construtora? Muda tudo em como se pode nomear.",
  "Existe autorização pra citar nome de cliente e mostrar foto de obra? Contrato com indústria costuma ter cláusula de confidencialidade.",
  "Qual o ticket médio e qual serviço traz mais margem? A home dá peso igual às cinco frentes e provavelmente uma delas paga a conta.",
  "Os números de Sobre Nós (30% em custos de sinistros, 100% de não conformidades) saíram de onde? Dá pra documentar ou saem do site?",
  "Os dois números de WhatsApp são de pessoas diferentes? Quem responde cada um e em quanto tempo?",
  "Para onde vão os envios dos formulários hoje: caixa de e-mail de alguém, CRM, planilha? Alguém confere? Já se perdeu orçamento assim?",
  "Os cursos são negócio de verdade ou teste? Tem turma rodando, calendário, preço, certificação por qual entidade?",
  "Quem é o comprador que vocês querem: gerente de manutenção, engenheiro de facilities, comprador, síndico de condomínio industrial?",
  "Qual o raio de atendimento: São Paulo capital, Grande SP, interior, outros estados? O site não diz, e isso desqualifica lead sozinho.",
  "Existe alguma certificação, ART, CREA, ISO ou homologação de fornecedor que hoje não está no site?",
  "Alguém tem acesso ao Google Analytics ou Search Console? Precisamos ver de onde vem o tráfego antes de priorizar.",
];
