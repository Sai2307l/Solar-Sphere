import React from "react";
import type { PlanetInfoProps } from "@/constant/types";

const PlanetInfo: React.FC<PlanetInfoProps> = ({
  name,
  radius,
  mass,
  rotationPeriod,
  rotationDirection,
  revolutionPeriod,
  distanceFromSun,
  gravity,
  atmosphere,
  surfaceTemperature,
}) => (
  <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-2xl shadow-lg p-8 max-w-md mx-auto my-8 border border-gray-200 backdrop-blur-sm">
    <ul className="space-y-4">
      <li className="flex justify-between">
        <span className="text-gray-700">Radius:</span>
        <span className="font-medium text-gray-900">{radius}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Mass:</span>
        <span className="font-medium text-gray-900">{mass}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Rotation Period:</span>
        <span className="font-medium text-gray-900">{rotationPeriod}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Rotation Direction:</span>
        <span className="font-medium text-gray-900">{rotationDirection}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Revolution Period:</span>
        <span className="font-medium text-gray-900">{revolutionPeriod}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Distance from Sun:</span>
        <span className="font-medium text-gray-900">{distanceFromSun}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Gravity:</span>
        <span className="font-medium text-gray-900">{gravity}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Atmosphere:</span>
        <span className="font-medium text-gray-900">{atmosphere}</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-700">Surface Temperature:</span>
        <span className="font-medium text-gray-900">{surfaceTemperature}</span>
      </li>
    </ul>
  </div>
);

export default PlanetInfo;
