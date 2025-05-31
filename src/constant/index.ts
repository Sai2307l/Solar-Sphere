import { PlanetInfoProps } from "./types";
export const navLinks = [
  { id: 1, href: "/", name: "Solar-System" },
  { id: 2, href: "/planets/mercury", name: "Mercury" },
  { id: 3, href: "/planets/venus", name: "Venus" },
  { id: 4, href: "/planets/earth", name: "Earth" },
  { id: 5, href: "/planets/mars", name: "Mars" },
  { id: 6, href: "/planets/jupiter", name: "Jupiter" },
  { id: 7, href: "/planets/saturn", name: "Saturn" },
  { id: 8, href: "/planets/uranus", name: "Uranus" },
  { id: 9, href: "/planets/neptune", name: "Neptune" },
];

export const planets = [
  {
    name: "Mercury",
    texture: "assets/mercury_surface.jpg",
    size: 0.2,
    distance: 2,
    rotation_speed: 1 / 58.6,
    revolution_speed: 1 / 87.97,
    eccentricity: 0.2056,
    axialTilt: 0.034, // degrees
    inclination: 7.0, // degrees
  },
  {
    name: "Venus",
    texture: "assets/venus_surface.jpg",
    size: 0.3,
    distance: 3,
    rotation_speed: -1 / 243,
    revolution_speed: 1 / 224.7,
    eccentricity: 0.0067,
    axialTilt: 177.4, // degrees
    inclination: 3.4, // degrees
  },
  {
    name: "Earth",
    texture: "assets/earth_surface.jpg",
    size: 0.32,
    distance: 4,
    rotation_speed: 1,
    revolution_speed: 1 / 365.25,
    eccentricity: 0.0167,
    axialTilt: 23.44, // degrees
    inclination: 0.0, // degrees
  },
  {
    name: "Mars",
    texture: "assets/mars_surface.jpg",
    size: 0.28,
    distance: 5,
    rotation_speed: 1 / 1.025,
    revolution_speed: 1 / 687,
    eccentricity: 0.0934,
    axialTilt: 25.19, // degrees
    inclination: 1.85, // degrees
  },
  {
    name: "Jupiter",
    texture: "assets/jupiter_surface.jpg",
    size: 0.7,
    distance: 7,
    rotation_speed: 1 / 0.413,
    revolution_speed: 1 / 4332.59,
    eccentricity: 0.0489,
    axialTilt: 3.13, // degrees
    inclination: 1.31, // degrees
  },
  {
    name: "Saturn",
    texture: "assets/saturn_surface.jpg",
    size: 0.6,
    distance: 9,
    rotation_speed: 1 / 0.446,
    revolution_speed: 1 / 10759.22,
    eccentricity: 0.0565,
    axialTilt: 26.73, // degrees
    inclination: 2.49, // degrees
  },
  {
    name: "Uranus",
    texture: "assets/uranus_surface.jpg",
    size: 0.5,
    distance: 11,
    rotation_speed: -1 / 0.717,
    revolution_speed: 1 / 30688.5,
    eccentricity: 0.0457,
    axialTilt: 97.77, // degrees
    inclination: 0.77, // degrees
  },
  {
    name: "Neptune",
    texture: "assets/neptune_surface.jpg",
    size: 0.5,
    distance: 13,
    rotation_speed: 1 / 0.671,
    revolution_speed: 1 / 60182,
    eccentricity: 0.0113,
    axialTilt: 28.32, // degrees
    inclination: 1.77, // degrees
  },
];

export const planetsData: PlanetInfoProps[] = [
  {
    name: "Mercury",
    radius: "2,439.7 km",
    mass: "3.30 × 10^23 kg",
    rotationPeriod: "58.6 days",
    rotationDirection: "Prograde",
    revolutionPeriod: "87.97 days",
    distanceFromSun: "57.9 million km",
    gravity: "3.7 m/s²",
    atmosphere: "Trace (O₂, Na, H₂, He, K)",
    surfaceTemperature: "-173°C to 427°C",
  },
  {
    name: "Venus",
    radius: "6,051.8 km",
    mass: "4.87 × 10^24 kg",
    rotationPeriod: "243 days",
    rotationDirection: "Retrograde",
    revolutionPeriod: "224.7 days",
    distanceFromSun: "108.2 million km",
    gravity: "8.87 m/s²",
    atmosphere: "CO₂, N₂, SO₂",
    surfaceTemperature: "462°C",
  },
  {
    name: "Earth",
    radius: "6,371 km",
    mass: "5.97 × 10^24 kg",
    rotationPeriod: "23.9 hours",
    rotationDirection: "Prograde",
    revolutionPeriod: "365.25 days",
    distanceFromSun: "149.6 million km",
    gravity: "9.81 m/s²",
    atmosphere: "N₂, O₂, Ar, CO₂",
    surfaceTemperature: "-88°C to 58°C",
  },
  {
    name: "Mars",
    radius: "3,389.5 km",
    mass: "6.42 × 10^23 kg",
    rotationPeriod: "24.6 hours",
    rotationDirection: "Prograde",
    revolutionPeriod: "687 days",
    distanceFromSun: "227.9 million km",
    gravity: "3.71 m/s²",
    atmosphere: "CO₂, N₂, Ar",
    surfaceTemperature: "-125°C to 20°C",
  },
  {
    name: "Jupiter",
    radius: "69,911 km",
    mass: "1.90 × 10^27 kg",
    rotationPeriod: "9.9 hours",
    rotationDirection: "Prograde",
    revolutionPeriod: "11.86 years",
    distanceFromSun: "778.5 million km",
    gravity: "24.79 m/s²",
    atmosphere: "H₂, He",
    surfaceTemperature: "-145°C",
  },
  {
    name: "Saturn",
    radius: "58,232 km",
    mass: "5.68 × 10^26 kg",
    rotationPeriod: "10.7 hours",
    rotationDirection: "Prograde",
    revolutionPeriod: "29.45 years",
    distanceFromSun: "1.43 billion km",
    gravity: "10.44 m/s²",
    atmosphere: "H₂, He",
    surfaceTemperature: "-178°C",
  },
  {
    name: "Uranus",
    radius: "25,362 km",
    mass: "8.68 × 10^25 kg",
    rotationPeriod: "17.2 hours",
    rotationDirection: "Retrograde",
    revolutionPeriod: "84 years",
    distanceFromSun: "2.87 billion km",
    gravity: "8.87 m/s²",
    atmosphere: "H₂, He, CH₄",
    surfaceTemperature: "-224°C",
  },
  {
    name: "Neptune",
    radius: "24,622 km",
    mass: "1.02 × 10^26 kg",
    rotationPeriod: "16.1 hours",
    rotationDirection: "Prograde",
    revolutionPeriod: "164.8 years",
    distanceFromSun: "4.5 billion km",
    gravity: "11.15 m/s²",
    atmosphere: "H₂, He, CH₄",
    surfaceTemperature: "-214°C",
  },
];
