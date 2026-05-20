"use client";

import { useEffect, useState } from "react";

export type SceneQuality = {
  tier: "high" | "medium" | "low";
  particleCount: number;
  bloomIntensity: number;
  sphereSegments: number;
  pixelRatio: [number, number];
};

const highQuality: SceneQuality = {
  tier: "high",
  particleCount: 520,
  bloomIntensity: 0.72,
  sphereSegments: 64,
  pixelRatio: [1, 1.8],
};

const mediumQuality: SceneQuality = {
  tier: "medium",
  particleCount: 320,
  bloomIntensity: 0.52,
  sphereSegments: 48,
  pixelRatio: [1, 1.45],
};

const lowQuality: SceneQuality = {
  tier: "low",
  particleCount: 160,
  bloomIntensity: 0.34,
  sphereSegments: 32,
  pixelRatio: [1, 1.2],
};

export function useResponsiveQuality() {
  const [quality, setQuality] = useState<SceneQuality>(mediumQuality);

  useEffect(() => {
    const updateQuality = () => {
      const isNarrow = window.matchMedia("(max-width: 720px)").matches;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
      const cores = navigator.hardwareConcurrency ?? 4;

      if (reducedMotion || isNarrow || memory <= 4 || cores <= 4) {
        setQuality(lowQuality);
        return;
      }

      if (window.innerWidth < 1180 || memory <= 6) {
        setQuality(mediumQuality);
        return;
      }

      setQuality(highQuality);
    };

    updateQuality();
    window.addEventListener("resize", updateQuality);

    return () => window.removeEventListener("resize", updateQuality);
  }, []);

  return quality;
}
