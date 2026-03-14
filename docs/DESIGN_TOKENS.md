# Design Tokens

Design tokens extracted from `tailwind.config.js` and `src/index.css`. These are the actual, defined tokens used across the project.

---

## Color Tokens

All color tokens are defined with semantic naming. Light/dark variants are provided where applicable.

### Surface Colors

Used for backgrounds and container fills.

| Token            | Light Value                               | Dark Value                            |
| ---------------- | ----------------------------------------- | ------------------------------------- |
| `surface.bg`     | `#e2e8f0` (slate-200)                     | `#0f172a` (slate-900)                 |
| `surface.glass`  | `rgba(148, 163, 184, 0.2)` (slate-400/20) | `rgba(255, 255, 255, 0.05)` (white/5) |
| `surface.bright` | `rgba(255, 255, 255, 0.6)` (white/60)     | `rgba(255, 255, 255, 0.1)` (white/10) |

**Usage:** Card variants, button backgrounds, glass effects, container fills

### Text Colors

Hierarchical text system with light/dark mode pairs.

| Token            | Light Value                               | Dark Value                 |
| ---------------- | ----------------------------------------- | -------------------------- |
| `text.primary`   | `#1e1b4b` (indigo-950)                    | `#ffffff` (white)          |
| `text.secondary` | `#1e293b` (slate-800)                     | `rgba(255, 255, 255, 0.7)` |
| `text.muted`     | `rgba(100, 116, 139, 0.8)` (slate-500/80) | `rgba(255, 255, 255, 0.3)` |

**Usage:** Body text, headings, labels; always applied with both light/dark variants

### Accent Colors

Limited accent palette for interactive elements and highlights.

| Token            | Value                                     | Usage                     |
| ---------------- | ----------------------------------------- | ------------------------- |
| `accent.fuchsia` | `#e879f9` (fuchsia-400)                   | Highlights, focus states  |
| `accent.indigo`  | `#818cf8` (indigo-400)                    | Primary accents, dividers |
| `accent.blue`    | `rgba(37, 99, 235, 0.6)` (blue-600/60)    | Secondary accents         |
| `accent.purple`  | `rgba(147, 51, 234, 0.6)` (purple-600/60) | Interactive states        |

**Usage:** Accent elements, glass effect borders with opacity variants

### Additional Colors (Tailwind defaults)

| Token      | Value            | Usage                                |
| ---------- | ---------------- | ------------------------------------ |
| `rose-500` | Tailwind default | Danger button background and borders |
| `white`    | `#ffffff`        | Button text, high-contrast elements  |

---

## Gradient Tokens

Gradient backgrounds defined as custom background image values.

### Primary Button Gradient

```css
linear-gradient(to right, #c084fc, #ec4899, #f43f5e)
```

- **Tailwind key:** `bg-gradient-button-primary`
- **Direction:** Left to right
- **Colors:** Purple (─) Pink (─) Red
- **Usage:** Primary button backgrounds

### Button Overlay Gradient

```css
linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)
```

- **Tailwind key:** `bg-gradient-button-overlay`
- **Direction:** Bottom to top
- **Opacity:** White 30% → Transparent
- **Usage:** Primary button hover effect (before pseudo-element)

---

## Font Family

| Token  | Value                  | Usage                      |
| ------ | ---------------------- | -------------------------- |
| `sans` | `'Nunito', sans-serif` | Global default font family |

**Applied globally via:** `@apply font-sans` in base layer

---

## Animation Tokens

### Glow Animation

```javascript
animation: 'glow 20s ease-in-out infinite'
```

**Keyframes:**

```javascript
{
  '0%, 100%': {
    transform: 'translate(0, 0) scale(1) rotate(0deg)',
    opacity: '0.15'
  },
  '25%': {
    transform: 'translate(100px, 50px) scale(1.1) rotate(10deg)',
    opacity: '0.25'
  },
  '50%': {
    transform: 'translate(-50px, 100px) scale(1.05) rotate(-10deg)',
    opacity: '0.2'
  },
  '75%': {
    transform: 'translate(-100px, -50px) scale(1.1) rotate(5deg)',
    opacity: '0.25'
  }
}
```

- **Duration:** 20 seconds
- **Timing:** `ease-in-out`
- **Loop:** Infinite
- **Usage:** Background glow effects (Layout component)

---

## Component Layer Tokens

These are reusable component classes defined in `@layer components` in `index.css`. They combine base design tokens into higher-level primitives.

### Glass Effect Components

| Class           | Composition                      | Usage                                       |
| --------------- | -------------------------------- | ------------------------------------------- |
| `.glass-full`   | Surface glass + border + blur    | Cards with borders, secondary/ghost buttons |
| `.glass-base`   | Surface glass + blur (no border) | Ghost button backgrounds, input areas       |
| `.glass-border` | Border with glass opacity        | Card and input borders                      |

### Interactive Element Components

| Class                | Composition                        | Usage                   |
| -------------------- | ---------------------------------- | ----------------------- |
| `.interactive-press` | `outline-none active:scale-95`     | Button press feedback   |
| `.interactive-hover` | `hover:bg-white/10` (light & dark) | Hover state backgrounds |

### Decorative Components

| Class               | Composition                                   | Purpose                |
| ------------------- | --------------------------------------------- | ---------------------- |
| `.gradient-divider` | Gradient background (indigo/40 → transparent) | Visual separators      |
| `.icon-button`      | `flex h-11 w-11 items-center justify-center`  | Icon button sizing     |
| `.editable-toggle`  | `rounded-xl p-2` + hover + transitions        | Editable field toggles |

---

## Dark Mode Strategy

Dark mode is enabled via class strategy (`darkMode: 'class'` in Tailwind config).

All color tokens are provided with light/dark variants:

```
Naming Pattern:  {category}-{semantic}-light  /  dark:{category}-{semantic}-dark

Examples:
  surface-bg-light     (light mode) → dark:surface-bg-dark
  text-primary-light   (light mode) → dark:text-primary-dark
  accent-indigo        (shared value, no variant)
```

**Coverage:** All surface, text, and interactive colors have paired light/dark variants.

---

## Token Usage Summary

| Category              | Count                     | Key Tokens                          |
| --------------------- | ------------------------- | ----------------------------------- |
| **Color Families**    | 3 (Surface, Text, Accent) | 11 semantic tokens                  |
| **Light/Dark Pairs**  | 3                         | All text and surface colors         |
| **Gradients**         | 2                         | Primary button, overlay             |
| **Font Families**     | 1                         | Nunito                              |
| **Animations**        | 1                         | Glow (20s infinite)                 |
| **Component Classes** | 8                         | Glass effects, interaction patterns |

---

## Configuration Reference

All tokens are defined in:

- **Color system:** `tailwind.config.js` → `theme.extend.colors`
- **Gradients:** `tailwind.config.js` → `theme.extend.backgroundImage`
- **Font:** `tailwind.config.js` → `theme.extend.fontFamily`
- **Animations:** `tailwind.config.js` → `theme.extend.animation` + `keyframes`
- **Components:** `src/index.css` → `@layer components`
