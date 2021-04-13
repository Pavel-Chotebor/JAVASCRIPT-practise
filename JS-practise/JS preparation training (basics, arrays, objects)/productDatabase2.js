let pruducts = {
    'Eggs':	200,
    'Milk':	200,
    'Fish':	400,
    'Apples':	150,
    'Bread':	50,
    'Chicken': 550
}

// PRINTING JUST KEYS WHERE PRICE LESS THAN 200
let productWithPriceLessThan200 = Object.keys(pruducts).filter(a => pruducts[a] < 200 ? a : '')
console.log(productWithPriceLessThan200)

// PRINTING KEYS AND VALUES WHERE PRICE BIGGER THAN 150
function getProductAndValuesWithPriceMoreThan(object, price) {
    for (let keys in object) {
        if (object[keys] > price) {
            console.log(keys + ': ' + object[keys]);
        }
    }
}
getProductAndValuesWithPriceMoreThan(pruducts, 150)
