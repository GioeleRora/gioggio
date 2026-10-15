export type ProjectCategory =
  | "edge-ai"
  | "simulation"
  | "web-app"
  | "embedded"
  | "api-backend"
  | "dashboard"
  | "tool";

export interface MetricCardData {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  secondaryValue?: number;
}

export interface ProjectDashboardData {
  title: string;
  description: string;
  kpis: MetricCardData[];
  chartData: ChartDataPoint[];
  recentLogs?: {
    timestamp: string;
    action: string;
    status: "success" | "warning" | "info";
  }[];
}

export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  fullDescription: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured: boolean;
  order: number;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnailUrl?: string;
  screenshots?: ProjectScreenshot[];
  architectureHighlights: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  dashboard?: ProjectDashboardData;
}
