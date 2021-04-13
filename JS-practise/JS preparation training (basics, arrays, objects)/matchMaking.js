// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane']
let boys = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff']

function matchMaking (boyList, girlList) {
    let newOrder = []
    for(let i = 0; i < boyList.length; i++) {
            if (girlList[i] !== undefined) {
                newOrder.push(girlList[i], boyList[i])
            } else {
                newOrder.push(boyList[i])
            }
        } return newOrder
    }
    
console.log(matchMaking(boys, girls))