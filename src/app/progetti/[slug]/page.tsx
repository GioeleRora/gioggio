import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Layers, ShieldCheck, Sparkles, Cpu, Camera } from "lucide-react";
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
      title: "Project Not Found | Gioele Rora",
    };
  }

  return {
    title: `${project.title} | Gioele Rora`,
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
      {/* Direct back link to the main projects section */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
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
              <span>Open Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          )}

          {project.repoUrl && (
            <Button href={project.repoUrl} external variant="outline" size="md">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
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

      {/* Interactive Telemetry Dashboard if available */}
      {project.dashboard && (
        <div className="mb-16">
          <div className="mb-4">
            <h2 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Interactive Telemetry & Sensor Feed</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Explore real-time telemetry, RPC benchmarks, and simulated edge node metrics:
            </p>
          </div>
          <ProjectDashboardPreview dashboard={project.dashboard} />
        </div>
      )}

      {/* Visual Interface & System Captures if available */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-xl font-mono font-bold text-white flex items-center gap-2">
              <Camera className="w-5 h-5 text-cyan-400" />
              <span>Visual Interface & System Captures</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              High-resolution captures and interface walkthrough:
            </p>
          </div>

          <div
            className={`grid gap-6 ${
              project.screenshots.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {project.screenshots.map((shot, idx) => (
              <div
                key={idx}
                className={`bento-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between group overflow-hidden ${
                  idx === 0 && project.screenshots && project.screenshots.length % 2 !== 0 && project.screenshots.length > 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.08] mb-4">
                  <Image
                    src={shot.url}
                    alt={shot.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      SYS.IMG // 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {shot.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {shot.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Architecture & Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Architecture Highlights */}
        <div className="bento-card rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-cyan-400">
            <Layers className="w-5 h-5" />
            <h3 className="font-mono text-lg font-bold text-white">Architectural Highlights</h3>
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
              <h3 className="font-mono text-lg font-bold text-white">System Overview</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Category: {project.categoryLabel}</span>
            <span className="text-emerald-400">Production Ready</span>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      {project.challengesAndSolutions.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span>Engineering Challenges & Solutions</span>
          </h2>

          <div className="space-y-4">
            {project.challengesAndSolutions.map((item, idx) => (
              <div key={idx} className="bento-card rounded-xl p-6">
                <div className="mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-sm font-medium text-white">{item.challenge}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                    The Engineering Solution:
                  </span>
                  <p className="text-sm text-zinc-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clean Bottom Navigation */}
      <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <Button href="/#contact" variant="primary" size="sm">
          <span>Get in Touch</span>
        </Button>
      </div>
    </div>
  );
}
