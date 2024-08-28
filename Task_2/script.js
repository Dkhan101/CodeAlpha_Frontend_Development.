let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === 0) return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(operator) {
    if (currentInput === '' && previousInput === '') return;
    if (currentOperator !== '') calculate();
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function appendDot() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function calculate() {
    if (currentInput === '' || currentOperator === '') return;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch (currentOperator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = current !== 0 ? previous / current : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.innerText = value;
}