"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useRef } from "react";
import { AdditiveBlending, Group, Mesh } from "three";

type CenterCoreProps = {
  segments: number;
};

export const CenterCore = memo(function CenterCore({ segments }: CenterCoreProps) {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.38) * 0.055;
      groupRef.current.rotation.y += delta * 0.08;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.15) * 0.035;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.72, segments, segments]} />
        <meshStandardMaterial
          color="#c9fbff"
          emissive="#63f2ff"
          emissiveIntensity={1.25}
          roughness={0.32}
          metalness={0.34}
        />
      </mesh>
      <mesh scale={1.22}>
        <sphereGeometry args={[0.72, segments, segments]} />
        <meshBasicMaterial
          color="#63f2ff"
          transparent
          opacity={0.105}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
      <Text
        position={[0, -1.02, 0.05]}
        fontSize={0.16}
        anchorX="center"
        anchorY="middle"
        color="#eefcff"
        maxWidth={2.6}
      >
        Creative Technologist
      </Text>
    </group>
  );
});
