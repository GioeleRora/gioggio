"use client";

import { useState } from "react";
import { ProjectItem } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Search } from "lucide-react";

interface ProjectsDirectoryProps {
  projects: ProjectItem[];
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "Tutti i Progetti" },
    { id: "edge-ai", label: "Edge-AI & Embedded" },
    { id: "simulation", label: "Simulazione 3D" },
    { id: "web-app", label: "Piattaforme Web" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filters & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] border border-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Cerca per nome o tecnologia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950/80 border border-white/[0.08] rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featuredMode={false} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bento-card rounded-2xl">
          <p className="text-zinc-400 text-sm font-mono">
            Nessun progetto trovato per i criteri selezionati.
          </p>
        </div>
      )}
    </div>
  );
}
