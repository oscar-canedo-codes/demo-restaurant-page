import { createHeader } from '../ui/header.js'

/**
 * Clears all content inside the app root.
 * Used before rendering a new UI shell.
 * @function clearApp
 * @returns {void}
 */
export const clearApp = () => {
  app.textContent = ''
}

/**
 * Creates the main content container (#content).
 * Acts as mount point for page modules.
 * @function createContentContainer
 * @returns {HTMLDivElement}
 */
export const createContentContainer = () => {
  const content = document.createElement('div')
  content.id = 'content'
  return content
}

/**
 * Renders the base application shell (header + content container).
 * @function renderShell
 * @returns {void}
 */
export const renderShell = () => {
  clearApp()

  const header = createHeader()
  const content = createContentContainer()

  app.appendChild(header)
  app.appendChild(content)
}