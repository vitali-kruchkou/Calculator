let groups = document.querySelectorAll('.button-block');
let textarea = document.querySelector('#input-textarea');
let operator = document.querySelectorAll('.button-operator');
let equally = document.querySelector('.button-operator-equally');

groups.forEach((group) => {
    group.addEventListener('click',(e) => {
        // let chooseNumber = e.target.innerHTML;
        // console.log(group.textContent);
        let chooseNumber = group.textContent;
        textarea.innerHTML+= chooseNumber;
        // switch(e.target.innerHTML){
        //     case '=':
        //         // textarea.innerHTML+= eval(textarea.innerHTML);
        //         console.log(textarea.innerHTML);
        //         console.log(eval(textarea.innerHTML));
        //         break;
        //     // default: textarea.innerHTML = '0';
        // }
    })
})

equally.addEventListener('click',() => {
    textarea.innerHTML = eval(textarea.innerHTML);
})