/* ==========================================================================
   IMPORTS
   ========================================================================== */

import './style.css'
import { renderShell } from './app/shell.js'
import { initNavigation } from './app/navigation.js'
import { router } from './router/index.js'
import { routes } from './app/routes.js'

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
   ROUTE HANDLER
   ========================================================================== */

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

  routes.home()

  initNavigation(handleRouteChange)
}

init()