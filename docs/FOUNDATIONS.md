# NeoBrutal Rivet foundations

## Color

Rivet separates primitive palette values from semantic roles. Components consume semantic roles (`--background`, `--card`, `--primary`, `--secondary`, `--border`, etc.), allowing light/dark or future themes to remap without component rewrites.

## Typography

The type scale is fluid from `--text-2xs` through `--text-3xl`. Display text uses tight tracking and strong weight; body copy prioritizes legibility.

## Spacing and sizing

Spacing, page padding, control heights, icon sizes, radii, and hard-shadow offsets use `clamp()` to scale smoothly across viewport sizes. Breakpoints are for layout changes, not routine proportional scaling.

## Borders and shadows

Hard borders and crisp offset shadows are core NeoBrutal identifiers. Raised controls physically move relative to their shadow on hover/press.

## Motion

Rivet uses named duration/easing tokens. Reduced-motion disables non-essential movement globally.

## Themes

The default theme includes light and dark semantic mappings. `.dark` on the root activates dark mode. `ThemeProvider` is framework-independent React and persists `light`, `dark`, or `system` preference.
