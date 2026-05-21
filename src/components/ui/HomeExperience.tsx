"use client";

import { useEffect } from "react";
import { OrbitScene } from "@/components/scene/OrbitScene";
import { CssOrbitFallback } from "@/components/ui/CssOrbitFallback";
import { HomeOverlay } from "@/components/ui/HomeOverlay";
import { useSceneStore } from "@/store/sceneStore";

export function HomeExperience() {
  const setHoveredNodeId = useSceneStore((state) => state.setHoveredNodeId);
  const setTransitioningNodeId = useSceneStore((state) => state.setTransitioningNodeId);

  useEffect(() => {
    setHoveredNodeId(null);
    setTransitioningNodeId(null);
    document.body.style.cursor = "";
  }, [setHoveredNodeId, setTransitioningNodeId]);

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
