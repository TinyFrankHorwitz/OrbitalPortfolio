# React Three Fiber Standards Skill

## Purpose

Defines standards for all React Three Fiber implementation in the project.

Goal:
- maintain performance
- preserve architecture consistency
- keep scene scalable
- avoid chaotic scene logic

---

# Scene Ownership Rules

The main scene root is:
src/components/scene/OrbitScene.tsx

OrbitScene owns:
- Canvas composition
- camera setup
- lights
- postprocessing
- high-level orchestration

Individual objects own their own animation logic.

---

# Component Rules

Each visual object must be isolated.

GOOD:
- PortfolioPlanet.tsx
- OrbitRing.tsx
- FloatingParticles.tsx

BAD:
- giant all-in-one scene files

---

# Animation Rules

Heavy animation logic belongs in:
- useFrame
- isolated hooks
- math utilities

Never:
- animate through React rerenders
- use useState for frame updates

---

# useFrame Standards

useFrame should:
- stay lightweight
- avoid allocations
- avoid creating vectors every frame

Preferred:
- mutate refs directly
- reuse math objects

Avoid:
- setState inside useFrame
- creating materials/geometries every frame

---

# Geometry Rules

Memoize reusable geometry.

Preferred:
- shared sphere geometry
- shared ring geometry

Avoid:
- recreating geometry repeatedly

---

# Material Rules

Materials should:
- be reusable
- be memoized when possible
- use emissive glow carefully

Preferred:
- MeshStandardMaterial
- ShaderMaterial only when needed

Avoid:
- unnecessary custom shaders everywhere

---

# Lighting Rules

Lighting should feel cinematic.

Recommended:
- soft ambient light
- subtle rim lighting
- soft point lights

Avoid:
- harsh white lighting
- overexposed scenes
- flat lighting

---

# Bloom Rules

Bloom should:
- enhance glow
- remain soft
- avoid washing out the scene

Preferred:
- selective glow feeling
- restrained intensity

Avoid:
- extreme bloom explosions

---

# Postprocessing Rules

Use postprocessing sparingly.

Recommended:
- Bloom
- Noise (very subtle)
- Vignette
- Depth of Field (light use)

Avoid:
- excessive chromatic aberration
- heavy distortion
- distracting effects

---

# Camera Rules

Camera should:
- remain stable
- feel cinematic
- move subtly

Avoid:
- OrbitControls for users
- uncontrolled free camera
- dramatic shaking

---

# Transparency Rules

Transparent materials:
- should use low opacity
- should avoid sorting issues
- should remain subtle

Recommended:
- additive blending for glow
- depthWrite carefully configured

---

# Shader Rules

Use shaders only when necessary.

Shaders are appropriate for:
- glow
- fresnel effects
- particles
- atmosphere

Avoid:
- overengineering simple materials

Shader files belong in:
src/shaders/

---

# Particle Standards

Particles must:
- be lightweight
- use instancing when possible
- have subtle motion

Avoid:
- large sprite textures
- extremely dense particle systems

---

# Mobile Optimization Rules

On mobile:
- reduce particles
- reduce bloom
- simplify shaders
- reduce geometry detail

Always detect low-end devices.

---

# Render Loop Rules

Avoid:
- unnecessary calculations
- expensive physics
- realtime shadow abuse

Prefer:
- baked/simple lighting
- lightweight math
- stable frame pacing

---

# Memory Rules

Dispose:
- custom materials
- render targets
- textures when necessary

Avoid memory leaks.

---

# Folder Standards

3D scene components:
src/components/scene/

Shaders:
src/shaders/

Hooks:
src/hooks/

Math utilities:
src/lib/

Data:
src/data/

---

# Code Philosophy

R3F code should feel:
- modular
- predictable
- scalable
- performant

Avoid:
- experimental chaos
- deeply nested scene logic
- tightly coupled components