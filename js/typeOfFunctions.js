//type of functions

// 1.named function

function addNumber(num1, num2){
    return num1 + num2
}
console.log(addNumber(10, 20))

console.log('===================================')

// 2.annonymus function

let multipleNumbers = function(num1, num2){
    return num1 * num2
}

console.log(multipleNumbers(10, 20))

console.log('===================================')

// 3.arrow function

let subNumbers = (num1, num2) => num1 - num2

console.log(subNumbers(10, 20))

console.log('===================================')

// 4.constructor function

function Student(name, age, address){
    this.name = name
    this.age = age
    this.address = address
}

let student1 = new Student("Kamal", 38, "Galle")

console.log(student1)

console.log('===================================')

// 5.callback function

function myFunction(callBack){
    
    console.log(typeof callBack)

    if(typeof callBack === 'function'){
        callBack()
    }
}

let person = {
    name: 'Kamal',
    age: 20
}

let numbersArray = [1, 2, 3, 4, 5]

function seconFunction(){
    console.log('second function')
}

myFunction(person)
myFunction(numbersArray)
myFunction(seconFunction)

console.log('===================================')

// 6.recursive function

function factorial(n){
    if(n === 0){
        return 1
    }
    return n * (factorial(n-1))
}

console.log(factorial(5))