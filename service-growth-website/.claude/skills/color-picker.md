---
name: color-picker
description: Extract exact colors from images and screenshots. Use this skill when the user provides an image and wants to know the exact hex codes, RGB values, or color palette used in the design.
---

# Color Picker Skill

Extract precise colors from any image the user provides.

## When to Use

- User shares a screenshot or design image
- User asks "what colors are in this?"
- User wants to match colors from a reference design
- User says "/color-picker" or "/colors"

## Process

1. **Read the image** using the Read tool to analyze it visually
2. **Identify colors** - Look for:
   - Primary/accent colors (buttons, highlights, links)
   - Background colors (main bg, card bg, elevated surfaces)
   - Text colors (headlines, body, muted)
   - Border colors
   - Any gradients or glows

3. **Extract exact hex codes** by analyzing the RGB values visible in the image
4. **Organize into a color palette** with clear naming

## Output Format

Provide colors in this format:

```
## Color Palette Extracted

### Backgrounds
- Primary Background: #[hex] (describe where it appears)
- Card Background: #[hex]
- Elevated/Hover: #[hex]

### Text
- Headline: #[hex]
- Body: #[hex]
- Muted: #[hex]

### Accent
- Primary Accent: #[hex]
- Accent Hover: #[hex]
- Accent Secondary: #[hex]

### Borders
- Default Border: #[hex]
- Accent Border: #[hex]

### CSS Variables (ready to copy)
```css
--color-bg-primary: #[hex];
--color-bg-card: #[hex];
--color-accent: #[hex];
/* etc */
```
```

## Tips for Accuracy

- Dark backgrounds: Look carefully - pure black (#000) vs near-black (#0a0a0c) matters
- Accent colors: Note the exact cyan/blue/teal shade - small differences are noticeable
- Transparencies: Note if colors appear to have alpha/opacity (rgba values)
- Gradients: Identify start and end colors

## If Color is Unclear

If you cannot determine an exact hex from the image, provide:
- Your best estimate with reasoning
- A range (e.g., "appears to be between #28e8fd and #3df0ff")
- Ask the user to provide the exact value if critical
