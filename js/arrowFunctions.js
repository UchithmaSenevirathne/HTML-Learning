function addNum(num1, num2){
    return num1 + num2
}

const addNumArrowFunc = (num1, num2) => num1 + num2

const sayHello = () => 'Hello world !!'

console.log(addNum(10, 20))
console.log(addNumArrowFunc(10, 20))
console.log(sayHello())

// converting annonymus function to arrow function

let multipleNumbers = (num1 , num2) => num1 * num2

console.log(multipleNumbers(10, 20))

// converting constructor function to arrow function(constructor functions cannot convert to arrow function)

// let Student = (name, age, address) => {
//     this.name = name
//     this.age = age
//     this.address = address
// }

// let student1 = new Student("Kamal", 38, "Galle")

// console.log(student1)

// converting callback function to arrow function

let myFunction = callBack => {
    
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

let seconFunction = () => console.log('second function')

myFunction(person)
myFunction(numbersArray)
myFunction(seconFunction)