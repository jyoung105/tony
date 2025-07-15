"use client";

import { FaLinkedin, FaXTwitter, FaGithub, FaRss } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Dark mode toggle state (optional: for button label)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Effect to sync dark mode with html class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white text-black dark:bg-black dark:text-white filter-noise">
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 z-50 rounded px-3 py-1 border border-black text-black bg-white dark:border-white dark:text-white dark:bg-black transition"
        aria-label="Toggle dark mode"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Magical forest mist effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.07), transparent 80%)`,
        }}
      />
      {/* Enchanted forest decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vine-like borders */}
        <div className="absolute left-0 top-0 h-32 w-32">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-black/40 to-transparent dark:from-white/40" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-black/40 to-transparent dark:from-white/40" />
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-black/40 to-transparent dark:from-white/40" />
          <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-black/40 to-transparent dark:from-white/40" />
        </div>
        {/* Mystical forest patterns */}
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10" />
        <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-gradient-to-tl from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10" />
      </div>
      <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
        {/* Profile Image with enchanted border */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-black/50 via-black/30 to-black/50 opacity-75 blur-md dark:from-white/50 dark:via-white/30 dark:to-white/50" />
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-black/50 dark:border-white/50">
            <Image
              src="/profile.webp?height=96&width=96"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-white dark:via-gray-400 dark:to-white sm:text-5xl">
            Tony Lee
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Co-founder of{" "}
            <a
              href="https://www.smoretalk.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-800 dark:hover:text-white"
            >
              Smoretalk
            </a>
          </p>
        </div>
        <p className="max-w-[600px] text-gray-700/80 md:text-lg dark:text-gray-200/80">
          // Greetings, wanderer.<br />
          <span className="text-green-600 dark:text-green-400">&gt;_</span> Strategist. Seoul native. <br />
          <span className="text-pink-600 dark:text-pink-400">[System]</span> Currently reverse-engineering the future with AI agents.<br />
          <span className="text-blue-600 dark:text-blue-400"># Code. Coffee. Curiosity.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/jyoung105" target="_blank" rel="noopener noreferrer" className="group">
            <Button
              variant="outline"
              size="icon"
              className="border-black text-black bg-white/30 backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 dark:border-white dark:text-white dark:bg-black/30 dark:hover:border-white/60 dark:hover:bg-black/40 dark:hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="https://x.com/jeongmin1604" target="_blank" rel="noopener noreferrer" className="group">
            <Button
              variant="outline"
              size="icon"
              className="border-black text-black bg-white/30 backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 dark:border-white dark:text-white dark:bg-black/30 dark:hover:border-white/60 dark:hover:bg-black/40 dark:hover:text-white"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="sr-only">X (Twitter)</span>
            </Button>
          </a>
          <a href="https://github.com/jyoung105" target="_blank" rel="noopener noreferrer" className="group">
            <Button
              variant="outline"
              size="icon"
              className="border-black text-black bg-white/30 backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 dark:border-white dark:text-white dark:bg-black/30 dark:hover:border-white/60 dark:hover:bg-black/40 dark:hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="border-black text-black bg-white/30 backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 dark:border-white dark:text-white dark:bg-black/30 dark:hover:border-white/60 dark:hover:bg-black/40 dark:hover:text-white"
            >
              <FaRss className="h-5 w-5" />
              <span className="sr-only">Blog</span>
            </Button>
          </a>
        </div>
      </div>
      <footer className="absolute bottom-4 text-sm text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Tony. All rights reserved.
      </footer>
    </div>
  );
}
