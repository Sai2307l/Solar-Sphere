import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Neptune color and moons data
const NEPTUNE_COLOR = "#4B70DD";
const MOONS = [
  { name: "Triton", distance: 3.5, size: 0.25, color: "#bfc9d9" },
  { name: "Proteus", distance: 4.5, size: 0.12, color: "#a0a0a0" },
  { name: "Nereid", distance: 6.5, size: 0.09, color: "#c0c0c0" },
  { name: "Larissa", distance: 5.5, size: 0.08, color: "#b0b0b0" },
  { name: "Despina", distance: 4.0, size: 0.07, color: "#bdbdbd" },
  { name: "Galatea", distance: 4.2, size: 0.07, color: "#d0d0d0" },
  { name: "Thalassa", distance: 3.8, size: 0.06, color: "#e0e0e0" },
  { name: "Naiad", distance: 3.6, size: 0.06, color: "#eaeaea" },
];

// Neptune planet mesh
function Neptune() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color={NEPTUNE_COLOR}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}

// Moon mesh
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
  // Position moons in orbit using angle
  const x = Math.cos(angle) * distance;
  const z = Math.sin(angle) * distance;
  return (
    <mesh position={[x, 0, z]}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
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
      <Neptune />
      {MOONS.map((moon, i) => (
        <React.Fragment key={moon.name}>
          <Moon
            distance={moon.distance}
            size={moon.size}
            color={moon.color}
            angle={(i / MOONS.length) * Math.PI * 2}
          />
          <OrbitRing radius={moon.distance} />
        </React.Fragment>
      ))}
    </Suspense>
  );
}
