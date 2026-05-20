# Animation Rules Skill

## Global Animation Philosophy

Animations must feel:
- smooth
- cinematic
- premium
- calm
- intentional

NOT:
- playful
- exaggerated
- hyperactive
- cartoonish

Every animation should feel physically believable and elegant.

---

# Timing Rules

Preferred durations:
- micro interactions: 0.2–0.4s
- hover transitions: 0.3–0.5s
- scene transitions: 0.8–1.5s
- floating cycles: 3–8s

Avoid:
- ultra fast transitions
- long sluggish animations

---

# Easing Rules

Preferred easing:
- easeInOut
- smooth cubic easing
- gentle acceleration/deceleration

Avoid:
- bounce
- elastic
- spring explosions
- overshoot-heavy motion

Animations should settle naturally.

---

# Floating Motion

Floating motion should:
- be subtle
- have low amplitude
- use different timings per object
- never synchronize perfectly

Recommended amplitude:
- 0.05–0.2 units

Floating should resemble:
- suspended objects in space
- ambient atmospheric drift

---

# Hover Animations

Hover effects:
- scale slightly
- intensify glow
- slightly increase opacity
- subtly brighten labels

Recommended scale:
1.03–1.1

Never:
- scale aggressively
- rotate violently
- bounce repeatedly

---

# Glow Animation

Glow should:
- pulse slowly
- vary subtly
- never flicker aggressively

Preferred:
- smooth emissive intensity modulation
- low-frequency changes

Avoid:
- flashing effects
- strobing
- hard blinking

---

# Opacity Animation

Opacity transitions:
- should fade smoothly
- should use easing
- should avoid instant appearance/disappearance

Preferred:
- layered fade timing
- soft entrances

---

# Scene Transition Rules

Page transitions should:
- fade smoothly
- slightly blur background
- preserve immersion

Recommended:
- fade + scale combination
- subtle camera movement

Avoid:
- abrupt cuts
- slide spam
- excessive motion graphics

---

# Text Animation Rules

Titles:
- fade upward softly
- slight blur-to-focus
- smooth opacity transition

Labels:
- delayed fade-in acceptable
- subtle movement only

Avoid:
- typing effects
- glitch spam
- rapid flickering

---

# Motion Layering

Different elements should animate independently:
- planets
- particles
- glow
- camera
- text

This creates organic depth.

Avoid synchronized looping everywhere.

---

# Camera Motion Rules

Camera movement:
- extremely subtle
- cinematic
- slow

Use:
- tiny parallax
- low amplitude drift

Avoid:
- rapid camera movement
- disorienting motion
- constant repositioning

---

# Animation Performance Rules

Use:
- GPU transforms
- requestAnimationFrame carefully
- memoized animation values

Avoid:
- layout thrashing
- excessive React state updates
- triggering rerenders per frame

---

# Framer Motion Rules

Use Framer Motion for:
- UI fades
- hover transitions
- page transitions
- text reveals

Do NOT use Framer Motion for:
- heavy 3D orbital calculations
- expensive per-frame mesh animation

3D motion belongs in R3F/useFrame.

---

# Emotional Tone

The animation language should communicate:
- sophistication
- creativity
- technological depth
- futuristic elegance

The experience should feel:
- immersive
- memorable
- polished
- calm