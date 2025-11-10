import { Profile } from "@/types";

interface ProfileInfoProps {
  profile: Profile;
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="space-y-2 animate-fade-in animation-delay-200">
      <h1 className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-white dark:via-gray-400 dark:to-white sm:text-5xl hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 dark:hover:from-purple-400 dark:hover:via-pink-400 dark:hover:to-blue-400 transition-all duration-500 cursor-default">
        {profile.name}
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-300">
        {profile.title}{" "}
        <a
          href="https://www.smoretalk.io"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-800 dark:hover:text-white transition-colors duration-300 hover:scale-105 inline-block transform"
        >
          {profile.description}
        </a>
      </p>
    </div>
  );
}
