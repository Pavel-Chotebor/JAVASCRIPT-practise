//We are going to represent our expenses in a list containing integers.
let listOfSpendMoney = [500, 1000, 1250, 175, 800, 120]

//How much did we spend?
let totalSpend = listOfSpendMoney.reduce((a, b) => a+b,0)

//Max spend
console.log(Math.max(...listOfSpendMoney)) // only with specific numbers: console.log(Math.max(500, 1000, 1250, 175, 800, 120))

//Min spend
console.log(Math.min(...listOfSpendMoney))                      
                                            
//Average spend
console.log(totalSpend / listOfSpendMoney.length) //using already created variable with sumOfElements and making average
  
                                        