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
let selectedOper = null;

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
    if (b === 0) {
        clearCalc()
        return 'HOW DARE YOU SIR'
    }
    return a / b
}

function calculate(e) {
    const button = captureButton(e)
    const buttonId = captureButtonId(e) 
    const isDigit = button.className.includes('digit')
    const isOper = button.className.includes('operator')
    
    if (isDigit) {
        if (operSelected) selectedOper.classList.remove('selected')
        if (!currentNumStr) {
            if (buttonId === '.') currentNumStr = '0.'
            else currentNumStr = buttonId
        } else {
            if (buttonId === '.' && currentNumStr.includes('.')) {
                currentNumStr = currentNumStr
            } else {
                currentNumStr += buttonId
            }
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
            if (operB) {
                console.log('operB exists')
                result = operate(operA, operator, operB)
                updateDisplay(result)
                operA = result
                operB = null
                console.log({operA})
                console.log({operB})
            }
            console.log({operB})
            currentNumStr = ''
            operSelected = true;
            selectedOper = button
            operator = buttonId
            console.log({selectedOper})
            console.log({operator})
            selectedOper.classList.add('selected')
            if (!operSelected) {
                console.log(operator)
            }
        }
    }

    if (buttonId === '=') {
        if (typeof operA === 'number' && operator && typeof operB === 'number') {
            result = operate(operA, operator, operB)
            console.log({result})
            updateDisplay(result)
            operA = result
            operator = null
            operB = null
            result = null
            currentNumStr = ''
            operSelected = false
        }
        console.log(`after equals a is ${operA} b is ${operB} result is ${result}`)
    }

    if (buttonId === 'pos-neg') {
        console.log('posneg')
        console.log({currentNumStr})
        if (currentNumStr) {
            if (currentNumStr.charAt(0) === '-') {
                currentNumStr = currentNumStr.slice(1)
            } else {
                currentNumStr = '-' + currentNumStr
            }
        } else {
            currentNumStr = '-' + currentNumStr
        }
        if (operSelected) {
            operB = +currentNumStr
        } else operA = +currentNumStr
        console.log({operA})
        console.log({operB})
        updateDisplay(currentNumStr)
    }

    if (buttonId === 'clear') {
        clearCalc()
    }

    if (buttonId === 'del') {
        backspace()
    }
}

function clearCalc() {
    operA = null;
    operator = null;
    operB = null;
    result = null;
    operSelected = false;
    if (selectedOper) selectedOper.classList.remove('selected')
    selectedOper = null;
    currentNumStr = ''
    display.innerText = 0
}

function backspace() {
    if (currentNumStr) currentNumStr = currentNumStr.slice(0, -1)
    console.log(currentNumStr)
    updateDisplay(currentNumStr)
    if (operSelected) {
        operB = +currentNumStr
    } else {
        operA = +currentNumStr
    }
    console.log({operA})
    console.log({operB})
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