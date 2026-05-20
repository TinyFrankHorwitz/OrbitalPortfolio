"use client";

import { useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import { AdditiveBlending, BufferGeometry, Float32BufferAttribute, Line, LineBasicMaterial } from "three";

type OrbitRingProps = {
  radius: number;
  ellipse: number;
  tilt: number;
  color: string;
  active: boolean;
};

export const OrbitRing = memo(function OrbitRing({ radius, ellipse, tilt, color, active }: OrbitRingProps) {
  const lineRef = useRef<Line>(null);
  const materialRef = useRef<LineBasicMaterial>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    const segments = 160;

    for (let i = 0; i <= segments; i += 1) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(Math.cos(angle) * radius, Math.sin(angle + tilt) * 0.18, Math.sin(angle) * radius * ellipse);
    }

    const ringGeometry = new BufferGeometry();
    ringGeometry.setAttribute("position", new Float32BufferAttribute(points, 3));

    return ringGeometry;
  }, [ellipse, radius, tilt]);

  const material = useMemo(
    () =>
      new LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.2,
        blending: AdditiveBlending,
        depthWrite: false,
      }),
    [color],
  );

  const line = useMemo(() => {
    const orbitLine = new Line(geometry, material);
    orbitLine.rotation.set(tilt, 0, 0);

    return orbitLine;
  }, [geometry, material, tilt]);

  useFrame((_, delta) => {
    if (lineRef.current) {
      lineRef.current.rotation.y += delta * 0.012;
    }

    if (materialRef.current) {
      materialRef.current.opacity += ((active ? 0.42 : 0.2) - materialRef.current.opacity) * 0.06;
    }
  });

  materialRef.current = material;

  return <primitive ref={lineRef} object={line} />;
});
