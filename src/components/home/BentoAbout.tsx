import { Code2, Cpu, Globe, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/data/profile";

export function BentoAbout() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <Badge variant="cyan" size="sm" className="mb-3">
          {"// 01. Chi Sono"}
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Costruisco esperienze digitali robuste e raffinate
        </h2>
        <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
          Unire cura del dettaglio visivo, architetture scalabili e prestazioni estreme.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Bio estesa (Spans 2 cols) */}
        <div className="md:col-span-2 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <Code2 className="w-6 h-6" />
              <h3 className="font-mono text-lg font-semibold text-zinc-100">
                Ingegneria del Software & Visione
              </h3>
            </div>
            <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {profileData.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
            <span className="text-xs font-mono text-zinc-400 self-center mr-2">I miei principi:</span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-xs font-mono text-zinc-300">
              Type-Safety Totale
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-xs font-mono text-zinc-300">
              Component-Driven Design
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-xs font-mono text-zinc-300">
              Zero-Compromise Performance
            </span>
          </div>
        </div>

        {/* Card 2: Cosa sto esplorando ora */}
        <div className="bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <Cpu className="w-6 h-6" />
              <h3 className="font-mono text-lg font-semibold text-zinc-100">
                Focus Attuale
              </h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              Approfondimento continuo delle ultime innovazioni dell&apos;ecosistema React e Cloud:
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Next.js Turbopack & Server Actions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Edge Computing & Serverless Databases</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Design System scalabili con Tailwind v4</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>AI-Assisted Pair Programming & Tooling</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06]">
            <span className="text-[11px] font-mono text-emerald-400">
              ● Apprendimento & sperimentazione continua
            </span>
          </div>
        </div>

        {/* Card 3: Stack preferito */}
        <div className="bento-card rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4 text-purple-400">
            <Layers className="w-6 h-6" />
            <h3 className="font-mono text-lg font-semibold text-zinc-100">
              Tech Stack Core
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mb-4">
            Gli strumenti che utilizzo quotidianamente per garantire robustezza e velocità di sviluppo:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "Git"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: Approccio al Deployment & Cloud (Spans 2 cols) */}
        <div className="md:col-span-2 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <Globe className="w-6 h-6" />
              <h3 className="font-mono text-lg font-semibold text-zinc-100">
                Deploy Serverless & Cloud Ready
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Tutte le mie soluzioni sono progettate per essere distribuite globalmente su piattaforme edge moderne come <strong>Vercel</strong> e <strong>Cloudflare</strong>. Questo elimina la complessità di gestione di server fisici e garantisce latenza minima per utenti in tutto il mondo con downtime pari a zero.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Posizione: {profileData.location}</span>
            <span className="text-cyan-400">Disponibile per lavoro da remoto & ibrido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
