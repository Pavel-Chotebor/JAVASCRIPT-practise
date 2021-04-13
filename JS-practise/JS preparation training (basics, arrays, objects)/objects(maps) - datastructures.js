// like map, but here it is just object
let letters = {
    97:	'a',
    98:	'b',
    99:	'c',
    65:	'A',
    66:	'B',
    67:	'C'
}

//printing all the keys
console.log(Object.keys(letters))

//printing all the values
console.log(Object.values(letters))

//adding new key with value
letters[68] = 'D'

//number of entries
console.log(Object.entries(letters).length)

//printing value by key
console.log(Object.values(letters[99]))

//removing key-value
delete letters[97]

//checking if key is in object
console.log(letters.hasOwnProperty(100))

//removing fields(keys) in object
letters = {}
console.log(letters)

//printing values and keys in format:  A Letter to Jo (ISBN: 978-1-60309-452-8)
let hashmap = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
   '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
}

Object.entries(hashmap).forEach( ([key, value]) => console.log(`${value} (ISBN: ${key})`))

//removing key par value by key
delete hashmap['978-1-60309-444-3']

//getting key by its value and remove
let keyToDelete = Object.keys(hashmap).find(key => hashmap[key] === 'The Lab')
delete hashmap[keyToDelete]
console.log(hashmap)

//adding new key value pairs 
hashmap['978-1-60309-450-4'] = 'They Called Us Enemy'
hashmap['978-1-60309-453-5'] = 'Why Did We Trust Him?'

console.log(hashmap.hasOwnProperty('978-1-60309-453-5') ? hashmap['978-1-60309-453-5'] : 'there is no key like this')

//decoding  -  given order by values in 'notSoCrypticMessage' and saving values from hashmap in to new string
let notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
let hashmap2 = {
    7: 'run around and desert you',
    50: 'tell a lie and hurt you ',
    49: 'make you cry, ',
    2: 'let you down',
    12: 'give you up, ',
    1: 'Never gonna ',
    11: '\n',
    3: 'say goodbye '
  }

let valeOfHashmap
let newString=''
for(let i=0; i < notSoCrypticMessage.length; i++) {
    valeOfHashmap = notSoCrypticMessage[i] 
    newString += hashmap2[valeOfHashmap]
}
console.log(newString)