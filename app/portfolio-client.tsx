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
  Send,
  GraduationCap,
  Briefcase,
  Terminal,
} from "lucide-react";

import { FaJava, FaCss3Alt } from "react-icons/fa";
import {
  SiHtml5, SiJavascript, SiPhp, SiDart, SiNextdotjs, SiReact,
  SiLaravel, SiFlutter, SiTailwindcss, SiMysql, SiSupabase,
  SiFirebase, SiGit, SiAndroidstudio, SiTypescript, SiPostgresql,
  SiPrisma, SiLivewire,
} from "react-icons/si";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: "WEB" | "MOBILE";
  type?: string;
  featured?: boolean;
  role?: string;
  tech: string[];
  description: string;
  github: string;
  secondaryGithub?: string;
  demo?: string;
  image: string;
  metrics?: string[];
}

interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
  kind: "education" | "experience";
}

// ─── Data Proyek ─────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    number: "01",
    title: "Finance Notes",
    subtitle: "Mobile App + Backend API",
    category: "MOBILE",
    type: "MOBILE / FULL-STACK",
    featured: true,
    role: "Full-Stack Developer",
    tech: ["React Native", "Expo", "TypeScript", "Laravel", "Sanctum", "MySQL"],
    description:
       "Aplikasi catatan keuangan pribadi. Awalnya bikin buat sendiri karena males nyatet di notes. Ada autentikasi, CRUD transaksi lengkap, backend terpisah pakai Laravel + Sanctum.",
    github: "https://github.com/hidayat-0429/catatan-keuangan",
    secondaryGithub: "https://github.com/hidayat-0429/catatan-keuangan-api",
    image: "/project-finance-app.png",
    metrics: ["Autentikasi pakai Sanctum", "CRUD transaksi lengkap", "Backend API terpisah"],
  },
  {
    number: "02",
    title: "Car Rental App",
    subtitle: "Aplikasi Rental Mobil",
    category: "WEB",
    role: "Full-Stack Developer",
    tech: ["Next.js", "Prisma", "NextAuth", "PostgreSQL"],
    description:
       "Web app rental mobil. Fiturnya standar: pesan mobil, kelola armada, login user. Pakai Next.js sama Prisma biar cepet development-nya.",
    github: "https://github.com/hidayat-0429/car-rental",
    image: "/project-car-rental.png",
    metrics: ["Login pakai NextAuth", "Kelola armada mobil"],
  },
  {
    number: "03",
    title: "Task Reminder App",
    subtitle: "Pengingat Tugas Kuliah",
    category: "MOBILE",
    role: "Mobile Developer",
    tech: ["Flutter", "Supabase", "Firebase FCM"],
    description:
        "App pengingat tugas kuliah. Data sinkron real-time pakai Supabase, ada push notification biar gak lupa deadline. Lumayan membantu waktu tugas lagi numpuk.",
    github: "https://github.com/hidayat-0429/pengingat_kuliah",
    image: "/project-task-reminder.png",
    metrics: ["Sinkronisasi real-time", "Push notification"],
  },
  {
    number: "04",
    title: "Desa Information Portal",
    subtitle: "Portal Web Desa",
    category: "WEB",
    role: "Full-Stack Developer",
    tech: ["Laravel", "Livewire", "Tailwind CSS"],
    description:
       "Portal desa yang dibikin waktu program KKN. Buat ngelola profil desa, berita, UMKM, wisata. Sekarang masih dipake sama desanya.",
    github: "https://github.com/hidayat-0429/kkn-umkm",
    image: "/project-desa.png",
    metrics: ["5 modul: profil, berita, UMKM, wisata, pengaduan"],
  },
  {
    number: "05",
    title: "Weather App",
    subtitle: "Aplikasi Cuaca",
    category: "MOBILE",
    role: "Mobile Developer",
    tech: ["Flutter", "Firebase FCM", "REST API"],
    description:
       "Aplikasi cuaca simple. Ngambil data dari API, deteksi lokasi otomatis, ada push notification juga. Project latihan awal pas belajar Flutter.",
    github: "https://github.com/hidayat-0429/aplikasi_cuaca",
    image: "/project-weather.png",
    metrics: ["Data cuaca real-time", "Geolokasi otomatis"],
  },
];

// ─── Data Timeline (Pendidikan & Pengalaman) ─────────────────────────────────
// TODO: sesuaikan periode & detail di bawah ini dengan data asli kamu.

const timelineItems: TimelineItem[] = [
  {
    period: "2023 - Sekarang",
    title: "Teknik Informatika",
    place: "Universitas Yudharta Pasuruan",
    description: "Fokus di Mobile & Game Programming. Lebih banyak belajar dari project sendiri daripada teori di kelas.",
    kind: "education",
  },
  {
    period: "2026",
    title: "Kuliah Kerja Nyata (KKN)",
    place: "Program Desa",
    description: "Bikin portal informasi desa pakai Laravel. Projectnya masih jalan sampai sekarang.",
    kind: "experience",
  },
  {
    period: "Sekarang",
    title: "Full-Stack & Mobile Developer",
    place: "Freelance / Project Pribadi",
    description: "Ngerjain project web & mobile dari nol. Kadang freelance, kadang project iseng sendiri.",
    kind: "experience",
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
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
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
      { name: "Livewire", icon: SiLivewire, color: "text-pink-400" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-white" },
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-600" },
      { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-500" },
    ],
  },
];

// ─── Reusable: Section Heading ───────────────────────────────────────────────

function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[11px] text-zinc-500">{index}</span>
        <div className="h-px w-12 bg-gradient-to-r from-zinc-700 to-transparent" />
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight text-zinc-50 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-zinc-300">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

// ── Icons ───────────────────────────────────────────────────────────────────

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

// ─── Project Image ──────────────────────────────────────────────────────────

function ProjectCardImage({
  src, alt, category,
}: { src: string; alt: string; category: "WEB" | "MOBILE" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1115] to-[#08090c]">
        <div className="w-14 h-14 rounded-2xl border border-zinc-700 bg-zinc-800 flex items-center justify-center mb-4">
          <Code2 className="w-7 h-7 text-zinc-500" />
        </div>
        <span className="text-xs font-mono text-zinc-500">{alt}</span>
        <span className="text-[10px] text-zinc-600 mt-1">Preview unavailable</span>
      </div>
    );
  }

  if (category === "WEB") {
    return (
      <div className="w-full h-full bg-[#08090c] flex flex-col group-hover:scale-[1.02] transition-transform duration-700 ease-out">
        <div className="bg-[#111318] px-3 py-2.5 flex items-center gap-1.5 border-b border-white/[0.06]">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
          <div className="ml-3 h-4 flex-1 rounded-md bg-white/[0.03] border border-white/[0.04]" />
        </div>
        <div className="relative flex-1 overflow-hidden bg-zinc-950">
          <img src={src} alt={alt} loading="lazy"
              className="w-full h-auto"
              onError={() => setHasError(true)} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#08090c] flex items-end justify-center p-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out overflow-hidden">
      <div className="absolute w-32 h-56 rounded-full bg-white/[0.03] blur-[50px] pointer-events-none" />
      <div className="relative h-full max-h-60 lg:max-h-[380px] aspect-[9/19.5] border-[3px] border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/60 bg-black">
        <img src={src} alt={alt} loading="lazy"
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)} />
      </div>
    </div>
  );
}

// ─── Hover Overlay CTA ──────────────────────────────────────────────────────

function HoverOverlay({ label = "Lihat Proyek" }: { label?: string }) {
  return (
    <div className="
      absolute inset-0 z-20 flex items-center justify-center
      bg-gradient-to-t from-black/80 via-black/40 to-black/30 backdrop-blur-[2px]
      opacity-0 group-hover:opacity-100 transition-opacity duration-300
    ">
      <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-black text-xs font-semibold uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {label} <ExternalLink className="w-3.5 h-3.5" />
      </span>
    </div>
  );
}

// ─── Featured Project Card ───────────────────────────────────────────────────

function FeaturedProjectCard({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.article
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.6 }}
  whileHover={{ y: -4 }}
  className="
        group relative
        border border-white/[0.08]
        bg-gradient-to-b from-[#101218] to-[#0d0e12]
        hover:border-zinc-700
        rounded-2xl overflow-hidden
        shadow-2xl shadow-black/30
        transition-colors duration-500
      "
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* Watermark nomor */}
      <span aria-hidden className="
        pointer-events-none select-none absolute -top-6 right-4 lg:right-8 z-0
        font-display text-[7rem] lg:text-[10rem] font-bold leading-none
        text-white/[0.015]
      ">
        {project.number}
      </span>

      <div className="relative flex flex-col lg:flex-row">

        {/* Image Side */}
        <div
          className="
            relative lg:w-[55%]
            h-64 sm:h-80 lg:h-auto lg:min-h-[420px]
            bg-[#08090c]
            border-b lg:border-b-0 lg:border-r border-white/[0.06]
            flex items-center justify-center
            p-6 sm:p-10
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_65%)] pointer-events-none" />

          {!hasError ? (
            <>
              <div className="relative h-full w-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <div className="absolute w-56 h-[420px] rounded-full bg-white/[0.015] blur-[80px] pointer-events-none" />
                <div className="relative h-full max-h-60 lg:max-h-[380px] aspect-[9/19.5] border-[3px] border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/60 bg-black">
                  <div className="absolute top-0 inset-x-0 mx-auto w-[40%] h-2.5 bg-zinc-800 rounded-b-md z-10" />
                  <img
                    src={project.image}
                    alt={`Screenshot aplikasi ${project.title}`}
                    onError={() => setHasError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <HoverOverlay label="Lihat Repository" />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-zinc-600">
              <div className="w-16 h-16 rounded-2xl border border-zinc-700 bg-zinc-800 flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-zinc-500" />
              </div>
              <span className="text-xs font-mono">{project.title}</span>
              <span className="text-[10px] mt-1">Preview unavailable</span>
            </div>
          )}
        </div>

        {/* Info Side */}
        <div className="lg:w-[45%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">

          <div className="space-y-5">

            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-[11px] text-zinc-600">{project.number}</span>
              <div className="h-px w-5 bg-zinc-800" />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Smartphone className="w-3 h-3 text-zinc-400" />
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                  {project.type ?? project.category}
                </span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                Featured
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight text-zinc-50 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{project.subtitle}</p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-1 gap-2">
                {project.metrics.map((m) => (
                  <div key={m} className="flex items-center gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-xs text-zinc-300">{m}</span>
                  </div>
                ))}
              </div>
            )}

            {project.role && (
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Role</span>
                <div className="h-px w-4 bg-zinc-800" />
                <span className="text-[11px] font-mono text-zinc-300">{project.role}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-[11px] font-mono border border-white/[0.07] text-zinc-300 px-2.5 py-1 bg-white/[0.02] rounded-md">
                  {tech}
                </span>
              ))}
            </div>

          </div>

          <div className="flex flex-wrap gap-2.5 pt-2 border-t border-white/[0.05]">
            <a
              href={project.github} target="_blank" rel="noreferrer"
              aria-label={`Buka repository Mobile App ${project.title}`}
              className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] px-4 py-2.5 rounded-lg transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" /> Mobile App
            </a>
            {project.secondaryGithub && (
              <a
                href={project.secondaryGithub} target="_blank" rel="noreferrer"
                aria-label={`Buka repository API ${project.title}`}
                className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] px-4 py-2.5 rounded-lg transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" /> API Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo} target="_blank" rel="noreferrer"
                aria-label={`Buka Live Demo ${project.title}`}
                className="flex items-center gap-2 text-xs font-semibold text-black bg-zinc-100 hover:bg-white px-4 py-2.5 rounded-lg transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<"ALL" | "WEB" | "MOBILE">("ALL");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    activeTab === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const MY_WA_NUMBER = "6285816172367";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = [
      `Halo Hidayat, saya *${formData.name}*.`,
      "",
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.open(
      "https://wa.me/" + MY_WA_NUMBER + "?text=" + encodeURIComponent(waText),
      "_blank",
      "noopener,noreferrer"
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Keahlian", href: "#skills" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 antialiased overflow-x-hidden selection:bg-white/20 selection:text-white scroll-smooth motion-reduce:scroll-auto">

      {/* ── Global Background ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#0a0a0a]" />

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "border-b border-white/[0.08]" : "border-b border-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg border border-zinc-700 bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:border-zinc-600 group-hover:bg-zinc-700 transition-all">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="leading-none">
              <span className="block text-sm font-semibold tracking-wide">Hidayat</span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-zinc-500 mt-0.5">
                Developer
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.href} href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact"
              className="text-xs uppercase tracking-widest border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 px-4 py-2 rounded-lg transition-all">
              Kontak
            </a>
          </div>

          <button aria-label="Toggle Menu"
              className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.05] bg-[#0a0a0a]/95 backdrop-blur-sm"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-3.5 border-b border-white/[0.04] last:border-0">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

          {/* Foto profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img
              src="/profile.jpg"
              alt="Foto Mukhammad Nur Hidayat"
              className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700 hover:border-zinc-600 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 mb-8 flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <p className="text-[10px] sm:text-xs font-medium tracking-wider text-zinc-300 uppercase">
              Available for Internship & Freelance
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02] mb-6 text-white"
          >
            Mukhammad Nur Hidayat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Bikin aplikasi web & mobile. Suka ngoding dari backend sampai frontend. Saat ini lagi fokus di Next.js, Laravel, sama Flutter.
          </motion.p>

          {/* Signature element: kartu identitas gaya "code object", ganti generic tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="w-full max-w-md mb-10 text-left rounded-xl border border-white/[0.08] bg-[#0c0d11]/80 backdrop-blur-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
              <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-[11px] font-mono text-zinc-500">profile.ts</span>
            </div>
            <div className="px-4 py-4 font-mono text-[12.5px] sm:text-[13px] leading-relaxed">
              <p><span className="text-white">const</span> <span className="text-zinc-300">developer</span> = {"{"}</p>
              <p className="pl-4"><span className="text-zinc-400">role</span>: <span className="text-zinc-200">"Full-Stack & Mobile Developer"</span>,</p>
              <p className="pl-4"><span className="text-zinc-400">stack</span>: [<span className="text-zinc-200">"Next.js"</span>, <span className="text-zinc-200">"Laravel"</span>, <span className="text-zinc-200">"Flutter"</span>],</p>
              <p className="pl-4"><span className="text-zinc-400">base</span>: <span className="text-zinc-200">"Pasuruan, Indonesia"</span>,</p>
              <p className="pl-4"><span className="text-zinc-400">status</span>: <span className="text-zinc-200">"open to internship"</span>,</p>
              <p>{"}"}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="#projects"
              className="group px-7 py-3.5 bg-zinc-100 hover:bg-white text-black text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-xl transition-all flex items-center gap-2">
              Lihat Proyek
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="/CV_M._Nur_Hidayat.pdf" download
              className="px-7 py-3.5 border border-zinc-700 hover:border-zinc-600 text-zinc-100 hover:bg-zinc-900 bg-transparent text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-xl transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex items-center gap-2 text-xs text-zinc-500"
          >
            <MapPin className="w-3.5 h-3.5 text-zinc-600" />
            Pasuruan, Indonesia
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ── About / Tentang ── */}
      <section id="about" className="py-28 sm:py-32 px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Tentang"
            highlight="Saya"
            description="Siapa saya, ngapain aja, dan gimana saya sampai di sini."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Narasi */}
            <div className="lg:col-span-2 space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                Mahasiswa Teknik Informatika yang lebih suka ngoding daripada belajar teori. Project-project yang saya kerjakan biasanya berangkat dari masalah nyata, mulai dari aplikasi catatan keuangan buat sendiri, sampai portal desa waktu KKN.
              </p>
              <p>
                Biasanya ngerjain project dari A-Z: bikin database, API, sampai tampilan UI-nya. Stack favorit sekarang Next.js, Laravel, sama Flutter. Masih belajar banyak hal, tapi udah cukup nyaman bikin aplikasi dari nol sampai jadi.
              </p>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-3">
              <ol className="relative border-l border-white/[0.08] ml-1">
                {timelineItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="mb-9 ml-6 last:mb-0"
                  >
                    <span className="absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full bg-[#0a0a0a] border border-zinc-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                    </span>
                    <div className="flex items-center gap-2 mb-1.5">
                      {item.kind === "education" ? (
                        <GraduationCap className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      ) : (
                        <Briefcase className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      )}
                      <span className="text-[11px] font-mono text-zinc-500">{item.period}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-100">{item.title}</h3>
                    <p className="text-xs text-zinc-500 mb-1.5">{item.place}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-md">{item.description}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 sm:py-32 px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">

          {/* Header + Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <SectionHeading
              index="02"
              eyebrow="Selected Works"
              title="Proyek"
              highlight="Pilihan"
              description="Beberapa project web & mobile yang udah saya kerjain."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex border border-white/[0.08] bg-white/[0.02] p-1 rounded-xl shrink-0"
            >
              {(["ALL", "WEB", "MOBILE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-label={`Filter project: ${tab}`}
                  aria-pressed={activeTab === tab}
                  className={`
                    relative text-xs uppercase tracking-wider font-medium
                    px-4 py-2 rounded-lg transition-all duration-300
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-500 focus-visible:outline-offset-2
                    ${activeTab === tab ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-200"}
                  `}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-lg border border-zinc-700 bg-zinc-800"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{tab}</span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Featured */}
          <AnimatePresence mode="wait">
            {(activeTab === "ALL" || activeTab === "MOBILE") && (
              <motion.div
                key="featured-wrapper"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <FeaturedProjectCard project={projects[0]} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.filter((p) => !p.featured).map((project, index) => (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="
                    group relative flex flex-col
                    border border-white/[0.07]
                    bg-[#0f1115]/80 hover:border-zinc-700
                    hover:-translate-y-1
                    transition-all duration-300
                    rounded-2xl overflow-hidden
                    shadow-xl shadow-black/20
                  "
                >
                  {/* Image */}
                  <div className="relative w-full h-52 overflow-hidden bg-[#08090c] border-b border-white/[0.06] shrink-0">
                    <ProjectCardImage src={project.image} alt={`Screenshot ${project.title}`} category={project.category} />
                    <HoverOverlay label="Lihat Repository" />
                    {/* Watermark nomor */}
                    <span aria-hidden className="pointer-events-none select-none absolute top-2 right-4 z-10 font-display text-5xl font-bold leading-none text-white/[0.03]">
                      {project.number}
                    </span>
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                      {project.category === "WEB" ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-display text-base font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-0.5">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
                        {project.metrics.map((m) => (
                          <span key={m} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                            <Sparkles className="w-3 h-3 text-zinc-500 shrink-0" />{m}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono border border-white/[0.07] text-zinc-300 px-2 py-0.5 bg-white/[0.02] rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-1 border-t border-white/[0.05]">
                      <a
                        href={project.github} target="_blank" rel="noreferrer"
                        aria-label={`Buka repository ${project.title}`}
                        className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] px-3 py-2.5 rounded-lg transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> Repository
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo} target="_blank" rel="noreferrer"
                          aria-label={`Buka Live Demo ${project.title}`}
                          className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-black bg-zinc-100 hover:bg-white px-3 py-2.5 rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

          {/* ── Skills ── */}
      <section id="skills" className="py-28 sm:py-32 px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">

          <SectionHeading
            index="03"
            eyebrow="Tech Stack"
            title="Keahlian"
            highlight="Teknis"
            description="Tools & teknologi yang biasa saya pakai."
          />

          <div className="mt-12 space-y-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="
                  relative flex flex-col py-7
                  border border-white/[0.07] bg-[#0f1115]/60
                  rounded-2xl overflow-hidden
                "
              >
                <div className="flex items-center gap-3 px-6 sm:px-8 mb-7">
                  <Sparkles className="w-4 h-4 text-zinc-400" />
                  <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 px-6 sm:px-8">
                  {category.items.map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={i}
                        className="
                          flex flex-col items-center justify-center p-4
                          bg-[#111318]/90 border border-white/[0.06]
                          hover:border-violet-400/30 hover:bg-violet-400/[0.04]
                          rounded-xl transition-all duration-300
                          group
                        "
                      >
                        <IconComponent className={`text-3xl sm:text-4xl ${item.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-xs font-medium text-zinc-300 group-hover:text-zinc-100 text-center transition-colors">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 sm:py-32 px-6 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-zinc-700" />
              <span className="font-mono text-[10px] text-zinc-500 tracking-[0.25em] uppercase">04 / Contact</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-zinc-700" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight text-zinc-50 mb-4">
              Mari <span className="text-zinc-300">Berkolaborasi</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
              Lagi cari kesempatan magang atau posisi Junior Developer. Terbuka juga untuk freelance atau kolaborasi project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Left Direct contacts */}
            <div>
              <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                Kontak Langsung
              </h3>

              <div className="space-y-3">
                {[
                  {
                    href: "https://wa.me/6285816172367",
                    label: "WhatsApp",
                    value: "Chat Langsung",
                    icon: <WhatsAppIcon className="w-5 h-5" />,
                    external: true,
                  },
                  {
                    href: "mailto:dayatiza774@gmail.com",
                    label: "Email",
                    value: "dayatiza774@gmail.com",
                    icon: <Mail className="w-5 h-5" />,
                    external: false,
                  },
                  {
                    href: "https://github.com/hidayat-0429",
                    label: "GitHub",
                    value: "github.com/hidayat-0429",
                    icon: <GithubIcon className="w-5 h-5" />,
                    external: true,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="
                      flex items-center gap-4 p-4
                      border border-white/[0.07] hover:border-zinc-700
                      bg-[#0f1115]/70 hover:bg-zinc-900
                      rounded-xl transition-all group
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-500 focus-visible:outline-offset-2
                    "
                  >
                    <div className="p-3 rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-zinc-100 group-hover:text-black transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-zinc-200 truncate">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubmit}
              className="border border-white/[0.07] bg-[#0f1115]/70 p-6 sm:p-7 rounded-2xl space-y-5"
            >
              <div>
                <h3 className="font-display text-sm font-semibold text-zinc-200 uppercase tracking-wider">Kirim Pesan</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Isi form ini, nanti lanjut chat lewat WhatsApp.
                </p>
              </div>

              {[
                { id: "name", label: "Nama", type: "text", placeholder: "Nama Lengkap" },
                { id: "email", label: "Email", type: "email", placeholder: "nama@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-xs font-mono text-zinc-400 mb-2">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as "name" | "email"]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    className="
                      w-full bg-[#08090c] border border-white/[0.07]
                      focus:border-white/[0.2] focus:bg-white/[0.02]
                      text-sm text-zinc-100 placeholder:text-zinc-600
                      rounded-lg p-3.5 outline-none transition-all
                    "
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Halo Hidayat, saya tertarik mendiskusikan..."
                  className="
                    w-full bg-[#08090c] border border-white/[0.07]
                    focus:border-white/[0.2] focus:bg-white/[0.02]
                    text-sm text-zinc-100 placeholder:text-zinc-600
                    rounded-lg p-3.5 outline-none transition-all resize-none
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3.5 bg-zinc-100 hover:bg-white disabled:opacity-60
                  text-black font-semibold text-xs uppercase tracking-wider
                  rounded-lg transition-all flex items-center justify-center gap-2
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-500 focus-visible:outline-offset-2
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin motion-reduce:animate-none" />
                    Membuka WhatsApp...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim ke WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Mukhammad Nur Hidayat
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span>Built with</span>
            <span className="text-zinc-300">Next.js</span>
            <span>×</span>
            <span className="text-zinc-300">Tailwind</span>
          </div>
        </div>
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
            className="fixed bottom-6 right-6 p-3 rounded-xl bg-zinc-100 hover:bg-white text-black transition-colors z-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-500 focus-visible:outline-offset-2"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}