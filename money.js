// Get Expensess Value
function getExpensessMoney(id) {
    const expenseMoney = document.getElementById(id);
    const expenseMoneyString = expenseMoney.value;
    const expenseMoneyNum = parseInt(expenseMoneyString);
    return expenseMoneyNum

}


// Save button handler
document.getElementById('btn-saving').addEventListener('click', ()=>{
     // Saving Input Field
     const savingMoney = getExpensessMoney('save-amount');
     const newSavingMoney = savingMoney / 100;
     // Get current Balance
     const currentBalance = document.getElementById('balance').innerText;
     const currentBalanceNum = parseInt(currentBalance);
     const savingBalance = (currentBalanceNum * newSavingMoney).toFixed(2);
    // Display Saving Money 
     const savingDisplay = document.getElementById('saving');
     savingDisplay.innerText = savingBalance;

     //Get Remain Balance
     const newRemainBalance =currentBalance - savingBalance;
     const remainBalance = document.getElementById('remain-balance');
     remainBalance.innerText = newRemainBalance;
})

// Calculate button handler
document.getElementById('btn-calculate').addEventListener('click', ()=>{
    //Income Input Field 
    const income = getExpensessMoney('income');
    // Cost Input Field
    const foodCost = getExpensessMoney('food-cost');
    const rentCost = getExpensessMoney('rent-cost');
    const clothesCost = getExpensessMoney('clothes-cost');
    const costTotal = foodCost + rentCost + clothesCost;
    //Display Total Expensess 
    const totalExpenseField = document.getElementById('total-expense');
    totalExpenseField.innerText = costTotal;
    // Calculate Cost Money and Display Balance
    const balancefield = document.getElementById('balance');
    const balance = income - costTotal;
    balancefield.innerText = balance;
})

