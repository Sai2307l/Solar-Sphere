import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";
import AnimatedStars from "./stars";
import { Jupiter_Moons } from "../../constant/moons"; 

// Add random initial angles to major moons
const moons = Jupiter_Moons.map((moon) => ({
  ...moon,
  angle: Math.random() * Math.PI * 2,
}));

// Moon component with orbit rotation and hover label
function Moon({
  radius,
  angle,
  size,
  color,
  speed,
  name,
}: {
  readonly radius: number;
  readonly angle: number;
  readonly size: number;
  readonly color: string;
  readonly speed: number;
  readonly name: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const currentAngle = angle + t * speed;
      meshRef.current.position.x = Math.cos(currentAngle) * radius;
      meshRef.current.position.z = Math.sin(currentAngle) * radius;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} />
      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "12px",
              pointerEvents: "none",
            }}
          >
            {name}
          </div>
        </Html>
      )}
    </mesh>
  );
}

// Jupiter planet component with rotation and hover label
function Jupiter() {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const texture_jupiter = new TextureLoader().load(
    "../../../assets/jupiter_surface.jpg"
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial color="#e0b97d" map={texture_jupiter} />
      {hovered && (
        <Html distanceFactor={15}>
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "32px",
              pointerEvents: "none",
            }}
          >
            Jupiter
          </div>
        </Html>
      )}
    </mesh>
  );
}

// Jupiter system with major moons
export default function JupiterSystem() {
  return (
    <>
      <AnimatedStars />
      <Jupiter />
      {moons.map((moon, i) => (
        <Moon
          key={moon.name}
          radius={moon.radius}
          angle={moon.angle}
          size={moon.size}
          color={moon.color}
          speed={0.15 + 0.03 * i}
          name={moon.name}
        />
      ))}
    </>
  );
}
