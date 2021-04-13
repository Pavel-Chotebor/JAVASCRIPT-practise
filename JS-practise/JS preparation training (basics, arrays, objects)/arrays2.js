var names = []
console.log(names.length == 0)

names.push('William')
console.log(names.length)

//adding to array 
names.push('John', 'Amanda')
console.log(names.length)
console.log(names[2])

names.forEach(e => console.log(e))
//names.pop(1) //works also with elements name names.pop('Amanda')
//console.log(names)
names=[] // rewriten to empty

//copying elements to another list  
let listA = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee']
let listB = [...listA]
console.log(listB)

// if contains, includes some element:
console.log(listA.includes('Durian'))

//removing element
let indexOfElementToDelete = listB.indexOf('Durian')  //getting index of element to delete
listB.splice(indexOfElementToDelete,1) //   (indexToDelete, howManyElementsDeleteFromThisIndex) 
console.log(listB)

//adding element to 4th place
listA.splice(3,0, 'test')  //3.index, howManyElementsDeleteFromThisIndex = 0, add newIndex
console.log(listA)

console.log(listA.length > listB ? 'ListA has more items' : 'ListB has more items')

// if element is not in array =  prints -1
console.log(listB.indexOf('Durian'))

//adding more items in one line
listB.push('Passion Fruit', 'Pomelo')
console.log(listB)

//printing element by index
console.log(listA[2])