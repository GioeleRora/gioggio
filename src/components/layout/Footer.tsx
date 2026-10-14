import { Mail, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="border-t border-white/[0.08] bg-[#06070a] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Headline */}
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-base text-zinc-100">
                gioele<span className="text-cyan-400">.dev</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {profileData.headline}
            </p>
          </div>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-200 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{profileData.email}</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-200 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-200 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} Gioele Rora. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS • Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
