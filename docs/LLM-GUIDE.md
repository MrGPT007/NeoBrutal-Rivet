# NeoBrutal Rivet UI Contract for LLMs

This is the source of truth for code-generating models working with Rivet.

## Identity

- **Family:** NeoBrutal
- **Name:** Rivet
- **Identifier:** `neobrutal-rivet`
- **Purpose:** a reusable neo-brutalist UI system designed for humans and structured for LLMs.

## Non-negotiable rules

1. **Use existing primitives first.** Check `registry/manifest.json` and `components/ui/` before creating a new component.
2. **Use semantic tokens only.** Never add product UI colors as arbitrary hex/rgb literals. Use semantic Tailwind roles or CSS variables from `styles/tokens.css`.
3. **Use the fluid scale.** Prefer `var(--space-*)`, `var(--text-*)`, `var(--control-h-*)`, `var(--icon-*)`, and existing utilities. Avoid breakpoint-specific values when `clamp()` solves the same problem.
4. **Support light and dark automatically.** Semantic tokens remap under `.dark`; components should not branch on literal colors.
5. **Use Rivet elevation.** Raised interactive surfaces use hard offset shadows (`--shadow-xs` through `--shadow-lg`). `--shadow-soft` is exceptional, not the default.
6. **Motion communicates state.** Use named durations/easing. Pressable controls move toward their shadow on active. Respect `prefers-reduced-motion`.
7. **Accessibility is part of the component.** Keep visible focus, keyboard access, labels, `aria-*` state, comfortable hit targets, and adequate contrast.
8. **No mystery icons.** Icon-only buttons need accessible names.
9. **Do not fork the visual language.** New screens should look like members of the same NeoBrutal family.
10. **Keep core product-neutral.** Brand/product overrides belong outside Rivet core.

## Preferred composition order

- Page shell: `.rivet-page`, `.rivet-stack`, `.rivet-cluster`, `.rivet-grid`
- Navigation: Sidebar, Breadcrumb, Tabs, NavigationMenu
- Content: Card, Item, Alert, Empty, Badge, Avatar
- Input: Field/Form + Input/Textarea/Select/Checkbox/Switch/RadioGroup/Slider
- Actions: Button (`default`, `secondary`, `outline`, `destructive`, `ghost`)
- Overlays: Dialog, Sheet/Drawer, Popover, Tooltip
- Feedback: Toaster, Alert, Progress/Spinner, Skeleton

## Visual grammar

- Warm paper background rather than sterile gray.
- Lavender primary and lime secondary accent in the default theme.
- Strong ink borders, commonly 1.5–2px.
- Crisp offset shadows with little or no blur.
- Modest rounding; pills are reserved for statuses/avatars where appropriate.
- Compact, highly legible typography with strong labels.
- Motion is snappy and physical rather than floaty.

## Fluid example

```css
/* Preferred */
padding: var(--space-4);
font-size: var(--text-lg);
min-height: var(--control-h-md);
gap: var(--space-3);
box-shadow: var(--shadow-sm);

/* Avoid */
padding: 17px;
font-size: 15px;
@media (max-width: 900px) { padding: 13px; }
```

## New component checklist

- Existing primitive/composition cannot cover the job.
- Stable `data-slot` exists.
- Semantic tokens only.
- Light, dark, keyboard, touch, reduced-motion supported.
- Default, hover, focus-visible, active, disabled, loading/error states covered when applicable.
- Registry updated.
