
/* 1-2 */
/* const modal = document.querySelector('#modal');
const openModal = document.querySelector('.btn-open')
const closeModal = document.querySelector('.close')
const body = document.querySelector('body');
const btnYes =  document.querySelector('.btn-yes');
const btnNo = document.querySelector('.btn-no');
const open = () => {
    modal.style.display = 'block'
}
openModal.addEventListener('click', open)

const close = () => {
    modal.style.display = 'none'
}
closeModal.addEventListener('click', close)


const clickBack = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

const yes = () => {
    body.style.backgroundColor = 'black'; 
};


const no = () => {
    modal.style.display = 'none';
};

btnYes.addEventListener('click', yes);
btnNo.addEventListener('click', no); */

/* 3 */
/* const body = document.querySelector('body');

const redBtn = document.querySelector('.btn-one');
const yellowBtn = document.querySelector('.btn-two');
const greenBtn = document.querySelector('.btn-three');

const madeRed = () => {
    body.style.backgroundColor = 'rgb(249, 110, 200)'; 
}
const madeYellow = () => {
    body.style.backgroundColor = 'rgb(255, 255, 105)'; 
}
const madeGreen = () => {
    body.style.backgroundColor = 'rgb(101, 144, 101)'; 
}

redBtn.addEventListener('click', madeRed);
yellowBtn.addEventListener('click', madeYellow);
greenBtn.addEventListener('click', madeGreen); */


/* 
4. Напиши скрипт який, при наборі тексту в інпут input#c(подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
 */ 

/* const textInput = document.getElementById('textInput');
const output = document.getElementById('name-output');
const nameLength = 8; 

textInput.addEventListener('input', () => {
    output.textContent = `Your name: ${textInput.value}`;
  });



  textInput.addEventListener('blur', () => {
    if (textInput.value.length < nameLength) {
        textInput.style.border = '1px solid red';
    } else {
        textInput.style.border = '1px solid green'; 
    }
}); */


/* 5. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту. */

const fontInput = document.getElementById('fontInput');
const fontOutput = document.getElementById('font-output');
const text = document.getElementById('text');

fontInput.addEventListener('input', () => {
    fontOutput.textContent = `Font size: ${ fontInput.value}px`;
    text.style.fontSize = `${fontInput.value}px`; 
  });

