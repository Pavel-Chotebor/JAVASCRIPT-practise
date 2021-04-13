/*
      Remove the king from the list.
      Fill the list based on the following list of objects.
      Only add the asteroids to the list.
      Each list item should have its category as a class and its content as text content.
*/

const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ]

let list = document.querySelector('li')
let ulList = document.querySelector('ul.asteroids')

if(list.textContent === 'The King') {
    list = list.parentNode.removeChild(list)
}

for(let planet in planetData) {
    if(planetData[planet].asteroid) {
        let newItem = document.createElement('li')
        newItem.setAttribute('class', planetData[planet].category)
        newItem.textContent= planetData[planet].content
        ulList.appendChild(newItem)
    }
}