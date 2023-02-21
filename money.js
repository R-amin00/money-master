// Get Expensess Value
function getExpensessMoney(id) {
    const expenseMoney = document.getElementById(id);
    const expenseMoneyString = expenseMoney.value;
    const expenseMoneyNum = parseInt(expenseMoneyString);
    return expenseMoneyNum

}

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