import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Archivio Progetti | Gioele",
  description:
    "Tutti i progetti sviluppati: web app scalabili, dashboard analitiche, backend distribuiti e strumenti per developer.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <Badge variant="cyan" size="sm" className="mb-3">
          {"// Archivio"}
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          Progetti & Applicazioni
        </h1>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
          Esplora l&apos;archivio completo dei progetti realizzati, con filtri per categoria, analisi tecnica e dashboard interattive.
        </p>
      </div>

      <ProjectsDirectory projects={projectsData} />
    </div>
  );
}
