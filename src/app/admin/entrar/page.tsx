import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { LoginForm } from "@/components/login-form";

export default async function EntrarPage() {
  const session = await auth();
  if (session) redirect("/admin/clientes");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-950 px-4 text-neutral-100">
      <div className="text-center">
        <h1 className="text-xl font-semibold">CRM Vetrium</h1>
        <p className="text-sm text-neutral-400">Entre com a conta da equipe</p>
      </div>
      <LoginForm />
    </div>
  );
}
