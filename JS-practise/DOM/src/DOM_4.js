/*
      If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
      If the first p has an 'apple' class, replace cat's content with 'dog'
      Make balloon less balloon-like (change its shape)
*/
let paragraphs = document.getElementsByTagName('p')
let applePar = paragraphs[0]
let balloon = paragraphs[1]
let catPar = paragraphs[2]
let doplhinPar = paragraphs[3]

if(doplhinPar.getAttribute('class') === 'dolphin') {
    applePar.innerHTML = 'peach'
} else if (applePar.classList.contains('apple')) {
    catPar.innerHTML = 'dog'
}

balloon.setAttribute('style', 'border-radius: 5px')
