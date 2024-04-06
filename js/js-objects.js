let student = {}
console.log('type of student : ', typeof student)
console.log('student : ', student)

student = {
    firstName: "Uchithma",
    lastName: "Senevirathne",
    email: "uchithma@gmail.com",
    phoneNumber: "0713301004",
    age: 17,
    isRegistered: true
}
console.log('student : ', student)

// print email
console.log('Student Email(using dot notation) : ', student.email)
console.log('Student Email(using square brackets notation) : ', student['email'])

//set values

// 1. assigning using dot notation
student.age = 20
console.log('Student Age : ', student.age)

//after change age
console.log('student : ', student)

// 2. assigning using square brackets notation
student['age'] = 50
console.log('Student Age : ', student['age'])

//after change age
console.log('student : ', student)
