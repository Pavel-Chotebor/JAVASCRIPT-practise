// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

const accounts = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
  ]

function getNameAndBalance (accountNumber) {
      let accountInfo = []
      for(let i in accounts) {
          if(accounts[i].accountNumber === accountNumber) {
              let user = accounts[i]
            accountInfo.push(user.clientName, user.balance)
          }
      } return accountInfo
  }