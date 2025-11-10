import * as React from "react";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/types";
import { FaLinkedin, FaXTwitter, FaGithub, FaRss } from "react-icons/fa6";

// Map icon identifiers to icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaRss,
};

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
      {links.map((link, index) => {
        const IconComponent = iconMap[link.icon];
        
        if (!IconComponent) {
          console.warn(`Icon "${link.icon}" not found in iconMap`);
          return null;
        }

        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-fade-in"
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <Button
              variant="outline"
              size="icon"
              className="border-black text-black bg-white/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 hover:scale-110 hover:shadow-lg hover:shadow-black/20 dark:border-white dark:text-white dark:bg-black/30 dark:hover:border-white/60 dark:hover:bg-black/40 dark:hover:text-white dark:hover:shadow-white/20 transform"
            >
              <IconComponent className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
              <span className="sr-only">{link.ariaLabel}</span>
            </Button>
          </a>
        );
      })}
    </div>
  );
}
