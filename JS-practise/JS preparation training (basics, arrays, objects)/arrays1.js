/*LIST OF OPERATIONS:
-CONCATONATE 2 ARRAYS
-PRINTING ALL
-SORTING NUMBERS
-TRIPLE NUMBER ELEMENTS
-GETTING ROOT OF NUMBER
-EVEN NUMBERS
-IsALL
-IsSome
-SPLIT STRING TO LETTERS
-SPLIT STRING TO LETTERS
-PRINTING ELEMENTS BY INDEX
-SUM OF SOME ELEMENTS
-SUM OF ALL ELEMENTS
-SWAPING ELEMENTS
-CHANGING ELEMENTS
-APPEND A
-DOUBLE STRING ELEMENT
-MULTIDIMENSINAL ARRAY
-MATRIX
-REVERSE ARRAY
*/

// in JS array can be any data, not just one datatype
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

// concatenating two or more arrays
console.log(arr1.concat(arr2))   

// indexOf element
console.log(['apple', 'pear', 'melon'].indexOf('pear')) 

// printing all elements using for each - similar to streams
let arr3 = [7, 8, 9]
arr3.forEach(element => console.log (element))

// printing all elements another way
let fruit = ['apple', 'pear', 'melon']
fruit.forEach(function(index, element) {  // printing all elements another way
    console.log(index, element)
  }) 

//SORTING NUMBERS
let arr4 = [4,5,1,12,7,9]  
console.log(arr4.sort()) // result: [ 1, 12, 4, 5, 7, 9 ] ??

//TRIPLE NUMBERS
let triples = [1, 2, 3, 4, 5].map(function(e) {
 return e * 3;       //return - means variable is save with this action! 
});
console.log(triples)

//GETTING ROOT OF NUMBER
let arr5 = [1,4,9].map(element => Math.sqrt(element))    /// this way make sence, like in stream !
console.log(arr5)

//EVEN NUMBERS
let evens = [1, 2, 3, 4, 5].filter(function(e) {
    return e % 2 == 0
  })
  console.log(evens)

//isAll
let isAllEven = [2, 6, 14, 5, 4].every(function(e) {
  return e % 2 == 0
  });
  console.log(isAllEven)

//isSome
let isAnyEven = [2, 6, 14, 5, 4].some(function(e) {
  return e % 2 == 0;
  })
  console.log(isAnyEven)

//SPLIT STRING TO LETTERS
let letters = 'apple'.split('');
console.log(letters)

console.log(letters.join('@'))


//PRINTING ELEMENTS BY INDEX
let arr6 = [1, 3, 5, 7]
console.log(arr6[2])

//LENGTH
let firstList = [1, 2, 3]
let secondList = [4, 5]

if (firstList.length > secondList.length) {
    console.log('firstList has more elements than secondList')
} else {
    console.log('secondList has more elements than firstList')
}

//SUM OF ELEMENTS
arr7 = [54, 23, 66, 12]

let sumOfSecondAndThirdEl = arr7[1] + arr7[2]
console.log(sumOfSecondAndThirdEl)

//SUM OF ALL ELEMENTS
let result = arr7.reduce((a, b) => a + b, 0)
console.log(result)

//SWAPPING ELEMENTS
let names = ['Arthur','Boe','Chloe'];       // for some reason here it throws error without ;
[names[2], names[0]] = [names[0], names[2]]
console.log(names)

//CHANGING ELEMENTS
let arr8 = [1, 2, 3, 8, 5, 6].map(element => element == 8 ? 4 : element)
console.log(arr8)

let arr9 = [1, 2, 3, 8, 5, 6]
arr9[3]=4
console.log(arr9)

let arr10 = [1, 2, 3, 4, 5]
arr10[2] +=1
console.log(arr10)

//APPEND A
let animals = ['koal', 'pand', 'zebr', 'anacond', 'bo', 'chinchill', 'cobr', 'gorill',
   'hyen', 'hydr', 'iguan', 'impal', 'pum', 'tarantul', 'pirahn'].map(element => element + 'a')
   console.log(animals)

//DOUBLE STRING ELEMENT
let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'].map(e => e +=e)
console.log(drinks) 

//MULTIDIMENSINAL ARRAY

let colors = [
    ['lime', 'forest-green', 'olive', 'pale green', 'spring green'],
    ['orange red', 'red', 'tomato'],
    ['orchid', 'violet', 'pink', 'hot pink']
    ]

console.log(colors[0]);

//MATRIX
let size = 4;
let matrix = [];
for ( let i = 0; i < size; i++) {
    matrix[i] = [];
    for ( let j = 0; j < size; j++ ) {
    matrix[i].push( j === (size - i) - 1 ? 1 : 0 );
    }
  console.log( matrix[i] );
}

//REVERSE
let arr11 = [3, 4, 5, 6, 7].reverse()
console.log(arr11)

let arr12 = [3, 4, 5, 6, 7]
let temArray = []
for(let i=arr12.length-1; i>=0; i--) {
temArray.push(arr12[i])
}
console.log(temArray)