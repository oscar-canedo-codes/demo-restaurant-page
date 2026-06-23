/**
 * Debug mode toggle
 * @type {boolean}
 */
const DEBUG = true

/* ==========================================================================
   IMPORTS
   ========================================================================== */

import './style.css'
import { createHome } from './modules/home.js'
import { createMenu } from './modules/menu.js'
import { createAbout } from './modules/about.js' 
import { router } from './router/router.js'

/* ==========================================================================
   GLOBAL APP INITIALIZATION
   ========================================================================== */

/** @type {HTMLElement} Root application container */
const app = document.querySelector('#app')

if (!app) {
  throw new Error('Root #app element not found')
}

/* ==========================================================================
   APPLICATION SHELL
   ========================================================================== */

/**
 * Clears all content inside the app root.
 * Used before rendering a new UI shell.
 * @function clearApp
 * @returns {void}
 */
const clearApp = () => {
  app.textContent = ''
}

/**
 * Creates the main content container (#content).
 * Acts as mount point for page modules.
 * @function createContentContainer
 * @returns {HTMLDivElement}
 */
const createContentContainer = () => {
  const content = document.createElement('div')
  content.id = 'content'
  return content
}

/* ==========================================================================
   NAVIGATION HEADER
   ========================================================================== */

/**
 * Creates the navigation header with tab buttons.
 * @function createHeader
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
 * @returns {void}
 */
const renderShell = () => {
  clearApp()

  const header = createHeader()
  const content = createContentContainer()

  app.appendChild(header)
  app.appendChild(content)
}

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */
// [x] TODO: Centralize page mounting logic
// [ ] TODO: Standardize render pipeline across all modules
// [ ] TODO: Add render safety guards for invalid modules

/**
 * Clears the content container.
 * @function clearContent
 * @returns {void}
 */
const clearContent = () => {
  const content = document.querySelector('#content')
  content.textContent = ''
}

/**
 * Renders a page module into the content container.
 * Centralizes DOM clearing and mounting behavior.
 * @function renderPage
 * @param {Function} pageFactory
 * @returns {void}
 */
const renderPage = (pageFactory) => {
  clearContent()

  const content = document.querySelector('#content')

  if (!content) {
    throw new Error('Content container not found')
  }

  content.appendChild(pageFactory())
}

/**
 * Renders the Home page module.
 * @function renderHome
 * @returns {void}
 */
const renderHome = () => {
  renderPage(createHome)
}

/**
 * Renders the Menu page module.
 * @function renderMenu
 * @returns {void}
 */
const renderMenu = () => {
  renderPage(createMenu)
}

/**
 * Renders the About page module.
 * @function renderAbout
 * @returns {void}
 */
const renderAbout = () => {
  renderPage(createAbout)
}



/* ==========================================================================
   EVENT HANDLING 
   ========================================================================== */

/**
 * Handles navigation clicks using event delegation.
 * @function handleNavigation
 * @param {MouseEvent} event
 * @returns {void}
 */
const handleNavigation = (event) => {
  const button = event.target.closest('button')
  if (!button) return

  const tab = button.dataset.tab
  if (!tab) return

    logDebug(`Navigating to: ${tab}`)
    
  router(tab, {
    home: renderHome,
    menu: renderMenu,
    about: renderAbout
  })
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

/**
 * Initializes application:
 * - builds shell
 * - renders default page
 * - attaches event listeners
 * @function init
 * @returns {void}
 */
const init = () => {
  renderShell()

  const header = document.querySelector('header')

  header.addEventListener('click', handleNavigation)
}

init()

/**
 * Centralized debug logger
 * @function logDebug
 * @param {string} message
 * @returns {void}
 */
const logDebug = (message) => {
  if (DEBUG) {
    console.log(`[DEBUG]: ${message}`)
  }
}