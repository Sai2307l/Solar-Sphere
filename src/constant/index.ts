export const navLinks = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/about", name: "About" },
  { id: 3, href: "/services", name: "Services" },
  { id: 4, href: "/contact", name: "Contact" },
];

export const planets = [
  {
    name: "Mercury",
    texture: "assets/mercury_surface.jpg",
    size: 0.2,
    distance: 2,
    rotation_speed: Math.random() + 0.5, // 0.5 to 1.5
    revolution_speed: 0.2,
  },
  {
    name: "Venus",
    texture: "assets/venus_surface.jpg",
    size: 0.3,
    distance: 3,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
  {
    name: "Earth",
    texture: "assets/earth_surface.jpg",
    size: 0.32,
    distance: 4,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
  {
    name: "Mars",
    texture: "assets/mars_surface.jpg",
    size: 0.28,
    distance: 5,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
  {
    name: "Jupiter",
    texture: "assets/jupiter_surface.jpg",
    size: 0.7,
    distance: 7,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
  {
    name: "Saturn",
    texture: "assets/saturn_surface.jpg",
    size: 0.6,
    distance: 9,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
  {
    name: "Uranus",
    texture: "assets/uranus_surface.jpg",
    size: 0.5,
    distance: 11,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
  {
    name: "Neptune",
    texture: "assets/neptune_surface.jpg",
    size: 0.5,
    distance: 13,
    rotation_speed: Math.random() + 0.5,
    revolution_speed: 0.3,
  },
];
