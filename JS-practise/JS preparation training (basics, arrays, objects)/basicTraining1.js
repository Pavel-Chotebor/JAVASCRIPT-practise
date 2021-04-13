//BASIC OPERATIONS AND FIRST TRAINING IN JAVASCRIPT

// hello world
console.log('Hello world')

//humpty dumpty
console.log('Humpty Dumpty sat on a wall,')
console.log('Humpty Dumpty had a great fall.')
console.log('All the king\'s horses and all the king\'s men')
console.log('Couldn\'t put Humpty together again.')

//basic math op
console.log(5*2)
console.log(10%2)
console.log('i don\'t')
let a = 10
let b = 22
let c = a / b
let d = 5
d *=3
a /=2
console.log(a)
console.log(d)
console.log(c)

// ------------------------------------------
let codingDayTime = 6
let weekWorkDays = 5
let weeksPeriod = 17
let averageHoursPeeWeek = 52
let averageHoursPerMonth = averageHoursPeeWeek * 4
let resultOfStudingHour = (codingDayTime * weekWorkDays * weeksPeriod)
console.log(resultOfStudingHour)

let percentageOfCodingHoursInSemester = (averageHoursPerMonth / weeksPeriod)
console.log(percentageOfCodingHoursInSemester)

// ------------------------------------------
let swap1 = 123
let swap2 = 526
let temp
temp = swap1
swap1 = swap2
swap2 = temp
console.log(swap1)
// ------------------------------------------


// ------------------------------------------
let massInKg = 81.2
let heightInM = 1.78
let bmi = (massInKg / Math.pow(heightInM,2))   // na druhou
console.log(bmi)

// ------------------------------------------

let f1 = 123
let f2 = 345
console.log(f1>f2)

let h = 1521
console.log(h % 3 === 0)  
console.log(h % 5 === 0)
// ------------------------------------------

// functions
function getVolumeOfCube(a, b, c) {
     console.log(a * b * c)

}
getVolumeOfCube(10, 10, 5)


function findSubstring (input1, input2) {
     
    if (input1.includes(input2)) {           // in JAVA  .contains
        console.log(input1.indexOf(input2))
    }
}
findSubstring('this is what Im searching in', 'searching')

/*
let apple;
console.log(apple);      // undefined
console.log(apple + 1);  // NaN
apple = null;
console.log(apple);      // null
*/

//if
let number1 = 10
if (number1 === 10) {
    console.log('valuof \'number1\' is ' + number1)
}

//loops
for (let i = 2; i <= 500; i +=2) {
    console.log(i)
}

for (let i = 0; i < 15; i++) {
    console.log(i + ' * 15=' + (i*15))
}

for (let i = 0; i < 100; i++) {

    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
    }
    else if(i % 5 === 0) {
        console.log('BUZZ')

    }else if(i % 3 === 0) {
        console.log('FIZZ')
    }
    else if(i % 5 === 0) {
        console.log('BUZZ')
    }
    else console.log(i)
}

let lineCount = 5;
let star = ''

for (let i = 0; i < lineCount; i++) {
    console.log(star += '*')
}

function displayPyramid(n) { 
    for (var i = 0; i < n; i++) { 
      var str = ''; 
      for (var j = 1; j < n-i; j++) { 
        str = str + ' ' 
      } 
      for (var k = 1; k <= (2*i+1); k++) { 
        str = str + '*' 
      } 
      console.log(str)
    } 
  } 
  
  displayPyramid(5)
