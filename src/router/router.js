/**
 * Handles navigation between pages.
 * @function router
 * @param {string} tab
 * @returns {void}
 */
export const router = (tab, handlers) => {
  switch (tab) {
    case 'home':
      handlers.home()
      break

    case 'menu':
      handlers.menu()
      break

    case 'about':
      handlers.about()
      break

    default:
      handlers.home()
  }
}