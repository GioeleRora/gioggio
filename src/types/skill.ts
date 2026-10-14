export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops-cloud"
  | "tools-methodologies";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level?: "Avanzato" | "Intermedio" | "In studio";
  iconName?: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  description: string;
  skills: SkillItem[];
}
