import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
// Animated stars

export default function AnimatedStars() {
  const starsRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.01 * delta; // Slow rotation for stars
    }
  });
  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
}
