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