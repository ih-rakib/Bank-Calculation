document.getElementById('btn-withdraw').addEventListener('click', function () {
    const currentWithdrawAmount = getInputFieldValue('withdraw-field');
    const previousWithdrawAmount = getTextFieldValue('withdraw-total');
    const currentBalance = getTextFieldValue('balance-total');

    if (currentBalance < currentWithdrawAmount) {
        alert('Insufficient Balance!!!');
        return;
    } else if(isNaN(currentWithdrawAmount)){
        alert('Please enter a valid amount!');
        return;
    }

    const newWithdrawTotal = previousWithdrawAmount + currentWithdrawAmount;
    setTotalAmount('withdraw-total', newWithdrawTotal);
    const newBalance = currentBalance - currentWithdrawAmount;
    setTotalAmount('balance-total', newBalance);
})