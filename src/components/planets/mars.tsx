import React, { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";
import AnimatedStars from "./stars";
import { Mars_Moons } from "../../constant/moons";
const marsRadius = 1;

function Mars() {
  const texture_mars = new TextureLoader().load(
    "../../../assets/mars_surface.jpg"
  );
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture_mars} />
    </mesh>
  );
}

function Moon({
  radius,
  distance,
  color,
  orbitSpeed = 0.02,
  name,
}: {
  readonly radius: number;
  readonly distance: number;
  readonly color: string;
  readonly orbitSpeed?: number;
  readonly name: string;
}) {
  const ref = React.useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * orbitSpeed;
    }
  });
  return (
    <group ref={ref}>
      <mesh position={[distance, 0, 0]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7} // Highlight effect
        />
        {/* Textbox/label */}
        <Html distanceFactor={10} position={[0, radius + 0.05, 0]}>
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Hi I am {name}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export default function MarsSystem() {
  return (
    <Suspense fallback={null}>
      <AnimatedStars />
      <Mars />
      {Mars_Moons.map((moon, index) => (
        <Moon
          key={moon.index}
          radius={moon.radius}
          distance={1.5 + index * 0.5}
          color={moon.color}
          orbitSpeed={0.02 + index * 0.01}
          name={moon.name}
        />
      ))}
    </Suspense>
  );
}
