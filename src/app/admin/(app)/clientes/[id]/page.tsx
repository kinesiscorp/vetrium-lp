import { notFound } from "next/navigation";

import { ClienteForm } from "@/components/cliente-form";
import { InteracoesSection } from "@/components/interacoes-section";
import { MateriaisSection } from "@/components/materiais-section";
import { prisma } from "@/lib/db";

export default async function ClienteDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cliente = await prisma.cliente.findUnique({
    where: { id },
    include: {
      materiais: { orderBy: { uploadedAt: "desc" } },
      interacoes: { orderBy: { data: "desc" }, include: { autor: true } },
    },
  });

  if (!cliente) notFound();

  return (
    <div className="grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold">{cliente.nome}</h1>
        <ClienteForm
          inicial={{
            id: cliente.id,
            nome: cliente.nome,
            descricao: cliente.descricao ?? "",
            origem: cliente.origem ?? "",
            estagio: cliente.estagio,
            proximoPasso: cliente.proximoPasso ?? "",
            bloqueio: cliente.bloqueio ?? "",
          }}
        />
      </div>

      <div className="flex flex-col gap-8">
        <MateriaisSection clienteId={cliente.id} materiais={cliente.materiais} />
        <InteracoesSection clienteId={cliente.id} interacoes={cliente.interacoes} />
      </div>
    </div>
  );
}
