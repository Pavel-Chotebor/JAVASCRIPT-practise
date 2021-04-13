// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems = ['Cupcake', 2, 'Brownie', false]

function sweet (list) {
    for(let i in shopItems) {
        if(list[i] === 2) {
            list[i] = 'Croissant'
        } else if (list[i] === false) {
            list[i] = 'Ice cream'
        }
    } return list
}

console.log(sweet(shopItems))