/**
 * Creates the About page content.
 * @function createAbout
 * @returns {HTMLDivElement}
 */
export const createAbout = () => {
  const container = document.createElement('div')

  const title = document.createElement('h1')
  title.textContent = 'About Us'

  const text = document.createElement('p')
  text.textContent =
    'This restaurant page is a practice project built with vanilla JavaScript modules and DOM manipulation.'

  container.appendChild(title)
  container.appendChild(text)

  return container
}