"use client";

import { memo } from "react";
import { orbitNodes } from "@/data/orbitNodes";
import { CenterCore } from "@/components/scene/CenterCore";
import { OrbitRing } from "@/components/scene/OrbitRing";
import { PortfolioPlanet } from "@/components/scene/PortfolioPlanet";
import { useSceneStore } from "@/store/sceneStore";

type OrbitSystemProps = {
  segments: number;
};

export const OrbitSystem = memo(function OrbitSystem({ segments }: OrbitSystemProps) {
  const hoveredNodeId = useSceneStore((state) => state.hoveredNodeId);

  return (
    <group>
      <CenterCore segments={segments} />
      {orbitNodes.map((node) => (
        <OrbitRing
          key={`${node.id}-ring`}
          radius={node.radius}
          ellipse={node.ellipse}
          tilt={node.tilt}
          color={node.color}
          active={hoveredNodeId === node.id}
        />
      ))}
      {orbitNodes.map((node) => (
        <PortfolioPlanet key={node.id} node={node} segments={segments} />
      ))}
    </group>
  );
});
