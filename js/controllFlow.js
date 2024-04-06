let num = -2

if(num > 0){
    console.log('number is positive')
}else if(num < 0){
    console.log('number is negative')
}else {
    console.log('number is 0')
}

let number = 1

switch(number){
    case 1 :
        number = 'Sunday'
        break
    case 2 :
        number = 'Monday'
        break
    case 3 :
        number = 'Tuesday'
        break
    case 4 :
        number = 'Wednesday'
        break
    case 5 :
        number = 'Thursday'
        break
    case 6 :
        number = 'Friday'
        break
    case 7 :
        number = 'Saturday'
        break
    default:
        number = 0
}

console.log('numberSwitch : ', number)
//loops//

// 1. for

console.log('for loop')

for( i = 0; i < 5; i++){
    console.log(i);
}

// 2. while

console.log('while loop')

let k = 0

while(k < 5){
    console.log(k)
    k++ 
}

// 3. do-while

console.log('do-while loop')

let j = 0

do {
    console.log(j)
    j++
} while (j < 5);


// == and === 

console.log('==')

 for(let n = 0; n <= 5; n++ ){
    if(n == 3){
        continue;
    }
    console.log(n)
 }