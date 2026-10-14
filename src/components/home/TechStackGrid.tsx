import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";
import { Sparkles } from "lucide-react";

export function TechStackGrid() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="mb-12">
        <Badge variant="emerald" size="sm" className="mb-3">
          {"// 02. Competenze Tecniche"}
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Stack Tecnologico & Competenze
        </h2>
        <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
          Le tecnologie e metodologie che utilizzo per costruire sistemi moderni e performanti.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="bento-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono text-base font-semibold text-zinc-100">
                  {group.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {group.description}
              </p>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      skill.highlight
                        ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium hover:bg-cyan-500/20"
                        : "bg-zinc-900/80 text-zinc-300 border border-white/[0.06] hover:border-zinc-700"
                    }`}
                  >
                    {skill.highlight && <Sparkles className="w-3 h-3 text-cyan-400" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>{group.skills.length} tecnologie</span>
              <span className="text-zinc-400">Verificato</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
