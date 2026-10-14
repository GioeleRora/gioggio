import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="mb-12">
        <Badge variant="cyan" size="sm" className="mb-3">
          {"// 03. Technical Projects"}
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Featured Engineering Projects
        </h2>
        <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
          Edge-AI mesh networks, 3D physics simulations, and full-stack event infrastructure.
        </p>
      </div>

      {/* Direct 3 Projects Grid - No redundant archive loop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.slug} project={project} featuredMode={true} />
        ))}
      </div>
    </section>
  );
}
