/*
  Turn the party on and off by clicking the button. (the whole page)
*/

/* 
-in HTML head is style with class name .party
-so if i want to use this style to the div tag - class must be added to div tag
-> - using onClick function -> 
     - click on button -if there is no class .party -> add class and use style
     - click on button -else remove class name and delte style
- here doesnt work classic if else for me (else part never run)
*/
 
let placeToUseStyle = document.querySelector('div')
let clickOnButton = document.querySelector('button')

clickOnButton.onclick = () => {
  !placeToUseStyle.classList.contains('party') 
    ? placeToUseStyle.className = 'party' 
    : placeToUseStyle.classList.remove('party')
}