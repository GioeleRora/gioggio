import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  external?: boolean;
  download?: boolean | string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external = false,
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold shadow-[0_0_20px_-5px_rgba(0,245,255,0.4)] hover:shadow-[0_0_25px_-3px_rgba(0,245,255,0.6)] active:scale-[0.98]",
    secondary:
      "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] active:scale-[0.98]",
    outline:
      "border border-zinc-700 hover:border-cyan-400/60 bg-zinc-900/60 hover:bg-cyan-950/20 text-zinc-200 hover:text-white backdrop-blur-sm",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          download={download}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
