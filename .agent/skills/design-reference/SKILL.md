---
name: design-reference
description: >
  Master design reference for all website projects. ALWAYS read this skill FIRST
  before building any website, landing page, web component, or UI. It defines the
  visual language, component patterns, layout rules, and aesthetic direction that
  every project must follow. Based on the Monologue design system.
---

# Design Reference — Monologue System

> **MANDATORY**: Read this file in full before writing ANY website code. Every design
> decision must align with this reference. When in doubt, refer back here.

---

## 1. Aesthetic Direction

**Style**: Dark luxury editorial — cinematic, atmospheric, premium.

The design language blends **fashion-tech editorial** with **dark luxury minimalism**.
Every surface should feel intentional, every element should breathe, and the overall
experience should evoke the feeling of a high-end product launch, not a generic SaaS page.

### Core Principles
- **Atmosphere over decoration** — use lighting, depth, and shadow instead of borders and lines
- **Restraint is premium** — fewer elements, more impact
- **Cinematic composition** — treat every section like a movie frame
- **Tactile surfaces** — glass, frosted panels, volumetric glow
- **Let content breathe** — generous whitespace (or "darkspace") between sections

---

## 2. Color Palette

### Primary Backgrounds
| Token              | Value                | Usage                          |
|--------------------|----------------------|--------------------------------|
| `--bg-deep`        | `#000000`            | Page background                |
| `--bg-primary`     | `#0A0A0A`            | Main content background        |
| `--bg-elevated`    | `#111111`            | Cards, panels, elevated surfaces |
| `--bg-subtle`      | `#1A1A1A`            | Bento grid items, secondary cards |

### Surface & Glass
| Token              | Value                          | Usage                           |
|--------------------|--------------------------------|---------------------------------|
| `--glass-bg`       | `rgba(255,255,255,0.03)`       | Glassmorphism panels            |
| `--glass-border`   | `rgba(255,255,255,0.06)`       | Glass panel borders             |
| `--glass-hover`    | `rgba(255,255,255,0.08)`       | Hover state on glass surfaces   |
| `--surface-muted`  | `rgba(255,255,255,0.04)`       | Subtle background fills         |

### Text Colors
| Token              | Value                          | Usage                           |
|--------------------|--------------------------------|---------------------------------|
| `--text-primary`   | `#FFFFFF`                      | Headlines, primary text         |
| `--text-secondary` | `rgba(255,255,255,0.7)`        | Body text, descriptions         |
| `--text-muted`     | `rgba(255,255,255,0.4)`        | Captions, labels, meta text     |
| `--text-subtle`    | `rgba(255,255,255,0.2)`        | Decorative text, watermarks     |

### Accent Colors
| Token              | Value                          | Usage                           |
|--------------------|--------------------------------|---------------------------------|
| `--accent-primary` | `#FFFFFF`                      | Primary buttons, active states  |
| `--accent-glow`    | `rgba(255,255,255,0.15)`       | Glow effects, light bleeds      |
| `--accent-blue`    | `#4A9EFF`                      | Links, interactive highlights   |

---

## 3. Typography

### Font Stack
```css
--font-display: 'Instrument Serif', 'Playfair Display', Georgia, serif;
--font-heading: 'Outfit', 'Montserrat', system-ui, sans-serif;
--font-body: 'Inter', 'DM Sans', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
| Level     | Size        | Weight    | Font         | Letter Spacing | Usage                     |
|-----------|-------------|-----------|--------------|----------------|---------------------------|
| Display   | 72–96px     | 400       | Serif        | -0.03em        | Hero headlines            |
| H1        | 48–64px     | 600       | Sans-serif   | -0.02em        | Section headlines         |
| H2        | 32–40px     | 500       | Sans-serif   | -0.01em        | Sub-section titles        |
| H3        | 24–28px     | 500       | Sans-serif   | 0              | Card titles, feature names|
| Body      | 16–18px     | 400       | Sans-serif   | 0              | Paragraphs, descriptions  |
| Caption   | 13–14px     | 400       | Sans-serif   | 0.02em         | Labels, meta text         |
| Overline  | 11–12px     | 600       | Sans-serif   | 0.08em         | Category labels, tags     |

### Typography Rules
- **Display headlines** use serif fonts for editorial elegance
- **Section headlines** use sans-serif with tight tracking
- **Body text** stays at `rgba(255,255,255,0.7)` — never pure white
- Use `text-transform: uppercase` + wide letter-spacing for overlines
- Maximum line width for body text: `60ch`

---

## 4. Spacing System

```css
--space-xs:  4px;
--space-sm:  8px;
--space-md:  16px;
--space-lg:  24px;
--space-xl:  32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
--space-5xl: 128px;
```

### Section Spacing
- Between major sections: `120–160px`
- Between sub-sections: `64–96px`
- Inside cards/panels: `24–32px` padding
- Max content width: `1200px`
- Side padding on mobile: `20px`

---

## 5. Component Patterns

### 5.1 Hero Section
- **Full viewport height** with centered content
- **Volumetric light cone** from top: subtle radial gradient simulating spotlight
- **Layered depth**: background → light effect → floating product card → headline
- **Glass product card**: frosted background, subtle border, inner glow
- Large serif display heading below or overlaying the product mockup
- Supporting subheadline in muted text
- CTA button group (primary solid + secondary ghost)

```css
/* Volumetric light effect */
.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 70%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%);
  pointer-events: none;
}
```

### 5.2 Glass Cards
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid rgba(255,255,255,0.06)`
- Border-radius: `16px` (large cards) / `12px` (small cards)
- Backdrop-filter: `blur(20px)`
- Subtle inner shadow for depth
- Hover: slight scale + border brightens

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  padding: 32px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
```

### 5.3 Bento Grid
- CSS Grid layout with varied cell sizes (1×1, 2×1, 1×2, 2×2)
- Each cell is a glass card with its own internal layout
- Gap: `16px` between cells
- Cells contain: icon/illustration + title + description
- Some cells are image-only, some are text-only, some are mixed
- The grid tells a feature story — each cell highlights one capability

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1200px;
}
```

### 5.4 Buttons

**Primary Button** (solid white on dark):
```css
.btn-primary {
  background: #FFFFFF;
  color: #000000;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

**Ghost Button** (outlined):
```css
.btn-ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}
```

### 5.5 Pricing Cards
- Two-tier layout: Free (subtle) vs Pro (highlighted)
- Pro card has a brighter border or subtle glow to draw attention
- Feature lists with checkmarks
- Price displayed large with period label (e.g., `/yr`)
- Stacked vertically on mobile

### 5.6 Carousel / Slider
- Horizontal scroll with snap points
- Navigation arrows or dots below
- Cards slide with smooth CSS transitions
- Active card is slightly larger or brighter

### 5.7 "How It Works" Steps
- Horizontal layout with numbered steps (1, 2, 3)
- Each step: number badge + icon/illustration + title + description
- Connected by a subtle line or arrow between steps
- Glass card backgrounds for each step

---

## 6. Visual Effects

### 6.1 Volumetric Lighting
- Subtle radial gradients simulating overhead spotlights
- Applied to hero and key sections
- Never too bright — stays at `0.04–0.08` opacity
- Creates depth without being distracting

### 6.2 Grain / Noise Texture
```css
.grain-overlay::after {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("data:image/svg+xml,..."); /* noise pattern */
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
}
```

### 6.3 Glow Effects
- Used sparingly on CTAs, active elements, and featured cards
- `box-shadow: 0 0 60px rgba(255,255,255,0.08)`
- Never colored glow — always white/neutral

### 6.4 Animations
- **Page load**: stagger fade-in from bottom, `0.6s` duration, `cubic-bezier(0.4, 0, 0.2, 1)`
- **Scroll entrance**: elements fade up as they enter viewport (IntersectionObserver)
- **Hover micro-interactions**: subtle scale (`1.02`), border brightening, shadow deepening
- **Transitions**: always use `cubic-bezier(0.4, 0, 0.2, 1)` — never linear

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 7. Layout Patterns

### Page Structure
```
┌─────────────────────────────────────┐
│           Navigation Bar            │
├─────────────────────────────────────┤
│                                     │
│         Hero (100vh)                │
│    Spotlight + Product Card         │
│    Display Headline                 │
│    CTA Buttons                      │
│                                     │
├─────────────────────────────────────┤
│    Social Proof / Trust Bar         │
├─────────────────────────────────────┤
│                                     │
│    Feature Carousel / Showcase      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    Bento Grid (Features)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    Detailed Feature Section         │
│    (Image + Text side by side)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    Pricing Cards                    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    How It Works / Steps             │
│                                     │
├─────────────────────────────────────┤
│    Final CTA + Large Brand Mark     │
├─────────────────────────────────────┤
│           Footer                    │
└─────────────────────────────────────┘
```

### Navigation
- Fixed/sticky top bar
- Transparent background that gains `backdrop-filter: blur()` on scroll
- Logo left, links center, CTA button right
- Minimal links — max 4–5 items
- Mobile: hamburger → fullscreen overlay menu

---

## 8. Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm — Tablet portrait  */ }
@media (min-width: 768px)  { /* md — Tablet landscape */ }
@media (min-width: 1024px) { /* lg — Desktop          */ }
@media (min-width: 1280px) { /* xl — Wide desktop     */ }
```

### Mobile Rules
- Bento grid collapses to single column
- Hero font scales down using `clamp()`
- Pricing cards stack vertically
- Side padding: `20px`
- Touch targets minimum `44px`

---

## 9. Image & Media Guidelines

- **Product mockups**: on dark backgrounds, use subtle shadow/glow
- **Screenshots**: round corners (`12px`), apply glass card treatment
- **Icons**: line-style, white at `0.6–0.8` opacity, consistent stroke width
- **Illustrations**: minimal, monochrome, geometric
- **Background images**: dark, low-contrast, used as texture only

---

## 10. Do's and Don'ts

### ✅ DO
- Use `backdrop-filter: blur()` for glass effects
- Keep text at `0.7` opacity for body, `1.0` only for headlines
- Use volumetric lighting for hero sections
- Apply `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions
- Use serif fonts for display/hero headlines
- Keep a tight color palette (no more than 3 accent colors)
- Use generous padding inside cards (`24–32px`)
- Apply grain/noise texture overlay globally at very low opacity

### ❌ DON'T
- Use bright/saturated colors on dark backgrounds
- Use flat solid backgrounds without depth or texture
- Use generic border-radius values like `4px` — go `12px` or `16px`
- Apply harsh borders — use translucent borders instead
- Use `linear` easing — always ease with curves
- Stack sections without visual breathing room
- Use more than 2 font families per page
- Make buttons too small — minimum `12px 28px` padding

---

## 11. Reference Image

The Monologue website (see `resources/monologue-reference.webp`) is the north star for
all design decisions. When building any website, compare your work against this reference
and ask:

1. Does it feel as premium and atmospheric?
2. Is the typography hierarchy as clear?
3. Are the glass/surface effects as refined?
4. Does the layout breathe with enough space?
5. Do the animations feel smooth and intentional?

If the answer to any of these is "no", iterate until it matches this quality bar.
