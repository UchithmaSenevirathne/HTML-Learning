// there are 6 types of primitive data types in javascript

// 1. String
let firstName = "Kamal"
console.log('type of firstName : ', typeof firstName)

// 2. Number
let age = 20
console.log('type of age : ', typeof age)

let distanceKm = 3.35
console.log('type of distanceKm : ', typeof distanceKm)

// 3. boolean
let isAdded = true
console.log('type of isAdded : ', typeof isAdded)

let isDeleted = false
console.log('type of isDeleted : ', typeof isDeleted)

// 4. undefined
let address;
console.log('type of address : ', typeof address)

let email = undefined
console.log('type of email : ', typeof email)

// 5. null - represent the intentional absent of any object value.it is a primitive value
let phoneNumber = null
console.log('type of phoneNumber : ', typeof phoneNumber)

// 6. Symbol - introduced in ECMAScript 6(ES6) , symbols are unique and immutable primitive value
let symbol = Symbol('First Name')
console.log('type of symbol : ', symbol)