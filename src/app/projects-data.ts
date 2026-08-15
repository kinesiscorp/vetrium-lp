export type Project = {
  slug: string;
  name: string;
  description: string;
  category: "App" | "Web" | "Landing Page";
  year: string;
  image: string;
  /** Link opcional para o projeto ao vivo (LP, app, etc.). */
  href?: string;
  /** Marca os projetos do ecossistema VeTrium (BarberFlow, Salgados, IronStreak). */
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "ironstreak",
    name: "IronStreak",
    description:
      "App PWA de treino com gamificação: streaks, XP, conquistas e PRs — com landing page própria.",
    category: "App",
    year: "2026",
    image: "/portfolio/ironstreak.png",
    href: "/portfolio/ironstreak",
    featured: true,
  },
  {
    slug: "bbrflow",
    name: "Bbr Flow",
    description:
      "Landing page de SaaS de gestão para barbearias — agenda, agendamento público e financeiro num só lugar.",
    category: "Landing Page",
    year: "2026",
    image: "/portfolio/bbrflow.jpg",
    href: "/portfolio/bbrflow",
    featured: true,
  },
  {
    slug: "flow-pedidos",
    name: "Flow Pedidos",
    description:
      "App white-label de pedidos online para pequenos negócios de alimentação — com landing page própria.",
    category: "App",
    year: "2026",
    image: "/portfolio/salgados-flow.jpg",
    href: "/portfolio/salgados-flow",
    featured: true,
  },
  {
    slug: "master-crypto",
    name: "Master Crypto®",
    description: "Marketplace de NFTs com identidade vibrante e ilustração 3D própria.",
    category: "Web",
    year: "2024",
    image: "/portfolio/master-crypto-cover.png",
  },
  {
    slug: "achievo",
    name: "Achievo",
    description: "Plataforma de carreira e produtividade com relatórios semanais.",
    category: "App",
    year: "2024",
    image: "/portfolio/achievo-app.png",
  },
  {
    slug: "memory-it",
    name: "Memory it",
    description: "App de galeria de memórias para casais, com armazenamento em nuvem.",
    category: "App",
    year: "2025",
    image: "/portfolio/memoryiit-cover.png",
  },
  {
    slug: "cycleit",
    name: "Cycleit",
    description: "Marketplace de economia circular — revenda e reuso de eletrônicos.",
    category: "App",
    year: "2024",
    image: "/portfolio/cycleit.png",
  },
  {
    slug: "gatometro",
    name: "Gatômetro",
    description: "Redesign de landing page para comparador de preços de combustível.",
    category: "Landing Page",
    year: "2024",
    image: "/portfolio/gatometro.png",
  },
  {
    slug: "layerio",
    name: "Layerio",
    description: "Landing page de SaaS de produtividade, do wireframe ao hi-fi.",
    category: "Landing Page",
    year: "2024",
    image: "/portfolio/kabra-layerio.png",
  },
  {
    slug: "respawn-paintball",
    name: "Respawn",
    description: "App de agendamento para arena de paintball, do primeiro clique à reserva.",
    category: "App",
    year: "2025",
    image: "/portfolio/respawn-paintball.jpg",
  },
];

export const CATEGORIES = ["Todos", "App", "Web", "Landing Page"] as const;
