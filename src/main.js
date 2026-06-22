import './style.css'
import { createHome } from './home.js'

console.log("Restaurant Page starting...")

/* ==========================================================================
    GLOBAL APP INITIALIZATION
   ========================================================================== */

// TODO: Ensure #app exists before rendering shell
const app = document.querySelector('#app')

if (!app) {
  throw new Error("Root #app element not found")
}

/* ==========================================================================
    RENDER ROOT STRUCTURE
   ========================================================================== */

/**
 * Clears the root application container.
 * Ensures a clean slate before rendering UI shell.
 * @function clearApp
 */
const clearApp = () => {
  app.textContent = ''
}

/**
 * Creates the main content container (#content).
 * @returns {HTMLDivElement}
 */
const createContentContainer = () => {
  const content = document.createElement('div')
  content.id = 'content'
  return content
}

/**
 * Creates the navigation header with tab buttons.
 * @returns {HTMLElement}
 */
const createHeader = () => {
  const header = document.createElement('header')
  const nav = document.createElement('nav')

  const homeBtn = document.createElement('button')
  homeBtn.textContent = 'Home'
  homeBtn.dataset.tab = 'home'

  const menuBtn = document.createElement('button')
  menuBtn.textContent = 'Menu'
  menuBtn.dataset.tab = 'menu'

  const aboutBtn = document.createElement('button')
  aboutBtn.textContent = 'About'
  aboutBtn.dataset.tab = 'about'

  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(aboutBtn)

  header.appendChild(nav)

  return header
}

/**
 * Renders the base application shell (header + content container).
 * @function renderShell
 */
const renderShell = () => {
  clearApp()

  const header = createHeader()
  const content = createContentContainer()

  app.appendChild(header)
  app.appendChild(content)
}

/* ==========================================================================
    INITIALIZATION
   ========================================================================== */

// TODO: Later replace with module-based Home renderer
renderShell()

const content = document.querySelector('#content')

if (!content) {
  throw new Error("Missing #content container")
}

// render Home module into the page
content.appendChild(createHome())