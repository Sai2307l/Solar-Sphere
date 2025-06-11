import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Saturn texture URLs (replace with your own or use public domain)
const SATURN_TEXTURE =
  "https://threejs.org/examples/textures/planets/saturn.jpg";
const SATURN_RING_TEXTURE =
  "https://threejs.org/examples/textures/planets/saturnringcolor.jpg";

// Major moons with approximate distances (scaled down) and sizes
const majorMoons = [
  { name: "Titan", color: "#d2b48c", distance: 6, size: 0.5 },
  { name: "Rhea", color: "#cccccc", distance: 8, size: 0.25 },
  { name: "Iapetus", color: "#b0b0b0", distance: 10, size: 0.22 },
  { name: "Dione", color: "#e0e0e0", distance: 7, size: 0.2 },
  { name: "Tethys", color: "#f5f5f5", distance: 6.5, size: 0.18 },
  { name: "Enceladus", color: "#ffffff", distance: 5.5, size: 0.15 },
  { name: "Mimas", color: "#dddddd", distance: 5, size: 0.12 },
  { name: "Hyperion", color: "#c2b280", distance: 9, size: 0.1 },
];

function Saturn() {
  return (
    <group>
      {/* Saturn Sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(SATURN_TEXTURE)}
        />
      </mesh>
      {/* Saturn Rings */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.4, 4, 128]} />
        <meshBasicMaterial
          map={new THREE.TextureLoader().load(SATURN_RING_TEXTURE)}
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

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
  // Place moon at a given distance and angle from Saturn
  const x = Math.cos(angle) * distance;
  const z = Math.sin(angle) * distance;
  return (
    <mesh position={[x, 0, z]}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function SaturnSystem() {
  return (
    <Suspense fallback={null}>
      <Saturn />
      {majorMoons.map((moon, i) => (
        <Moon
          key={moon.name}
          {...moon}
          angle={(i / majorMoons.length) * Math.PI * 2}
        />
      ))}
    </Suspense>
  );
}
