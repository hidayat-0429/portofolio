import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import { TemaBoot } from "./components/tema-boot";
import "./globals.css";

const badan = Inter_Tight({
  variable: "--font-badan",
  subsets: ["latin"],
  display: "swap",
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const meta = IBM_Plex_Mono({
  variable: "--font-meta",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const temaAwal = `(function(){try{var t=localStorage.getItem("tema");if(t!=="gelap"&&t!=="terang"){t="terang"}document.documentElement.dataset.tema=t}catch(e){document.documentElement.dataset.tema="terang"}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://dayatportofolio-beta.vercel.app"),
  title: {
    default: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    template: "%s | Nur Hidayat",
  },
  description:
    "Portofolio Mukhammad Nur Hidayat. Mahasiswa Teknik Informatika yang bikin aplikasi web & mobile pakai Next.js, Laravel, dan Flutter. Terbuka untuk magang dan freelance.",
  keywords: [
    "Mukhammad Nur Hidayat",
    "Nur Hidayat",
    "Web Developer",
    "Mobile Developer",
    "Next.js",
    "Laravel",
    "Flutter",
    "Portofolio",
    "Universitas Yudharta Pasuruan",
  ],
  authors: [{ name: "Mukhammad Nur Hidayat" }],
  openGraph: {
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description:
      "Portofolio Full-Stack & Mobile Developer. Next.js, Laravel, Flutter. Berbasis di Pasuruan, Indonesia.",
    url: "/",
    siteName: "Nur Hidayat Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description:
      "Portofolio Full-Stack & Mobile Developer. Next.js, Laravel, Flutter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-tema="terang"
      suppressHydrationWarning
      className={`${badan.variable} ${display.variable} ${meta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <TemaBoot kode={temaAwal} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}