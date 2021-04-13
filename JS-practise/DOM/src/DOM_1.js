/* 1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.
  */

let king = [document.getElementById('b325')]
let businessLamp = [document.querySelector('.b329'), document.getElementsByClassName('asteroid big')]
  
let conceitedKing = [...king]
conceitedKing.push(document.querySelector('.b326'))

let noBusiness = [...conceitedKing, document.getElementsByClassName('asteroid big')]

console.log(king)
console.log(businessLamp)
console.log(conceitedKing)
console.log(noBusiness)
