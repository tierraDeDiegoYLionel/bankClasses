class Bank {
  constructor(balance) {
    this.balance = balance
}

  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log("You cannot withdraw more than you have")
      return
    }
   this.balance -= amount   
    console.log("withdrew", `$${amount}`)
    console.log({balance: this.balance})
  }




  deposit(amount)  {
    this.balance += amount
    console.log("deposited", `$${amount}`)
     console.log({balance: this.balance})

  }
}

const simonChecking = new Bank(0)



const withdrawButton = document.getElementById('withdraw')
const depositButton = document.getElementById('deposit')
const amountInput = document.getElementById('amount')
const balanceDiv =  document.getElementById('balance')

depositButton.onclick = () => {
  const amount = Number(amountInput.value)
  simonChecking.deposit(amount)
  balanceDiv.innerText = `Balance: ${simonChecking.balance}`
}
withdrawButton.onclick = () => {
   const amount = Number(amountInput.value)
  simonChecking.withdraw(amount) 
  balanceDiv.innerText = `Balance: ${simonChecking.balance}`
}



  
