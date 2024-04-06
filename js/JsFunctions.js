// function seyHello(){
//     console.log('Hello World !!')
// }

// seyHello()

//basic function declaration (with parameters)
function greating(firstName, lastName) {
    console.log('good morning '+ firstName + ' ' + lastName)
    return firstName + ' ' + lastName
}

greating('Kamal')
greating();
greating('Amal', 'Perera')
greating(1, 2)

let greatingReturn = greating('Kamal', 'Perera')
console.log('return value : ', greatingReturn)