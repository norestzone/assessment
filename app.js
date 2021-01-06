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


let display = 0;
let inputNum = document.getElementById('inputNum')

document.getElementById('output').innerHTML = display;

function addBtn() {
  document.getElementById('output').innerHTML = ++display;
}

function decBtn() {
  document.getElementById('output').innerHTML = --display;
}