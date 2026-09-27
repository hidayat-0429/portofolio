import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
  description:
    "Portfolio Mukhammad Nur Hidayat. Mahasiswa Teknik Informatika yang ngoding aplikasi web & mobile pakai Next.js, Laravel, Flutter.",
  keywords: [
    "Mukhammad Nur Hidayat",
    "Web Developer",
    "Mobile Developer",
    "Next.js",
    "Flutter",
    "Laravel",
    "Universitas Yudharta Pasuruan",
    "Portfolio",
    "Internship",
  ],
  authors: [{ name: "Mukhammad Nur Hidayat" }],
  openGraph: {
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description: "Portfolio Mukhammad Nur Hidayat - Web & Mobile Developer dari Pasuruan.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description: "Portfolio Mukhammad Nur Hidayat - Web & Mobile Developer dari Pasuruan.",
  },
};

export default function Page() {
  return <PortfolioClient />;
}
