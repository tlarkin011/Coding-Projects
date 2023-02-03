// let id = 0;

// document.getElementById('add').addEventListener('click', () => {
//     let createdDate = new Date();
//     let table = document.getElementById('list')
//     let row = table.insertRow(1);
//     row.setAttribute('id', `item-${id}`);
//     row.insertCell(0).innerHTML = document.getElementById('new-task').value;
//     row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
//     row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
//     row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
//     let actions = row.insertCell(4);
//     actions.appendChild(createDeleteButton(id++))
//     document.getElementById('new-task').value = '';
    
// });

// function createDeleteButton(id){
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-danger';
//     btn.id = id;
//     btn.innerHTML = 'Delete';
//     btn.onclick = () => {
//         let elementToDelete = document.getElementById(`item-${id}`);
//         elementToDelete.parentNode.removeChild(elementToDelete);
//     }
//     return btn;
// }
// document.getElementById('list').style.fontSize = "22px"
// document.getElementById('list').style.color = "green"


// function reverseString(str) {
//     let splitString = str.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray;
// };
// console.log(reverseString('Hello'));

// function fibonacci(n){
//     const fib = [0, 1]
//     for (let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib [i - 2]
//     }
//     return fib
// }

// console.log(fibonacci(12))

const num = 18;
const indexToAlpha = (num = 1) => {
   // ASCII value of first character
   const A = 'A'.charCodeAt(0);
   let numberToCharacter = number => {
      return String.fromCharCode(A + number);
   };
   return numberToCharacter(num);
};
console.log(indexToAlpha(19));
console.log(indexToAlpha(7));
console.log(indexToAlpha(4));
console.log(indexToAlpha(17));
console.log(indexToAlpha(4));
console.log("")
console.log(indexToAlpha(8));
console.log(indexToAlpha(18));
console.log("")
console.log(indexToAlpha(0));
console.log("")
console.log(indexToAlpha(19));
console.log(indexToAlpha(17));
console.log(indexToAlpha(4));
console.log(indexToAlpha(0));
console.log(indexToAlpha(18));
console.log(indexToAlpha(20));
console.log(indexToAlpha(17));
console.log(indexToAlpha(4));
console.log("");
console.log(indexToAlpha(22));
console.log(indexToAlpha(0));
console.log(indexToAlpha(8));
console.log(indexToAlpha(19));
console.log(indexToAlpha(8));
console.log(indexToAlpha(13));
console.log(indexToAlpha(6));
console.log("");
console.log(indexToAlpha(5));
console.log(indexToAlpha(14));
console.log(indexToAlpha(17));
console.log("");
console.log(indexToAlpha(24));
console.log(indexToAlpha(14));
console.log(indexToAlpha(20));
console.log("");
console.log(indexToAlpha(18));
console.log(indexToAlpha(14));
console.log(indexToAlpha(12));
console.log(indexToAlpha(4));
console.log(indexToAlpha(22));
console.log(indexToAlpha(7));
console.log(indexToAlpha(17));
console.log(indexToAlpha(4));


console.log("");
console.log(indexToAlpha(22));
console.log(indexToAlpha(7));
console.log(indexToAlpha(4));
console.log(indexToAlpha(17));
console.log(indexToAlpha(4));
console.log("");
console.log(indexToAlpha(8));
console.log("")

console.log(indexToAlpha(10));
console.log(indexToAlpha(4));
console.log(indexToAlpha(4));
console.log(indexToAlpha(15));
console.log("")
console.log(indexToAlpha(0));
console.log("")
console.log(indexToAlpha(5));
console.log(indexToAlpha(4));
console.log(indexToAlpha(22));
console.log("");
console.log(indexToAlpha(19));
console.log(indexToAlpha(7));
console.log(indexToAlpha(8));
console.log(indexToAlpha(13));
console.log(indexToAlpha(6));
console.log(indexToAlpha(18));

console.log("");
console.log(indexToAlpha(18));
console.log(indexToAlpha(4));
console.log(indexToAlpha(2));
console.log(indexToAlpha(20));
console.log(indexToAlpha(17));
console.log(indexToAlpha(4));
console.log("")


