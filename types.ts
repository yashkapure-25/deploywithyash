import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  image: string;
  link: string;
  livePreview?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  icon: LucideIcon;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: 'AWS' | 'DevOps' | 'Course' | 'Badge';
  link: string;
}

export interface Course {
  id: number;
  title: string;
  provider: string;
  description: string;
  skills: string[];
  link: string;
}

export interface EducationStage {
  id: number;
  stage: string;
  description: string;
  year: string;
  icon: LucideIcon;
  grades?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}