let products1 = {
    'Eggs':	200,
    'Milk':	200,
    'Fish':	400,
    'Apples': 150,
    'Bread': 550,
    'Chicken': 550
}

//How much is the fish?
console.log(products1.Fish)


let mostExpensivProduct = Object.keys(products1).reduce((a, b) => products1[a] > products1[b] ? a : b)
console.log(mostExpensivProduct)


//avarage price
function getAveragePrice (object) {
    let values = Object.values(object)
    let totalSum = values.reduce((a, b) => a + b, 0)
    return (totalSum / values.length)
}
console.log(getAveragePrice(products1))

//how many products bellow 300
let bellow300price = (Object.values(products1).filter(a=> a < 300)).length
console.log(bellow300price)

//Is there anything we can buy for exactly
// ->function to get key by values
function getKeyByValue (object, value) {
    return Object.keys(object).find(key => object[key] === value)
}
console.log(products1.hasOwnProperty(getKeyByValue(products1, 125)))

//function to get min value from object fields
function getMinValuesFromObject (object) {
    let objectValues = (Object.values(products1))
    return (Math.min(...objectValues))
}


/*

//function to get biggest value from object fields
function getBiggestValuesFromObject (object) {
    let objectValues = (Object.values(products1))
    return (Math.max(...objectValues))
}

//getting key which has biggest value 
console.log('Mots expensive product: ' + getKeyByValue(products1, getBiggestValuesFromObject(products1)))
*/