import { KanbanBoard } from "@/components/kanban-board";
import { prisma } from "@/lib/db";

export default async function FunilPage() {
  const clientes = await prisma.cliente.findMany({
    select: { id: true, nome: true, estagio: true },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-semibold">Funil</h1>
      <KanbanBoard clientesIniciais={clientes} />
    </div>
  );
}
