export type Project = {
  slug: string;
  name: string;
  description: string;
  category: "App" | "Web" | "Landing Page";
  year: string;
  image: string;
};

export const PROJECTS: Project[] = [
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
];

export const CATEGORIES = ["Todos", "App", "Web", "Landing Page"] as const;
