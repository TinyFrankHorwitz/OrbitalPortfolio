"use client";

import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import type { Group } from "three";

type OrbitMotionOptions = {
  radius: number;
  speed: number;
  tilt: number;
  phase: number;
  ellipse: number;
  hoverRef?: RefObject<boolean>;
};

export function useOrbitMotion(targetRef: RefObject<Group | null>, options: OrbitMotionOptions) {
  const timeRef = useRef(options.phase);

  useFrame((state, delta) => {
    const target = targetRef.current;

    if (!target) {
      return;
    }

    const hoverSlowdown = options.hoverRef?.current ? 0.56 : 1;
    timeRef.current += delta * options.speed * hoverSlowdown;

    const angle = timeRef.current + options.phase;
    const wobble = Math.sin(state.clock.elapsedTime * 0.42 + options.phase) * 0.045;
    const yFloat = Math.sin(state.clock.elapsedTime * 0.62 + options.phase * 1.7) * 0.13;

    target.position.x = Math.cos(angle) * options.radius;
    target.position.z = Math.sin(angle) * options.radius * options.ellipse;
    target.position.y = yFloat + Math.sin(angle + options.tilt) * 0.26 + wobble;
    target.rotation.y += delta * 0.18;
    target.rotation.z = options.tilt * 0.5;
  });
}
