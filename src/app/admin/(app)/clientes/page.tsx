import Link from "next/link";

import { prisma } from "@/lib/db";
import { ESTAGIO_LABEL } from "@/lib/estagios";

export default async function ClientesPage() {
  const clientes = await prisma.cliente.findMany({ orderBy: { updatedAt: "desc" } });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Clientes</h1>
        <Link
          href="/admin/clientes/novo"
          className="rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900"
        >
          + Novo cliente
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-neutral-800 rounded-md border border-neutral-800">
        {clientes.length === 0 && (
          <p className="px-4 py-6 text-sm text-neutral-500">Nenhum cliente cadastrado ainda.</p>
        )}
        {clientes.map((cliente) => (
          <Link
            key={cliente.id}
            href={`/admin/clientes/${cliente.id}`}
            className="flex items-center justify-between px-4 py-3 hover:bg-neutral-900"
          >
            <div>
              <p className="text-sm font-medium">{cliente.nome}</p>
              {cliente.proximoPasso && (
                <p className="text-xs text-neutral-500">{cliente.proximoPasso}</p>
              )}
            </div>
            <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
              {ESTAGIO_LABEL[cliente.estagio]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
