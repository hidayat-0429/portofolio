import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe,
  Smartphone,
} from "lucide-react";
import { projects, getProject } from "../../data/projects";
import ThemeToggle from "../../components/theme-toggle";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Karya tidak ditemukan" };

  return {
    title: `${project.title} — Mukhammad Nur Hidayat`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const sebelum = projects[index - 1];
  const sesudah = projects[index + 1];

  return (
    <main className="min-h-screen bg-base text-ink">
      {/* Header sederhana: kembali ke daftar karya */}
      <header className="sticky top-3 z-50 px-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-raised/80 px-4 py-2.5 backdrop-blur kertas">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-accent-deep transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Kembali ke karya</span>
            <span className="sm:hidden">Karya</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-judul text-sm text-ink">Hidayat</span>
            <ThemeToggle compact />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-14 sm:pt-20">
        {/* Judul */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-raised px-3 py-1.5 text-[11px] text-ink-2 kertas">
            {project.category === "WEB" ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
            {project.type ?? project.category}
          </span>
          {project.featured && (
            <span className="rounded-full border border-accent-line bg-accent-soft px-3 py-1.5 text-[11px] text-accent-deep">
              Unggulan
            </span>
          )}
          {project.role && (
            <span className="text-[13px] text-ink-3">Peran: <span className="text-ink-2">{project.role}</span></span>
          )}
        </div>

        <h1 className="mt-5 font-judul text-[clamp(2.2rem,6vw,3.75rem)] text-ink">
          {project.title}
        </h1>
        <p className="mt-3 font-judul-aksen text-[clamp(1.1rem,2.4vw,1.5rem)]">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-[17px] text-ink-2 leading-[1.7]">
          {project.description}
        </p>

        {/* Pratinjau */}
        <div className="mt-12 rounded-kartu border border-line bg-raised p-2.5 kertas">
          {project.category === "WEB" ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-sunken">
              <Image
                src={project.image}
                alt={`Tampilan ${project.title}`}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          ) : (
            <div className="relative mx-auto flex max-w-2xl items-center justify-center overflow-hidden rounded-[20px] bg-sunken px-6 py-10">
              <div className="absolute h-72 w-72 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
              <div className="relative h-[420px] aspect-[9/19.5] overflow-hidden rounded-[2rem] border-[3px] border-zinc-800 bg-black shadow-2xl shadow-black/50">
                <Image
                  src={project.image}
                  alt={`Tampilan ${project.title}`}
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                  loading="eager"
                fetchPriority="high"
                />
              </div>
            </div>
          )}
        </div>

        {/* Sorotan + tautan */}
        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <section className="md:col-span-3">
            <h2 className="font-judul italic text-[19px] text-zaitun">Yang sudah dibangun</h2>
            <ul className="mt-5 grid gap-3">
              {(project.metrics ?? []).map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-kartu-sm border border-line bg-raised px-4 py-3.5 kertas"
                >
                  <Check className="mt-0.5 w-4 h-4 shrink-0 text-accent-deep" />
                  <span className="text-[15px] text-ink-2">{m}</span>
                </li>
              ))}
            </ul>
            {(!project.metrics || project.metrics.length === 0) && (
              <p className="mt-5 text-[15px] text-ink-3">Belum ada sorotan untuk karya ini.</p>
            )}
          </section>

          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-kartu-sm border border-line bg-raised p-5 kertas">
              <h2 className="font-judul italic text-[19px] text-zaitun">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono border border-line text-ink-2 bg-sunken rounded-full px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-kartu-sm border border-line bg-raised p-5 kertas">
              <h2 className="font-judul italic text-[19px] text-zaitun">Tautan</h2>
              <div className="mt-4 grid gap-2.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 rounded-kontrol border border-line bg-sunken px-4 py-2.5 text-sm font-medium text-ink hover:bg-accent-soft hover:text-accent-deep transition-colors"
                >
                  Kode sumber <ArrowUpRight className="w-4 h-4" />
                </a>
                {project.secondaryGithub && (
                  <a
                    href={project.secondaryGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 rounded-kontrol border border-line bg-sunken px-4 py-2.5 text-sm font-medium text-ink hover:bg-accent-soft hover:text-accent-deep transition-colors"
                  >
                    Repository API <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 rounded-kontrol bg-accent-fill px-4 py-2.5 text-sm font-medium text-accent-ink hover:brightness-110 transition-all"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 rounded-kontrol border border-line-strong px-4 py-2.5 text-sm font-medium text-ink hover:border-accent-line hover:bg-accent-soft transition-colors"
            >
              Tanya soal project ini
            </Link>
          </aside>
        </div>

        {/* Navigasi antar karya */}
        <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          {sebelum ? (
            <Link
              href={`/project/${sebelum.slug}`}
              className="group rounded-kartu-sm border border-line bg-raised p-5 hover:border-accent-line transition-colors kertas"
            >
              <span className="text-[11px] uppercase tracking-widest text-ink-3">Sebelumnya</span>
              <p className="mt-2 font-judul text-[19px] text-ink group-hover:text-accent-deep transition-colors">
                {sebelum.title}
              </p>
            </Link>
          ) : <span className="hidden sm:block" />}
          {sesudah && (
            <Link
              href={`/project/${sesudah.slug}`}
              className="group rounded-kartu-sm border border-line bg-raised p-5 text-right hover:border-accent-line transition-colors kertas"
            >
              <span className="text-[11px] uppercase tracking-widest text-ink-3">Selanjutnya</span>
              <p className="mt-2 font-judul text-[19px] text-ink group-hover:text-accent-deep transition-colors">
                {sesudah.title} <ArrowRight className="inline w-4 h-4" />
              </p>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
