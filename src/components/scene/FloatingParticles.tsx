"use client";

import { useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import { AdditiveBlending, InstancedMesh, Matrix4, Object3D } from "three";

type FloatingParticlesProps = {
  count: number;
};

const tempObject = new Object3D();
const tempMatrix = new Matrix4();

export const FloatingParticles = memo(function FloatingParticles({ count }: FloatingParticlesProps) {
  const meshRef = useRef<InstancedMesh>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const angle = index * 2.399963 + Math.random() * 0.3;
        const radius = 2.4 + Math.random() * 9.8;

        return {
          x: Math.cos(angle) * radius,
          y: (Math.random() - 0.5) * 6,
          z: Math.sin(angle) * radius - 2.5,
          scale: 0.012 + Math.random() * 0.035,
          speed: 0.06 + Math.random() * 0.12,
          phase: Math.random() * Math.PI * 2,
        };
      }),
    [count],
  );

  useFrame((state) => {
    const mesh = meshRef.current;

    if (!mesh) {
      return;
    }

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      const drift = Math.sin(state.clock.elapsedTime * particle.speed + particle.phase) * 0.08;

      tempObject.position.set(particle.x + drift, particle.y + drift * 0.5, particle.z);
      tempObject.scale.setScalar(particle.scale);
      tempObject.updateMatrix();
      tempMatrix.copy(tempObject.matrix);
      mesh.setMatrixAt(i, tempMatrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        color="#c6faff"
        transparent
        opacity={0.46}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </instancedMesh>
  );
});
