const x_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

const cellElements = document.querySelectorAll("data-cell")
let circleTurn
cellElements.forEach(cell => {
    cell.addEventListener('click', () => {
        console.log("clicked")
    }

)})

function handleClick(e){
    console.log("clicked")
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : x_CLASS
    placeMark(cell, currentClass )
}

function placeMark(cell, currentClass){
    cell.class.add(currentClass)
}
console.log("anything")
