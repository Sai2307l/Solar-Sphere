import React, { useRef, useState } from "react";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { planets } from "../constant/index";

function Planet({
  name,
  texture,
  size,
  distance,
  rotation_speed,
  revolution_speed,
  eccentricity,
  ...props
}: Readonly<{
  name: string;
  texture: string;
  size: number;
  distance: number;
  rotation_speed: number;
  revolution_speed: number;
  eccentricity: number;
}>) {
  const [hover, setHover] = useState(false);
  const handlePointerOver = () => setHover(true);
  const handlePointerOut = () => setHover(false);

  const ref = useRef<THREE.Mesh>(null);
  const surface = new THREE.TextureLoader().load(texture);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  // Precompute ellipse points for the orbit path
  const orbitPoints = React.useMemo(() => {
    const points: THREE.Vector3[] = [];
    const a = distance;
    const b = distance * (1 - eccentricity);
    for (let i = 0; i <= 128; i++) {
      const theta = (i / 128) * Math.PI * 2;
      points.push(
        new THREE.Vector3(a * Math.cos(theta), 0, b * Math.sin(theta))
      );
    }
    return points;
  }, [distance, eccentricity]);

  useFrame((state, delta) => {
    angleRef.current += delta * revolution_speed;
    const a = distance;
    const b = distance * (1 - eccentricity);
    const x = a * Math.cos(angleRef.current);
    const z = b * Math.sin(angleRef.current);

    if (ref.current) {
      ref.current.position.set(x, 0, z);
      ref.current.rotation.y += delta * rotation_speed;
    }
  });

  return (
    <group>
      {/* Orbit Path */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            args={[
              new Float32Array(orbitPoints.flatMap((v) => [v.x, v.y, v.z])),
              3,
            ]}
            attach="attributes-position"
            count={orbitPoints.length}
            array={
              new Float32Array(orbitPoints.flatMap((v) => [v.x, v.y, v.z]))
            }
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#888" linewidth={1} />
      </line>
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        ref={ref}
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

const SolarSystem = ({ time }: { time: number }) => {
  // Update planets' properties based on time
  const updatedPlanets = planets.map((planet) => ({
    ...planet,
    rotation_speed: planet.rotation_speed * time,
    revolution_speed: planet.revolution_speed * time,
  }));
  return (
    <group>
      <Stars radius={50} depth={60} count={5000} factor={4} fade />
      <Sun />
      {updatedPlanets.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
      <OrbitControls enablePan={false} />
    </group>
  );
};

export default SolarSystem;
