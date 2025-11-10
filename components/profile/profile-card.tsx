import Image from "next/image";
import { Profile } from "@/types";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="relative group animate-fade-in">
      {/* Enhanced enchanted border effect with rotation */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-black/50 via-black/30 to-black/50 opacity-75 blur-md dark:from-white/50 dark:via-white/30 dark:to-white/50 animate-spin-slow group-hover:opacity-100 transition-opacity duration-500" />

      {/* Secondary glow effect */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 opacity-0 blur-lg group-hover:opacity-50 transition-opacity duration-700 animate-pulse" />

      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-black/50 dark:border-white/50 shadow-2xl group-hover:scale-105 transition-transform duration-300">
        <Image
          src={profile.image}
          alt={profile.name}
          width={96}
          height={96}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority
        />

        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
