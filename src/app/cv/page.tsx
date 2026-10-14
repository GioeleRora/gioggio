import { Metadata } from "next";
import Link from "next/link";
import { Download, Briefcase, GraduationCap, Award, Globe, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cvData } from "@/data/cv";
import { profileData } from "@/data/profile";
import { CvPrintButton } from "@/components/cv/CvPrintButton";

export const metadata: Metadata = {
  title: "Curriculum Vitae | Gioele Rora",
  description:
    "Curriculum Vitae of Gioele Rora: B.Sc. Computer Engineering @ Politecnico di Torino, IEEE-HKN, Team Astra and Team QubiTo.",
};

export default function CvPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
        </Link>
      </div>

      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
        <div>
          <Badge variant="purple" size="sm" className="mb-2">
            {"// Curriculum Vitae"}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {profileData.name} {profileData.surname}
          </h1>
          <p className="text-zinc-400 text-sm font-mono mt-1">{profileData.role}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Button href={cvData.pdfDownloadUrl} external download size="md" variant="primary">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </Button>

          <CvPrintButton />
        </div>
      </div>

      {/* CV Contact & Meta strip */}
      <div className="bento-card rounded-2xl p-6 mb-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-300">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span>{profileData.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-emerald-400" />
          <a href={`mailto:${profileData.email}`} className="hover:underline">
            {profileData.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-purple-400" />
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/GioeleRora
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-12">
        <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4 flex items-center gap-2">
          <span>{"// Professional Summary"}</span>
        </h2>
        <div className="bento-card rounded-2xl p-6 sm:p-7 text-sm text-zinc-300 leading-relaxed">
          {cvData.summary}
        </div>
      </section>

      {/* Work Experiences */}
      <section className="mb-12">
        <h2 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-6 flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          <span>{"// Engineering Experience & Student Teams"}</span>
        </h2>

        <div className="space-y-6">
          {cvData.workExperiences.map((exp, index) => (
            <div key={index} className="bento-card rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-zinc-500 font-mono">@</span>
                  <span className="text-cyan-400 font-semibold font-mono">{exp.company}</span>
                </div>
                <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
              </div>

              <span className="text-xs text-zinc-500 block mb-3 font-mono">{exp.location}</span>

              <p className="text-sm text-zinc-300 mb-4 leading-relaxed">{exp.description}</p>

              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Key Achievements:
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold mb-6 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          <span>{"// Education & Academics"}</span>
        </h2>

        <div className="space-y-4">
          {cvData.education.map((edu, index) => (
            <div key={index} className="bento-card rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
              </div>
              <span className="text-xs font-mono text-purple-400 block mb-2">{edu.institution}</span>
              {edu.description && <p className="text-xs text-zinc-300 leading-relaxed">{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Languages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Honors & Certifications */}
        <section>
          <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>{"// Honors & Awards"}</span>
          </h2>
          <div className="bento-card rounded-2xl p-6 space-y-4">
            {cvData.certifications.map((cert, index) => (
              <div key={index} className="border-b border-white/[0.06] last:border-0 pb-3 last:pb-0">
                <h3 className="text-sm font-bold text-white">{cert.name}</h3>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mt-1">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{"// Languages"}</span>
          </h2>
          <div className="bento-card rounded-2xl p-6 space-y-3">
            {cvData.languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between text-sm py-1 border-b border-white/[0.06] last:border-0">
                <span className="font-medium text-white">{lang.language}</span>
                <span className="text-xs font-mono text-zinc-400">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
