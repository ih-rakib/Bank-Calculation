document.getElementById('btn-deposit').addEventListener('click', function () {
    const currentDepositAmount = getInputFieldValue('deposit-field');
    if(isNaN(currentDepositAmount)){
        alert('Please enter a valid amount!');
        return;
    }
    const previousDepositAmount = getTextFieldValue('deposit-total');
    const newDepositAmount = previousDepositAmount + currentDepositAmount;
    setTotalAmount('deposit-total', newDepositAmount);
    // console.log(currentDepositAmount, previousDepositAmount, newDepositAmount);

    const currentBalance = getTextFieldValue('balance-total');
    const newBalance = currentBalance + newDepositAmount;
    setTotalAmount('balance-total', newBalance);
    // console.log(currentBalance, newBalance);
})