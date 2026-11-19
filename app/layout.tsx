import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";

const badan = Inter_Tight({
  variable: "--font-badan",
  subsets: ["latin"],
  display: "swap",
});

const judul = Fraunces({
  variable: "--font-judul",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

// Tema dipasang sebelum paint supaya krem tidak berkedip jadi gelap.
const temaAwal = `(function(){try{var t=localStorage.getItem("tema");if(t!=="gelap"&&t!=="terang"){t="terang"}document.documentElement.dataset.tema=t}catch(e){document.documentElement.dataset.tema="terang"}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-phi-ten-33.vercel.app"),
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
      className={`${badan.variable} ${judul.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaAwal }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}