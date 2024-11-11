const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const divide = document.querySelector('#divide')
const plusMinus = document.querySelector('#plusMinus')
const decimal = document.querySelector('#decimal')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const del = document.querySelector('#del')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e) => {
    const button = e.target.closest('.button')
    if (button) {
        const buttonId = button.id || button.querySelector('.button-text').id
        console.log(buttonId)
    }
})

let

function add(a,b) {
    return a + b
}