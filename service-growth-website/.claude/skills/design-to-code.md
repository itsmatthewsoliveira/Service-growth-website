---
name: design-to-code
description: Convert design images, screenshots, or mockups into production-ready code. Use this skill when the user provides a visual reference and wants it replicated exactly in code.
---

# Design to Code Skill

Convert any design image into pixel-perfect code that matches exactly.

## When to Use

- User shares a screenshot/mockup and says "make it look like this"
- User provides a reference design to replicate
- User says "/design-to-code" or "/copy-design"
- User wants their site to match a specific visual reference

## Process

### Step 1: Analyze the Design
Read the image and identify:

**Layout Structure**
- Overall page structure (header, hero, sections, footer)
- Grid system (columns, gaps, alignment)
- Spacing patterns (padding, margins, section gaps)
- Responsive behavior clues

**Visual Elements**
- Typography (font family, sizes, weights, line-height, letter-spacing)
- Colors (use color-picker skill mentally - extract all hex values)
- Shadows and glows (box-shadow, text-shadow)
- Borders and border-radius
- Background effects (gradients, blurs, patterns, textures)

**Components**
- Buttons (shape, padding, hover states)
- Cards (borders, backgrounds, shadows)
- Navigation (layout, dropdowns, mobile)
- Forms and inputs
- Icons and imagery

**Micro-details**
- Hover effects
- Animations/transitions
- Glass morphism / blur effects
- Grain/noise textures
- Glow effects

### Step 2: Document the Design System

Before writing code, output:

```
## Design Analysis

### Colors Extracted
- Background: #[hex]
- Card: #[hex]
- Accent: #[hex]
- Text Headline: #[hex]
- Text Body: #[hex]
(etc)

### Typography
- Headings: [Font Family], [weights]
- Body: [Font Family], [weights]
- Sizes: h1=[size], h2=[size], body=[size]

### Spacing
- Section padding: [value]
- Card padding: [value]
- Grid gap: [value]

### Effects
- Card shadow: [value]
- Glow effects: [value]
- Border radius: [value]
```

### Step 3: Write the Code

Generate production-ready code that:
- Matches the design pixel-for-pixel
- Uses the project's existing tech stack (Next.js, Tailwind, Framer Motion)
- Follows existing component patterns in the codebase
- Is responsive (mobile-first)
- Includes all micro-interactions and effects

### Step 4: Verify

After generating code:
- Compare output to original image
- Check all colors match exactly
- Verify spacing and proportions
- Ensure all effects are replicated

## Output Format

1. First, show the design analysis
2. Then, provide the complete code
3. Note any assumptions made
4. Highlight anything that couldn't be determined from the image

## Important Rules

- **EXACT MATCH**: The goal is pixel-perfect replication, not interpretation
- **Ask if unclear**: If something in the design is ambiguous, ask before guessing
- **Preserve all details**: Don't simplify or skip subtle effects
- **Use existing patterns**: Check the codebase for existing components to reuse
- **Test the colors**: Update globals.css with extracted colors

## Example Workflow

User: "Make my homepage look exactly like this" [attaches image]

1. Read and analyze the image thoroughly
2. Extract complete color palette
3. Document typography and spacing
4. Update globals.css with new colors
5. Rewrite the page component to match layout
6. Add all visual effects (glows, shadows, gradients)
7. Verify the result matches the reference
