var grade
function Grade(mark){
    if(mark < 0){
        grade = 'invalid mark'
    }else if(mark < 35){
        grade = 'F'
    }else if(mark < 55){
        grade = 'S'
    }else if(mark < 65){
        grade = 'C'
    }else if(mark < 75){
        grade = 'B'
    }else if(mark < 100){
        grade = 'A'
    }
    return grade
}

function getStudentGrade(names, marks){
    for(let i = 0 ; i < marks.length ; i++){
        console.log(names[i] + ' grade for ' + marks[i] + ' => ' + Grade(marks[i]))
    }
}

const marks = [92, 73, 78, 100, 12, 38, 59, 62, -10]
const names = ['kamal', 'nimal', 'saman', 'amal', 'tharu', 'sarasi', 'muee', 'uchi', 'vishmi']

getStudentGrade(names, marks)
