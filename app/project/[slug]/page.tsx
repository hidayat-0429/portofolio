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
  GitBranch,
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
      {/* Header tetap: kembali ke daftar karya */}
      <header className="sticky top-3 z-50 px-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-kontrol border border-line bg-raised/85 px-4 py-2.5 backdrop-blur-xl panel">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-meta text-[12px] text-ink-2 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Kembali ke karya</span>
            <span className="sm:hidden">Karya</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm text-ink">Hidayat</span>
            <ThemeToggle compact />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-14 sm:pt-20">
        {/* Judul */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-kontrol border border-line bg-raised px-3 py-1.5 font-meta text-[10px] text-ink-2 panel">
            {project.category === "WEB" ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
            {project.type ?? project.category}
          </span>
          {project.featured && (
            <span className="rounded-kontrol bg-lime px-3 py-1.5 font-meta text-[10px] font-medium text-lime-ink">
              Unggulan
            </span>
          )}
          {project.role && (
            <span className="font-meta text-[11px] text-ink-3">Peran: <span className="text-ink-2">{project.role}</span></span>
          )}
        </div>

        <h1 className="mt-5 font-display text-[clamp(2.2rem,6vw,3.75rem)] text-ink">
          {project.title}
        </h1>
        <p className="mt-3 font-meta text-[13px] text-accent">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-[17px] text-ink-2 leading-[1.7]">
          {project.description}
        </p>

        {/* Pratinjau */}
        <div className="mt-10 flex items-center gap-3 font-meta text-[11px] text-ink-3">
          <GitBranch className="w-4 h-4 text-accent" />
          <span>Rilis {project.number}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span className="text-success">Shipped</span>
        </div>
        <div className="mt-4 rounded-kartu border border-line bg-raised p-2.5 panel">
          {project.category === "WEB" ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-kartu-sm bg-sunken grid-paper">
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
            <div className="relative flex w-full items-center justify-center overflow-hidden rounded-kartu-sm bg-sunken grid-paper px-6 py-10">
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
            <h2 className="font-meta text-[13px] text-accent">Yang sudah dibangun</h2>
            <div className="mt-3 h-px w-16 bg-accent" />
            <ul className="mt-5 grid gap-3">
              {(project.metrics ?? []).map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-kartu-sm border border-line bg-raised px-4 py-3.5 panel"
                >
                  <Check className="mt-0.5 w-4 h-4 shrink-0 text-accent" />
                  <span className="text-[15px] text-ink-2">{m}</span>
                </li>
              ))}
            </ul>
            {(!project.metrics || project.metrics.length === 0) && (
              <p className="mt-5 text-[15px] text-ink-3">Belum ada sorotan untuk karya ini.</p>
            )}
          </section>

          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-kartu-sm border border-line bg-raised p-5 panel">
              <h2 className="font-meta text-[13px] text-accent">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-meta text-[10px] border border-line text-ink-2 bg-sunken rounded-kontrol px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-kartu-sm border border-line bg-raised p-5 panel">
              <h2 className="font-meta text-[13px] text-accent">Tautan</h2>
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
                    className="flex items-center justify-between gap-2 rounded-kontrol bg-accent-fill px-4 py-2.5 text-sm font-medium text-accent-ink hover:bg-accent-deep transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 rounded-kontrol border border-line-strong px-4 py-2.5 text-sm font-medium text-ink hover:border-accent hover:bg-accent-soft transition-colors"
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
              className="group rounded-kartu-sm border border-line bg-raised p-5 hover:border-accent-line transition-colors panel"
            >
              <span className="font-meta text-[10px] text-ink-3">Sebelumnya</span>
              <p className="mt-2 font-display text-[19px] normal-case text-ink group-hover:text-accent transition-colors">
                {sebelum.title}
              </p>
            </Link>
          ) : <span className="hidden sm:block" />}
          {sesudah && (
            <Link
              href={`/project/${sesudah.slug}`}
              className="group rounded-kartu-sm border border-line bg-raised p-5 text-right hover:border-accent-line transition-colors panel"
            >
              <span className="font-meta text-[10px] text-ink-3">Selanjutnya</span>
              <p className="mt-2 font-display text-[19px] normal-case text-ink group-hover:text-accent transition-colors">
                {sesudah.title} <ArrowRight className="inline w-4 h-4" />
              </p>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}