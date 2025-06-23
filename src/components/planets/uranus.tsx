import React, { Suspense, useRef, useState } from "react";
import { Sphere, useTexture, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import AnimatedStars from "./stars";
import { Uranus_Moons } from "../../constant/moons";

const URANUS_RADIUS = 2;

// Replace this path with the actual path to your Uranus texture image
const URANUS_TEXTURE_URL = "../../../assets/uranus_surface.jpg";

function Uranus() {
  const texture = useTexture(URANUS_TEXTURE_URL);
  const meshRef = useRef<THREE.Mesh>(null);

  // Uranus rotation (axial tilt ~98 degrees, but for simplicity, just rotate Y)
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.2 * delta;
    }
  });

  return (
    <Sphere ref={meshRef} args={[URANUS_RADIUS, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Moon({
  name,
  distance,
  radius,
  color,
  revolutionSpeed,
  rotationSpeed,
}: {
  readonly name: string;
  readonly distance: number;
  readonly radius: number;
  readonly color: string;
  readonly revolutionSpeed: number;
  readonly rotationSpeed: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Revolution around Uranus
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += revolutionSpeed * delta * 0.2;
    }
    // Moon's own rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        position={[distance, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hovered && (
        <Html
          position={[distance, radius + 0.3, 0]}
          center
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function UranusSystem() {
  return (
    <Suspense fallback={null}>
      <AnimatedStars />
      <Uranus />
      {Uranus_Moons.map((moon) => (
        <Moon key={moon.name} {...moon} />
      ))}
    </Suspense>
  );
}
