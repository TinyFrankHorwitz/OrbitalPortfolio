"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useRef } from "react";
import { Group } from "three";
import { FloatingParticles } from "@/components/scene/FloatingParticles";
import { OrbitSystem } from "@/components/scene/OrbitSystem";
import { SceneLights } from "@/components/scene/SceneLights";
import { SpaceBackground } from "@/components/scene/SpaceBackground";
import { useResponsiveQuality } from "@/hooks/useResponsiveQuality";

function CameraDrift() {
  const rigRef = useRef<Group>(null);

  useFrame((state) => {
    const rig = rigRef.current;

    if (!rig) {
      return;
    }

    rig.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.018;
    rig.rotation.y = Math.sin(state.clock.elapsedTime * 0.14) * 0.025;
  });

  return <group ref={rigRef} />;
}

export const OrbitScene = memo(function OrbitScene() {
  const quality = useResponsiveQuality();

  return (
    <Canvas
      camera={{ position: [0, 1.1, 7.25], fov: 44, near: 0.1, far: 60 }}
      dpr={quality.pixelRatio}
      gl={{ antialias: quality.tier !== "low", alpha: true, powerPreference: "high-performance" }}
    >
      <SceneLights />
      <CameraDrift />
      <SpaceBackground />
      <FloatingParticles count={quality.particleCount} />
      <OrbitSystem segments={quality.sphereSegments} />
    </Canvas>
  );
});
