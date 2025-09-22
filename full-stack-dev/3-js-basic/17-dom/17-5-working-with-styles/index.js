'use strict';

const panelMessage = document.querySelector('.panel');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const notificationMessage = document.querySelector('.notification');
let notificationTimer; // переменная для хранения ID таймера

// DRY
function changeMessage() {
  const inputValue = input.value;

  if (!inputValue) {
    return;
  }

  panelMessage.textContent = inputValue;
  input.value = '';
  notificationMessage.classList.remove('notification_hide');

  // очищаем предыдущий таймер
  clearTimeout(notificationTimer);

  // устанавливаем новый таймер (заносим в переменную ID таймера)
  notificationTimer = setTimeout(() => {
    notificationMessage.classList.add('notification_hide');
  }, 1000);
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
