# Orbit Scene Skill

## Purpose

This skill defines the architecture and behavior for the orbital portfolio scene.

The scene must feel:
- cinematic
- smooth
- immersive
- premium
- physics-inspired
- calm and atmospheric

NOT:
- mechanical
- arcade-like
- chaotic
- overly reactive
- cartoonish

---

# Core Scene Structure

The root scene component is:

src/components/scene/OrbitScene.tsx

OrbitScene is responsible ONLY for:
- scene composition
- camera setup
- lighting setup
- postprocessing setup
- high-level orchestration

OrbitScene must NOT contain:
- orbit math
- hover logic
- animation calculations
- duplicated mesh logic

Those belong in isolated reusable components/hooks.

---

# Scene Hierarchy

OrbitScene
 ├── SceneLights
 ├── SpaceBackground
 ├── FloatingParticles
 ├── OrbitSystem
 │     ├── CenterCore
 │     ├── OrbitRing
 │     └── PortfolioPlanet
 └── PostProcessing

---

# Center Core Rules

The center sphere:
- represents creator identity
- is NOT clickable
- emits the strongest glow
- moves very subtly
- slowly pulses brightness
- should feel stable and massive

Movement:
- slight floating only
- no orbiting
- extremely slow vertical drift

Recommended:
- emissive material
- fresnel/rim lighting
- bloom contribution

---

# Orbit Planet Rules

Portfolio planets:
- orbit around center
- are clickable
- contain labels
- emit soft colored glow
- scale slightly on hover

Planets must:
- feel lightweight
- feel elegant
- move independently
- have slightly different speeds

Each planet:
- uses independent orbit radius
- uses independent orbit speed
- has tiny floating offset
- has tiny phase offset

Never perfectly synchronize planets.

---

# Orbital Motion Rules

Orbit motion MUST:
- be delta-time based
- use smooth continuous motion
- loop infinitely
- avoid sudden acceleration

The motion should resemble:
- celestial mechanics
- slow atomic motion
- sci-fi UI simulations

Avoid:
- sine-only robotic movement
- abrupt direction changes
- sharp interpolation

---

# Orbit Math Rules

Orbit calculations belong in:
src/hooks/useOrbitMotion.ts

Never place orbit math directly inside JSX.

Orbit formula should support:
- radius
- speed
- tilt
- phase offset
- ellipse distortion

Preferred style:
- elliptical orbit
- slightly imperfect motion
- non-uniform depth feel

Example concept:
x = cos(time * speed + phase) * radius
z = sin(time * speed + phase) * radius

Optional:
- small y drift
- subtle wobble

---

# Depth & Layering

Scene must feel deep.

Required:
- planets pass visually in front/behind center
- glow intensity varies by depth
- orbit rings fade slightly with depth
- particles exist at multiple distances

Avoid:
- flat 2D appearance
- identical scaling everywhere

---

# Orbit Rings

Orbit rings:
- are semi-transparent
- softly glowing
- thin and elegant
- slightly animated

Recommended:
- additive blending
- moving light streaks
- opacity between 0.15–0.35

Orbit rings should NEVER dominate the scene.

---

# Hover Behavior

On hover:
- scale increases slightly
- glow intensifies
- orbit ring brightens slightly
- label opacity increases
- cursor becomes pointer

Hover transitions MUST:
- ease smoothly
- never snap instantly
- never overscale aggressively

Hover should feel:
- premium
- soft
- magnetic

NOT:
- bouncy
- elastic
- cartoonish

---

# Click Behavior

On click:
- smooth transition begins
- selected planet subtly enlarges
- camera may slightly push inward
- scene fades elegantly

Never:
- hard cut instantly
- shake camera violently
- use fast zooms

---

# Camera Rules

Camera should:
- remain stable
- drift subtly
- feel cinematic

Recommended:
- slight mouse parallax
- extremely soft movement
- low amplitude motion

Avoid:
- FPS-like controls
- orbit controls exposed to user
- aggressive camera motion

---

# Particle Rules

Particles:
- are subtle
- slow moving
- sparse
- layered in depth

Use:
- instanced rendering when possible
- low alpha
- small scale variation

Avoid:
- snow-like movement
- excessive density
- distracting brightness

---

# Performance Rules

Desktop:
- full effects enabled

Mobile:
- reduced particles
- reduced bloom
- simplified shaders
- reduced blur radius

Always prioritize:
- stable framerate
- smooth animation

Avoid:
- expensive recalculations every frame
- unnecessary rerenders
- creating materials inside render loops

---

# Rendering Standards

Prefer:
- reusable materials
- memoized geometry
- isolated animated components

Avoid:
- giant monolithic scene files
- duplicated shader logic
- inline material creation

---

# Visual Style

The scene should feel like:
- futuristic operating system
- cinematic AI interface
- sci-fi identity sequence
- premium creative technology brand

Keywords:
- holographic
- atmospheric
- ethereal
- immersive
- elegant
- minimal
- neon glow
- cinematic

Avoid:
- gaming HUD clutter
- overdesigned interfaces
- rainbow neon overload
- excessive UI panels