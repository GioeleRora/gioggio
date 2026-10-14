"use client";

import { useState } from "react";
import { ProjectDashboardData } from "@/types/project";
import { Activity, ArrowUpRight, ArrowDownRight, RefreshCw, Terminal, CheckCircle2, AlertTriangle, Info } from "lucide-react";

interface ProjectDashboardPreviewProps {
  dashboard: ProjectDashboardData;
}

export function ProjectDashboardPreview({ dashboard }: ProjectDashboardPreviewProps) {
  const [activeTimeframe, setActiveTimeframe] = useState<"24h" | "7d" | "30d">("24h");
  const [multiplier, setMultiplier] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleTimeframeChange = (timeframe: "24h" | "7d" | "30d") => {
    setActiveTimeframe(timeframe);
    if (timeframe === "24h") setMultiplier(1);
    if (timeframe === "7d") setMultiplier(2.4);
    if (timeframe === "30d") setMultiplier(5.8);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const chartData = dashboard.chartData.map((pt) => ({
    ...pt,
    val: Math.round(pt.value * multiplier),
  }));

  const maxVal = Math.max(...chartData.map((d) => d.val), 1);

  return (
    <div className="bento-card rounded-2xl p-6 sm:p-8 border-cyan-500/20 shadow-[0_0_40px_-15px_rgba(0,245,255,0.12)]">
      {/* Header with Title and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400">
              <Activity className="w-4 h-4" />
            </span>
            <h3 className="font-mono text-lg font-bold text-white tracking-tight">
              {dashboard.title}
            </h3>
          </div>
          <p className="text-xs text-zinc-400">{dashboard.description}</p>
        </div>

        {/* Timeframe selector & refresh */}
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg bg-zinc-900/80 p-1 border border-white/[0.06] text-xs font-mono">
            {(["24h", "7d", "30d"] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => handleTimeframeChange(tf)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeTimeframe === tf
                    ? "bg-cyan-500/20 text-cyan-300 font-bold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            className={`p-2 rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-400 hover:text-cyan-400 transition-colors ${
              isRefreshing ? "animate-spin text-cyan-400" : ""
            }`}
            title="Refresh metrics"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        {dashboard.kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] flex flex-col justify-between"
          >
            <span className="text-xs font-mono text-zinc-400 mb-1">{kpi.label}</span>
            <div className="flex items-baseline justify-between gap-1">
              <span className="font-mono text-lg sm:text-xl font-bold text-white">
                {kpi.value}
              </span>
              {kpi.change && (
                <span
                  className={`inline-flex items-center text-xs font-mono font-medium ${
                    kpi.isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {kpi.isPositive ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {kpi.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Chart Visualizer */}
      <div className="my-6 p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-4 text-xs font-mono text-zinc-400">
          <span>Activity & Throughput Stream</span>
          <span className="text-cyan-400">Peak: {maxVal}</span>
        </div>

        {/* Responsive CSS Bar/Area Chart */}
        <div className="h-44 w-full flex items-end gap-2 sm:gap-4 pt-4 border-b border-zinc-800">
          {chartData.map((point, index) => {
            const heightPercent = Math.max(12, Math.round((point.val / maxVal) * 100));
            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-center h-full justify-end group relative"
              >
                {/* Tooltip on hover */}
                <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded text-[11px] font-mono pointer-events-none whitespace-nowrap z-20">
                  {point.val} events
                </div>

                {/* Bar */}
                <div
                  style={{ height: `${heightPercent}%` }}
                  className="w-full rounded-t-md bg-gradient-to-t from-cyan-500/20 via-cyan-400/40 to-cyan-400 group-hover:to-cyan-200 transition-all duration-300"
                />

                {/* X Axis Label */}
                <span className="text-[10px] font-mono text-zinc-500 mt-2 truncate w-full text-center">
                  {point.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live System Logs */}
      {dashboard.recentLogs && dashboard.recentLogs.length > 0 && (
        <div className="pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Telemetry & Edge Event Log</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {dashboard.recentLogs.map((log, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-900/60 border border-white/[0.04]"
              >
                <span className="text-zinc-500 shrink-0">[{log.timestamp}]</span>
                {log.status === "success" && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                )}
                {log.status === "warning" && (
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                )}
                {log.status === "info" && (
                  <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                )}
                <span className="text-zinc-300">{log.action}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
