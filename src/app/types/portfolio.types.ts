export interface NavLink {
  name: string;
  href: string;
}

export interface Job {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Theme {
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  button: string;
  buttonText: string;
  border: string;
  navBg: string;
  cardHover: string;
  inputBg?: string;
  inputBorder?: string;
  textPrimary?: string;
  accentRing?: string;
}

export interface ThemeConfig {
  dark: Theme;
  light: Theme;
}

export interface Skill {
  name: string;
  level?: number; // Optional property for skill proficiency (0-100)
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: string; // Optional property for category icon
}

export type SkillCategories = SkillCategory[];