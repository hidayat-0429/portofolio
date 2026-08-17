"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Globe,
  Smartphone,
  Download,
  Menu,
  X,
  ArrowUp,
  Code2,
  Send,
} from "lucide-react";

import { FaJava, FaCss3Alt } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiDart,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiFlutter,
  SiTailwindcss,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiAndroidstudio,
} from "react-icons/si";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: "WEB" | "MOBILE";
  tech: string[];
  description: string;
  github: string;
  demo?: string; 
  image: string;
}

// ─── Data Proyek ─────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    number: "01",
    title: "Car Rental App",
    subtitle: "Aplikasi Rental Mobil",
    category: "WEB",
    tech: ["Next.js", "React", "Tailwind CSS"],
    description:
      "Aplikasi web penyewaan mobil berbasis Next.js dengan SSR untuk performa optimal, UI responsif, dan pengelolaan ketersediaan armada secara real-time.",
    github: "https://github.com/hidayat-0429",
    image: "project-car-rental.png",
  },
  {
    number: "02",
    title: "Task Reminder App",
    subtitle: "Pengingat Tugas Kuliah",
    category: "MOBILE",
    tech: ["Flutter", "Supabase", "Firebase FCM"],
    description:
      "Aplikasi mobile manajemen tugas berbasis Flutter & Supabase, dilengkapi push notification real-time via Firebase Cloud Messaging.",
    github: "https://github.com/hidayat-0429",
    image: "project-task-reminder.png",
  },
  {
    number: "03",
    title: "Desa Information Portal",
    subtitle: "Portal Web Desa",
    category: "WEB",
    tech: ["Laravel", "MySQL"],
    description:
      "Portal web informasi desa terpadu mencakup profil, aparatur, berita, direktori UMKM & wisata, dilengkapi dashboard admin (CMS) mandiri.",
    github: "https://github.com/hidayat-0429",
    image: "project-desa.png",
  },
];

// ─── Data Skill ──────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Core Languages",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Dart", icon: SiDart, color: "text-cyan-400" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-600" },
      { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-500" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectCardImage({ src, alt, category }: { src: string; alt: string; category: "WEB" | "MOBILE" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 text-zinc-600">
        <Code2 className="w-8 h-8 mb-2 text-[#f0c674]/40" />
        <span className="text-xs font-mono text-zinc-500">{alt}</span>
      </div>
    );
  }

  if (category === "WEB") {
    return (
      <div className="w-full h-full bg-zinc-950 flex flex-col group-hover:scale-105 transition-transform duration-500 ease-out">
        <div className="bg-zinc-900 px-3 py-2 flex items-center gap-1.5 border-b border-zinc-800/80">
          <div className="w-2 h-2 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
        <div className="relative flex-1 overflow-hidden bg-zinc-900">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            onError={() => setHasError(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-3 group-hover:scale-105 transition-transform duration-500 ease-out">
      <div className="relative h-full aspect-[9/19.5] border-[4px] border-zinc-700 rounded-[1.25rem] overflow-hidden shadow-2xl bg-black">
        <div className="absolute top-0 inset-x-0 mx-auto w-[45%] h-2.5 bg-zinc-700 rounded-b-md z-10" />
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.613 5.613 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<"ALL" | "WEB" | "MOBILE">("ALL");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // State Form Kontak
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    activeTab === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waMessage = `Halo Hidayat, saya ${formData.name} (${formData.email}).%0A%0A${formData.message}`;
    window.open(`https://wa.me/qr/Y7TS5AU4MVPMM1?text=${waMessage}`, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-[#f0c674]/30 selection:text-[#f0c674]">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-sm font-semibold tracking-wider text-zinc-100 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#f0c674]" />
            Hidayat
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Tentang", href: "#about" },
              { label: "Proyek", href: "#projects" },
              { label: "Keahlian", href: "#skills" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-[#f0c674] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs uppercase tracking-widest border border-[#f0c674]/30 text-[#f0c674] hover:bg-[#f0c674]/10 px-4 py-2 rounded transition-colors"
            >
              Kontak
            </a>
          </div>

          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/[0.08] bg-[#09090b] overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {[
                  { label: "Tentang", href: "#about" },
                  { label: "Proyek", href: "#projects" },
                  { label: "Keahlian", href: "#skills" },
                  { label: "Kontak", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest text-zinc-400 hover:text-[#f0c674] transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero / About ── */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#09090b]/40 via-[#09090b]/80 to-[#09090b]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Status Badge Warna Emas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-4 py-1.5 rounded-full border border-[#f0c674]/30 bg-[#f0c674]/10 backdrop-blur-sm mb-8 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0c674] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0c674]"></span>
            </span>
            <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#f0c674] uppercase">
              Available for Internship & Freelance
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#f0c674] bg-clip-text text-transparent">
              Mukhammad Nur Hidayat
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Membangun arsitektur digital dan pengalaman pengguna tanpa kompromi. 
            Karya eksklusif dalam bentuk aplikasi web dan mobile modern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#f0c674]/80 font-medium tracking-wide mb-14"
          >
            <span>Full-Stack Development</span>
            <span className="hidden sm:inline">|</span>
            <span>UI/UX Enthusiast</span>
            <span className="hidden sm:inline">|</span>
            <span>Informatics Student</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[#f0c674] hover:bg-white text-zinc-950 text-xs sm:text-sm font-bold tracking-wide uppercase transition-all rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#f0c674]/20"
            >
              Eksplorasi Proyek
            </a>
            <a
              href="/CV_Mukhammad_Nur_Hidayat.pdf"
              download
              className="px-8 py-4 border border-white/20 hover:border-[#f0c674] text-white hover:text-[#f0c674] bg-black/20 backdrop-blur-md text-xs sm:text-sm font-bold tracking-wide uppercase transition-all rounded-full flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Unduh CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="py-24 px-6 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-mono text-[#f0c674] tracking-widest uppercase mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold text-white">Proyek Pilihan</h2>
            </div>

            <div className="flex border border-zinc-800 bg-zinc-900/50 p-1 rounded-lg">
              {(["ALL", "WEB", "MOBILE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs uppercase tracking-wider px-4 py-1.5 transition-all font-medium rounded-md ${
                    activeTab === tab
                      ? "bg-[#f0c674]/20 text-[#f0c674] border border-[#f0c674]/30"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="group relative border border-zinc-800/80 bg-zinc-900/40 hover:border-[#f0c674]/50 transition-all rounded-xl overflow-hidden flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                      <ProjectCardImage 
                        src={project.image} 
                        alt={project.title} 
                        category={project.category} 
                      />

                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#f0c674] flex items-center gap-1.5 shadow-md">
                        {project.category === "WEB" ? (
                          <Globe className="w-3.5 h-3.5" />
                        ) : (
                          <Smartphone className="w-3.5 h-3.5" />
                        )}
                        {project.category}
                      </div>

                      <span className="absolute top-3 right-3 text-lg font-bold font-mono text-white/40 group-hover:text-[#f0c674] transition-colors">
                        {project.number}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-[#f0c674] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mb-3">{project.subtitle}</p>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono border border-zinc-800 text-zinc-300 px-2.5 py-1 bg-zinc-900/80 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 px-3 py-2.5 rounded-lg transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Lihat Repository
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-950 bg-[#f0c674] hover:bg-white px-3 py-2.5 rounded-lg transition-all shadow-md"
                        >
                          Live Demo
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section id="skills" className="py-24 px-6 border-t border-zinc-800/60 overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .pause-on-hover:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-mono text-[#f0c674] tracking-widest uppercase mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl font-bold text-white">Keahlian Teknis</h2>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="relative flex flex-col border border-zinc-800/80 bg-zinc-900/30 py-8 rounded-xl overflow-hidden pause-on-hover"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#f0c674] mb-8 px-8 z-10">
                  {category.title}
                </h3>

                <div className="flex overflow-hidden relative w-full">
                  <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

                  <div className="flex gap-4 px-4 min-w-max animate-marquee">
                    {[...category.items, ...category.items, ...category.items].map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center justify-center p-4 bg-zinc-900/80 border border-zinc-800 hover:border-[#f0c674]/60 rounded-lg transition-colors w-[110px] sm:w-[130px] shrink-0 cursor-pointer group"
                        >
                          <IconComponent
                            className={`text-3xl sm:text-4xl ${item.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                          />
                          <span className="text-xs font-medium text-zinc-300 text-center">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="py-24 px-6 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tertarik Bekerja Sama?
            </h2>
            <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
              Saya terbuka untuk kesempatan magang, posisi Junior Web &amp; Mobile Developer, atau proyek lepas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-2">
                Kontak Langsung
              </h3>
              <a
                href="https://wa.me/qr/Y7TS5AU4MVPMM1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border border-zinc-800 hover:border-[#f0c674]/50 bg-zinc-900/40 rounded-xl transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#f0c674]/10 text-[#f0c674] group-hover:bg-[#f0c674] group-hover:text-zinc-950 transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500">WhatsApp</p>
                  <p className="text-sm font-medium text-zinc-200">Chat Langsung</p>
                </div>
              </a>

              <a
                href="mailto:dayatiza774@gmail.com"
                className="flex items-center gap-4 p-4 border border-zinc-800 hover:border-[#f0c674]/50 bg-zinc-900/40 rounded-xl transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#f0c674]/10 text-[#f0c674] group-hover:bg-[#f0c674] group-hover:text-zinc-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500">Email</p>
                  <p className="text-sm font-medium text-zinc-200">dayatiza774@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/hidayat-0429"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border border-zinc-800 hover:border-[#f0c674]/50 bg-zinc-900/40 rounded-xl transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#f0c674]/10 text-[#f0c674] group-hover:bg-[#f0c674] group-hover:text-zinc-950 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500">GitHub Profile</p>
                  <p className="text-sm font-medium text-zinc-200">github.com/hidayat-0429</p>
                </div>
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="border border-zinc-800 bg-zinc-900/40 p-6 rounded-xl space-y-4"
            >
              <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-2">
                Kirim Pesan
              </h3>
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama Lengkap"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#f0c674] text-xs text-zinc-100 rounded-lg p-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@email.com"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#f0c674] text-xs text-zinc-100 rounded-lg p-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Pesan</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Halo Hidayat, saya tertarik mendiskusikan..."
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#f0c674] text-xs text-zinc-100 rounded-lg p-3 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#f0c674] hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Mukhammad Nur Hidayat. Pasuruan, Indonesia.
      </footer>

      {/* ── Back to Top ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="fixed bottom-6 right-6 p-3 rounded-full bg-[#f0c674] hover:bg-white text-zinc-950 transition-all shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}