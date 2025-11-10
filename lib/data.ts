import { Profile, Project } from "@/types";

export const profileData: Profile = {
  name: "Tony Lee",
  title: "Co-founder of",
  description: "Smoretalk",
  image: "/profile.webp",
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jyoung105",
      icon: "FaLinkedin",
      ariaLabel: "LinkedIn",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/jeongmin1604",
      icon: "FaXTwitter",
      ariaLabel: "X (Twitter)",
    },
    {
      name: "GitHub",
      href: "https://github.com/jyoung105",
      icon: "FaGithub",
      ariaLabel: "GitHub",
    },
    {
      name: "Blog",
      href: "#",
      icon: "FaRss",
      ariaLabel: "Blog",
    },
  ],
};

export const bioText = `// Greetings, wanderer.
>_ Strategist. Seoul native.
[System] Currently reverse-engineering the future with AI agents.
# Code. Coffee. Curiosity.`;

export const projectsData: Project[] = [
  {
    id: "smoretalk",
    title: "Smoretalk",
    description: "An AI-powered communication platform that helps teams collaborate more effectively with intelligent conversation insights and automated summaries.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://www.smoretalk.io",
    featured: true,
  },
  {
    id: "ai-agents-platform",
    title: "AI Agents Platform",
    description: "A comprehensive platform for building, deploying, and managing AI agents with advanced reasoning capabilities and multi-modal interactions.",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/jyoung105/ai-agents",
    featured: true,
  },
  {
    id: "personal-website",
    title: "Personal Portfolio Website",
    description: "A modern, animated personal website built with Next.js and Tailwind CSS featuring dark mode, mouse tracking effects, and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/jyoung105/personal-website",
    liveUrl: "https://tonylee.dev",
    featured: true,
  },
  {
    id: "code-review-assistant",
    title: "Code Review Assistant",
    description: "An AI-powered tool that automatically reviews code changes, suggests improvements, and ensures code quality standards are met.",
    technologies: ["Python", "OpenAI API", "GitHub Actions", "FastAPI", "Redis"],
    githubUrl: "https://github.com/jyoung105/code-review-assistant",
    featured: false,
  },
];
