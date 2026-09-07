# Rivet plain-language UI copy guide

Rivet components should be understandable without product or engineering knowledge.

## Rules

1. Name actions by the user's goal: **Save changes**, not **Persist configuration**.
2. Use one action per button label.
3. Explain irreversible, paid, publishing, account, permission, or external-service effects before the action.
4. Avoid unexplained acronyms and implementation terms.
5. Helper text should answer the next obvious question, not repeat the label.
6. Error messages should say what happened and what the user can do next.
7. Icon-only controls need accessible names and should not carry unfamiliar meaning alone.
8. Prefer short sentences and concrete examples when a setting is easy to misunderstand.

## Control examples

- Good: **Delete project** — “This removes the project and its saved files. This cannot be undone.”
- Avoid: **Execute deletion** — “Performs destructive operation.”
- Good: **Email me when it finishes**
- Avoid: **Enable completion notifications**

## LLM check

Before shipping generated copy, ask: could a first-time non-technical user predict what happens after clicking this control?
