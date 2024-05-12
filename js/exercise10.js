// numbers only validation

let input = document.getElementById('input')

input.addEventListener('keydown', (event) => {
    console.log('key down ' + event.key)
    console.log('key code ' + event.keyCode)

    if(event.keyCode < 96 || event.keyCode > 105){
        event.preventDefault()
        alert('error')
    }
})