/**
 * Creates and returns the menu page element.
 * Generates a container with a title and a list of menu items including descriptions and prices.
 * 
 * @returns {HTMLDivElement} The container element containing the menu page content.
 */

export const createMenu = () => {
  const container = document.createElement('div')
  container.classList.add('menu')

  const title = document.createElement('h2')
  title.textContent = 'Our Menu'

  const list = document.createElement('div')
  list.classList.add('menu-list')

  const items = [
    { name: 'Margherita Pizza', desc: 'Fresh basil, mozzarella, tomato', price: '€12' },
    { name: 'Seafood Pasta', desc: 'Shrimp, garlic, white wine sauce', price: '€18' },
    { name: 'Tiramisu', desc: 'Classic Italian dessert', price: '€7' }
  ]

  items.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('menu-item')

    const name = document.createElement('h3')
    name.textContent = item.name

    const desc = document.createElement('p')
    desc.textContent = item.desc

    const price = document.createElement('span')
    price.textContent = item.price

    card.appendChild(name)
    card.appendChild(desc)
    card.appendChild(price)

    list.appendChild(card)
  })

  container.appendChild(title)
  container.appendChild(list)

  return container
}