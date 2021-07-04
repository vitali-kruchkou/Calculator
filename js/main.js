let groups = document.querySelectorAll(".button-block");
let textarea = document.querySelector("#input-textarea");
let operator = document.querySelectorAll(".button-operator");
let equally = document.querySelector(".button-operator-equally");
let btnDelete = document.querySelector(".button-operator-delete");
let btnBack = document.querySelector(".button-operator-back");
let sin = document.querySelector(".button-operator-sin");
let cos = document.querySelector(".button-operator-cos");
let tg = document.querySelector(".button-operator-tg");
let ctg = document.querySelector(".button-operator-ctg");
let gradus = document.querySelector("#gradus");
let radian = document.querySelector("#radian");
let radic = document.querySelector(".button-operator-radic");

groups.forEach((group) => {
  group.addEventListener("click", () => {
    // let chooseNumber = e.target.innerHTML;
    console.log(group.textContent);
    let chooseNumber = group.textContent;
    textarea.value += chooseNumber;
    // switch(e.target.innerHTML){
    //     case '=':
    //         // textarea.innerHTML+= eval(textarea.innerHTML);
    //         console.log(textarea.innerHTML);
    //         console.log(eval(textarea.innerHTML));
    //         break;
    //     // default: textarea.innerHTML = '0';
    // }
  });
});

equally.addEventListener("click", () => {
  textarea.value = eval(textarea.value);
});

btnDelete.addEventListener("click", () => {
  textarea.value = "";
});

btnBack.addEventListener("click", () => {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
});

sin.addEventListener("click", () => {
  if (gradus.checked === true) {
    textarea.value = Math.sin((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = Math.sin(textarea.value);
  }
});

cos.addEventListener("click", () => {
  if (gradus.checked === true) {
    textarea.value = Math.cos((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = Math.cos(textarea.value);
  }
});

tg.addEventListener("click", () => {
  if (gradus.checked === true) {
    textarea.value = Math.tan((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = Math.tan(textarea.value);
  }
});

ctg.addEventListener("click", () => {
  if (gradus.checked === true) {
    textarea.value = 1 / Math.tan((textarea.value * Math.PI) / 180);
  } else if (radian.checked === true) {
    textarea.value = 1 / Math.tan(textarea.value);
  }
});

radic.addEventListener("click", () => {
  textarea.value = Math.sqrt(textarea.value);
});
