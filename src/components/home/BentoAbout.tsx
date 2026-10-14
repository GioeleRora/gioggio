import { Code2, Cpu, Layers, Award } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/data/profile";

export function BentoAbout() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <Badge variant="cyan" size="sm" className="mb-3">
          {"// 01. About Me"}
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Systems Engineering, Embedded & Software
        </h2>
        <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
          From low-level microcontrollers and real-time RTOS kernels to physics simulations and distributed platforms.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Academic & Teams */}
        <div className="md:col-span-2 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <Code2 className="w-6 h-6" />
              <h3 className="font-mono text-lg font-semibold text-zinc-100">
                Academic Background & Student Teams
              </h3>
            </div>
            <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {profileData.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
            <span className="text-xs font-mono text-zinc-400 self-center mr-2">Core Pillars:</span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-xs font-mono text-cyan-300">
              Embedded C/C++ & RTOS
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-xs font-mono text-emerald-300">
              Edge-AI & Computer Vision
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-xs font-mono text-purple-300">
              Quantum Algorithms
            </span>
          </div>
        </div>

        {/* Card 2: Focus Areas */}
        <div className="bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <Cpu className="w-6 h-6" />
              <h3 className="font-mono text-lg font-semibold text-zinc-100">
                Active Technical Focus
              </h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              Current engineering domains and ongoing experimentation:
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Real-Time Firmware with Zephyr RTOS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Quantum Circuit Simulation Benchmarks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>DC Motor Velocity & PWM Actuation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>3D Physics & Custom HLSL Shaders</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06]">
            <span className="text-[11px] font-mono text-emerald-400">
              ● Rigorous engineering approach
            </span>
          </div>
        </div>

        {/* Card 3: Stack */}
        <div className="bento-card rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4 text-purple-400">
            <Layers className="w-6 h-6" />
            <h3 className="font-mono text-lg font-semibold text-zinc-100">
              Primary Toolset
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mb-4">
            Technologies utilized across engineering projects and research:
          </p>
          <div className="flex flex-wrap gap-2">
            {["C", "C++", "C#", "Python", "Linux (Debian)", "Zephyr RTOS", "STM32", "Docker", "Unity", "Node.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Card 4: Honors & Affiliations */}
        <div className="md:col-span-2 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <Award className="w-6 h-6" />
              <h3 className="font-mono text-lg font-semibold text-zinc-100">
                Honors & Leadership
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Member of the <strong>IEEE-Eta Kappa Nu (IEEE-HKN, Mu Nu Chapter)</strong>, the honor society of the IEEE recognizing academic excellence. Awarded <strong>1st Place at HackTurin</strong> with the EGG Edge-AI system. Multi-year leadership experience as an AGESCI Scout Unit Leader and high-altitude volunteer work with OMG.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Location: {profileData.location}</span>
            <span className="text-cyan-400">Available for internships & global roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
