"use client";

import { MousePosition } from "@/types";

interface BackgroundEffectsProps {
  mousePosition: MousePosition;
}

export function BackgroundEffects({ mousePosition }: BackgroundEffectsProps) {
  return (
    <>
      {/* Enhanced magical forest mist effect with animation */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.07), transparent 80%)`,
        }}
      />

      {/* Animated enchanted forest decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vine-like borders with subtle animation */}
        <div className="absolute left-0 top-0 h-32 w-32 animate-pulse">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-black/40 to-transparent dark:from-white/40 animate-fade-in" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-black/40 to-transparent dark:from-white/40 animate-fade-in animation-delay-300" />
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32 animate-pulse">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-black/40 to-transparent dark:from-white/40 animate-fade-in animation-delay-500" />
          <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-black/40 to-transparent dark:from-white/40 animate-fade-in animation-delay-700" />
        </div>

        {/* Enhanced mystical forest patterns with floating animation */}
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10 animate-float opacity-60" />
        <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-gradient-to-tl from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10 animate-float animation-delay-1000 opacity-60" />

        {/* Additional floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black/30 dark:bg-white/30 rounded-full animate-float animation-delay-200" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full animate-float animation-delay-800" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-black/25 dark:bg-white/25 rounded-full animate-float animation-delay-1500" />
      </div>
    </>
  );
}
