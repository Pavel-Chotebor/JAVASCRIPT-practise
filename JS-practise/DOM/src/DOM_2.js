let newItemsList = ['apple', 'banana', 'cat', 'dog']
let originalLi = document.querySelectorAll('li')//getting li tag
let ulTag = document.querySelector('ul')//getting li tag

for(let i=0; i < originalLi.length; i++) {
    let newItem = document.createElement("li")
    newItem.textContent = newItemsList[i]
    originalLi[i].innerHTML = newItemsList[i]
}

ulTag.setAttribute('style', 'background-color: limegreen' )

/*
      1) replace the list items' content with items from this list:
      ['apple', 'banana', 'cat', 'dog']
      2) change the <ul> element's background color to 'limegreen'
*/
