import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden tech-grid-bg">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Live Availability Badge */}
        <div className="mb-6">
          <Badge variant="emerald" size="md" dot pulse>
            {profileData.statusBadge.text}
          </Badge>
        </div>

        {/* Terminal whoami preview */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.08] text-xs font-mono text-zinc-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-zinc-500">~/gioele $</span>
          <span className="text-zinc-200">whoami</span>
          <span className="text-cyan-400">→ {profileData.role}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Sviluppo software moderno,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300">
            scalabile
          </span>{" "}
          ed orientato al futuro.
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed font-normal">
          {profileData.headline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/progetti" size="lg" variant="primary">
            <span>Esplora i Progetti</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button href="/cv-gioele.pdf" external download size="lg" variant="outline">
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Scarica CV (PDF)</span>
          </Button>

          <Button href="/cv" size="lg" variant="ghost">
            <span>Visualizza CV online</span>
          </Button>
        </div>

        {/* Highlights quick bar */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-10 border-t border-white/[0.08] w-full max-w-2xl">
          {profileData.highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                {item.number}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
