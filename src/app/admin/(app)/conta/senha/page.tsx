import { TrocarSenhaForm } from "@/components/trocar-senha-form";

export default function TrocarSenhaPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-semibold">Trocar senha</h1>
      <TrocarSenhaForm />
    </div>
  );
}
