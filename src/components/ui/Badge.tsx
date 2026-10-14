import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "cyan" | "emerald" | "purple" | "neutral";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
  pulse?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className,
  dot = false,
  pulse = false,
}: BadgeProps) {
  const variantStyles = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    neutral: "bg-zinc-800/80 text-zinc-300 border-zinc-700/50",
  };

  const dotColors = {
    cyan: "bg-cyan-400",
    emerald: "bg-emerald-400",
    purple: "bg-purple-400",
    neutral: "bg-zinc-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-full border transition-all",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                dotColors[variant]
              )}
            />
          )}
          <span
            className={cn("relative inline-flex h-2 w-2 rounded-full", dotColors[variant])}
          />
        </span>
      )}
      {children}
    </span>
  );
}
