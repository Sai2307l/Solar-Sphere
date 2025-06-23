import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import AnimatedStars from "./stars";
import { Neptune_Moons } from "../../constant/moons";
// Neptune color and moons data
const NEPTUNE_COLOR = "#4B70DD";

const NEPTUNE_TEXTURE_URL = "../../../assets/neptune_surface.jpg";

// Neptune planet mesh with rotation
function Neptune() {
  const texture = useTexture(NEPTUNE_TEXTURE_URL);
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.25 * delta; // Neptune rotation speed
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color={NEPTUNE_COLOR}
        roughness={0.7}
        metalness={0.3}
        map={texture}
      />
    </mesh>
  );
}

// Moon mesh with revolution
function Moon({
  distance,
  size,
  color,
  angle = 0,
}: {
  readonly distance: number;
  readonly size: number;
  readonly color: string;
  readonly angle?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.15 * delta; // Moon revolution speed
    }
  });

  // Calculate position based on distance and angle
  return (
    <group ref={groupRef} rotation={[0, angle, 0]}>
      <mesh position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

// Orbits (for visualization)
function OrbitRing({ radius }: { readonly radius: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
      <meshBasicMaterial
        color="#888"
        side={THREE.DoubleSide}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function NeptuneSystem() {
  return (
    <Suspense fallback={null}>
      <AnimatedStars />
      <Neptune />
      {Neptune_Moons.map((moon, i) => (
        <React.Fragment key={moon.name}>
          <Moon
            distance={moon.distance}
            size={moon.size}
            color={moon.color}
            angle={(i / Neptune_Moons.length) * Math.PI * 2}
          />
          <OrbitRing radius={moon.distance} />
        </React.Fragment>
      ))}
      <OrbitControls enablePan={false} />
    </Suspense>
  );
}
