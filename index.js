const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')

display.innerText = 0;

buttons.addEventListener('click', captureInput)

let result = 0;

let operA;
let operator;
let operB;

let currentNum = '';

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

function captureInput(e) {
    const button = e.target.closest('.button')
    const buttonId = button.id || button.querySelector('.button-text').id
    if (button.className.includes('digit')) {
        updateDisplay(buttonId)
    }
    if (button.className.includes('operator')) {
        // do the thing to save the number and operator and show the operator
    }
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

function updateDisplay(button) {
    if (display.innerText === '0') {
        display.innerText = button
        currentNum = button;
    }
    else {
        display.innerText += button
        currentNum += button;
    }
}