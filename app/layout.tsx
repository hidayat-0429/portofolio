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
  metadataBase: new URL("https://ganti-dengan-domainmu.com"),
  title: {
    default: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    template: "%s | Nur Hidayat",
  },
  description:
    "Portofolio Mukhammad Nur Hidayat — Full-Stack & Mobile Developer. Membangun aplikasi web dan mobile dengan Next.js, Laravel, dan Flutter.",
  keywords: ["Nur Hidayat", "Web Developer", "Mobile Developer", "Next.js", "Laravel", "Flutter", "Portofolio"],
  openGraph: {
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description: "Portofolio Full-Stack & Mobile Developer — Next.js, Laravel, Flutter.",
    url: "https://ganti-dengan-domainmu.com",
    siteName: "Nur Hidayat Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukhammad Nur Hidayat | Web & Mobile Developer",
    description: "Portofolio Full-Stack & Mobile Developer — Next.js, Laravel, Flutter.",
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