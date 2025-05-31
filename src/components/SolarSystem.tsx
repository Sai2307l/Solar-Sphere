import React, { useRef, useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { planets } from "../constant/index";
import { Html } from "@react-three/drei";

function Planet({
  name,
  texture,
  size,
  distance,
  rotation_speed,
  revolution_speed,
  ...props
}: Readonly<{
  name: string;
  texture: string;
  size: number;
  distance: number;
  rotation_speed: number;
  revolution_speed: number;
}>) {
  const [hover, setHover] = useState(false);
  const handlePointerOver = () => setHover(true);
  const handlePointerOut = () => setHover(false);

  const ref = useRef<THREE.Mesh>(null);
  const surface = new THREE.TextureLoader().load(texture);
  useFrame((state, delta) => {
    if (ref.current) {
      // Orbit around the sun
      ref.current.parent!.rotation.y += (delta * revolution_speed) / distance;
      // Self-rotation
      ref.current.rotation.y += delta * rotation_speed;
    }
  });

  return (
    <group>
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        ref={ref}
        position={[distance, 0, 0]}
        {...props}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={0xffffff} map={surface} />
        {hover && (
          <Html position={[0, 1.2, 0]} center>
            <div
              style={{
                color: "white",
                background: "black",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {name}
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        emissive="#fff700"
        color="#fff700"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

const SolarSystem: React.FC = () => {
  return (
    <group>
      <Stars radius={50} depth={60} count={5000} factor={4} fade />
      <Sun />
      {planets.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
      <OrbitControls enablePan={false} />
    </group>
  );
};

export default SolarSystem;
