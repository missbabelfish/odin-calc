const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')

display.innerText = 0;

buttons.addEventListener('click', calculate)

let result = null;

let operA = null;
let operator = null;
let operB = null;

let currentNumStr = '';
let operSelected = false;

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mult(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function calculate(e) {
    const button = captureButton(e)
    const buttonId = captureButtonId(e) 
    const isDigit = button.className.includes('digit')
    const isOper = button.className.includes('operator')
    
    if (isDigit) {
        if (!currentNumStr) {
            currentNumStr = buttonId
        } else {
            currentNumStr += buttonId
        }
        if (operSelected) {
            operB = +currentNumStr
        } else {
            operA = +currentNumStr
        }
        updateDisplay(currentNumStr)
        console.log({operA})
        console.log({operB})
    }

    if (isOper) {
        if (!operSelected) {
            currentNumStr = ''
            operSelected = true;
            operator = buttonId
            console.log(operator)
        }
    }

    if (buttonId === '=') {
        if (operA && operator && operB) {
            result = operate(operA, operator, operB)
            updateDisplay(result)
        }
    }

    if (buttonId === 'clear') {
        operA = null;
        operator = null;
        operB = null;
        result = null;
        operSelected = false;
        currentNumStr = ''
        display.innerText = 0
    }
}

function captureButton(e) {
    return e.target.closest('.button')
}

function captureButtonId(e) {
    return e.target.closest('.button').id
}

function operate(a, oper ,b){
    switch (oper) {
        case '+': return add(a,b);
        break;
        case '-': return sub(a,b);
        break;
        case '*': return mult(a,b);
        break;
        case '/': return divide(a,b);
        break;
        default: return 'something fucked up somewhere'
    }
}

function updateDisplay(str) {
    display.innerText = str
}