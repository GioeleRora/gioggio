import Image from "next/image";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden tech-grid-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/4 -translate-y-1/2 w-[450px] h-[320px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text, CTAs, Highlights */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="mb-6">
              <Badge variant="emerald" size="md" dot pulse>
                {profileData.statusBadge.text}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Computer Engineering,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300">
                Embedded
              </span>{" "}
              & Intelligent Systems.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed font-normal">
              {profileData.headline}
            </p>

            {/* Simplified Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button href="/#projects" size="lg" variant="primary">
                <span>View Technical Projects</span>
                <ArrowDown className="w-4 h-4" />
              </Button>

              <Button href="/cv-gioele.pdf" external download size="lg" variant="outline">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </Button>
            </div>

            {/* Highlights bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/[0.08] w-full max-w-xl">
              {profileData.highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
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

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[380px] group">
              {/* Outer ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/25 via-emerald-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Bento-style container with double tech borders */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 via-zinc-900/90 to-zinc-950 border border-white/10 shadow-2xl backdrop-blur-xl">
                {/* Photo frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.08]">
                  <Image
                    src={profileData.avatarUrl || "/gioele.jpg"}
                    alt={`${profileData.name} ${profileData.surname} – Computer Engineering @ Politecnico di Torino`}
                    fill
                    priority
                    sizes="(max-width: 640px) 290px, (max-width: 1024px) 340px, 380px"
                    className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Gradient overlays for contrast and readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                  {/* Top floating badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 border border-white/10 text-zinc-200 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available</span>
                    </span>
                  </div>

                  {/* Bottom glassmorphic info badge */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-white tracking-tight">
                            {profileData.name} {profileData.surname}
                          </p>
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <p className="text-xs font-mono text-cyan-400 mt-0.5">
                          Computer Engineering @ PoliTo
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-zinc-300 border border-white/10">
                          Team Astra
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech footer notches */}
                <div className="flex items-center justify-between px-3 pt-2 text-[10px] font-mono text-zinc-500">
                  <span className="text-cyan-400/80">{"// SYS.ID: GIOELE"}</span>
                  <span className="text-zinc-500">PoliTo • IEEE-HKN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
