// let i = 1;

// let number = () => {
//     console.log(i)
//     i++

//     if(i==11){
//         clearInterval(interval)
//     }
// }

// let interval = setInterval(number, 2000)



let interval2 = setInterval(() => {
    console.log('abcd...')
}, 500);

setTimeout(() => {
    clearInterval(interval2)
}, 5000)