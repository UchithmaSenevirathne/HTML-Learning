let names = ['Kamal', 'Amal', 'Nimal']
console.log('Name array : ', names)

console.log('============================')


// built in functions

// 1. push - adds one or more elements to the end of array
names.push('John', 'Uchi')
console.log('Name array after added : ', names)

console.log('============================')

// 2. pop - removes the last element from array and returns that element
let poppedName = names.pop()
console.log('popped Name : ', poppedName)
console.log('Name array after popped :', names)

console.log('============================')

// 3. shift - removes the first element from the array and returns that element
let shiftedName = names.shift()
console.log('Shifter name : ', shiftedName)
console.log('Name array after shifted : ', names)
console.log('0 index after shifted : ', names[0])

console.log('============================')

// 4. unshift - add one or more elements at the beginning of the array
names.unshift('Josh', 'Steve')
console.log('Name array after unshifted : ', names)

console.log('============================')

// 5. concat - concating arrays
let maleNames = ['Kamal', 'Saman', 'Kusal']
let femaleNames = ['Mueena', 'Tharushi', 'Sarasi']
console.log('after concating : ', maleNames.concat(femaleNames))

//////////////////////

let crickerters = maleNames.concat(femaleNames)
console.log('crickerters : ', crickerters)

console.log('============================')

// 6. slice - recreating a copy of the existed array begining with the index given
//but the elements before the given index are not include in new array

let fruits = ['apple', 'orange', 'mango']
console.log('array after sliced from the index 0 : ', fruits.slice(0))
console.log('array after sliced from the index 1 : ', fruits.slice(1))
console.log('array after sliced from the index 2 : ', fruits.slice(2))

console.log('============================')


// 7. splice - 
let fruitsArray = ['apple', 'orange', 'mango']
fruitsArray.splice(1,2, 'mangoose')
console.log('array after splicing : ', fruitsArray)

console.log('============================')


// 8. reverse
let letters = ['a', 'b', 'c', 'd']
console.log('letters array : ', letters)
console.log('reversed letters array : ', letters.reverse())

console.log('============================')


// 9. sort
let nubmers = [10, 100, 30, 50, 23, 90]
console.log('numbers array : ', nubmers)
console.log('numbers array after sorted : ', nubmers.sort((a, b) => a - b))

let testingArray = ['Amal', 'Kamal', 100]
console.log('testingArray : ', testingArray)
console.log('testingArray 0 index : ', typeof testingArray[0])
console.log('testingArray 2 index : ', typeof testingArray[2])

console.log('============================')