export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  type: 'professional' | 'entrepreneurial' | 'creative';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
  field?: string;
  highlights?: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verificationUrl: string;
  image: string;
  skills: string[];
}

export interface PersonalInterestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tagline: string;
  imagePlaceholder?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  iconName: string;
}
