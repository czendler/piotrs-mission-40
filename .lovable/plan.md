

# Piotr's 40th Birthday — James Bond Invitation

## Overview
A cinematic, single-page James Bond-themed birthday invitation with dramatic animations, custom cursor, countdown timer, and functional calendar integration.

## Design System
- **Typography**: Cormorant Garamond (serif display) + Space Mono (monospace UI/data)
- **Palette**: Broken blacks (#070709, #121316), paper white (#e4e2dd), muted greys, casino red accent (#8c1c13)
- **Layout**: Asymmetric bento-box with slight rotations, overlapping elements, fluid typography via clamp()
- **Background**: Animated SVG noise filter + slow-moving blurred radial gradients (cinematic light leaks)

## Sections & Features

### 1. Cinematic Entrance (Framer Motion)
- Slow dramatic reveal sequence: text scrambles/mask-reveals before settling
- Non-linear staggered animations with custom easing
- Bond-inspired opening sequence feel

### 2. Hero / Mission Briefing
- "CLASSIFIED" / dossier aesthetic
- Agent name: PIOTR — LEVEL 40
- Asymmetric layout with rotated text elements

### 3. Custom Cursor
- Crosshair/radar-like cursor that replaces default
- Interacts with background elements on hover

### 4. The Bomb Timer
- Live countdown to April 25, 2026, 17:30 CET
- Digital technical readout typography (Space Mono)
- Days / Hours / Minutes / Seconds with labels

### 5. Event Details
- Date, time, location in dossier/classified document style
- Embedded Google Map iframe with dark tactical filter (invert + hue-rotate CSS)
- Address: Wiejca 74, 05-085 Wiejca

### 6. Functional Actions
- **Download .ICS** button — generates calendar blob in JS
- **Add to Google Calendar** link
- Magnetic hover effects with letter-spacing expansion and organic easing

### 7. Background Effects
- SVG noise filter overlay (animated)
- Slow-moving blurred radial gradients simulating light leaks via CSS animations

## Technical Approach
- Framer Motion for all animations
- Google Fonts: Cormorant Garamond + Space Mono
- All styling via Tailwind arbitrary values for bespoke look
- No generic shadcn components — fully custom UI
- Pure client-side .ICS generation

