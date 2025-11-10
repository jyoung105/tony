// Global type definitions
export interface SocialLink {
  name: string;
  href: string;
  icon: string; // Icon identifier (e.g., 'FaLinkedin', 'FaGithub')
  ariaLabel: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  image: string;
  socialLinks: SocialLink[];
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
