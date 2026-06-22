# AI Commit Message Rules

When generating Git commit messages, follow these rules strictly.

---

## 1. Format (STRICT)

Use Conventional Commits:

<type>(<scope>): <imperative summary>

- type MUST be lowercase
- scope MUST be present
- summary MUST be imperative and concise

Example:
feat(home): add hero section layout

---

## 2. Allowed types (STRICT)

Only these are valid:

- feat: new feature
- fix: bug fix
- refactor: code restructuring without behavior change
- chore: tooling, config, maintenance
- docs: documentation changes

---

## 3. Forbidden commit types

NEVER use or invent custom types such as:

- eat
- add
- update
- change
- work
- misc

If encountered, normalize to a valid type.

---

## 4. Scope rules (STRICT)

Scope must describe a feature boundary:

Allowed:

- home
- menu
- about
- app
- router

Avoid vague scopes:

- ui ❌ (too broad)
- general ❌
- misc ❌

---

## 5. Title rules

- Max 80 characters
- Imperative tone (add, implement, refactor, fix)
- ONE idea per commit only
- No trailing punctuation

---

## 6. Body rules (optional but structured)

If included, MUST be bullet points:

- each line starts with a verb
- no full sentences unless necessary
- no duplicated meaning

Example:

- implement home hero layout
- integrate module into app shell

---

## 7. Stability rule

A commit MUST represent a working state.

DO NOT commit:

- broken builds
- half-implemented features
- non-functional UI states

---

## 8. Diff grounding rule (IMPORTANT)

Commit messages MUST only describe:

- staged changes (`git diff --staged`)

DO NOT:

- infer unrelated changes
- describe future work
- assume unmodified files changed

---

## 9. AI behavior rules

AI MUST:

- enforce correct commit format automatically
- fix invalid commit types silently
- suggest splitting commits if multiple concerns exist
- output ONLY the final commit message

---

## 10. Language efficiency rule

Prefer short engineering verbs:

add, implement, create, mount, render, integrate, refactor

Avoid repetition or synonyms in the same commit message.
