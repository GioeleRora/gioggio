import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gioele Rora | Computer Engineering & Embedded Systems",
  description:
    "Personal engineering portfolio of Gioele Rora: B.Sc. Computer Engineering student at Politecnico di Torino, IEEE-HKN member, embedded systems, Agentic AI architecture, and simulation platforms.",
  keywords: [
    "Gioele Rora",
    "Politecnico di Torino",
    "Computer Engineering",
    "Embedded Systems",
    "Agentic AI",
    "C++",
    "Edge-AI",
    "HackTurin",
    "Portfolio",
  ],
  authors: [{ name: "Gioele Rora" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[#08090d] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
