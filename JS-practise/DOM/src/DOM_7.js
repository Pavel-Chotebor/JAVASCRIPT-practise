/*   1) Create an <article> element for each kid
      2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
          - The H3 should contain the owner's name
          - The p should contain the pet's name
      3) Add the article to the pets div.
 */

      const kids = [
        { 'petName': 'Wattled crane', 'owner': 'Bryant' },
        { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
        { 'petName': 'Mynah, common', 'owner': 'Nelie' },
        { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
        { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
        { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
        { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
        { 'petName': 'Bison, american', 'owner': 'Tommie' },
        { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
        { 'petName': 'Carpet snake', 'owner': 'Veda' },
        { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
      ];
   
let placeToAddNewContent = document.getElementById('pets') 

for(let kid in kids) {
    let article = document.createElement('article')
    let headLine = document.createElement('h3')
    let paragraph = document.createElement('p')
   
    headLine.textContent = kids[kid].owner
    paragraph.textContent = kids[kid].petName
    
    article.appendChild(headLine)
    article.appendChild(paragraph)
    placeToAddNewContent.appendChild(article)
}