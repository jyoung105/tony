"use client"

import { Leaf, Trees, Mountain, Bird, Linkedin, Twitter, Github, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Magical forest mist effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`,
        }}
      />

      {/* Enchanted forest decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vine-like borders */}
        <div className="absolute left-0 top-0 h-32 w-32">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-white/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-white/40 to-transparent" />
          <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-white/40 to-transparent" />
        </div>

        {/* Mystical forest patterns */}
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent" />
        <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-gradient-to-tl from-white/20 via-white/10 to-transparent" />
      </div>

      <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
        {/* Profile Image with enchanted border */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/50 via-white/30 to-white/50 opacity-75 blur-md" />
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/50">
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
          <h1 className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
            Tony Lee
          </h1>
          <p className="text-xl text-gray-300">
            Co-founder of{" "}
            <a
              href="https://www.smoretalk.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smoretalk
            </a>
          </p>
        </div>

        <p className="max-w-[600px] text-gray-200/80 md:text-lg">
          Hello, I am a strategist from Seoul, Korea.<br />
          Currently involved in an AI agent.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/jyoung105" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="group border-white/40 bg-black/30 text-gray-300 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-black/40 hover:text-white"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="https://x.com/jeongmin1604" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="group border-white/40 bg-black/30 text-gray-300 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-black/40 hover:text-white"
            >
              <Twitter className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a>
          <a href="https://github.com/jyoung105" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="group border-white/40 bg-black/30 text-gray-300 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-black/40 hover:text-white"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="group border-white/40 bg-black/30 text-gray-300 backdrop-blur-sm transition-all hover:border-white/60 hover:bg-black/40 hover:text-white"
            >
              <Rss className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">Blog</span>
            </Button>
          </a>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm text-white-500/60">
        © {new Date().getFullYear()} Tony. All rights reserved.
      </footer>
    </div>
  )
}
