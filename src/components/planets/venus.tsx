import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import { Html } from "@react-three/drei";
import AnimatedStars from "./stars"; // Import the animated stars component

const Venus: React.FC = () => {
  const venusRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const texture_venus = new TextureLoader().load(
    "../../../assets/venus_surface.jpg"
  );

  useFrame(() => {
    if (venusRef.current) {
      venusRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      <AnimatedStars />
      <mesh
        ref={venusRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color="#b5b5b5"
          metalness={0.7}
          roughness={0.5}
          map={texture_venus}
        />
      </mesh>
      {hovered && (
        <mesh position={[0, 0.6, 0]}>
          <planeGeometry args={[0.7, 0.2]} />
          <meshBasicMaterial color="black" transparent opacity={0.7} />
          <group position={[0, 0, 0.01]}>
            <Html center style={{ color: "white", fontSize: "16px" }}>
              Venus
            </Html>
          </group>
        </mesh>
      )}
    </group>
  );
};

export default Venus;
