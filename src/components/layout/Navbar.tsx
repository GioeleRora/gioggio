"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, FileDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex items-center font-mono font-semibold text-sm sm:text-base tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors">
            <span>gioele</span>
            <span className="text-cyan-400">.dev</span>
            <span className="inline-block w-1.5 h-3.5 ml-1 bg-cyan-400 animate-pulse" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/[0.06]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Single Primary Action: Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <Button href="/cv-gioele.pdf" external download size="sm" variant="outline">
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume (PDF)</span>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white md:hidden rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c1017]/95 px-4 pt-3 pb-6 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-mono text-zinc-300 hover:text-cyan-400 hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <Button
              href="/cv-gioele.pdf"
              external
              download
              size="sm"
              variant="outline"
              className="w-full justify-center"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
