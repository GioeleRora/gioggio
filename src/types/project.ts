export type ProjectCategory =
  | "edge-ai"
  | "simulation"
  | "web-app"
  | "embedded"
  | "api-backend"
  | "dashboard"
  | "mobile-app"
  | "tool";

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
  repoUrls?: { label: string; url: string }[];
  devpostUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  screenshots?: ProjectScreenshot[];
  screenshotAspect?: "portrait" | "landscape";
  architectureHighlights: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
}
