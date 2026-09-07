# Contributing to NeoBrutal Rivet

Thanks for helping improve Rivet. The project is a public alpha, so useful contributions include component fixes, accessibility improvements, documentation, token refinements, tests, and reusable patterns.

## Before you start

1. Read `AGENTS.md` for the design-system contract.
2. Check `registry/manifest.json` before introducing a new primitive.
3. Prefer semantic tokens over literal product colors.
4. Preserve light, dark, keyboard, focus-visible, and reduced-motion behavior.
5. Keep app-specific business logic out of the design-system layer.

## Pull requests

Keep changes focused and explain the user-facing reason for the change. For component work, include the states or variants you verified and call out any accessibility implications.

## Component additions

A new primitive should solve a reusable interaction or layout need that cannot be represented cleanly by an existing component. New primitives should include stable `data-slot` names and be added to the machine-readable registry.

## Project status

Rivet is still establishing its distribution, documentation, and verification layers. Please do not describe planned package publishing, CLI installation, framework adapters, or visual-regression coverage as shipped features until they exist in the repository.
