export interface SocialLink {
  label: string;
  url: string;
  iconName: string;
}

export interface ProfileData {
  name: string;
  surname: string;
  role: string;
  headline: string;
  statusBadge: {
    text: string;
    available: boolean;
  };
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  socials: SocialLink[];
  avatarUrl?: string;
  highlights: {
    number: string;
    label: string;
    description?: string;
  }[];
}
