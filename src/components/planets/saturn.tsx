import React, { Suspense, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import AnimatedStars from "./stars";
import { Saturn_Moons } from "../../constant/moons";
// Major moons with approximate distances (scaled down) and sizes

function Saturn() {
  const groupRef = useRef<THREE.Group>(null);
  const texture_saturn_ring = new TextureLoader().load(
    "../../../assets/saturn_ring.jpg"
  );
  const texture_saturn = new TextureLoader().load(
    "../../../assets/saturn_surface.jpg"
  );

  // Saturn rotation (self-rotation)
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.2 * delta; // Adjust speed as needed
    }
  });

  return (
    <group ref={groupRef}>
      {/* Saturn Sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={texture_saturn} />
      </mesh>
      {/* Saturn Rings */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.4, 4, 128]} />
        <meshBasicMaterial
          map={texture_saturn_ring}
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
  revolutionSpeed = 0.2,
  name,
}: {
  readonly distance: number;
  readonly size: number;
  readonly color: string;
  readonly angle?: number;
  readonly revolutionSpeed?: number;
  readonly name: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Revolution around Saturn
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        angle + state.clock.getElapsedTime() * revolutionSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        position={[distance, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hovered && (
        <Html
          position={[distance, size + 0.2, 0]}
          center
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "white",
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

export default function SaturnSystem() {
  return (
    <Suspense fallback={null}>
      <AnimatedStars />
      <Saturn />
      {Saturn_Moons.map((moon, i) => (
        <Moon
          key={moon.name}
          {...moon}
          angle={(i / Saturn_Moons.length) * Math.PI * 2}
          revolutionSpeed={0.15 + i * 0.03}
          name={moon.name}
        />
      ))}
    </Suspense>
  );
}
