# NeoBrutal Rivet

> **NeoBrutal** is the family. **Rivet** is the system.

A fluid neo-brutalist design system built for **humans and LLMs**. Rivet turns the hard-border, hard-shadow language of neo-brutalism into a reusable UI contract: semantic tokens, light + dark themes, purposeful motion, `clamp()`-driven sizing, a 61-entry component contract registry, and reusable React source.

**Designed for humans. Structured for machines.**

[**Showcase source →**](site/) · [Foundations](docs/FOUNDATIONS.md) · [LLM guide](docs/LLM-GUIDE.md) · [Component registry](registry/manifest.json)

## Why Rivet exists

Neo-brutalist interfaces are easy to imitate one screen at a time and surprisingly easy to make inconsistent across a real product. Rivet treats the style as a system instead of a screenshot.

- **61 registered component contracts** with stable `data-slot` conventions.
- **Reusable React primitives** being migrated and verified against that registry during the public alpha.
- **Light, dark, and system themes** through semantic tokens.
- **Fluid UI scale** using `clamp()` for typography, spacing, controls, icons, radii, page padding, and shadow offsets.
- **Hard-shadow elevation** with physical hover and press behavior.
- **Motion tokens** with reduced-motion handling.
- **Machine-readable registry** so coding agents discover components before inventing new ones.
- **Agent instructions** in `AGENTS.md` and `docs/LLM-GUIDE.md`.
- **Plain-language UI copy guidance** for generated product interfaces.

## Showcase

The showcase source lives in `site/` and intentionally has no application build dependency.

**Canonical public URL:** `https://neobrutalrivet.github.io/`

The public URL is **not live yet**. GitHub reserves a root `*.github.io` site for the user or organization that owns it, so the production site will be published from a GitHub organization named `NeoBrutalRivet` and a repository named `neobrutalrivet.github.io`.

The showcase includes theme switching, an interactive accent playground, a searchable 61-contract catalog, system principles, the LLM workflow, and an honest public roadmap.

## Use in a Tailwind CSS v4 project

Import Rivet after Tailwind:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "./styles/rivet.css";
```

For persisted light/dark/system switching in React:

```tsx
import { ThemeProvider } from "./lib/theme"

export function AppRoot({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
```

The CSS only requires the `.dark` class, so non-React projects can use Rivet tokens and the component skin without the React provider.

## LLM usage

Give a coding model these files first:

1. `AGENTS.md`
2. `docs/LLM-GUIDE.md`
3. `registry/manifest.json`
4. The existing component source files it intends to compose

The registry exists so models **discover before they invent**. New UI should use semantic tokens, existing primitives, the fluid scale, accessible interaction states, and the documented motion language.

## Project structure

```text
components/ui/       migrated React primitives
components/          theme controls
styles/              tokens, Tailwind mapping, motion, component skin, utilities
registry/             machine-readable 61-contract inventory
docs/                 human + LLM guidance
lib/                  shared utilities and theme runtime
hooks/                shared React hooks
site/                 static showcase source
```

## Status

**Public alpha · v0.1.0**

The core system is product-independent and currently registers 61 component contracts. React source migration and verification are still being completed against that inventory. The next work is deeper per-component documentation, state/variant matrices, accessibility verification, pattern recipes, visual-regression testing, package distribution, and the canonical `neobrutalrivet.github.io` showcase.

Rivet does not pretend unfinished infrastructure is finished: package publishing, a CLI installer, framework adapters, full component verification, and the production showcase domain are roadmap items rather than current features.

See [`CHANGELOG.md`](CHANGELOG.md) for current progress.

## Validation

Run the source-level registry check:

```bash
npm run validate
```

It verifies the registry and core design-system invariants. Broader dependency-backed TypeScript/build and visual-regression testing are planned as the distribution layer matures.

## Contributing

Rivet is being developed in the open. Issues and pull requests are welcome for component fixes, accessibility improvements, documentation, token refinements, and reusable patterns that belong in the design system rather than a single product.

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before adding a primitive. Check `registry/manifest.json` and reuse an existing contract when possible.

## Third-party code

Some primitives are based on patterns from the shadcn/ui ecosystem and use open-source dependencies including Radix UI, Base UI, Lucide, Sonner, Recharts, and others listed in `package.json`.

See [`docs/THIRD-PARTY-NOTICES.md`](docs/THIRD-PARTY-NOTICES.md). Upstream license requirements should be preserved when redistributing third-party code.
