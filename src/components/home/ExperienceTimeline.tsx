import { Briefcase, GraduationCap, Download, Users, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cvData } from "@/data/cv";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Badge variant="purple" size="sm" className="mb-3">
            {"// 04. Experience & Education"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Teams & Background
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
            Student space robotics, quantum algorithms research, academics at Politecnico di Torino, and leadership.
          </p>
        </div>

        {/* Single clean PDF button */}
        <Button href="/cv-gioele.pdf" external download variant="outline" size="md">
          <Download className="w-4 h-4 text-cyan-400" />
          <span>Download Resume (PDF)</span>
        </Button>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {cvData.workExperiences.map((exp, index) => (
          <div
            key={index}
            className="bento-card rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-1">
                {exp.role.includes("Scout") ? (
                  <Users className="w-5 h-5 text-purple-400" />
                ) : exp.role.includes("Volunteer") ? (
                  <HeartHandshake className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Briefcase className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-zinc-500">@</span>
                  <span className="text-cyan-400 font-semibold">{exp.company}</span>
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                      Present
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-300 mb-4 max-w-2xl leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-1.5 text-xs text-zinc-400 mb-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:text-right shrink-0">
              <span className="font-mono text-xs text-zinc-400 block">{exp.period}</span>
              <span className="text-xs text-zinc-500">{exp.location}</span>
            </div>
          </div>
        ))}

        {/* Education Section embedded directly - No extra page hops */}
        <div className="pt-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Education & Honors</span>
          </h3>

          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="bento-card rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                  <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 block mb-2">{edu.institution}</span>
                {edu.description && <p className="text-xs text-zinc-300 leading-relaxed">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
