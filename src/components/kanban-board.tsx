"use client";

import { DndContext, type DragEndEvent, useDraggable, useDroppable } from "@dnd-kit/core";
import Link from "next/link";
import { useState } from "react";

import { ESTAGIO_LABEL, ESTAGIOS } from "@/lib/estagios";
import type { EstagioFunil } from "@/generated/prisma/enums";

type ClienteResumo = {
  id: string;
  nome: string;
  estagio: EstagioFunil;
};

function Cartao({ cliente }: { cliente: ClienteResumo }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: cliente.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        opacity: isDragging ? 0.5 : 1,
      }}
      className="cursor-grab rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm active:cursor-grabbing"
    >
      <Link href={`/admin/clientes/${cliente.id}`} className="hover:underline" onClick={(e) => isDragging && e.preventDefault()}>
        {cliente.nome}
      </Link>
    </div>
  );
}

function Coluna({ estagio, clientes }: { estagio: EstagioFunil; clientes: ClienteResumo[] }) {
  const { setNodeRef, isOver } = useDroppable({ id: estagio });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[200px] w-64 shrink-0 flex-col gap-2 rounded-md border p-3 ${
        isOver ? "border-neutral-500 bg-neutral-900/50" : "border-neutral-800"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
        {ESTAGIO_LABEL[estagio]} · {clientes.length}
      </p>
      <div className="flex flex-col gap-2">
        {clientes.map((cliente) => (
          <Cartao key={cliente.id} cliente={cliente} />
        ))}
      </div>
    </div>
  );
}

export function KanbanBoard({ clientesIniciais }: { clientesIniciais: ClienteResumo[] }) {
  const [clientes, setClientes] = useState(clientesIniciais);

  async function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const novoEstagio = over.id as EstagioFunil;
    const clienteId = active.id as string;
    const atual = clientes.find((c) => c.id === clienteId);
    if (!atual || atual.estagio === novoEstagio) return;

    setClientes((prev) =>
      prev.map((c) => (c.id === clienteId ? { ...c, estagio: novoEstagio } : c)),
    );

    await fetch(`/api/clientes/${clienteId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estagio: novoEstagio }),
    });
  }

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {ESTAGIOS.map((estagio) => (
          <Coluna
            key={estagio}
            estagio={estagio}
            clientes={clientes.filter((c) => c.estagio === estagio)}
          />
        ))}
      </div>
    </DndContext>
  );
}
