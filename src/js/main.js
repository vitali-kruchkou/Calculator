let groups = document.querySelectorAll('#added ');
let textarea = document.querySelector('#input-textarea');
let btnDelete = document.querySelector('#button-operator-delete');
let btnBack = document.querySelector('#button-operator-back');
let historyBlock = document.querySelector('#historyContainer');
let historyTextList = document.querySelector('#historyContainer');

groups.forEach(group => {
  group.addEventListener('click', () => {
    let chooseNumber = group.textContent;
    textarea.value += chooseNumber;
  });
});

function clearInput() {
  textarea.value = '';
}

function goBack() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

btnDelete.addEventListener('click', clearInput);
btnBack.addEventListener('click', goBack);

historyTextList.addEventListener('click', e => {
  textarea.value = e.target.textContent.split('=')[1];
});

