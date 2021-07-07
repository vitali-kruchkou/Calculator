let gradus = document.querySelector('#gradus');
let textarea = document.querySelector('#input-textarea');
let radian = document.querySelector('#radian');
let complexFunction = document.querySelectorAll('#complex-function');
let historyBlock = document.querySelector('#historyContainer');
let historyTextList = document.querySelector('#historyList');

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

  historyBlock.appendChild(historyTextList);