let img = document.querySelector('img')
let link = document.querySelector('a')
let buttonToDelete = document.getElementsByClassName('this-one')[0]

console.log(img.getAttribute('src'))
img.setAttribute('src', 'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg')
link.setAttribute('href', 'https://www.greenfoxacademy.cz/')
buttonToDelete.parentNode.removeChild(buttonToDelete)



/*
      Write the image's url to the console.
      Replace the image with a picture of your favorite animal.
      Make the link point to the Green Fox Academy website.
      Disable the second button.
*/
