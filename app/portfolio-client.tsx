"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Globe,
  Smartphone,
  Download,
  Menu,
  X,
  ArrowUp,
  ArrowUpRight,
  Code2,
  MapPin,
  Send,
  GraduationCap,
  Briefcase,
  Terminal,
  Check,
  GitBranch,
} from "lucide-react";

import { FaJava, FaCss3Alt } from "react-icons/fa";
import {
  SiHtml5, SiJavascript, SiPhp, SiDart, SiNextdotjs, SiReact,
  SiLaravel, SiFlutter, SiTailwindcss, SiMysql, SiSupabase,
  SiFirebase, SiGit, SiAndroidstudio, SiTypescript, SiPostgresql,
  SiPrisma, SiLivewire,
} from "react-icons/si";

import { projects, type Project } from "./data/projects";
import ThemeToggle from "./components/theme-toggle";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
  kind: "education" | "experience";
}

// ─── Data Timeline (Pendidikan & Pengalaman) ─────────────────────────────────

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
    description: "Bikin portal informasi desa, umkm, wisata, dan berita pakai Laravel.",
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
      { name: "Next.js", icon: SiNextdotjs, color: "text-ink" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
      { name: "Livewire", icon: SiLivewire, color: "text-pink-400" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-ink" },
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

const tickerItems = [
  "Next.js", "Laravel", "Flutter", "React Native", "Supabase",
  "Prisma", "Tailwind", "Terbuka untuk magang", "Freelance friendly",
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
      <p className="font-meta text-[12px] text-accent mb-4">{index} / {eyebrow}</p>
      <h2 className="font-display text-section text-ink">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-accent">{highlight}</span>
          </>
        )}
      </h2>
      <div className="mt-5 h-px w-24 bg-accent" />
      {description && (
        <p className="mt-5 text-lead text-ink-2 max-w-xl leading-relaxed">
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

// ─── Signature: build log yang mengetik sendiri ──────────────────────────────

const LOG_LINES = [
  { text: "$ npm run ship", cls: "text-[#e9eef8]" },
  { text: "✓ web     next.js 16 + prisma", cls: "text-lime" },
  { text: "✓ api     laravel + sanctum", cls: "text-lime" },
  { text: "✓ mobile  flutter / react native", cls: "text-lime" },
  { text: "→ status  open to internship", cls: "text-amber" },
];

function BuildLog() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setInterval(() => {
      setRevealed((n) => {
        if (reduce || n >= LOG_LINES.length) {
          clearInterval(t);
          return reduce ? LOG_LINES.length : n;
        }
        return n + 1;
      });
    }, reduce ? 0 : 420);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.65 }}
      className="w-full max-w-md mt-6 text-left rounded-kartu-sm border border-kode-line bg-kode overflow-hidden panel"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-kode-line bg-white/[0.03]">
        <span className="w-2 h-2 rounded-full bg-danger/80" />
        <span className="w-2 h-2 rounded-full bg-amber/80" />
        <span className="w-2 h-2 rounded-full bg-lime/80" />
        <Terminal className="w-3.5 h-3.5 text-lime ml-2" />
        <span className="text-[11px] font-mono text-[#9aa7c7]">build.log — ~/hidayat</span>
      </div>
      <div className="px-4 py-3 font-mono text-[12.5px] sm:text-[13px] leading-snug min-h-[120px]">
        {LOG_LINES.slice(0, revealed).map((line) => (
          <p key={line.text} className={line.cls}>{line.text}</p>
        ))}
        <span className="blink text-lime">▍</span>
      </div>
    </motion.div>
  );
}

// ─── Project Image ──────────────────────────────────────────────────────────

function ProjectCardImage({
  src, alt, category,
}: { src: string; alt: string; category: "WEB" | "MOBILE" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-raised to-sunken">
        <div className="w-14 h-14 rounded-kartu-sm border border-line-strong bg-ink/[0.04] flex items-center justify-center mb-4">
          <Code2 className="w-7 h-7 text-ink-3" />
        </div>
        <span className="text-xs font-mono text-ink-3">{alt}</span>
        <span className="text-[10px] text-ink-3 mt-1">Preview unavailable</span>
      </div>
    );
  }

  if (category === "WEB") {
    return (
      <div className="w-full h-full bg-sunken flex flex-col group-hover:scale-[1.02] transition-transform duration-700 ease-out">
        <div className="bg-raised px-3 py-2.5 flex items-center gap-1.5 border-b border-line">
          <div className="w-2 h-2 rounded-full bg-danger/70" />
          <div className="w-2 h-2 rounded-full bg-amber/70" />
          <div className="w-2 h-2 rounded-full bg-lime/80" />
          <div className="ml-3 h-4 flex-1 rounded-md bg-ink/[0.04] border border-line" />
        </div>
        <div className="relative flex-1 overflow-hidden bg-sunken">
          <Image src={src} alt={alt} loading="lazy" fill sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
              onError={() => setHasError(true)} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-sunken grid-paper flex items-end justify-center p-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out overflow-hidden">
      <div className="absolute w-40 h-64 rounded-full bg-accent/10 blur-[55px] pointer-events-none" />
      <div className="relative h-full max-h-64 lg:max-h-[420px] aspect-[9/19.5] border-[3px] border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 bg-black">
        <Image src={src} alt={alt} loading="lazy" fill sizes="220px"
          className="object-cover object-top"
          onError={() => setHasError(true)} />
      </div>
    </div>
  );
}

// ─── Hover Overlay CTA ──────────────────────────────────────────────────────

function HoverOverlay({ slug, label = "Lihat detail" }: { slug: string; label?: string }) {
  return (
    <Link
      href={`/project/${slug}`}
      aria-label={`${label}: lihat studi karya`}
      className="
      absolute inset-0 z-20 flex items-center justify-center
      bg-[#0a1020]/75 backdrop-blur-[2px]
      opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300
    "
    >
      <span className="flex items-center gap-2 px-5 py-2.5 rounded-kontrol bg-lime text-lime-ink text-sm font-semibold translate-y-2 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all duration-300">
        {label} <ArrowUpRight className="w-4 h-4" />
      </span>
    </Link>
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
        rounded-kartu overflow-hidden
        border border-line bg-raised panel
        hover:border-accent-line
        transition-colors duration-500
      "
    >
      {/* Strip rilis */}
      <div className="relative z-10 flex items-center gap-3 px-6 sm:px-8 py-3 border-b border-line bg-sunken/70">
        <GitBranch className="w-4 h-4 text-accent" />
        <span className="font-meta text-[11px] text-ink-2">Rilis {project.number}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-lime" />
        <span className="font-meta text-[11px] text-success">Shipped</span>
        <span className="ml-auto font-meta text-[11px] text-ink-3">v1.0</span>
      </div>

      {/* Watermark nomor */}
      <span aria-hidden className="
        pointer-events-none select-none absolute -top-2 right-4 lg:right-8 z-0
        font-display text-[7rem] lg:text-[10rem] leading-none
        text-ink/[0.05]
      ">
        {project.number}
      </span>

      <div className="relative flex flex-col lg:flex-row">

        {/* Image Side */}
        <div
          className="
            relative lg:w-[52%]
            h-80 sm:h-96 lg:h-auto lg:min-h-[520px]
            bg-sunken grid-paper
            border-b lg:border-b-0 lg:border-r border-line
            flex items-center justify-center
            p-6 sm:p-10
            overflow-hidden
          "
        >
          {!hasError ? (
            <>
              <div className="relative h-full w-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <div className="absolute w-64 h-[460px] rounded-full bg-accent/10 blur-[90px] pointer-events-none" />
                <div className="relative h-full max-h-72 lg:max-h-[500px] aspect-[9/19.5] border-[3px] border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/70 bg-black">
                  <div className="absolute top-0 inset-x-0 mx-auto w-[40%] h-2.5 bg-zinc-800 rounded-b-md z-10" />
                  <Image
                    src={project.image}
                    alt={`Screenshot aplikasi ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    onError={() => setHasError(true)}
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <HoverOverlay slug={project.slug} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-ink-3">
              <div className="w-16 h-16 rounded-kartu-sm border border-line bg-sunken flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-ink-3" />
              </div>
              <span className="text-xs font-mono">{project.title}</span>
              <span className="text-[10px] mt-1">Preview unavailable</span>
            </div>
          )}
        </div>

        {/* Info Side */}
        <div className="lg:w-[48%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">

          <div className="space-y-5">

            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-kontrol bg-sunken border border-line px-3 py-1.5 font-meta text-[10px] text-ink-2">
                <Smartphone className="w-3.5 h-3.5" />
                {project.type ?? project.category}
              </span>
              <span className="rounded-kontrol bg-lime px-3 py-1.5 font-meta text-[10px] font-medium text-lime-ink">
                Unggulan
              </span>
            </div>

            <div>
              <h3 className="font-display text-[1.9rem] sm:text-[2.3rem] text-ink">
                <Link href={`/project/${project.slug}`} className="hover:text-accent transition-colors">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2.5 font-meta text-[12px] text-ink-3">{project.subtitle}</p>
            </div>

            <p className="text-[15px] text-ink-2 leading-relaxed">
              {project.description}
            </p>

            {project.metrics && (
              <div className="grid gap-2.5 border-l-2 border-accent pl-5">
                {project.metrics.map((m) => (
                  <div key={m} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-[14px] text-ink-2">{m}</span>
                  </div>
                ))}
              </div>
            )}

            {project.role && (
              <p className="font-meta text-[11px] text-ink-3">
                Peran: <span className="text-ink-2">{project.role}</span>
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="font-meta text-[10px] border border-line text-ink-2 px-2.5 py-1 bg-sunken rounded-kontrol">
                  {tech}
                </span>
              ))}
            </div>

          </div>

          <div className="flex flex-wrap gap-2.5 pt-5 border-t border-line">
            <a
              href={project.github} target="_blank" rel="noreferrer"
              aria-label={`Buka repository Mobile App ${project.title}`}
              className="flex items-center gap-2 text-sm font-medium text-ink bg-sunken hover:bg-accent-soft hover:text-accent-deep border border-line px-4 py-2.5 rounded-kontrol transition-all"
            >
              <GithubIcon className="w-4 h-4" /> Mobile App
            </a>
            {project.secondaryGithub && (
              <a
                href={project.secondaryGithub} target="_blank" rel="noreferrer"
                aria-label={`Buka repository API ${project.title}`}
                className="flex items-center gap-2 text-sm font-medium text-ink bg-sunken hover:bg-accent-soft hover:text-accent-deep border border-line px-4 py-2.5 rounded-kontrol transition-all"
              >
                <GithubIcon className="w-4 h-4" /> API Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo} target="_blank" rel="noreferrer"
                aria-label={`Buka Live Demo ${project.title}`}
                className="flex items-center gap-2 text-sm font-medium text-accent-ink bg-accent-fill hover:bg-accent-deep px-4 py-2.5 rounded-kontrol transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            <Link
              href={`/project/${project.slug}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-lime-ink bg-lime hover:brightness-105 px-4 py-2.5 rounded-kontrol transition-all"
            >
              <ArrowUpRight className="w-4 h-4" /> Studi karya
            </Link>
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
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const yPotret = useTransform(scrollY, [0, 800], [0, 80]);
  const yMesh = useTransform(scrollY, [0, 800], [0, -70]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 10);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveSection(mostVisible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    for (const id of ["about", "projects", "skills", "contact"]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

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
    { label: "Karya", href: "#projects" },
    { label: "Keahlian", href: "#skills" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-base text-ink antialiased overflow-x-hidden scroll-smooth motion-reduce:scroll-auto">

      <a href="#hero" className="skip-link">Langsung ke isi</a>

      {/* ── Navbar tetap + progress baca ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-base/85 backdrop-blur-xl border-b border-line" : "bg-transparent border-b border-transparent"
      }`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-display w-9 h-9 rounded-kontrol bg-accent text-accent-ink flex items-center justify-center text-[13px] leading-none">
              NH
            </span>
            <span className="hidden sm:block leading-none">
              <span className="block text-sm font-semibold tracking-wide">Mukhammad Nur Hidayat</span>
              <span className="block font-meta text-[9px] text-ink-3 mt-1">
                Web &amp; Mobile
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, 3).map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a key={link.href} href={link.href} aria-current={active ? "true" : undefined}
                  className={`relative rounded-kontrol px-3.5 py-2 font-meta text-[12px] transition-colors ${
                    active ? "text-accent" : "text-ink-2 hover:text-ink"
                  }`}>
                  {link.label}
                  <span className={`absolute left-3.5 right-3.5 bottom-0.5 h-[2px] bg-accent transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`} />
                </a>
              );
            })}
            <ThemeToggle />
            <a href="#contact"
              className="ml-1 rounded-kontrol bg-accent px-4 py-2 font-meta text-[12px] text-accent-ink hover:bg-accent-deep transition-colors">
              Kontak
            </a>
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <ThemeToggle compact />
            <button aria-label="Buka menu" aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-kontrol border border-line text-ink-2 hover:text-ink transition-colors">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Progress baca */}
        <div aria-hidden className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-lime via-amber to-accent transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }} />

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mx-4 mt-1 rounded-kartu-sm border border-line bg-raised/95 backdrop-blur-xl panel overflow-hidden"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-kontrol px-4 py-3 font-meta text-[12px] text-ink-2 hover:text-accent hover:bg-accent-soft transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero: kertas teknis + spotlight + log build ── */}
      <section
        id="hero"
        ref={heroRef}
        onPointerMove={onPointerMove}
        className="relative min-h-screen overflow-hidden grid-paper spot"
      >
        {/* Blob mesh parallax */}
        <motion.div
          aria-hidden
          style={{
            y: yMesh,
            background:
              "radial-gradient(circle at 35% 35%, var(--b-glow-1), transparent 60%), radial-gradient(circle at 70% 65%, var(--b-soft), transparent 65%)",
          }}
          className="pointer-events-none absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full blur-[90px]"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 sm:pt-28 pb-20 grid lg:grid-cols-12 gap-14 items-center">

          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="font-meta text-[11px] text-ink-3">Portofolio — edisi 2026.11</span>
              <span className="inline-flex items-center gap-2 rounded-kontrol bg-lime px-3 py-1.5">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-lime-ink opacity-50 animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-lime-ink" />
                </span>
                <span className="font-meta text-[10px] font-medium text-lime-ink">Open to internship</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2rem,4.6vw,4rem)] text-ink mb-5"
            >
              <span className="block">Mukhammad</span>
              <span className="block text-accent">Nur Hidayat</span>
              <span className="block">Web &amp; Mobile</span>
              <span className="block outline-name text-[clamp(1.8rem,4vw,3.4rem)]">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lead text-ink-2 leading-relaxed max-w-xl mb-6"
            >
              Bikin aplikasi web &amp; mobile. Suka ngoding dari backend sampai frontend.
              Saat ini lagi fokus di Next.js, Laravel, sama Flutter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects"
                className="group inline-flex items-center gap-2 rounded-kontrol bg-accent px-6 py-3 text-sm font-semibold text-accent-ink hover:bg-accent-deep transition-colors">
                Lihat karya
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="/CV_M._Nur_Hidayat.pdf" download
                className="inline-flex items-center gap-2 rounded-kontrol border border-line-strong px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:bg-accent-soft transition-all">
                <Download className="w-4 h-4" />
                Unduh CV
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex items-center gap-2 font-meta text-[11px] text-ink-3"
            >
              <MapPin className="w-4 h-4" />
              Pasuruan, Indonesia — UTC+7
            </motion.p>

            <BuildLog />
          </div>

          {/* Potret: bingkai teknis dengan tick sudut */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: yPotret }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <span aria-hidden className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-accent" />
              <span aria-hidden className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-accent" />
              <span aria-hidden className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-accent" />
              <span aria-hidden className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-accent" />
              <div className="rounded-kartu bg-raised border border-line panel overflow-hidden">
                <div className="flex items-center justify-between border-b border-line bg-sunken px-4 py-3">
                  <span className="font-meta text-[11px] text-ink-2">Fig.01 — Spesifikasi</span>
                  <span className="font-meta text-[10px] text-accent">2026.11</span>
                </div>
                <dl className="grid grid-cols-[76px_1fr] gap-x-3 gap-y-2.5 px-4 py-4 font-meta text-[12px]">
                  <dt className="pt-0.5 text-[10px] uppercase tracking-wider text-ink-3">Nama</dt>
                  <dd className="text-ink">Mukhammad Nur Hidayat</dd>
                  <dt className="pt-0.5 text-[10px] uppercase tracking-wider text-ink-3">Fokus</dt>
                  <dd className="text-ink">Web &amp; Mobile</dd>
                  <dt className="pt-0.5 text-[10px] uppercase tracking-wider text-ink-3">Stack</dt>
                  <dd className="text-ink">Next.js · Laravel · Flutter</dd>
                  <dt className="pt-0.5 text-[10px] uppercase tracking-wider text-ink-3">Lokasi</dt>
                  <dd className="text-ink">Pasuruan, ID — UTC+7</dd>
                  <dt className="pt-0.5 text-[10px] uppercase tracking-wider text-ink-3">Status</dt>
                  <dd className="text-success">open to internship</dd>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-meta text-[10px] text-ink-3">Gulir</span>
          <div className="w-px h-7 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* ── Marquee stack ── */}
      <div aria-hidden className="overflow-hidden border-y border-line bg-accent py-3 text-accent-ink">
        <div className="marquee-track flex w-max items-center gap-8">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8">
              {tickerItems.map((item) => (
                <React.Fragment key={item}>
                  <span className="font-meta text-[13px] whitespace-nowrap">{item}</span>
                  <span className="text-lime text-[10px]">◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── About / Tentang ── */}
      <section id="about" className="py-24 sm:py-28 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="01"
            eyebrow="Tentang saya"
            title="Kuliah informatika,"
            highlight="bangun web & mobile"
            description="Sebagian besar yang saya tahu datang dari project sendiri, bukan dari kelas."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Narasi + statistik */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative max-w-[240px]">
                <span aria-hidden className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-accent" />
                <span aria-hidden className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-accent" />
                <span aria-hidden className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-accent" />
                <span aria-hidden className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-accent" />
                <div className="rounded-kartu bg-raised p-2 border border-line panel">
                  <Image
                    src="/profile.jpg"
                    alt="Foto Mukhammad Nur Hidayat"
                    width={384}
                    height={471}
                    className="w-full rounded-kartu-sm"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 font-meta text-[10px] text-ink-3">
                  <span>Fig.02 — M. N. Hidayat</span>
                  <span className="text-accent">2026</span>
                </div>
              </div>

              <div className="space-y-5 text-[17px] text-ink-2 leading-[1.7]">
                <p>
                  Mahasiswa Teknik Informatika yang lebih suka ngoding daripada belajar teori. Project-project yang saya kerjakan biasanya berangkat dari masalah nyata, mulai dari aplikasi catatan keuangan buat sendiri, sampai portal desa waktu KKN.
                </p>
                <p>
                  Biasanya ngerjain project dari A-Z: bikin database, API, sampai tampilan UI-nya. Stack favorit sekarang Next.js, Laravel, sama Flutter. Masih belajar banyak hal, tapi udah cukup nyaman bikin aplikasi dari nol sampai jadi.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "05", label: "Rilis karya" },
                  { value: "03", label: "Stack utama" },
                  { value: "2023", label: "Mulai ngoding" },
                ].map((s) => (
                  <div key={s.label} className="rounded-kartu-sm border border-line bg-raised panel p-4">
                    <p className="font-display text-[1.9rem] text-accent leading-none">{s.value}</p>
                    <p className="mt-2 font-meta text-[10px] text-ink-3">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-3">
              <ol className="relative border-l-2 border-line ml-1">
                {timelineItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="mb-9 ml-6 last:mb-0 group relative"
                  >
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-accent group-hover:bg-lime transition-colors" />
                    <div className="flex items-center gap-2 mb-1.5">
                      {item.kind === "education" ? (
                        <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-accent shrink-0" />
                      )}
                      <span className="font-meta text-[12px] text-accent">{item.period}</span>
                    </div>
                    <h3 className="font-display text-[19px] normal-case text-ink">{item.title}</h3>
                    <p className="text-sm text-ink-3 mb-2 mt-1">{item.place}</p>
                    <p className="text-[15px] text-ink-2 leading-relaxed max-w-md">{item.description}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="hue-b py-24 sm:py-28 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto">

          {/* Header + Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <SectionHeading
              index="02"
              eyebrow="Karya pilihan"
              title="Karya"
              highlight="Pilihan"
              description="Beberapa project web & mobile yang udah saya kerjain."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex rounded-kontrol border border-line bg-raised p-1 shrink-0 panel self-start sm:self-auto"
            >
              {(["ALL", "WEB", "MOBILE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-label={`Saring karya: ${tab}`}
                  aria-pressed={activeTab === tab}
                  className={`
                    relative rounded-[6px] px-5 py-2 font-meta text-[12px] transition-colors duration-300
                    ${activeTab === tab ? "text-accent-ink" : "text-ink-2 hover:text-ink"}
                  `}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-[6px] bg-accent"
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
                    rounded-kartu overflow-hidden
                    border border-line bg-raised panel
                    hover:border-accent-line hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  {/* Sampul 16:11 */}
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-sunken border-b border-line shrink-0">
                    <ProjectCardImage src={project.image} alt={`Screenshot ${project.title}`} category={project.category} />
                    <HoverOverlay slug={project.slug} />
                    <span aria-hidden className="pointer-events-none select-none absolute top-2 right-5 z-10 font-display text-5xl leading-none text-ink/[0.08]">
                      {project.number}
                    </span>
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-kontrol border border-line bg-raised/90 backdrop-blur px-3 py-1.5 font-meta text-[10px] text-ink-2">
                      {project.category === "WEB" ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-display text-card-title normal-case text-ink">
                        <Link href={`/project/${project.slug}`} className="hover:text-accent transition-colors">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="font-meta text-[11px] text-ink-3 mt-2">{project.subtitle}</p>
                    </div>

                    <p className="text-[15px] text-ink-2 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
                        {project.metrics.map((m) => (
                          <span key={m} className="flex items-center gap-1.5 text-[13px] text-ink-2">
                            <Check className="w-3.5 h-3.5 text-accent shrink-0" />{m}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="font-meta text-[10px] border border-line text-ink-2 px-2.5 py-1 bg-sunken rounded-kontrol">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-4 border-t border-line">
                      <a
                        href={project.github} target="_blank" rel="noreferrer"
                        aria-label={`Buka repository ${project.title}`}
                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-ink bg-sunken hover:bg-accent-soft hover:text-accent-deep border border-line px-4 py-2.5 rounded-kontrol transition-all"
                      >
                        <GithubIcon className="w-4 h-4" /> Repository
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo} target="_blank" rel="noreferrer"
                          aria-label={`Buka Live Demo ${project.title}`}
                          className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-accent-ink bg-accent-fill hover:bg-accent-deep px-4 py-2.5 rounded-kontrol transition-all"
                        >
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      )}
                      <Link
                        href={`/project/${project.slug}`}
                        aria-label={`Buka studi karya ${project.title}`}
                        className="flex items-center justify-center gap-1.5 text-sm font-semibold text-lime-ink bg-lime hover:brightness-105 px-4 py-2.5 rounded-kontrol transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" /> Detail
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="hue-c py-24 sm:py-28 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto">

          <SectionHeading
            index="03"
            eyebrow="Yang saya pakai"
            title="Stack &"
            highlight="Tools"
            description="Tools & teknologi yang biasa saya pakai."
          />

          <div className="mt-12 space-y-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="relative flex flex-col py-7 rounded-kartu border border-line bg-raised panel"
              >
                <div className="flex items-baseline gap-3 px-6 sm:px-8 mb-6">
                  <h3 className="font-meta text-[13px] text-accent">
                    {category.title}
                  </h3>
                  <span className="ml-auto font-meta text-[11px] text-ink-3 border border-line rounded-kontrol px-2 py-0.5">
                    {category.items.length} item
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-6 sm:px-8">
                  {category.items.map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={i}
                        className="
                          flex flex-col items-center justify-center gap-3 p-5
                          bg-sunken border border-line rounded-kartu-sm
                          hover:border-accent hover:-translate-y-0.5
                          transition-all duration-300 cursor-default
                          group
                        "
                      >
                        <IconComponent className={`text-3xl sm:text-4xl ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-ink-2 group-hover:text-ink text-center transition-colors">
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

      {/* ── Contact: bidang mesh dominan ── */}
      <section id="contact" className="mesh-field relative overflow-hidden border-t border-line px-6 py-24 sm:py-28">
        <div className="relative z-10 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-kontrol border border-white/15 bg-[#0a1020]/70 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span className="font-meta text-[11px] text-lime">04 / Kontak</span>
            </span>
            <h2 className="mt-5 font-display text-section text-white">
              Punya ide? <span className="text-lime">Yuk ngobrol.</span>
            </h2>
            <p className="mt-5 text-lead text-white/90 max-w-xl leading-relaxed mb-12">
              Lagi cari kesempatan magang atau posisi Junior Developer.
              Terbuka juga untuk freelance dan kolaborasi project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            <div className="space-y-3">
              {[
                {
                  href: "https://wa.me/6285816172367",
                  label: "WhatsApp",
                  value: "Chat langsung, paling cepat dibalas",
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
                    flex items-center gap-4 p-4 rounded-kartu-sm
                    border border-white/20 bg-white/10 backdrop-blur
                    hover:bg-white/15 hover:border-lime transition-all group
                  "
                >
                  <div className="p-3 rounded-kontrol bg-lime text-lime-ink shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-meta text-[11px] text-white">{item.label}</p>
                    <p className="text-[15px] text-white truncate">{item.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-lime ml-auto shrink-0 transition-colors" />
                </a>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border border-line bg-raised text-ink panel p-6 sm:p-7 rounded-kartu space-y-5"
            >
              <div>
                <h3 className="font-display text-[22px] normal-case text-ink">Kirim pesan</h3>
                <p className="text-sm text-ink-3 mt-1.5">
                  Isi form ini, nanti lanjut chat lewat WhatsApp.
                </p>
              </div>

              {[
                { id: "name", label: "Nama", type: "text", placeholder: "Nama Lengkap" },
                { id: "email", label: "Email", type: "email", placeholder: "nama@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block font-meta text-[11px] text-ink-2 mb-2">
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
                      w-full bg-sunken border border-line rounded-kontrol
                      focus:border-accent text-[15px] text-ink placeholder:text-ink-3
                      p-3.5 outline-none transition-colors
                    "
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block font-meta text-[11px] text-ink-2 mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Halo Hidayat, saya tertarik mendiskusikan..."
                  className="
                    w-full bg-sunken border border-line rounded-kontrol
                    focus:border-accent text-[15px] text-ink placeholder:text-ink-3
                    p-3.5 outline-none transition-colors resize-none
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3.5 rounded-kontrol bg-lime disabled:opacity-60
                  text-lime-ink text-[15px] font-semibold
                  hover:brightness-105 transition-all flex items-center justify-center gap-2
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-lime-ink/30 border-t-lime-ink rounded-full animate-spin motion-reduce:animate-none" />
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

      {/* ── Footer: nama raksasa outline ── */}
      <footer className="bg-[var(--b-field-3)] px-6 pt-16 pb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14">
            {[
              { label: "Beranda", href: "#hero" },
              { label: "Karya", href: "#projects" },
              { label: "Tentang", href: "#about" },
              { label: "Keahlian", href: "#skills" },
              { label: "Kontak", href: "#contact" },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="font-meta text-[12px] text-white/70 hover:text-lime transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-white/60 mb-2">
            © {new Date().getFullYear()} Mukhammad Nur Hidayat · Dibuat dengan Next.js &amp; Tailwind
          </p>

          <p aria-hidden className="font-display text-[clamp(3rem,13vw,9rem)] leading-[0.85] outline-lime select-none">
            Hidayat
          </p>
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
            className="fixed bottom-6 right-6 w-11 h-11 rounded-kontrol bg-accent text-accent-ink hover:bg-accent-deep transition-colors z-40 panel flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}