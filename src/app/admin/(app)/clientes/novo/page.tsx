import { ClienteForm } from "@/components/cliente-form";

export default function NovoClientePage() {
  return (
    <div className="flex max-w-lg flex-col gap-6">
      <h1 className="text-lg font-semibold">Novo cliente</h1>
      <ClienteForm />
    </div>
  );
}
