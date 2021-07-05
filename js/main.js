let groups = document.querySelectorAll(".button-block")
 textarea = document.querySelector("#input-textarea")
 equally = document.querySelector(".button-operator-equally")
 btnDelete = document.querySelector(".button-operator-delete")
 btnBack = document.querySelector(".button-operator-back")
 sin = document.querySelector(".button-operator-sin")
 cos = document.querySelector(".button-operator-cos")
 tg = document.querySelector(".button-operator-tg")
 ctg = document.querySelector(".button-operator-ctg")
 gradus = document.querySelector("#gradus")
 radian = document.querySelector("#radian")
 radic = document.querySelector(".button-operator-radic")
 precent = document.querySelector('.button-operator-precent')
 hisory = document.querySelector('.history')
 ln = document.querySelector('.button-block-ln')

let historyText = document.createElement('div');

groups.forEach((group) => {
  group.addEventListener("click", () => {
    let chooseNumber = group.textContent;
    textarea.value += chooseNumber;
  });
});

function findFactorial(number) {
  if(number == 0 || number == 1) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
}

function outputInformation(equation,result) {
  historyText.innerHTML(equation + ' = ' + result);
}

function computation() {
  historyText.innerHTML += textarea.value + ' = ';
  if (textarea.value.includes('%')){
    let wholePart = textarea.value.split('*')[0];
    let precent = textarea.value.split('*')[1].split('%')[0];
    textarea.value = wholePart * (precent / 100);
  }
  if(textarea.value.indexOf('^') !== -1){
    let number = textarea.value.split('^')[0];
    let power = textarea.value.split('^')[1].split(' ')[0];
    let operations = textarea.value.split(' ')[1]
    let otherNumber =   textarea.value.split(' ')[2];
    if (operations !== undefined && otherNumber !== undefined){
      textarea.value = eval(Math.pow(number,power) + operations + otherNumber);
    } else {
      textarea.value = Math.pow(number,power);
    }
  }
  if (textarea.value.indexOf('!') !== -1){
    let number = textarea.value.split('!')[0];
    let operations = textarea.value.split(' ')[1]
    let otherNumber =   textarea.value.split(' ')[2];
    if (operations !== undefined && otherNumber !== undefined){
      textarea.value = eval(findFactorial(number) + operations + otherNumber);
    } else {
      textarea.value = findFactorial(number);
    }
  }
  textarea.value = eval(textarea.value);
  historyText.innerHTML += textarea.value + '<br/>';
  // hisory.appendChild(historyText); 
}

function clearInput() {
  textarea.value = "";
}

function goBack() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

function findSin() {
  if (gradus.checked === true) {
    historyText.innerHTML += `${'Sin('+textarea.value+'°) = '}`;
    textarea.value = Math.sin((textarea.value * Math.PI) / 180);
    historyText.innerHTML += textarea.value + '<br/>';
  } else if (radian.checked === true) {
    historyText.innerHTML += `${'Sin(' + textarea.value + ' рад) = '}`;
    textarea.value = Math.sin(textarea.value);
    historyText.innerHTML += textarea.value + '<br/>';
  }
}

function findCos() {
  if (gradus.checked === true) {
    textarea.value = Math.cos((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = Math.cos(textarea.value);
  }
}

function findTan() {
  if (gradus.checked === true) {
    textarea.value = Math.tan((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = Math.tan(textarea.value);
  }
}

function findCtan() {
  if (gradus.checked === true) {
    textarea.value = 1 / Math.tan((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = 1 / Math.tan(textarea.value);
  }
}

function findLog() {
  textarea.value = Math.log(textarea.value);
}

function findSqrt() {
  textarea.value = Math.sqrt(textarea.value);
}

equally.addEventListener("click", computation);
btnDelete.addEventListener("click", clearInput);
btnBack.addEventListener("click", goBack);
sin.addEventListener("click", findSin);
cos.addEventListener("click", findCos);
tg.addEventListener("click", findTan);
ctg.addEventListener("click", findCtan);
radic.addEventListener("click", findSqrt);
ln.addEventListener('click',findLog);
hisory.appendChild(historyText); 

document.addEventListener('keydown', event => {
  if ((event.key).match(/=|Enter/)) {
    textarea.value = eval(textarea.value);
  }
})
