import Link from "next/link";
import { redirect } from "next/navigation";

import { auth, signOut } from "@/lib/auth";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/admin/entrar");

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <header className="flex items-center justify-between border-b border-neutral-800 px-6 py-3">
        <nav className="flex items-center gap-4 text-sm">
          <span className="font-semibold">CRM Vetrium</span>
          <Link href="/admin/clientes" className="text-neutral-400 hover:text-neutral-100">
            Clientes
          </Link>
          <Link href="/admin/funil" className="text-neutral-400 hover:text-neutral-100">
            Funil
          </Link>
        </nav>
        <div className="flex items-center gap-3 text-sm text-neutral-400">
          <Link href="/admin/conta/senha" className="hover:text-neutral-100">
            {session.user.name}
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/entrar" });
            }}
          >
            <button type="submit" className="hover:text-neutral-100">
              Sair
            </button>
          </form>
        </div>
      </header>
      <main className="flex-1 px-6 py-6">{children}</main>
    </div>
  );
}
