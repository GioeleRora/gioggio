import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Badge variant="cyan" size="sm" className="mb-3">
            {"// 03. Progetti in Evidenza"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Soluzioni Software & Showcase
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
            Una selezione di progetti che dimostrano il mio approccio architetturale, design system e performance.
          </p>
        </div>

        <Button href="/progetti" variant="outline" size="md">
          <span>Vedi tutti i progetti</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </Button>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} featuredMode={true} />
        ))}
      </div>
    </section>
  );
}
