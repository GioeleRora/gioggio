export type ProjectCategory =
  | "web-app"
  | "api-backend"
  | "dashboard"
  | "mobile"
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
  architectureHighlights: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  dashboard?: ProjectDashboardData;
}
