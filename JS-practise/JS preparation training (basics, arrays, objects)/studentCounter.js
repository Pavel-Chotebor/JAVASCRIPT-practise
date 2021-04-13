// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies


const students = [
    {name: 'Theodor', age: 3, candies: 2},
    {name: 'Paul', age: 9.5, candies: 2},
    {name: 'Mark', age: 12, candies: 5},
    {name: 'Peter', age: 7, candies: 3},
    {name: 'Olaf', age: 12, candies: 7},
    {name: 'George', age: 10, candies: 1}
  ]

  function countCandies (listOfStudents) {
    let candiesInTotal = 0
    for(let i = 0; i < listOfStudents.length; i++) {
        candiesInTotal += listOfStudents[i].candies 
    } return candiesInTotal
  }

  function getSumOfAgeWhereCandiesIsLessThan5 (listOfStudents) {
    let sumOfAge = 0
    for(let i = 0; i < listOfStudents.length; i++) {
        if (listOfStudents[i].candies < 5)
        sumOfAge += listOfStudents[i].age
    } return sumOfAge
  }
  
  console.log('total candies: ' + countCandies(students))
  console.log('total age: ' + getSumOfAgeWhereCandiesIsLessThan5(students))