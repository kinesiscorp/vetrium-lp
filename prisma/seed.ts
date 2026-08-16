import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";

import { PrismaClient } from "../src/generated/prisma/client";
import type { EstagioFunil } from "../src/generated/prisma/enums";

// Cliente próprio (não reaproveita src/lib/db.ts) porque o container de produção
// só carrega prisma/ + src/generated/ - ver Dockerfile.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function seedAdmin() {
  const email = "admin@vetrium.com.br";
  const existente = await prisma.user.findUnique({ where: { email } });
  if (existente) {
    console.log(`  ok       usuário admin já existe (${email})`);
    return;
  }

  const senhaTemporaria = randomBytes(9).toString("base64url");
  const passwordHash = await bcrypt.hash(senhaTemporaria, 10);

  await prisma.user.create({
    data: { email, name: "Vetrium Admin", passwordHash },
  });

  console.log("  criado   usuário admin:");
  console.log(`             e-mail: ${email}`);
  console.log(`             senha temporária: ${senhaTemporaria}`);
  console.log("             (troque em /conta/senha assim que logar)");
}

type ClienteSeed = {
  nome: string;
  descricao?: string;
  origem?: string;
  estagio: EstagioFunil;
  proximoPasso?: string;
  bloqueio?: string;
  notaInicial: string;
};

const CLIENTES_SEED: ClienteSeed[] = [
  {
    nome: "Frog",
    descricao:
      "Projeto desenvolvido pela Vetrium para o streamer Frog — código em esquadrao-do-frog (submodule), assets de marca em frog/. Migrado de clientes/frog.md.",
    estagio: "FECHADO",
    proximoPasso: "Aguardando resposta da proposta comercial; avaliar próximos passos caso ele não responda.",
    notaInicial:
      "Projeto entregue, proposta comercial enviada — Frog ainda não respondeu. Ajustes pós-entrega (11/08/2026): removida a SITE_KEY que travava a raiz do site atrás de senha (acesso público normal agora); favicon trocado pro logo do Esquadrão do Frog; corrigidos os 6 ranks do PUBG no card de progressão; painel de case em \"Resultados reais\" agora troca de conteúdo junto com o carrossel de depoimentos.",
  },
  {
    nome: "JJL Serviços",
    estagio: "PROPOSTA",
    proximoPasso: "Marcar call com o cliente pra conversar sobre a proposta (preferência dele, em vez de seguir só por texto).",
    bloqueio: "Vetrium ainda não tem CNPJ, então não consegue emitir nota fiscal (cliente pediu NF).",
    notaInicial:
      "Proposta comercial em andamento. Segundo o sócio Gabriel Carvalho, o cliente prefere marcar call em vez de seguir só por texto, e gostaria de nota fiscal.",
  },
  {
    nome: "Dá o Play",
    descricao:
      "App mobile (Expo/React Native) que conecta músicos pra formar bandas e organizar apresentações ao vivo — organizador cria evento (data, local, estilo musical, vagas por instrumento, cachê), músicos se candidatam ou são convidados; sistema de avaliação pós-evento constrói reputação. Cliente já tem protótipo funcional em desenvolvimento; a Vetrium não desenvolve o app, só o lado de marca/design. Briefing completo em clientes/arquivo/da-o-play/briefing.pdf.",
    origem: "Indicação de um amigo do Gabriel",
    estagio: "PROPOSTA",
    proximoPasso: "Enviar orçamento o quanto antes (2 orçamentos separados: wireframe da LP + copy, e identidade visual).",
    notaInicial:
      "Em orçamento — ainda não iniciado. Escopo pedido: (1) wireframe da landing page + copy; (2) identidade visual (logo com liberdade criativa total, paleta já usam roxo + modo escuro no protótipo, abertos a refinar seguindo essa linha). Entrega final flexível — software do cliente ainda em desenvolvimento.",
  },
  {
    nome: "Inergi",
    estagio: "LEAD",
    proximoPasso: "A contatar.",
    notaInicial: "Lead no pipeline de prospecção, ainda a contatar.",
  },
  {
    nome: "Tripilar",
    estagio: "LEAD",
    proximoPasso: "A contatar.",
    notaInicial: "Lead no pipeline de prospecção, ainda a contatar.",
  },
  {
    nome: "JSL Serviços",
    estagio: "LEAD",
    proximoPasso: "A contatar.",
    notaInicial: "Lead no pipeline de prospecção, ainda a contatar.",
  },
];

async function seedClientes() {
  const admin = await prisma.user.findUniqueOrThrow({ where: { email: "admin@vetrium.com.br" } });

  for (const c of CLIENTES_SEED) {
    const existente = await prisma.cliente.findFirst({ where: { nome: c.nome } });
    if (existente) {
      console.log(`  ok       cliente já existe: ${c.nome}`);
      continue;
    }

    const cliente = await prisma.cliente.create({
      data: {
        nome: c.nome,
        descricao: c.descricao,
        origem: c.origem,
        estagio: c.estagio,
        proximoPasso: c.proximoPasso,
        bloqueio: c.bloqueio,
      },
    });

    await prisma.interacao.create({
      data: { clienteId: cliente.id, autorId: admin.id, nota: c.notaInicial },
    });

    console.log(`  criado   cliente: ${c.nome} (${c.estagio})`);
  }
}

async function main() {
  console.log("Seed: CRM Vetrium");
  await seedAdmin();
  await seedClientes();
  console.log("Seed concluído.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
