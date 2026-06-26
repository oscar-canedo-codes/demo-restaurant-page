# Architecture Overview

This project is a Vanilla JavaScript SPA built using modular DOM factories and a lightweight routing system.

---

## Core Design Principles

### 1. Component-based UI

Each page is a function returning DOM nodes:

- createHome()
- createMenu()
- createAbout()

No direct DOM manipulation outside of modules.

---

### 2. Shell-based layout

The app uses a fixed shell structure:

- header (navigation)
- content container (dynamic rendering area)

---

### 3. Manual client-side routing

Navigation is handled via event delegation:

- user clicks tab
- router determines target view
- content container is re-rendered

---

### 4. Separation of concerns

- ui/ → visual components
- app/ → orchestration logic
- router/ → navigation logic
- pages/ → page modules

---

## AI Integration Layer

AI tooling is used for development workflow only:

### ai/rules/

Defines constraints for AI behavior

### ai/prompts/

Defines reusable execution templates

AI does NOT affect runtime application behavior.

---

## Rendering Flow

1. main.js boots application
2. shell.js creates layout
3. navigation events trigger router
4. page modules render into content container
