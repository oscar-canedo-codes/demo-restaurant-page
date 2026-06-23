/**
 * Debug mode toggle
 * @type {boolean}
 */
const DEBUG = true

/* ==========================================================================
   IMPORTS
   ========================================================================== */

import './style.css'
import { createHome } from './pages/home.js'
import { createMenu } from './pages/menu.js'
import { createAbout } from './pages/about.js'

import { renderShell } from './app/shell.js'
import { initNavigation } from './app/navigation.js'
import { router } from './router/index.js'

/* ==========================================================================
   GLOBAL APP INITIALIZATION
   ========================================================================== */

/**
 * Root application container.
 * @type {HTMLElement}
 */
const app = document.querySelector('#app')

if (!app) {
  throw new Error('Root #app element not found')
}

/* ==========================================================================
   RENDER ENGINE
   ========================================================================== */

/**
 * Renders a page into the #content container.
 * This is the single rendering abstraction for all views.
 *
 * @function renderPage
 * @param {Function} pageFactory
 * @returns {void}
 */
const renderPage = (pageFactory) => {
  const content = document.querySelector('#content')

  if (!content) {
    throw new Error('Content container not found')
  }

  content.textContent = ''
  content.appendChild(pageFactory())
}

/* ==========================================================================
   PAGE RENDER FUNCTIONS
   ========================================================================== */

/**
 * Renders Home page.
 * @function renderHome
 * @returns {void}
 */
export const renderHome = () => renderPage(createHome)

/**
 * Renders Menu page.
 * @function renderMenu
 * @returns {void}
 */
export const renderMenu = () => renderPage(createMenu)

/**
 * Renders About page.
 * @function renderAbout
 * @returns {void}
 */
export const renderAbout = () => renderPage(createAbout)

/* ==========================================================================
   ROUTES
   ========================================================================== */

/**
 * Route-to-render mapping table.
 * Maps router output to actual page render functions.
 *
 * @type {Object.<string, Function>}
 */
const routes = {
  home: renderHome,
  menu: renderMenu,
  about: renderAbout
}

/**
 * Handles route changes from navigation.
 *
 * Flow:
 * 1. Receive clicked tab
 * 2. Resolve route via router
 * 3. Lookup page in routes map
 * 4. Execute render function
 *
 * @function handleRouteChange
 * @param {string} clickedTab
 * @returns {void}
 */
const handleRouteChange = (clickedTab) => {
  const route = router(clickedTab)

  const page = routes[route]

  if (!page) {
    throw new Error(`No page found for route: ${route}`)
  }

  page()
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

/**
 * Application bootstrap sequence.
 * - mounts shell layout
 * - renders initial page
 * - initializes navigation system
 *
 * @function init
 * @returns {void}
 */
const init = () => {
  renderShell(app)

  renderHome()

  initNavigation(handleRouteChange)
}

init()