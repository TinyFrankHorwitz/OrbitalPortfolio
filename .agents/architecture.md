# Architecture Rules

## Scene
- OrbitScene.tsx is the root 3D scene.
- All orbital objects must be isolated components.

## State
- Zustand for UI state only.
- Avoid global rerenders.

## Data
- All orbit node data comes from src/data/orbitNodes.ts

## Effects
- Effects must be reusable hooks/components.

## Animation
- Never hardcode animation logic inside JSX.