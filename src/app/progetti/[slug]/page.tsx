import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Layers, ShieldCheck, Sparkles, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectDashboardPreview } from "@/components/projects/ProjectDashboardPreview";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Progetto non trovato",
    };
  }

  return {
    title: `${project.title} | Gioele`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/progetti"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna all&apos;archivio progetti</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="mb-12 pb-8 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="cyan" size="sm">
            {project.categoryLabel}
          </Badge>
          {project.featured && (
            <Badge variant="emerald" size="sm">
              Featured Project
            </Badge>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          {project.title}
        </h1>

        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Action buttons & Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} external variant="primary" size="md">
              <span>Visita Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          )}

          {project.repoUrl && (
            <Button href={project.repoUrl} external variant="outline" size="md">
              <GithubIcon className="w-4 h-4" />
              <span>Repository GitHub</span>
            </Button>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Dashboard if available */}
      {project.dashboard && (
        <div className="mb-16">
          <div className="mb-4">
            <h2 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Dashboard Interattiva Integrata</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Esplora i dati e le metriche di telemetria dell&apos;applicazione:
            </p>
          </div>
          <ProjectDashboardPreview dashboard={project.dashboard} />
        </div>
      )}

      {/* Technical Architecture & Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Architecture Highlights */}
        <div className="bento-card rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <Layers className="w-5 h-5" />
            <h3 className="font-mono text-lg font-bold text-white">Scelte Architetturali</h3>
          </div>
          <ul className="space-y-3 text-sm text-zinc-300">
            {project.architectureHighlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-mono mt-0.5">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Overview Description */}
        <div className="bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-mono text-lg font-bold text-white">Panoramica & Obiettivo</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Categoria: {project.categoryLabel}</span>
            <span className="text-emerald-400">Pronto per il deploy</span>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      {project.challengesAndSolutions.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span>Sfide Tecniche & Soluzioni Adottate</span>
          </h2>

          <div className="space-y-4">
            {project.challengesAndSolutions.map((item, idx) => (
              <div key={idx} className="bento-card rounded-xl p-6">
                <div className="mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                    La sfida:
                  </span>
                  <p className="text-sm font-medium text-white">{item.challenge}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                    La soluzione tecnica:
                  </span>
                  <p className="text-sm text-zinc-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next/Prev Navigation */}
      <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href="/progetti"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutti i progetti</span>
        </Link>

        <Button href="/#contact" variant="primary" size="sm">
          <span>Richiedi una demo</span>
        </Button>
      </div>
    </div>
  );
}
