import { findFactorial } from './factorial.js'

let textarea = document.querySelector('#input-textarea');
let historyBlock = document.querySelector('#historyContainer');
console.log(textarea);
let equally = document.querySelector('#equally');
let historyTextList = document.querySelector('#historyList');

function computation() {
    let li = document.createElement('li');
    li.innerHTML += textarea.value + ' = ';
    if (textarea.value.includes('%')) {
      let wholePart = textarea.value.split('*')[0];
      let precent = textarea.value.split('*')[1].split('%')[0];
      textarea.value = wholePart * (precent / 100);
    }
    if (textarea.value.indexOf('^') !== -1) {
      let number = textarea.value.split('^')[0];
      let power = textarea.value.split('^')[1].split(' ')[0];
      let operations = textarea.value.split(' ')[1];
      let otherNumber = textarea.value.split(' ')[2];
      if (operations !== undefined && otherNumber !== undefined) {
        textarea.value = eval(Math.pow(number, power) + operations + otherNumber);
      } else {
        textarea.value = Math.pow(number, power);
      }
    }
    if (textarea.value.indexOf('!') !== -1) {
      let number = textarea.value.split('!')[0];
      let operations = textarea.value.split(' ')[1];
      let otherNumber = textarea.value.split(' ')[2];
      if (operations !== undefined && otherNumber !== undefined) {
        textarea.value = eval(findFactorial(number) + operations + otherNumber);
      } else {
        textarea.value = findFactorial(number);
      }
    }
    textarea.value = eval(textarea.value);
    li.innerHTML += textarea.value;
    historyTextList.appendChild(li);
  }

document.addEventListener('keydown', event => {
   if (event.key.match(/=|Enter/)) {
     event.preventDefault();
     computation();
   }
 });

historyBlock.appendChild(historyTextList);
equally.addEventListener('click', computation);