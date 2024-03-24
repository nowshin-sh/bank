//step 1: add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function () {
    //step 2: get the deposite amount from the deposite input field
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmount = depositeInput.value.trim()
    //step 7: clear the deposite field
    depositeInput.value = "";
    if (isNaN(parseFloat(newDepositeAmount))) {
        alert("Please Enter valid amount to deposite");
        return;
    }
    //step 3: get the current deposite total amount
    const previousDeposite = document.getElementById('deposite-total').innerText;
    const currentDepositeTotal = parseFloat(newDepositeAmount) + parseFloat(previousDeposite);
    document.getElementById('deposite-total').innerText = currentDepositeTotal;
    //step 4: get the current total balance
    const previousBalance = document.getElementById('balance-total');
    previousBalance.innerText = parseFloat(previousBalance.innerText) + parseFloat(newDepositeAmount);
})