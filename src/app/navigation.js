import { router } from '../router/index.js'
/**
 * Handles navigation clicks using event delegation.
 * @function handleNavigation
 * @param {MouseEvent} event
 * @returns {void}
 */
export const handleNavigation = (event) => {
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

/**
 * Initializes navigation system.
 * Attaches event listener to header.
 *
 * @function initNavigation
 * @param {Object} handlers
 * @returns {void}
 */
export const initNavigation = (handlers) => {
  const header = document.querySelector('header')

  if (!header) {
    throw new Error('Header not found for navigation init')
  }

  header.addEventListener('click', (event) =>
    handleNavigation(event, handlers)
  )
}