// 1.click event
document.getElementById('btnAdd').addEventListener('click', () => {
    alert('added to cart..')
})

let box = document.getElementById('box')
//2. mouseOver event
box.addEventListener('mouseover', () => {
   box.style.background = 'red'
})

//3.mouseout event
box.addEventListener('mouseout', () => {
    box.style.background = 'green'
})

//4.keydown event
let userNameField = document.getElementById('username')

userNameField.addEventListener('keydown', (event) => {
    console.log('key down ' + event.key)
})

//5.keyup event

userNameField.addEventListener('keyup', () => {
    console.log('key up')
})

//6.submit event
document.getElementById('myForm').addEventListener('submit', () => {
    event.preventDefault()
    console.log('form submited')
})