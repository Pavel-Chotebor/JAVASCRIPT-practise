// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

let planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune']

function putSaturnAs5thElement (listOfPlanets) {
     listOfPlanets.splice(5,0,'Saturn')
     return listOfPlanets.join()
}

console.log(putSaturnAs5thElement(planetList))