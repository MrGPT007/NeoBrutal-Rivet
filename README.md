# NeoBrutal Rivet

**Family:** NeoBrutal  
**Name:** Rivet  
**Identifier:** `neobrutal-rivet`

A reusable, fluid neo-brutalist design system built for **humans and LLMs**. Rivet combines semantic tokens, hard-border/hard-shadow component styling, light + dark modes, purposeful motion, `clamp()`-driven fluid sizing, and a machine-readable component registry.

> Designed for humans. Structured for machines.

## What is included

- **61 React UI primitives** with stable `data-slot` contracts.
- **Light, dark, and system themes** using semantic tokens.
- **Fluid UI scale** using `clamp()` for type, spacing, controls, icons, radii, page padding, and shadow offsets.
- **NeoBrutal elevation** with crisp hard shadows and physical press states.
- **Motion tokens** plus reduced-motion handling.
- **Machine-readable registry** for LLM component discovery.
- **Agent contract** (`AGENTS.md` + `docs/LLM-GUIDE.md`).
- **Plain-language copy guide** for generated product UI.

## Use in a Tailwind CSS v4 project

Install the dependencies, copy or consume the source, then import Rivet after Tailwind:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "./styles/rivet.css";
```

Wrap a React app when you want persisted light/dark/system switching:

```tsx
import { ThemeProvider } from "./lib/theme"

export function AppRoot({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

The CSS itself only requires the `.dark` class, so non-React projects can use the tokens and component skin without the React provider.

## LLM usage

Give a coding model these files first:

1. `AGENTS.md`
2. `docs/LLM-GUIDE.md`
3. `registry/manifest.json`
4. Existing component source files it intends to compose

The registry exists so models **discover before they invent**.

## Repository structure

```text
components/ui/       React primitives
components/          theme controls
styles/              tokens, Tailwind mapping, motion, component skin, utilities
registry/             machine-readable component inventory
docs/                 human + LLM guidance
lib/                  shared utilities and theme runtime
hooks/                shared React hooks
```

## Current status

Rivet core is product-independent: product names, business logic, databases, media pipelines, and app-specific styling do not belong here.

This is the starting point for continued work on component variants, patterns, themes, documentation, visual regression tests, and package distribution.
