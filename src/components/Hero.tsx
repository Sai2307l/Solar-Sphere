"use client";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";

import CanvasLoader from "./Loading";
import SolarSystem from "./SolarSystem";

const Hero = () => {
  // Time state for fast-forwarding
  const [time, setTime] = useState(1); // Default time speed set to 1X

  // Pass time as a prop to SolarSystem
  return (
    <section className="min-h-screen w-full flex  relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 px-5 sm:px-10 gap-3 z-10 relative">
        <TypeAnimation
          sequence={[
            "Explore the Universe",
            2000,
            "Experience the Wonders of Space",
            2000,
            "Discover the Solar System",
            2000,
            "Learn about Planets",
            2000,
            "Experience Space in 3D",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-4xl text-white sm:text-6xl font-bold"
        />
        <p className="text-lg sm:text-xl text-gray-300">
          Discover the wonders of our solar system with interactive 3D models.
        </p>
      </div>
      <div className="w-full px-5 sm:px-10  relative">
        {/* Time slider */}
        <div className="flex items-center gap-3 justify-end sm:mt-36 mt-20 ">
          <label htmlFor="time-slider" className="text-gray-200">
            Speed:
          </label>
          <input
            id="time-slider"
            type="range"
            min={1}
            max={100}
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-48 z-40"
          />
          <span className="text-gray-300">{time}X</span>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0 z-30">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <SolarSystem time={time} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
