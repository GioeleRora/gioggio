import Link from "next/link";
import { ArrowUpRight, Activity, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: ProjectItem;
  featuredMode?: boolean;
}

export function ProjectCard({ project, featuredMode = false }: ProjectCardProps) {
  return (
    <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
      <div>
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant={project.dashboard ? "cyan" : "neutral"} size="sm">
            {project.categoryLabel}
          </Badge>

          {project.dashboard && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
              <Activity className="w-3.5 h-3.5" />
              <span>Telemetry Demo</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
          <Link href={`/progetti/${project.slug}`} className="inline-flex items-center gap-1.5">
            <span>{project.title}</span>
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Architecture points preview */}
        {featuredMode && project.architectureHighlights.length > 0 && (
          <div className="mb-6 space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Key Technical Highlights:
            </span>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              {project.architectureHighlights.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-mono mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              title="Live Demo"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <Link
          href={`/progetti/${project.slug}`}
          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
        >
          <span>Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
