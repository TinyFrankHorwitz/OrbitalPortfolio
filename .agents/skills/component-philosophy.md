# Component Philosophy Skill

## Purpose

Defines how components must be architected across the entire project.

Goal:
- scalability
- readability
- maintainability
- predictable ownership
- clean realtime rendering architecture

This project is NOT a prototype.

It must feel like a professional cinematic interactive experience.

---

# Core Philosophy

Components must:
- do one thing well
- remain isolated
- be reusable
- avoid hidden side effects

Prefer:
- composition
- modularity
- separation of concerns

Avoid:
- giant components
- mixed responsibilities
- tightly coupled logic

---

# Golden Rule

A component should NEVER simultaneously own:
- rendering
- heavy animation logic
- global state
- routing
- business logic

Split responsibilities.

---

# Scene Component Philosophy

3D scene components must remain small and specialized.

GOOD:
- PortfolioPlanet
- OrbitRing
- FloatingParticles
- CenterCore

BAD:
- MassiveSceneObject
- EverythingRenderer
- PortfolioUniverseManager

---

# Ownership Rules

## OrbitScene.tsx

Owns:
- Canvas structure
- scene composition
- lights
- postprocessing
- camera setup

Does NOT own:
- orbit math
- hover logic
- particle logic
- individual animations

---

## PortfolioPlanet.tsx

Owns:
- planet rendering
- hover visuals
- click handling
- local animation

Does NOT own:
- scene management
- global state logic
- routing system setup

---

## Hooks Own Behavior

Hooks should contain:
- reusable logic
- calculations
- shared animation systems

Example:
- useOrbitMotion
- useHoverGlow
- useResponsiveQuality

Hooks should NOT:
- render JSX
- create scene structure

---

# Data Ownership

Scene data belongs in:
src/data/

Never hardcode portfolio data inside components.

GOOD:
orbitNodes.ts

BAD:
Inline arrays inside JSX

---

# Animation Ownership

Realtime animation belongs in:
- useFrame
- isolated hooks
- math utilities

UI animation belongs in:
- Framer Motion

Avoid:
- animation state everywhere
- triggering rerenders every frame

---

# State Philosophy

Use global state ONLY when truly shared.

Allowed:
- hovered planet
- active transition
- UI visibility

Avoid:
- storing animation positions globally
- storing frame-based values in Zustand

---

# Component Size Rules

Preferred:
- 50–200 lines

Warning zone:
- 250+ lines

Split immediately if:
- multiple responsibilities appear
- unrelated logic exists
- readability drops

---

# Reusability Rules

Components should support:
- configurable props
- reusable visuals
- scalable systems

Avoid:
- hardcoded values
- duplicated variants
- copy-paste components

---

# Styling Philosophy

Prefer:
- reusable Tailwind utilities
- centralized glow/effect classes
- composable styling

Avoid:
- repeated giant class lists
- inline styles everywhere
- duplicated glow systems

---

# Shader Philosophy

Shaders should be:
- isolated
- purposeful
- lightweight

Shaders belong in:
src/shaders/

Avoid:
- embedding shader strings inside components
- giant monolithic shaders

---

# File Organization Rules

Scene:
src/components/scene/

UI:
src/components/ui/

Portfolio:
src/components/portfolio/

Hooks:
src/hooks/

Data:
src/data/

Math/utilities:
src/lib/

Shaders:
src/shaders/

---

# Composition Philosophy

Prefer:
small components assembled together

Instead of:
one intelligent mega-component

GOOD:
OrbitScene
 ├── OrbitSystem
 ├── FloatingParticles
 ├── SceneLights

BAD:
MegaInteractiveScene

---

# Dependency Philosophy

Avoid unnecessary dependencies.

Before adding a dependency:
- verify it solves a real problem
- verify existing stack cannot solve it
- verify performance impact

Prefer:
small focused libraries

Avoid:
heavy all-in-one frameworks

---

# Prop Philosophy

Props should be:
- explicit
- predictable
- minimal

Avoid:
- giant prop objects
- unclear naming
- prop drilling deep trees

Use context/global state only when justified.

---

# Performance Philosophy

Every component should assume:
- it may render many times
- mobile devices exist
- GPU resources matter

Always think:
- allocation cost
- rerender cost
- shader cost
- particle cost

---

# Future Scalability

Architecture should support:
- more portfolio nodes
- more scenes
- more visual effects
- additional routes
- future CMS integration

Without rewriting the foundation.

---

# Engineering Tone

The codebase should feel:
- clean
- cinematic
- modern
- intentional
- scalable

NOT:
- hacked together
- experimental chaos
- overengineered abstraction hell

---

# Final Principle

The user experience should feel complex.

The architecture should feel simple.