"use client";

import { OrbitScene } from "@/components/scene/OrbitScene";
import { CssOrbitFallback } from "@/components/ui/CssOrbitFallback";
import { HomeOverlay } from "@/components/ui/HomeOverlay";

export function HomeExperience() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b]">
      <div className="absolute inset-0">
        <OrbitScene />
      </div>
      <CssOrbitFallback />
      <HomeOverlay />
    </main>
  );
}
