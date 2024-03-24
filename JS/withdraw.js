document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step 1:
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    //step 2:
    const currentBalance = document.getElementById('balance-total');
    const previousBalanceNum = parseFloat(currentBalance.innerText);
    //step 3:
    if (withdrawInput.value == "") {
        alert("Please Enter amount to withdraw");
    }
    else if (newWithdrawAmount <= previousBalanceNum) {
        //step 4:
        currentBalance.innerText = previousBalanceNum - newWithdrawAmount;
        //step 5:
        const currentWithdrawTotal = document.getElementById('withdraw-total');
        currentWithdrawTotal.innerText = parseFloat(currentWithdrawTotal.innerText) + newWithdrawAmount;
    }
    else {
        //step 6:
        alert('You Don\'t have sufficient balance');
    }
    //step 7:
    withdrawInput.value = "";
})