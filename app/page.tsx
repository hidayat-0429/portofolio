import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
  description:
    "Portofolio Mukhammad Nur Hidayat, mahasiswa Teknik Informatika Universitas Yudharta Pasuruan yang berfokus membangun aplikasi web & mobile modern, responsif, dan berperforma tinggi.",
  keywords: [
    "Mukhammad Nur Hidayat",
    "Web Developer",
    "Mobile Developer",
    "Next.js",
    "Flutter",
    "Laravel",
    "Universitas Yudharta Pasuruan",
    "Portofolio",
    "Internship",
  ],
  authors: [{ name: "Mukhammad Nur Hidayat" }],
  openGraph: {
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description: "Portofolio Mukhammad Nur Hidayat - Web & Mobile Developer dari Pasuruan, Jawa Timur.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description: "Portofolio Mukhammad Nur Hidayat - Web & Mobile Developer dari Pasuruan, Jawa Timur.",
  },
};

export default function Page() {
  return <PortfolioClient />;
}
