"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className="absolute top-4 right-4 z-50">
      <Button
        onClick={onToggleTheme}
        variant="ghost"
        size="icon"
        className="cursor-pointer text-black bg-white/30 backdrop-blur-sm transition-all hover:bg-neutral-200 hover:text-neutral-900 hover:scale-110 dark:text-white dark:bg-black/30 dark:hover:bg-black/60 dark:hover:text-white group"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun className="h-4 w-4 transition-all group-hover:scale-110 group-hover:rotate-12" />
        ) : (
          <Moon className="h-4 w-4 transition-all group-hover:scale-110 group-hover:-rotate-12" />
        )}
      </Button>
    </header>
  );
}
