import Link from "next/link";
import { Mail, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="border-t border-white/[0.08] bg-[#06070a] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Presentation */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-base text-zinc-100">
                gioele<span className="text-cyan-400">.dev</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              {profileData.headline}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400">
                {profileData.statusBadge.text}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Navigazione
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Competenze
                </Link>
              </li>
              <li>
                <Link href="/progetti" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Archivio Progetti
                </Link>
              </li>
              <li>
                <Link href="/cv" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                  Curriculum Completo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Canali di Contatto */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Connettiti
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} Gioele. Progettato con Next.js e Tailwind CSS.</p>
          <p className="flex items-center gap-1.5">
            <span>Serverless & Edge ready per Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
