/* ==========================================================================
   IMPORTS
   ========================================================================== */

import './style.css'
import { createHome } from './home.js'
import { createMenu } from './menu.js'
import { createAbout } from './about.js' 

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
   ROUTER 
   ========================================================================== */

/**
 * Handles navigation between pages.
 * @function router
 * @param {string} tab
 * @returns {void}
 */
const router = (tab) => {
  switch (tab) {
    case 'home':
      renderHome()
      break

    case 'menu':
      renderMenu()
      break

    case 'about':
      // [x] TODO: About page not implemented yet
      renderAbout()
      break

    default:
      renderHome()
  }
}

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */

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
 * Renders the Home page module.
 * @function renderHome
 * @returns {void}
 */
const renderHome = () => {
  clearContent()

  const content = document.querySelector('#content')
  content.appendChild(createHome())
}

/**
 * Renders the Menu page module.
 * @function renderMenu
 * @returns {void}
 */
const renderMenu = () => {
  clearContent()

  const content = document.querySelector('#content')
  content.appendChild(createMenu())
}
/**
 * Renders the About page module.
 * @function renderAbout
 * @returns {void}
 */
const renderAbout = () => {
  clearContent()

  const content = document.querySelector('#content')
  content.appendChild(createAbout())
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

  router(tab)
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

  // default page load
  renderHome()

  const header = document.querySelector('header')

  header.addEventListener('click', handleNavigation)
}

init()