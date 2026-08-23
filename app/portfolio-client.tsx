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
  Sparkles,
  MapPin,
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
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiLivewire,
} from "react-icons/si";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: "WEB" | "MOBILE";
  /** Label shown on featured card, e.g. "MOBILE / FULL-STACK" */
  type?: string;
  featured?: boolean;
  /** Developer role / contribution */
  role?: string;
  tech: string[];
  description: string;
  github: string;
  /** Second repo link — used for featured full-stack project */
  secondaryGithub?: string;
  demo?: string;
  image: string;
}

// ─── Theme ───────────────────────────────────────────────────────────────────
//
// Primary:
// #60a5fa  Electric Blue
// #3b82f6  Blue
// #93c5fd  Light Blue
//
// Background:
// #09090b
// #0f1115
// #111318
//
// ─────────────────────────────────────────────────────────────────────────────

// ─── Data Proyek ─────────────────────────────────────────────────────────────

const projects: Project[] = [

  // ── Featured ──────────────────────────────────────────────────────────────

  {
    number: "01",
    title: "Finance Notes",
    subtitle: "Mobile Application + Backend API",
    category: "MOBILE",
    type: "MOBILE / FULL-STACK",
    featured: true,
    role: "Full-Stack Developer",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Laravel",
      "Sanctum",
      "MySQL",
    ],
    description:
      "Aplikasi catatan keuangan full-stack — mobile app untuk mencatat pemasukan dan pengeluaran harian, didukung REST API backend yang aman dengan autentikasi Sanctum dan manajemen transaksi lengkap.",
    github:
      "https://github.com/hidayat-0429/catatan-keuangan",
    secondaryGithub:
      "https://github.com/hidayat-0429/catatan-keuangan-api",
    image: "/project-finance-app.png",
  },

  // ── Regular ───────────────────────────────────────────────────────────────

  {
    number: "02",
    title: "Car Rental App",
    subtitle: "Aplikasi Rental Mobil",
    category: "WEB",
    role: "Full-Stack Developer",
    tech: ["Next.js", "Prisma", "NextAuth", "PostgreSQL"],
    description:
      "Aplikasi web rental mobil dengan sistem pemesanan, pengelolaan kendaraan, dan autentikasi user berbasis NextAuth.",
    github:
      "https://github.com/hidayat-0429/car-rental",
    image: "/project-car-rental.png",
  },

  {
    number: "03",
    title: "Task Reminder App",
    subtitle: "Pengingat Tugas Kuliah",
    category: "MOBILE",
    role: "Mobile Developer",
    tech: ["Flutter", "Supabase", "Firebase FCM"],
    description:
      "Aplikasi mobile pengingat tugas kuliah dengan sinkronisasi data real-time dan push notification.",
    github:
      "https://github.com/hidayat-0429/pengingat_kuliah",
    image: "/project-task-reminder.png",
  },

  {
    number: "04",
    title: "Desa Information Portal",
    subtitle: "Portal Web Desa",
    category: "WEB",
    role: "Full-Stack Developer",
    tech: ["Laravel", "Livewire", "Tailwind CSS"],
    description:
      "Portal informasi desa berbasis CMS untuk mengelola profil, berita, UMKM, dan wisata daerah.",
    github:
      "https://github.com/hidayat-0429/kkn-umkm",
    image: "/project-desa.png",
  },

  {
    number: "05",
    title: "Weather App",
    subtitle: "Aplikasi Cuaca",
    category: "MOBILE",
    role: "Mobile Developer",
    tech: ["Flutter", "Firebase FCM", "REST API"],
    description:
      "Aplikasi cuaca mobile dengan prakiraan harian real-time, informasi lokasi, dan push notification.",
    github:
      "https://github.com/hidayat-0429/aplikasi_cuaca",
    image: "/project-weather.png",
  },

];

// ─── Data Skill ──────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Core Languages",
    items: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "text-indigo-400",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-500",
      },
      {
        name: "Dart",
        icon: SiDart,
        color: "text-cyan-400",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "text-cyan-400",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "text-red-600",
      },
      {
        name: "Livewire",
        icon: SiLivewire,
        color: "text-pink-400",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "text-blue-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-teal-400",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-white",
      },
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-300",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "text-emerald-500",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-amber-500",
      },
      {
        name: "Git & GitHub",
        icon: SiGit,
        color: "text-orange-600",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "text-green-500",
      },
    ],
  },
];

// ─── Project Image ──────────────────────────────────────────────────────────

function ProjectCardImage({
  src,
  alt,
  category,
}: {
  src: string;
  alt: string;
  category: "WEB" | "MOBILE";
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1115] to-[#08090c] text-zinc-600">
        <div className="w-14 h-14 rounded-2xl border border-blue-400/10 bg-blue-400/5 flex items-center justify-center mb-4">
          <Code2 className="w-7 h-7 text-blue-400/50" />
        </div>

        <span className="text-xs font-mono text-zinc-500">
          {alt}
        </span>

        <span className="text-[10px] text-zinc-600 mt-1">
          Preview unavailable
        </span>
      </div>
    );
  }

  if (category === "WEB") {
    return (
      <div className="w-full h-full bg-[#08090c] flex flex-col group-hover:scale-[1.03] transition-transform duration-700 ease-out">
        <div className="bg-[#111318] px-3 py-2.5 flex items-center gap-1.5 border-b border-white/[0.06]">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />

          <div className="ml-3 h-4 flex-1 rounded-md bg-white/[0.03] border border-white/[0.04]" />
        </div>

        <div className="relative flex-1 overflow-hidden bg-zinc-950">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            onError={() => setHasError(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#08090c] flex flex-col items-center justify-center p-3 group-hover:scale-[1.03] transition-transform duration-700 ease-out">
      <div className="relative h-full aspect-[9/19.5] border-[4px] border-zinc-700/80 rounded-[1.25rem] overflow-hidden shadow-2xl shadow-black/40 bg-black">
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

// ─── Featured Project Card ───────────────────────────────────────────────────

function FeaturedProjectCard({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="
        group
        relative
        border border-white/[0.08]
        bg-[#0f1115]/80
        hover:border-blue-400/25
        rounded-2xl
        overflow-hidden
        shadow-2xl shadow-black/20
        transition-all duration-500
      "
    >
      <div className="flex flex-col lg:flex-row">

        {/* ── Image Side — 55% ── */}
        <div
          className="
            relative lg:w-[55%]
            h-56 sm:h-72 lg:h-auto lg:min-h-[400px]
            bg-[#08090c]
            border-b lg:border-b-0 lg:border-r border-white/[0.06]
            flex items-center justify-center
            p-4 sm:p-8 lg:p-10
            overflow-hidden
          "
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-transparent pointer-events-none" />

          {!hasError ? (
            <div
              className="
                relative h-full w-full
                flex items-center justify-center
                group-hover:scale-[1.02]
                transition-transform duration-700 ease-out
              "
            >
              {/* Phone frame */}
              <div
                className="
                  relative h-full
                  max-h-56 sm:max-h-72 lg:max-h-96
                  aspect-[9/19.5]
                  border-[4px] border-zinc-700/80
                  rounded-[1.5rem]
                  overflow-hidden
                  shadow-2xl shadow-black/50
                  bg-black
                "
              >
                <div className="absolute top-0 inset-x-0 mx-auto w-[40%] h-2.5 bg-zinc-700 rounded-b-md z-10" />
                <img
                  src={project.image}
                  alt={`Screenshot aplikasi ${project.title}`}
                  className="w-full h-full object-cover object-top"
                  onError={() => setHasError(true)}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-zinc-600">
              <div className="w-16 h-16 rounded-2xl border border-blue-400/10 bg-blue-400/5 flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-blue-400/50" />
              </div>
              <span className="text-xs font-mono text-zinc-500">{project.title}</span>
              <span className="text-[10px] text-zinc-600 mt-1">Preview unavailable</span>
            </div>
          )}
        </div>

        {/* ── Info Side — 45% ── */}
        <div className="lg:w-[45%] p-5 sm:p-7 lg:p-9 flex flex-col justify-between gap-5">

          <div className="flex flex-col gap-4">

            {/* Number + Type badge + Featured badge (same row) */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-mono text-zinc-600">{project.number}</span>
              <div className="h-px w-4 bg-zinc-800" />
              <div
                className="
                  flex items-center gap-1.5
                  px-2.5 py-1 rounded-md
                  bg-white/[0.03] border border-white/[0.06]
                "
              >
                <Smartphone className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-mono text-blue-300 tracking-wider uppercase">
                  {project.type ?? project.category}
                </span>
              </div>
              {/* Featured badge — inline, bukan absolute */}
              <span
                className="
                  px-2.5 py-1 rounded-full
                  bg-blue-400/10 border border-blue-400/20
                  text-[10px] font-mono text-blue-300
                  tracking-wider uppercase
                "
              >
                Featured
              </span>
            </div>

            {/* Title + Subtitle */}
            <div>
              <h3
                className="
                  text-xl sm:text-2xl lg:text-3xl
                  font-bold
                  text-zinc-100
                  group-hover:text-blue-200
                  transition-colors duration-300
                  mb-1
                "
              >
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Role */}
            {project.role && (
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                  Role
                </span>
                <div className="h-px w-4 bg-zinc-800" />
                <span className="text-[11px] font-mono text-zinc-400">
                  {project.role}
                </span>
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-[11px] font-mono
                    border border-white/[0.07]
                    text-zinc-400
                    px-2.5 py-1
                    bg-white/[0.02]
                    rounded-md
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Buka repository Mobile App — ${project.title}`}
              className="
                flex items-center gap-2
                text-xs font-medium
                text-zinc-300 hover:text-white
                bg-white/[0.04] hover:bg-white/[0.07]
                border border-white/[0.08]
                px-4 py-2.5 rounded-lg
                transition-all
              "
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Mobile App
            </a>

            {project.secondaryGithub && (
              <a
                href={project.secondaryGithub}
                target="_blank"
                rel="noreferrer"
                aria-label={`Buka repository API — ${project.title}`}
                className="
                  flex items-center gap-2
                  text-xs font-medium
                  text-zinc-300 hover:text-white
                  bg-white/[0.04] hover:bg-white/[0.07]
                  border border-white/[0.08]
                  px-4 py-2.5 rounded-lg
                  transition-all
                "
              >
                <GithubIcon className="w-3.5 h-3.5" />
                API Repository
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Buka Live Demo — ${project.title}`}
                className="
                  flex items-center gap-2
                  text-xs font-semibold
                  text-zinc-950
                  bg-blue-400 hover:bg-blue-300
                  px-4 py-2.5 rounded-lg
                  transition-all
                "
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ─── GitHub Icon ────────────────────────────────────────────────────────────

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─── WhatsApp Icon ──────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.613 5.613 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<"ALL" | "WEB" | "MOBILE">(
    "ALL"
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [showBackToTop, setShowBackToTop] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  // ─── Scroll Detection ─────────────────────────────────────────────────────

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Filter Projects ──────────────────────────────────────────────────────

  const filteredProjects =
    activeTab === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === activeTab
        );

  // ─── Contact Submit ───────────────────────────────────────────────────────

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    const waText = [
      `Halo Hidayat, saya ${formData.name}.`,
      "",
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    const encodedMessage =
      encodeURIComponent(waText);

    window.open(
      `https://wa.me/qr/Y7TS5AU4MVPMM1?text=${encodedMessage}`,
      "_blank"
    );

    setTimeout(() => {
      setIsSubmitting(false);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#09090b]
        text-zinc-100
        antialiased
        overflow-x-hidden
        selection:bg-blue-400/30
        selection:text-blue-300
      "
    >
      {/* ────────────────────────────────────────────────────────────────────
          GLOBAL BACKGROUND
      ──────────────────────────────────────────────────────────────────── */}

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        {/* Top Glow */}
        <div
          className="
            absolute
            top-[-200px]
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[500px]
            rounded-full
            bg-blue-500/[0.08]
            blur-[140px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            top-[30%]
            right-[-250px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[130px]
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-[-200px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/[0.035]
            blur-[140px]
          "
        />
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          NAVBAR
      ──────────────────────────────────────────────────────────────────── */}

      <nav
        className="
          fixed
          top-0
          w-full
          z-50
          bg-[#09090b]/75
          backdrop-blur-xl
          border-b
          border-white/[0.06]
        "
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5"
          >
            <div
              className="
                w-8
                h-8
                rounded-lg
                border
                border-blue-400/20
                bg-blue-400/5
                flex
                items-center
                justify-center
                text-blue-400
                group-hover:border-blue-400/40
                group-hover:bg-blue-400/10
                transition-all
              "
            >
              <Code2 className="w-4 h-4" />
            </div>

            <div className="leading-none">
              <span className="block text-sm font-bold tracking-wide text-zinc-100">
                Hidayat
              </span>

              <span className="block text-[9px] uppercase tracking-[0.25em] text-zinc-600 mt-1">
                Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              {
                label: "Tentang",
                href: "#about",
              },
              {
                label: "Proyek",
                href: "#projects",
              },
              {
                label: "Keahlian",
                href: "#skills",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-zinc-500
                  hover:text-blue-400
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="
                text-xs
                uppercase
                tracking-widest
                border
                border-blue-400/25
                text-blue-400
                hover:border-blue-400/50
                hover:bg-blue-400/10
                px-4
                py-2
                rounded-lg
                transition-all
              "
            >
              Kontak
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            className="
              md:hidden
              p-2
              text-zinc-400
              hover:text-blue-400
              transition-colors
            "
            onClick={() =>
              setIsMobileMenuOpen(
                !isMobileMenuOpen
              )
            }
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="
                md:hidden
                border-t
                border-white/[0.06]
                bg-[#09090b]/95
                backdrop-blur-xl
                overflow-hidden
              "
            >
              <div className="flex flex-col px-6 py-5 gap-2">
                {[
                  {
                    label: "Tentang",
                    href: "#about",
                  },
                  {
                    label: "Proyek",
                    href: "#projects",
                  },
                  {
                    label: "Keahlian",
                    href: "#skills",
                  },
                  {
                    label: "Kontak",
                    href: "#contact",
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="
                      text-sm
                      uppercase
                      tracking-widest
                      text-zinc-500
                      hover:text-blue-400
                      transition-colors
                      py-3
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ────────────────────────────────────────────────────────────────────
          HERO
      ──────────────────────────────────────────────────────────────────── */}

      {/* ── Hero / About ── */}
<section
  id="about"
  className="
    relative
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    pt-24
    px-6
    text-center
    overflow-hidden
  "
>
  {/* Background */}
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#09090b]/20 via-[#09090b]/70 to-[#09090b]" />

  {/* Subtle Blue Glow */}
  <div
    className="
      absolute
      top-1/3
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[300px]
      bg-blue-500/[0.06]
      blur-[120px]
      rounded-full
    "
  />

  <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

    {/* Availability Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        px-4
        py-2
        rounded-full
        border
        border-blue-400/20
        bg-blue-400/[0.06]
        backdrop-blur-sm
        mb-7
        flex
        items-center
        gap-2.5
      "
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
      </span>

      <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-blue-300 uppercase">
        Available for Internship & Freelance
      </p>
    </motion.div>

    {/* Role */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="
        text-xs
        sm:text-sm
        uppercase
        tracking-[0.3em]
        text-zinc-500
        mb-5
      "
    >
      Full-Stack & Mobile Developer
    </motion.p>

    {/* Name */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="
        text-4xl
        sm:text-6xl
        md:text-7xl
        font-black
        tracking-tight
        leading-[0.95]
        mb-7
      "
    >
      <span
        className="
          bg-gradient-to-r
          from-white
          via-zinc-100
          to-blue-400
          bg-clip-text
          text-transparent
        "
      >
        Mukhammad Nur Hidayat
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="
        text-base
        sm:text-lg
        text-zinc-400
        font-light
        leading-relaxed
        max-w-2xl
        mx-auto
        mb-8
      "
    >
      Membangun aplikasi web dan mobile modern
      dengan fokus pada performa, pengalaman pengguna,
      dan solusi digital yang fungsional.
    </motion.p>

    {/* Tech Stack */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="
        flex
        flex-wrap
        justify-center
        items-center
        gap-3
        mb-10
      "
    >
      {["Next.js", "Laravel", "React", "Flutter"].map(
        (tech, index) => (
          <React.Fragment key={tech}>
            <span
              className="
                text-xs
                sm:text-sm
                font-medium
                text-blue-300
                px-3
                py-1.5
                rounded-full
                border
                border-blue-400/10
                bg-blue-400/[0.04]
              "
            >
              {tech}
            </span>

            {index < 3 && (
              <span className="text-zinc-700">
                •
              </span>
            )}
          </React.Fragment>
        )
      )}
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.65 }}
      className="
        flex
        flex-wrap
        justify-center
        gap-3
      "
    >
      <a
        href="#projects"
        className="
          px-7
          py-3.5
          bg-blue-400
          hover:bg-blue-300
          text-zinc-950
          text-xs
          sm:text-sm
          font-bold
          tracking-wide
          uppercase
          rounded-xl
          transition-all
          flex
          items-center
          gap-2
          shadow-lg
          shadow-blue-500/10
        "
      >
        Lihat Proyek

        <ExternalLink className="w-4 h-4" />
      </a>

      <a
        href="/CV_M._Nur_Hidayat.pdf"
        download
        className="
          px-7
          py-3.5
          border
          border-white/[0.12]
          hover:border-blue-400/30
          text-white
          hover:text-blue-300
          bg-white/[0.02]
          backdrop-blur-md
          text-xs
          sm:text-sm
          font-bold
          tracking-wide
          uppercase
          rounded-xl
          transition-all
          flex
          items-center
          gap-2
        "
      >
        <Download className="w-4 h-4" />
        Download CV
      </a>
    </motion.div>

    {/* Location */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="
        mt-9
        text-xs
        text-zinc-600
      "
    >
      Pasuruan, Indonesia
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.1 }}
    className="
      absolute
      bottom-7
      left-1/2
      -translate-x-1/2
      flex
      flex-col
      items-center
      gap-2
    "
  >
    <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
      Scroll
    </span>

    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="
        w-px
        h-7
        bg-gradient-to-b
        from-blue-400
        to-transparent
      "
    />
  </motion.div>
</section>

      {/* ────────────────────────────────────────────────────────────────────
          PROJECTS
      ──────────────────────────────────────────────────────────────────── */}

      <section
        id="projects"
        className="py-24 px-6 border-t border-white/[0.05]"
      >
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono text-blue-400">
                  01
                </span>
                <div className="h-px w-10 bg-blue-400/30" />
                <p className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                  Selected Works
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Proyek Pilihan
              </h2>

              <p className="text-sm text-zinc-500 max-w-md leading-relaxed">
                Koleksi project web, mobile, dan backend yang menunjukkan
                kemampuan sebagai Full-Stack Developer.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex border border-white/[0.08] bg-white/[0.02] p-1 rounded-xl shrink-0">
              {(["ALL", "WEB", "MOBILE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-label={`Filter project: ${tab}`}
                  className={`
                    text-xs uppercase tracking-wider
                    px-4 py-2
                    transition-all font-medium rounded-lg
                    ${
                      activeTab === tab
                        ? "bg-blue-400/10 text-blue-300 border border-blue-400/20"
                        : "text-zinc-500 hover:text-zinc-200"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Featured Project ── */}

          <AnimatePresence mode="wait">
            {(activeTab === "ALL" || activeTab === "MOBILE") && (
              <motion.div
                key="featured-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <FeaturedProjectCard project={projects[0]} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Regular Projects Grid (2-col) ── */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.article
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      relative
                      border border-white/[0.07]
                      bg-[#0f1115]/80
                      hover:border-blue-400/30
                      transition-all duration-300
                      rounded-2xl
                      overflow-hidden
                      flex flex-col
                      shadow-xl shadow-black/10
                    "
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-[#08090c] border-b border-white/[0.06] shrink-0">
                      <ProjectCardImage
                        src={project.image}
                        alt={`Screenshot ${project.title}`}
                        category={project.category}
                      />

                      {/* Category badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono text-blue-300 flex items-center gap-1.5">
                        {project.category === "WEB" ? (
                          <Globe className="w-3 h-3" />
                        ) : (
                          <Smartphone className="w-3 h-3" />
                        )}
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">

                      {/* Title row */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-zinc-600 mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-700 shrink-0 mt-0.5">
                          {project.number}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="
                              text-[10px] font-mono
                              border border-white/[0.07]
                              text-zinc-400
                              px-2 py-0.5
                              bg-white/[0.02]
                              rounded-md
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons — pushed to bottom */}
                      <div className="mt-auto flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Buka repository — ${project.title}`}
                          className="
                            flex-1 flex items-center justify-center gap-2
                            text-xs font-medium
                            text-zinc-300 hover:text-white
                            bg-white/[0.03] hover:bg-white/[0.06]
                            border border-white/[0.06]
                            px-3 py-2.5 rounded-lg
                            transition-all
                          "
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          Repository
                        </a>

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Buka Live Demo — ${project.title}`}
                            className="
                              flex-1 flex items-center justify-center gap-2
                              text-xs font-semibold
                              text-zinc-950
                              bg-blue-400 hover:bg-blue-300
                              px-3 py-2.5 rounded-lg
                              transition-all
                            "
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </a>
                        )}
                      </div>

                    </div>
                  </motion.article>
                ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          SKILLS
      ──────────────────────────────────────────────────────────────────── */}

      <section
        id="skills"
        className="
          py-24
          px-6
          border-t
          border-white/[0.05]
          overflow-hidden
        "
      >

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }

          @keyframes marquee-reverse {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0%); }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }

          .pause-on-hover:hover .animate-marquee,
          .pause-on-hover:hover .animate-marquee-reverse {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono text-blue-400">
              02
            </span>

            <div className="h-px w-10 bg-blue-400/30" />

            <p className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
              Tech Stack
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Keahlian Teknis
          </h2>

          <p className="text-sm text-zinc-500 mt-3 max-w-md">
            Teknologi yang saya gunakan untuk
            membangun aplikasi web dan mobile.
          </p>
        </div>

          <div className="space-y-8">

            {skillCategories.map(
              (category, index) => (
                <div
                  key={index}
                  className="
                    relative
                    flex
                    flex-col
                    border
                    border-white/[0.07]
                    bg-[#0f1115]/60
                    py-8
                    rounded-2xl
                    overflow-hidden
                    pause-on-hover
                  "
                >

                  <div className="flex items-center gap-3 px-8 mb-8">

                    <Sparkles className="w-4 h-4 text-blue-400" />

                    <h3
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-zinc-300
                      "
                    >
                      {category.title}
                    </h3>

                  </div>

                  <div className="flex overflow-hidden relative w-full">

                    <div
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-16
                        sm:w-24
                        bg-gradient-to-r
                        from-[#0f1115]
                        to-transparent
                        z-10
                        pointer-events-none
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-y-0
                        right-0
                        w-16
                        sm:w-24
                        bg-gradient-to-l
                        from-[#0f1115]
                        to-transparent
                        z-10
                        pointer-events-none
                      "
                    />

                    <div className={`flex gap-4 px-4 min-w-max ${index % 2 === 1 ? "animate-marquee-reverse" : "animate-marquee"}`}>

                      {[
                        ...category.items,
                        ...category.items,
                        ...category.items,
                      ].map(
                        (item, i) => {
                          const IconComponent =
                            item.icon;

                          return (
                            <div
                              key={i}
                              className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                p-4
                                bg-[#111318]/90
                                border
                                border-white/[0.06]
                                hover:border-blue-400/30
                                hover:bg-blue-400/[0.03]
                                rounded-xl
                                transition-all
                                duration-300
                                w-[110px]
                                sm:w-[135px]
                                shrink-0
                                cursor-pointer
                                group
                              "
                            >
                              <IconComponent
                                className={`
                                  text-3xl
                                  sm:text-4xl
                                  ${item.color}
                                  mb-3
                                  group-hover:scale-110
                                  transition-transform
                                  duration-300
                                `}
                              />

                              <span
                                className="
                                  text-xs
                                  font-medium
                                  text-zinc-400
                                  group-hover:text-zinc-200
                                  text-center
                                  transition-colors
                                "
                              >
                                {item.name}
                              </span>
                            </div>
                          );
                        }
                      )}

                    </div>
                  </div>
                </div>
              )
            )}

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          CONTACT
      ──────────────────────────────────────────────────────────────────── */}

      <section
        id="contact"
        className="
          py-24
          px-6
          border-t
          border-white/[0.05]
        "
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">

            <div className="flex justify-center items-center gap-3 mb-4">

              <div className="h-px w-10 bg-blue-400/30" />

              <span className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">
                03 / Contact
              </span>

              <div className="h-px w-10 bg-blue-400/30" />

            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mari Berkolaborasi
            </h2>

            <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
              Terbuka untuk kesempatan magang, Junior Web &
              Mobile Developer, freelance, maupun project
              kolaboratif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Left */}

            <div className="space-y-4">

              <h3
                className="
                  text-xs
                  font-semibold
                  text-zinc-400
                  uppercase
                  tracking-wider
                  mb-4
                "
              >
                Kontak Langsung
              </h3>

              {/* WhatsApp */}

              <a
                href="https://wa.me/qr/Y7TS5AU4MVPMM1"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  border
                  border-white/[0.07]
                  hover:border-blue-400/30
                  bg-[#0f1115]/70
                  hover:bg-blue-400/[0.03]
                  rounded-xl
                  transition-all
                  group
                "
              >
                <div
                  className="
                    p-3
                    rounded-lg
                    bg-blue-400/[0.07]
                    text-blue-400
                    group-hover:bg-blue-400
                    group-hover:text-zinc-950
                    transition-colors
                  "
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                    WhatsApp
                  </p>

                  <p className="text-sm font-medium text-zinc-200">
                    Chat Langsung
                  </p>
                </div>
              </a>

              {/* Email */}

              <a
                href="mailto:dayatiza774@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  border
                  border-white/[0.07]
                  hover:border-blue-400/30
                  bg-[#0f1115]/70
                  hover:bg-blue-400/[0.03]
                  rounded-xl
                  transition-all
                  group
                "
              >
                <div
                  className="
                    p-3
                    rounded-lg
                    bg-blue-400/[0.07]
                    text-blue-400
                    group-hover:bg-blue-400
                    group-hover:text-zinc-950
                    transition-colors
                  "
                >
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                    Email
                  </p>

                  <p className="text-sm font-medium text-zinc-200">
                    dayatiza774@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/hidayat-0429"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  border
                  border-white/[0.07]
                  hover:border-blue-400/30
                  bg-[#0f1115]/70
                  hover:bg-blue-400/[0.03]
                  rounded-xl
                  transition-all
                  group
                "
              >
                <div
                  className="
                    p-3
                    rounded-lg
                    bg-blue-400/[0.07]
                    text-blue-400
                    group-hover:bg-blue-400
                    group-hover:text-zinc-950
                    transition-colors
                  "
                >
                  <GithubIcon className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                    GitHub
                  </p>

                  <p className="text-sm font-medium text-zinc-200">
                    github.com/hidayat-0429
                  </p>
                </div>
              </a>

            </div>

            {/* Right */}

            <form
              onSubmit={handleSubmit}
              className="
                border
                border-white/[0.07]
                bg-[#0f1115]/70
                p-6
                rounded-2xl
                space-y-5
              "
            >

              <div className="mb-1">

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-zinc-200
                    uppercase
                    tracking-wider
                  "
                >
                  Kirim Pesan
                </h3>

                <p className="text-xs text-zinc-600 mt-1">
                  Isi form dan lanjutkan percakapan melalui WhatsApp.
                </p>

              </div>

              {/* Name */}

              <div>

                <label className="block text-xs font-mono text-zinc-500 mb-2">
                  Nama
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Nama Lengkap"
                  className="
                    w-full
                    bg-[#08090c]
                    border
                    border-white/[0.07]
                    focus:border-blue-400/40
                    focus:bg-blue-400/[0.02]
                    text-sm
                    text-zinc-100
                    placeholder:text-zinc-700
                    rounded-lg
                    p-3.5
                    outline-none
                    transition-all
                  "
                />
              </div>

              {/* Email */}

              <div>

                <label className="block text-xs font-mono text-zinc-500 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="nama@email.com"
                  className="
                    w-full
                    bg-[#08090c]
                    border
                    border-white/[0.07]
                    focus:border-blue-400/40
                    focus:bg-blue-400/[0.02]
                    text-sm
                    text-zinc-100
                    placeholder:text-zinc-700
                    rounded-lg
                    p-3.5
                    outline-none
                    transition-all
                  "
                />
              </div>

              {/* Message */}

              <div>

                <label className="block text-xs font-mono text-zinc-500 mb-2">
                  Pesan
                </label>

                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Halo Hidayat, saya tertarik mendiskusikan..."
                  className="
                    w-full
                    bg-[#08090c]
                    border
                    border-white/[0.07]
                    focus:border-blue-400/40
                    focus:bg-blue-400/[0.02]
                    text-sm
                    text-zinc-100
                    placeholder:text-zinc-700
                    rounded-lg
                    p-3.5
                    outline-none
                    transition-all
                    resize-none
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  py-3.5
                  bg-blue-400
                  hover:bg-blue-300
                  disabled:opacity-60
                  text-zinc-950
                  font-bold
                  text-xs
                  uppercase
                  tracking-wider
                  rounded-lg
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  shadow-blue-500/10
                "
              >
                {isSubmitting ? (
                  "Membuka WhatsApp..."
                ) : (
                  <>
                    <WhatsAppIcon className="w-4 h-4" />
                    Kirim ke WhatsApp
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          FOOTER
      ──────────────────────────────────────────────────────────────────── */}

      <footer
        className="
          border-t
          border-white/[0.05]
          py-8
          text-center
        "
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Mukhammad Nur Hidayat
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-700">
              <span>Built with</span>
              <span className="text-blue-400">
                Next.js
              </span>
              <span>×</span>
              <span className="text-blue-400">
                Tailwind
              </span>
            </div>

          </div>
        </div>
      </footer>

      {/* ────────────────────────────────────────────────────────────────────
          BACK TO TOP
      ──────────────────────────────────────────────────────────────────── */}

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Kembali ke atas"
            className="
              fixed
              bottom-6
              right-6
              p-3
              rounded-xl
              bg-blue-400
              hover:bg-blue-300
              text-zinc-950
              transition-all
              shadow-lg
              shadow-blue-500/10
              z-40
            "
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}