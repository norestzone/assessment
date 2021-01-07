// document.querySelector("#deduct").addEventListener('click', (e)=> convert(e))

// document.querySelector("#add").addEventListener('click', (e)=> convert(e))

// let output = document.getElementById("output")

// let inputNum = document.getElementById("inputNum")

// function convert(e) {
//     outputNum = inputNum.value
//     if (document.getElementById("deduct").click) {
//         newNum = inputNum - 1
//     output.innerText = newNum
// }

// function convert(e) {
//     inputNum = inputNum.value
//     if (document.getElementById("add").click {
//         newNum = ("output" + 1)
//     output.innerText = newNum
// }
// ********

// let display = 0;
let userInput = document.getElementById('inputNum');
let outputNum = document.getElementById('output');
let addButton = document.getElementById('addBtn');
let decButton = document.getElementById('decBtn');

let total = 0;

// outputNum.innerText = display;

addButton.addEventListener('click', function () {
  addBtn()
});


decButton.addEventListener('click', decBtn);

function addBtn() {
  total = total + parseInt(userInput.value);
  updateDisplay();
  
  // console.log('userInput' + userInput.value);
  // console.log(total);
  // outputNum.innerText = display + parseInt(inputNum.value);
}

function decBtn() {
  total = total - parseInt(userInput.value);
  updateDisplay();
  
  // console.log('userInput' + userInput.value);
  // console.log(total);
  // outputNum.innerText = display - parseInt(inputNum.value);
}

function updateDisplay(){
    outputNum.innerText = total
  }


// ********

// const display = document.getElementById('display');

// const decBtn = document.getElementById('deduct');
// const inputValue = document.getElementById('inputNum');


// decBtn.addEventListener('click', addToCount)

// let total = 1

// function addToCount() {
//   let fromString = parseInt(inputValue.value)
//   total = total + fromString

//   updateDisplay()
// }

// function subFromCount() {
//   updateDisplay()
// }

// function updateDisplay(){
//   display.innerText = total

// }
