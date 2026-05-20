"use client";

import { useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import { AdditiveBlending, BackSide, Mesh } from "three";

export const SpaceBackground = memo(function SpaceBackground() {
  const meshRef = useRef<Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: [0.02, 0.04, 0.09] },
      uColorB: { value: [0.18, 0.06, 0.18] },
    }),
    [],
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.006;
    }
  });

  return (
    <mesh ref={meshRef} scale={24}>
      <sphereGeometry args={[1, 48, 48]} />
      <shaderMaterial
        side={BackSide}
        depthWrite={false}
        blending={AdditiveBlending}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vPosition;

          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec3 vPosition;

          void main() {
            float vertical = smoothstep(-0.8, 0.9, vPosition.y);
            float drift = sin(vPosition.x * 2.0 + uTime * 0.08) * 0.035;
            vec3 color = mix(uColorA, uColorB, vertical + drift);
            gl_FragColor = vec4(color, 0.88);
          }
        `}
      />
    </mesh>
  );
});
