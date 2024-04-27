//id selector
let calculatebtn = document.getElementById('btnCalculate')
calculatebtn.style.backgroundColor = 'green'
calculatebtn.style.color = 'white'
calculatebtn.style.border = 'none'
calculatebtn.style.padding = '10px'
console.log(calculatebtn)

//button click event listner
calculatebtn.addEventListener('click',  () => {
    alert('You Clicked the Calculate Button')
})

//class selector
let boxes = document.getElementsByClassName('box')
console.log(boxes)

//tag selector
let headingOne = document.getElementsByTagName('h1')
console.log(headingOne)