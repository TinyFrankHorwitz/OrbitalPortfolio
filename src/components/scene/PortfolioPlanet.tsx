"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { memo, useMemo, useRef } from "react";
import { AdditiveBlending, Group, Mesh } from "three";
import type { OrbitNode } from "@/data/orbitNodes";
import { useOrbitMotion } from "@/hooks/useOrbitMotion";
import { useSceneStore } from "@/store/sceneStore";

type PortfolioPlanetProps = {
  node: OrbitNode;
  segments: number;
};

export const PortfolioPlanet = memo(function PortfolioPlanet({ node, segments }: PortfolioPlanetProps) {
  const router = useRouter();
  const groupRef = useRef<Group>(null);
  const shellRef = useRef<Mesh>(null);
  const hoverRef = useRef(false);
  const setHoveredNodeId = useSceneStore((state) => state.setHoveredNodeId);
  const setTransitioningNodeId = useSceneStore((state) => state.setTransitioningNodeId);
  const color = useMemo(() => node.color, [node.color]);

  useOrbitMotion(groupRef, {
    radius: node.radius,
    speed: node.speed,
    tilt: node.tilt,
    phase: node.phase,
    ellipse: node.ellipse,
    hoverRef,
  });

  useFrame((state) => {
    const group = groupRef.current;
    const shell = shellRef.current;

    if (!group || !shell) {
      return;
    }

    const targetScale = hoverRef.current ? 1.09 : 1;
    group.scale.x += (targetScale - group.scale.x) * 0.08;
    group.scale.y += (targetScale - group.scale.y) * 0.08;
    group.scale.z += (targetScale - group.scale.z) * 0.08;
    shell.rotation.y = state.clock.elapsedTime * 0.18 + node.phase;
  });

  const setHovered = (isHovered: boolean) => {
    hoverRef.current = isHovered;
    setHoveredNodeId(isHovered ? node.id : null);
    document.body.style.cursor = isHovered ? "pointer" : "";
  };

  const handleClick = () => {
    setTransitioningNodeId(node.id);
    window.setTimeout(() => router.push(node.href), 520);
  };

  return (
    <group
      ref={groupRef}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHovered(false);
      }}
      onClick={(event) => {
        event.stopPropagation();
        handleClick();
      }}
    >
      <mesh>
        <sphereGeometry args={[node.size, segments, segments]} />
        <meshStandardMaterial
          color={node.accent}
          emissive={color}
          emissiveIntensity={0.98}
          roughness={0.28}
          metalness={0.2}
        />
      </mesh>
      <mesh ref={shellRef} scale={1.48}>
        <sphereGeometry args={[node.size, segments, segments]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
      <Text
        position={[0, -node.size - 0.34, 0]}
        fontSize={0.14}
        anchorX="center"
        anchorY="middle"
        color="#f6fdff"
        maxWidth={1.55}
      >
        {node.title}
      </Text>
      <Text
        position={[0, -node.size - 0.58, 0]}
        fontSize={0.066}
        anchorX="center"
        anchorY="middle"
        color="#b8d7de"
        maxWidth={1.65}
        textAlign="center"
      >
        {node.description}
      </Text>
    </group>
  );
});
