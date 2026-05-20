# Stack Rules

## Core Stack

Framework:
- Next.js 15 App Router

Language:
- TypeScript only

3D:
- Three.js
- React Three Fiber
- Drei

Animation:
- Framer Motion for UI only
- useFrame for realtime 3D animation

Styling:
- TailwindCSS

State:
- Zustand only when global shared state is required

---

# Forbidden Technologies

Do NOT introduce:
- Redux
- jQuery
- GSAP unless explicitly requested
- styled-components
- massive UI frameworks
- unnecessary backend systems

Avoid dependency bloat.

---

# Animation Ownership

UI animation:
- Framer Motion

3D animation:
- useFrame
- shader logic
- math utilities

Never use React state for per-frame animation.

---

# Rendering Philosophy

Prefer:
- lightweight realtime rendering
- reusable materials
- memoized geometry
- isolated animated components

Avoid:
- monolithic scene systems
- excessive postprocessing
- unnecessary shader complexity

---

# Shader Philosophy

Shaders should only exist for:
- glow
- fresnel
- particles
- atmosphere

Avoid shader overengineering.

---

# State Management Rules

Global state allowed only for:
- hover state
- scene transition state
- UI visibility

Do not store realtime animation state globally.

---

# Routing Rules

Use:
- Next.js App Router

Routes:
- /fullstack
- /gamedev
- /multimedia

Transitions between routes should feel cinematic.

---

# Styling Rules

Use:
- Tailwind utilities first

Avoid:
- giant CSS files
- duplicated glow styles
- inline styles unless dynamic

---

# Performance Rules

Desktop:
- 60fps target

Mobile:
- adaptive quality required

Always:
- reduce particles on mobile
- avoid unnecessary rerenders
- optimize useFrame usage

---

# Code Philosophy

Code should be:
- modular
- scalable
- reusable
- readable
- isolated by responsibility

Avoid:
- giant components
- duplicated logic
- hidden side effects

---

# Scene Philosophy

The experience should feel:
- cinematic
- immersive
- atmospheric
- futuristic
- premium

NOT:
- game UI
- dashboard UI
- cyberpunk overload
- cartoon sci-fi