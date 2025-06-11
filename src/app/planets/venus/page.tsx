"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import PlanetInfo from "@/components/planets/info";
import { PlanetInfoProps } from "@/constant/types";
import { planetsData } from "@/constant/index";
import Navbar from "@/components/Navbar";
import Venus from "@/components/planets/venus";
export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="flex bg-black text-white overflow-hidden">
        {/* 3D Canvas Side */}
        <div className="flex-1 bg-[#111] rounded-l-2xl">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={10} color={"white"} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} />
            <Venus />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>

        {/*  Info Side */}
        <div className="flex-1 p-8 space-y-8 h-screen overflow-y-auto bg-[#111] rounded-r-2xl ">
          <h1 className="text-3xl font-bold text-blue-200 mb-4 text-center pt-24">
            Venus
          </h1>
          <PlanetInfo
            {...(planetsData.find(
              (planet) => planet.name === "Venus"
            ) as PlanetInfoProps)}
          />
        </div>
      </div>
    </div>
  );
}
