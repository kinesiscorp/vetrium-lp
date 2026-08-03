import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetrium — Design & Technology",
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
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
