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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Round Profile Photo on the Left */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 w-full">
            <div className="relative group">
              {/* Outer ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 via-emerald-500/20 to-purple-500/25 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Circular Tech Frame */}
              <div className="relative p-2 sm:p-2.5 rounded-full bg-gradient-to-b from-white/15 via-zinc-900/90 to-zinc-950 border border-white/15 shadow-2xl backdrop-blur-xl">
                {/* Inner circular image viewport */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-zinc-950 border-2 border-white/15">
                  <Image
                    src={profileData.avatarUrl || "/gioele.jpg"}
                    alt={`${profileData.name} ${profileData.surname} – Computer Engineering @ Politecnico di Torino`}
                    fill
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gentle gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Status Pill on bottom of circle */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-white/15 shadow-xl backdrop-blur-md text-xs font-mono">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-200 font-semibold">{profileData.name} {profileData.surname}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-cyan-400">Team Astra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text, CTAs, Highlights */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2">
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

        </div>
      </div>
    </section>
  );
}
