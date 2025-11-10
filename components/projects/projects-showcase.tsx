"use client";

import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsShowcaseProps {
  projects: Project[];
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12 animate-fade-in animation-delay-700">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work and experiments in technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-lg p-6 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: `${800 + index * 100}ms` }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-black/20 text-black/70 bg-white/50 hover:bg-black/5 dark:border-white/20 dark:text-white/70 dark:bg-black/50 dark:hover:bg-white/5 transition-all duration-200"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-black/20 text-black/70 bg-white/50 hover:bg-black/5 dark:border-white/20 dark:text-white/70 dark:bg-black/50 dark:hover:bg-white/5 transition-all duration-200"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
