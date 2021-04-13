//SPLIT STRING TO LETTERS
let letters = 'apple'.split('');
console.log(letters)
console.log(letters.join('@'))

//String replace
let input = 'In a dishwasher far far away'
input = input.replace('dishwasher', 'galaxy')
console.log(input)

//reversed String
let toBeReversed = `.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`

function stringReverser (reversedString) {
    reversedString = reversedString.split('').reverse().join('')   // split to char array, reverse order and again joining and saving to String
    return reversedString;
}
console.log(stringReverser(toBeReversed))

const stringReverser2 = (revStr) => revStr.split('').reverse().join('');
console.log(stringReverser2(toBeReversed))

//URL fixer
let url = 'https//www.reddit.com/r/nevertellmethebots'
url = url.slice(0,5) + ':' + url.slice(5)
url = url.replace('bots','ods')
console.log(url)

//insert string into string
let quote = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`
quote = quote.replace('It you', 'It' + ' always takes longer than' + 'you')
console.log(quote)

//todo print
let todoText = 'My todo:\n' + ' - Buy milk\n' + ' - Download games\n' + ' - Diablo'
console.log(todoText)