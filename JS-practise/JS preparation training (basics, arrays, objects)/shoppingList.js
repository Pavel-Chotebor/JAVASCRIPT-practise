// SHOPPING LIST 1
let list1 = ['Eggs', 'milk', 'fish', 'apples', 'bread','chicken']

//Do we have milk on the list?
console.log(list1.includes('milk'))

//Do we have bananas on the list?
console.log(list1.includes('bananas'))

////////////////////////
// SHOPPING LIST 2
let priceList = {
    'Milk':	    1.07,                        
    'Rice':	    1.59,
    'Eggs':	    3.14,
    'Cheese':	12.60,
    'Chicken Breasts':	9.40,
    'Apples':	2.31,
    'Tomato':	2.58,
    'Potato':	1.75,
    'Onion':	1.10,
}

let bobShoppingList = {
    'Milk':	3,
    'Rice':	2,
    'Eggs':	2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

let aliceShoppingList =  {
    'Rice':	1,
    'Eggs':	5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10,
}

//How much does Bob pay?
console.log('total spends of Bob: ' + getSpends(bobShoppingList, priceList))

//How much does Bob pay?
console.log('total spends of Alice: ' + getSpends(aliceShoppingList, priceList))

//Who buys more Rice?
console.log(whoBuysMoreSpecificItem(aliceShoppingList, bobShoppingList, 'Rice'))

//Who buys more Potato?
console.log(whoBuysMoreSpecificItem(aliceShoppingList, bobShoppingList, 'Potato'))

//Who buys more products? - who has more keys
let compareList = () => 
Object.keys(aliceShoppingList).length > Object.keys(bobShoppingList).length ? 
'Alice bought more type of food' : 'Bob bought more type of food'
console.log(compareList());

//Who buys more pieces
let morePiecesList = () =>
totalPieces(aliceShoppingList) > totalPieces(bobShoppingList) ? 'Alice bought more pieces' : 'Bob bought more pieces'
console.log(morePiecesList())


//////////////////////////////////
//FUNCTIONS

/* 
HOW MUCH SOMEONE SPEND
priceList = price for 1 item
shoppingList = numbers of items
-finding if same key is in shoppingList and priceList
- if true -> get value of this key from shop.List (in this case amount of items) 
   and * get value of this key from priceList (price for 1 item)
*/

function getSpends (shoppingList, priceList1) {
    let total = 0
    for (let key in shoppingList) {
        if(Object.prototype.hasOwnProperty.call(priceList1, key)) {   
            total += shoppingList[key] * priceList[key]
    } 
}
return total
}

function whoBuysMoreSpecificItem (shoppingList1, shoppingList2, itemToCompare) {
    if(!shoppingList1.hasOwnProperty(itemToCompare) && !shoppingList2.hasOwnProperty(itemToCompare)) {
        console.log('this item is not common on both lists')
    } else if (shoppingList1[itemToCompare] > shoppingList2[itemToCompare]) {
        console.log('first list has more ' + itemToCompare + ' items')
    } else {
        console.log('second list has more ' + itemToCompare + ' items')
    }
 }

function totalPieces (arr) {
    return sum = Object.values(arr).reduce((a, b) => a + b, 0)
    }
    