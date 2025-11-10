"use client";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className="absolute top-4 right-4 z-50">
      <Button
        onClick={onToggleTheme}
        variant="outline"
        size="sm"
        className="border-black text-black bg-white/30 backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 dark:border-white dark:text-white dark:bg-black/30 dark:hover:border-white/60 dark:hover:bg-black/40 dark:hover:text-white"
        aria-label="Toggle dark mode"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </Button>
    </header>
  );
}
