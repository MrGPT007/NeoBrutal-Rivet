# NeoBrutal Rivet agent instructions

NeoBrutal Rivet is a source-first, LLM-friendly neo-brutalist design system.

Before generating or changing UI:

1. Read `docs/LLM-GUIDE.md`.
2. Read `registry/manifest.json` and reuse an existing component before creating one.
3. Use semantic tokens from `styles/tokens.css`; do not invent product hex/rgb values.
4. Prefer the fluid `clamp()` scale for typography, spacing, controls, radii, icons, and shadow offsets.
5. Every new interactive component must support light/dark, keyboard, focus-visible, touch, disabled, and reduced-motion behavior.
6. Add a stable `data-slot` to new component surfaces and register the component in `registry/manifest.json`.
7. Preserve the NeoBrutal family grammar: hard borders, crisp offset shadows, modest radii, high-contrast labels, purposeful motion.
8. Use plain user-facing language. Read `docs/COPY-GUIDE.md` when generating product copy.
9. Do not introduce product-specific assumptions into core Rivet files.
