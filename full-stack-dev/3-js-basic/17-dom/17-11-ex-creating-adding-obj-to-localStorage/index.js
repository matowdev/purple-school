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

  const messageObj = {
    text: inputValue,
  };

  // добавление в localStorage
  localStorage.setItem('Message', JSON.stringify(messageObj));

  // очищение предыдущего таймер
  clearTimeout(notificationTimer);

  // установка нового таймера (занесение в переменную для ID таймера)
  notificationTimer = setTimeout(() => {
    notificationMessage.classList.add('notification_hide');
  }, 1000);
}

// изменение сообщения через "click" по кнопке
function changeMessageByClick() {
  changeMessage();
}

button.addEventListener('click', changeMessageByClick);

// изменение сообщения через "keydown/Enter" в поле input
function changeMessageByKeydown(event) {
  // без объекта event не обойтись, т.к. в нём определяем code кнопки.. "Enter"
  if (event.code === 'Enter') {
    changeMessage();
  }
}

input.addEventListener('keydown', changeMessageByKeydown);

// создание/добавление "нового" Html элемента/узла
const newPanel = document.querySelector('.new-panel');
const message = document.createElement('p');

message.classList.add('panel-message');
message.setAttribute('id', 'panel-message');
message.textContent = 'Lets do it!';

newPanel.append(message);
