import React, { Suspense } from "react";
import { Sphere } from "@react-three/drei";

const URANUS_RADIUS = 2;
const MOONS = [
  { name: "Miranda", distance: 4, radius: 0.2, color: "#b0b0b0" },
  { name: "Ariel", distance: 5, radius: 0.25, color: "#cccccc" },
  { name: "Umbriel", distance: 6, radius: 0.23, color: "#888888" },
  { name: "Titania", distance: 7, radius: 0.3, color: "#dddddd" },
  { name: "Oberon", distance: 8, radius: 0.28, color: "#bbbbbb" },
];

function Uranus() {
  return (
    <Sphere args={[URANUS_RADIUS, 64, 64]}>
      <meshStandardMaterial color="#b8e2f2" />
    </Sphere>
  );
}

function Moon({
  distance,
  radius,
  color,
}: {
  readonly distance: number;
  readonly radius: number;
  readonly color: string;
}) {
  return (
    <mesh position={[distance, 0, 0]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function UranusSystem() {
  return (
    <Suspense fallback={null}>
      <Uranus />
      {MOONS.map((moon) => (
        <Moon key={moon.name} {...moon} />
      ))}
    </Suspense>
  );
}
