import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Earth() {
  const moonRef = useRef<THREE.Mesh>(null!);
  const moonOrbitA = 2; // semi-major axis
  const moonOrbitB = 1.2; // semi-minor axis
  const texture_earth = new TextureLoader().load(
    "../../../assets/earth_surface.jpg"
  );
  const texture_moon = new TextureLoader().load(
    "../../../assets/moon_surface.jpg"
  );

  // Precompute the points for the moon's elliptical orbit
  const moonOrbitPoints = useMemo(() => {
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(
          Math.cos(theta) * moonOrbitA,
          0,
          Math.sin(theta) * moonOrbitB
        )
      );
    }
    return points;
  }, [moonOrbitA, moonOrbitB]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Animate Moon in elliptical orbit around Earth
    if (moonRef.current) {
      moonRef.current.position.x = Math.cos(t * 1.5) * moonOrbitA;
      moonRef.current.position.z = Math.sin(t * 1.5) * moonOrbitB;
    }
  });
  // Realistic radii (in thousands of km, scaled down for visualization)
  const earthRadius = 1; // base unit
  const moonRadius = 0.273; // Moon's radius is about 0.273 times Earth's

  return (
    <group>
      {/* Earth */}
      <mesh>
        <sphereGeometry args={[earthRadius, 32, 32]} />
        <meshStandardMaterial map={texture_earth} color="#3a6ea5" />
      </mesh>
      {/* Moon (elliptical orbit) */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[moonRadius, 32, 32]} />
        <meshStandardMaterial map={texture_moon} color="#bbb" />
      </mesh>
      {/* Moon's orbit path */}
      <Line points={moonOrbitPoints} color="#bbb" lineWidth={1} />
    </group>
  );
}
