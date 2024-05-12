// 1. innerHTML - sets of return the HTML content(including HTML tags) of an element
console.log(box.innerHTML)
box.innerHTML = '<span>jcvjhvj</span>'
console.log(box.innerHTML)

//2.textContent - sets or return the text content of an element, EXCLUDING HTML tags
console.log(box.textContent)
box.textContent = 'hello'
console.log(box.textContent)

//3. innerText - same as textContent. But, innerText shows as DOM renders
//while textContent shows only the textual content
console.log(box.innerText)
box.innerText = 'nimal'
console.log(box.innerText)

//4. applying styles
let image = document.getElementById('img')
image.style.width = '500px'
image.style.height = '500px'

//5.setAttributes - sets the value of an attribute on the selected element.
image.setAttribute('src', '../assets/flower.jpg')

//6.classList - allows you to manipulate classes on an element
console.log(box.classList)
box.classList.add('aaa')
console.log(box.classList)

box.classList.remove('aaa')
console.log(box.classList)

box.classList.replace('xyz', 'mmm')
console.log(box.classList)

//7. append & appendChild 
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr', 'new')
parentDiv.appendChild(childDiv)

// 8. remove & removeChild
parentDiv.removeChild(childDiv)
parentDiv.remove()





