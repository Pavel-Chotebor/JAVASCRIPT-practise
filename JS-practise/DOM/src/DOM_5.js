/*
  Add an item that says 'The Green Fox' to the asteroid list.
  Add an item that says 'The Lamplighter' to the asteroid list.
  Add a heading saying 'I can add elements to the DOM!' to the .container.
  Add an image, any image, to the container.
*/

let asteroids = document.querySelector('ul.asteroids')
let containerTag = document.querySelector('div.container')

let lamplighter = document.createElement('li')
let greenFox = document.createElement('li')
let title = document.createElement('h1')
let img = document.createElement('img')

lamplighter.textContent = 'The Lamplighter'
greenFox.textContent = 'The Green Fox'
title.textContent = 'I can add elements to the DOM!'

img.setAttribute('src', 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')

asteroids.appendChild(greenFox)
asteroids.appendChild(lamplighter)
containerTag.appendChild(title)
containerTag.appendChild(img)




