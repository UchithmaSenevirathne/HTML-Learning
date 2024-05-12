// 1. setTimeout - execute a function once after specific delay

// setTimeout(callback, 5000)   //5000ms(miliseconds)
let timeout = setTimeout(() => {
    console.log('hellow...')
}, 5000);

clearTimeout(timeout)

console.log('============================')

// 2. setInterval -

let greet = () => {
    console.log('Heyyyyy')
}

// setInterval(callback, interval)
let interval = setInterval(greet, 1000);

clearInterval(interval)

console.log('============================')

