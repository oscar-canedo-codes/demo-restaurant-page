# AI Debug Rules

## 1. Purpose

This file defines how AI should analyze runtime issues in a vanilla JS SPA using:

- module-based DOM factories
- renderPage abstraction
- router-based navigation
- event delegation in main.js

---

## 2. Required Output Format

When given an error or broken behavior:

### 1. Root Cause

Short explanation of what is likely broken.

### 2. Location

Identify file + function responsible.

### 3. Fix (minimal)

Provide only the smallest safe change.

### 4. Risk Check

Explain if fix affects:

- router
- render system
- modules

---

## 3. Forbidden Behavior

- Do NOT rewrite entire architecture
- Do NOT suggest frameworks
- Do NOT refactor unrelated modules
- Do NOT add unnecessary abstractions

---

## 4. Debug Priority Order

1. DOM issues
2. event handling issues
3. routing issues
4. module output issues

---

## 5. Output Style

- concise
- structured
- no long explanations unless necessary
