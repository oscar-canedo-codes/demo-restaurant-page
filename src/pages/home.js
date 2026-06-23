/**
 * Home Module
 * Responsible for rendering the Home tab content.
 * Must return a DOM element and NOT directly manipulate global #content.
 */

/**
 * Creates the Home page content.
 * @function createHome
 * @returns {HTMLElement}
 */
export const createHome = () => {
  const container = document.createElement('div')
  container.classList.add('home')

  // HERO SECTION
  const hero = document.createElement('section')
  hero.classList.add('hero')

  const title = document.createElement('h1')
  title.textContent = 'Welcome to Our Restaurant'

  const subtitle = document.createElement('p')
  subtitle.textContent =
    'Fresh ingredients, modern cuisine, and a warm atmosphere.'

  hero.appendChild(title)
  hero.appendChild(subtitle)

  // DESCRIPTION SECTION
  const description = document.createElement('section')
  description.classList.add('description')

  const text = document.createElement('p')
  text.textContent =
    'We focus on seasonal dishes, locally sourced ingredients, and a rotating menu inspired by Mediterranean cuisine.'

  description.appendChild(text)

  // ASSEMBLE
  container.appendChild(hero)
  container.appendChild(description)


  return container
}