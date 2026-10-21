import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Inter_Tight, Instrument_Serif, Sora } from "next/font/google";
import { SITE } from "@/lib/site/content";
import "./globals.css";

/* Design system v2 (mesma tipografia da referência Verdane):
   Inter Tight nos títulos e no texto, Instrument Serif itálica na
   segunda metade dos títulos, Geist Mono só para números. */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Inter segue como fonte de corpo das páginas antigas (globals.css). */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
};

export const viewport: Viewport = {
  themeColor: "#120D08",
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
      className={`${interTight.variable} ${instrumentSerif.variable} ${geistMono.variable} ${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
