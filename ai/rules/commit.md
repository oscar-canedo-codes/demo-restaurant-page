# AI Commit Message Rules

When generating Git commit messages, follow these rules strictly.

---

## 1. Format rules (concept only)

Commits must follow Conventional Commits:

<type>(<scope>): <imperative summary>

- type MUST be lowercase
- scope MUST always be present
- summary MUST be imperative and concise
- max 80 characters

---

## 2. Allowed types

Only these types are valid:

- feat → new feature
- fix → bug fix
- refactor → code restructuring without behavior change
- chore → tooling, config, maintenance
- docs → documentation changes

---

## 3. Forbidden types

Never use or invent custom types such as:

- add
- update
- change
- work
- misc
- anything not listed in allowed types

If encountered, normalize to a valid type.

---

## 4. Scope rules

Scope must reflect a feature boundary.

Allowed scopes:

- home
- menu
- about
- app
- router

Avoid vague scopes:

- ui
- general
- misc

---

## 5. Title rules

- imperative tone (add, implement, fix, refactor)
- ONE idea per commit only
- no punctuation at end
- max 80 characters

---

## 6. Body rules (if present)

- bullet points only
- each line starts with a verb
- no repetition
- no reasoning or explanations

---

## 7. Stability rule

A commit MUST represent a working state.

DO NOT commit:

- broken UI
- partial features
- unfinished flows

---

## 8. Diff grounding rule

Only describe changes from staged diff (`git diff --staged`).

DO NOT:

- infer unstaged changes
- predict future work
- assume unrelated modifications

---

## 9. Failure rule

If multiple unrelated changes exist:

- recommend splitting into multiple commits
- do NOT merge into one message
