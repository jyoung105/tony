"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProfileCard } from "@/components/profile/profile-card";
import { ProfileInfo } from "@/components/profile/profile-info";
import { SocialLinks } from "@/components/social/social-links";
import { BackgroundEffects } from "@/components/effects/background-effects";
import { ProjectsShowcase } from "@/components/projects/projects-showcase";
import { ContactForm } from "@/components/contact/contact-form";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useTheme } from "@/hooks/use-theme";
import { profileData, bioText, projectsData } from "@/lib/data";

export default function Home() {
  const mousePosition = useMousePosition();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen w-full bg-white text-black dark:bg-black dark:text-white filter-noise">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <BackgroundEffects mousePosition={mousePosition} />

      {/* Hero Section */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <main className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
          <ProfileCard profile={profileData} />

          <ProfileInfo profile={profileData} />

          <p className="max-w-[600px] text-gray-700/80 md:text-lg dark:text-gray-200/80">
            {bioText.split('\n').map((line, index) => (
              <span key={index}>
                {line.includes('>_') && (
                  <>
                    {line.split('>_')[0]}
                    <span className="text-green-600 dark:text-green-400">&gt;_</span>
                    {line.split('>_')[1]}
                  </>
                )}
                {line.includes('[System]') && (
                  <>
                    {line.split('[System]')[0]}
                    <span className="text-pink-600 dark:text-pink-400">[System]</span>
                    {line.split('[System]')[1]}
                  </>
                )}
                {line.includes('#') && (
                  <>
                    {line.split('#')[0]}
                    <span className="text-blue-600 dark:text-blue-400">#{line.split('#')[1]}</span>
                  </>
                )}
                {!line.includes('>_') && !line.includes('[System]') && !line.includes('#') && line}
                <br />
              </span>
            ))}
          </p>

          <SocialLinks links={profileData.socialLinks} />
        </main>
      </section>

      {/* Projects Section */}
      <ProjectsShowcase projects={projectsData} />

      {/* Contact Section */}
      <ContactForm />

      <Footer />
    </div>
  );
}
