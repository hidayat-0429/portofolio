import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

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
      className={`${inter.variable} ${grotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}