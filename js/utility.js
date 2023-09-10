function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    inputField.value = '';
    const inputValue = parseFloat(inputString);
    return inputValue;
}

function getTextFieldValue(textId){
    const textField = document.getElementById(textId);
    const textString = textField.innerText;
    const textValue = parseFloat(textString);
    return textValue;
}

function setTotalAmount(id, value){
    const totalField = document.getElementById(id);
    totalField.innerText = value;
}