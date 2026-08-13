import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

/* Brandkit: Sora nos títulos (Bold/SemiBold/Medium), Inter no corpo.
   As duas são variáveis, então um único arquivo cobre toda a escala. */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vetrium — Digital Design & Development",
  description:
    "Redesign, branding, landing pages e produtos digitais para negócios que já existem e querem crescer.",
};

const BOOT_SCRIPT = `
(function () {
  var root = document.documentElement;
  try {
    var stored = localStorage.getItem("theme");
    root.classList.toggle("dark", stored !== "light");
  } catch (e) {
    root.classList.add("dark");
  }
  // Only allow the pre-animation hidden state once we know scripts run at all.
  root.classList.add("js-ok");
  // Failsafe: if the scroll engine never reports in, reveal everything so the
  // page can never end up permanently blank.
  setTimeout(function () {
    if (!window.__vetriumAnimReady) root.classList.add("anim-fallback");
  }, 2500);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
