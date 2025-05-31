"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import CanvasLoader from "./Loading";
import SolarSystem from "./SolarSystem";

const Hero = () => {
  //TODO: Implement responsive design using media queries
  // Use media queries to determine screen size
  // const isSmall = useMediaQuery({ maxWidth: 440 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  //   const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Use Leva for debugging and controlling parameters

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 px-5 sm:px-10 gap-3">
        Heading
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <SolarSystem />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit"></a>
      </div>
    </section>
  );
};

export default Hero;
