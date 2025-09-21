'use strict';

const panelMessage = document.querySelector('.panel');
const input = document.querySelector('.input');
const button = document.querySelector('.button');

// DRY
function changeMessage() {
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  panelMessage.textContent = inputValue;
  input.value = '';
}

// изменения сообщения через "click" по кнопке
function changeMessageByClick() {
  changeMessage();
}

button.addEventListener('click', changeMessageByClick);

// изменения сообщения через "keydown/Enter" в поле input
function changeMessageByKeydown(event) {
  // без объекта event не обойтись, т.к. в нём определяем code кнопки.. "Enter"
  if (event.code === 'Enter') {
    changeMessage();
  }
}

input.addEventListener('keydown', changeMessageByKeydown);
