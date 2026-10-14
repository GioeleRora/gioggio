export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  grade?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface CvData {
  pdfDownloadUrl: string;
  summary: string;
  workExperiences: WorkExperience[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
}
