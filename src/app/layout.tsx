import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display, Sora } from "next/font/google";
import { SITE } from "@/lib/site/content";
import "./globals.css";

/* Design system Vetrium (home, orçamento, privacidade):
   Playfair Display nos títulos editoriais, Inter no corpo e na interface,
   JetBrains Mono em etiquetas e números. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Sora continua carregada para as páginas de diagnóstico e proposta
   comercial, que ainda usam a identidade anterior (.t-display). */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Vetrium — Landing pages, UX/UI, SEO e GEO",
    template: "%s · Vetrium",
  },
  description: SITE.description,
  applicationName: "Vetrium",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Vetrium",
    title: "Vetrium — Seu site não precisa apenas impressionar. Precisa gerar oportunidades.",
    description: SITE.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Vetrium — estratégia digital, design e performance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vetrium — Landing pages, UX/UI, SEO e GEO",
    description: SITE.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/brand/vetrium-emblem.png", type: "image/png" },
    ],
    apple: [{ url: "/brand/vetrium-emblem-dark.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#18181F",
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
  // Failsafe: if no animation engine reports in, reveal everything so the
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
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
