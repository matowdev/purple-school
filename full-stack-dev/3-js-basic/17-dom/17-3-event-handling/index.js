'use strict';

// const button = document.querySelector('.button');
//
// button.addEventListener('click', () => {
//   const panelMessage = document.querySelector('.panel');
//   const input = document.querySelector('.input');
//   const inputValue = input.value;
//
//   if (!inputValue) {
//     return;
//   }
//
//   panelMessage.textContent = inputValue;
//   input.value = '';
// });

// ?? теперь, то же самое только через func и html атрибут onclick=""
function changeMessageByClick() {
  const panelMessage = document.querySelector('.panel');
  const input = document.querySelector('.input');
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  panelMessage.textContent = inputValue;
  input.value = '';
}
