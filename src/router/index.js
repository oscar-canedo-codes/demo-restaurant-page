import { renderHome, renderMenu, renderAbout } from '../main.js'

/**
 * Application router.
 * Responsible for mapping routes to page renderers.
 *
 * @function router
 * @param {string} tab
 * @returns {void}
 */
export const router = (tab) => {
  switch (tab) {
    case 'home':
      renderHome()
      break

    case 'menu':
      renderMenu()
      break

    case 'about':
      renderAbout()
      break

    default:
      renderHome()
  }
}