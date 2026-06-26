/* ==========================================================================
   IMPORTS
   ========================================================================== */

import { createHome } from '../pages/home.js'
import { createMenu } from '../pages/menu.js'
import { createAbout } from '../pages/about.js'

/* ==========================================================================
   RENDER HELPERS
   ========================================================================== */

/**
 * Renders a page into the #content container.
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
   PAGE RENDERERS
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
   ROUTE REGISTRY
   ========================================================================== */

/**
 * Route-to-render mapping table.
 *
 * @type {Object.<string, Function>}
 */
export const routes = {
  home: renderHome,
  menu: renderMenu,
  about: renderAbout
}