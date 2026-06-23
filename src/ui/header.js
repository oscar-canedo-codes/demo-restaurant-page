
/**
 * Creates the navigation header with tab buttons.
 * @function createHeader
 * @returns {HTMLElement}
 */
export const createHeader = () => {
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