export type OrbitNode = {
  id: "fullstack" | "gamedev" | "multimedia";
  title: string;
  description: string;
  href: string;
  color: string;
  accent: string;
  radius: number;
  speed: number;
  tilt: number;
  phase: number;
  ellipse: number;
  size: number;
};

export const orbitNodes: OrbitNode[] = [
  {
    id: "fullstack",
    title: "FullStack",
    description: "Modern web systems & backend architecture",
    href: "/fullstack",
    color: "#63f2ff",
    accent: "#b6fbff",
    radius: 3.18,
    speed: 0.19,
    tilt: -0.36,
    phase: 0.35,
    ellipse: 0.74,
    size: 0.32,
  },
  {
    id: "gamedev",
    title: "Game Development",
    description: "Interactive worlds, VR & experimental mechanics",
    href: "/gamedev",
    color: "#ffd36b",
    accent: "#fff1bd",
    radius: 3.72,
    speed: 0.145,
    tilt: 0.28,
    phase: 2.42,
    ellipse: 0.66,
    size: 0.35,
  },
  {
    id: "multimedia",
    title: "Multimedia Production",
    description: "Sound, motion, 3D reconstruction & cinematic edits",
    href: "/multimedia",
    color: "#ff6ba8",
    accent: "#ffc1da",
    radius: 4.2,
    speed: 0.116,
    tilt: -0.08,
    phase: 4.55,
    ellipse: 0.6,
    size: 0.3,
  },
];

export const sectionDetails = {
  fullstack: {
    eyebrow: "Systems",
    title: "FullStack",
    summary: "Interfaces, APIs, cloud foundations, and production web platforms designed for speed and longevity.",
    items: ["SaaS dashboards", "Backend services", "API architecture", "Cloud deployment"],
  },
  gamedev: {
    eyebrow: "Interaction",
    title: "Game Development",
    summary: "Real-time experiences, prototypes, Unity systems, VR scenes, and mechanics with a strong technical spine.",
    items: ["Unity projects", "VR interactions", "Multiplayer systems", "Experimental mechanics"],
  },
  multimedia: {
    eyebrow: "Production",
    title: "Multimedia Production",
    summary: "Cinematic edits, sound design, video systems, 3D reconstruction, and content analysis workflows.",
    items: ["Music production", "Video editing", "3D reconstruction", "Cinematic content"],
  },
} as const;
