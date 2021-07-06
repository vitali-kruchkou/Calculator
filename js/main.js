let groups = document.querySelectorAll('.added ');
textarea = document.querySelector('#input-textarea');
equally = document.querySelector('.button-operator-equally');
btnDelete = document.querySelector('.button-operator-delete');
btnBack = document.querySelector('.button-operator-back');
gradus = document.querySelector('#gradus');
radian = document.querySelector('#radian');
precent = document.querySelector('.button-operator-precent');
hisory = document.querySelector('.history');
complexFunction = document.querySelectorAll('.complex-function');
historyTextList = document.createElement('ul');

groups.forEach(group => {
  group.addEventListener('click', () => {
    let chooseNumber = group.textContent;
    textarea.value += chooseNumber;
  });
});

function findFactorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
}

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

function clearInput() {
  textarea.value = '';
}

function goBack() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

function findArg(e) {
  let li = document.createElement('li');
  li.innerHTML += `${e.target.textContent + '(' + textarea.value + ') = '}`;
  switch (e.target.textContent) {
    case 'sin':
      if (gradus.checked === true) {
        textarea.value = Math.sin((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = Math.sin(textarea.value);
      }
      break;
    case 'cos':
      if (gradus.checked === true) {
        textarea.value = Math.cos((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = Math.cos(textarea.value);
      }
      break;
    case 'tan':
      if (gradus.checked === true) {
        textarea.value = Math.tan((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = Math.tan(textarea.value);
      }
      break;
    case 'sinh':
      if (gradus.checked === true) {
        textarea.value = Math.sinh((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = Math.sinh(textarea.value);
      }
      break;
    case 'cosh':
      if (gradus.checked === true) {
        textarea.value = Math.cosh((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = Math.cosh(textarea.value);
      }
      break;
    case 'tanh':
      if (gradus.checked === true) {
        textarea.value = Math.tanh((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = Math.tanh(textarea.value);
      }
      break;
    case 'ctg':
      if (gradus.checked === true) {
        textarea.value = 1 / Math.tan((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = 1 / Math.tan(textarea.value);
      }
      break;
    case 'sec':
      if (gradus.checked === true) {
        textarea.value = 1 / Math.cos((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = 1 / Math.cos(textarea.value);
      }
      break;
    case 'csc':
      if (gradus.checked === true) {
        textarea.value = 1 / Math.sin((textarea.value * Math.PI) / 180);
      } else if (radian.checked === true) {
        textarea.value = 1 / Math.sin(textarea.value);
      }
      break;
    case '√': {
      textarea.value = Math.sqrt(textarea.value);
      break;
    }
    case 'ln': {
      textarea.value = Math.log(textarea.value);
      break;
    }
    default:
      alert('Please, enter data');
      break;
  }
  li.innerHTML += textarea.value;
  historyTextList.appendChild(li);
}

complexFunction.forEach(button => {
  button.addEventListener('click', findArg);
});

equally.addEventListener('click', computation);
btnDelete.addEventListener('click', clearInput);
btnBack.addEventListener('click', goBack);
hisory.appendChild(historyTextList);

document.addEventListener('keydown', event => {
  let li = document.createElement('li');
  if (event.key.match(/=|Enter/)) {
    event.preventDefault();
    li.innerHTML += textarea.value + ' = ';
    textarea.value = eval(textarea.value);
    li.innerHTML += textarea.value;
    historyTextList.appendChild(li);
  }
});

historyTextList.addEventListener('click', e => {
  textarea.value = e.target.textContent.split('=')[1];
});
