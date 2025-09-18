'use strict';

// Задание 1:
// Представь, что у тебя есть вот такая HTML-структура для карточки профиля:
// <div id="profile-card">
//  <h2>Имя пользователя: <span id="user-name">...</span></h2>
//  <p>Статус: <span id="user-status">...</span></p>
// </div>
// А в твоем JavaScript-коде есть объект с данными, которые пришли, скажем, с сервера:
// const userData = {
//   name: 'Елена',
//   status: 'в сети'
// };
// Твоя задача: Напиши JS-код, который:
// 1. Найден нужные <span> элементы по их id.
// 2. Вставит в них имя и статус из объекта userData.
// В результате на странице вместо "..." должны появиться "Елена" и "в сети".

const userData = {
  name: 'Елена',
  status: 'в сети',
};

const userName = document.querySelector('#user-name');
const userStatus = document.querySelector('#user-status');

userName.textContent = userData.name;
userStatus.textContent = userData.status;

/*
Имя пользователя: Елена
Статус: в сети
*/

// Задание 2:
// На странице есть форма для ввода пароля. Изначально в поле уже есть какое-то значение.
// <div>
//  <label for="password-input">Пароль:</label>
//  <input id="password-input" type="text" value="qwerty">
//  <p id="validation-message"></p>
//</div>
// Твоя задача: Написать JS-код, который проверяет пароль при загрузке страницы.
// 1. Получи элемент поля ввода и элемент параграфа для сообщения.
// 2. Считай значение (текст) из поля ввода.
// 3. Проверь его длину.
// 4. Если длина пароля меньше 8 символов, то в параграф #validation-message нужно вывести сообщение "Пароль слишком короткий" и покрасить этот текст в красный цвет.
// 5. В противном случае — вывести "Надежный пароль" зелёного цвета.
// Подсказка: Чтобы изменить цвет текста элемента, можно использовать его свойство .style.color. Например: element.style.color = 'red';.

function checkPassword() {
  const passwordInput = document.querySelector('#password-input');
  const validMessage = document.querySelector('#validation-message');
  const inputValue = passwordInput.value;

  if (!inputValue) {
    return false;
  }

  if (inputValue.length < 8) {
    validMessage.textContent = 'Пароль слишком короткий';
    validMessage.style.color = 'red';
    return false;
  } else {
    validMessage.textContent = 'Надежный пароль';
    validMessage.style.color = 'green';
    return true;
  }
}

checkPassword(); // qwerty - Пароль слишком короткий

// Задание 3:
// У тебя есть список элементов на странице. Некоторые из них помечены как "новые" с помощью специального класса.
// <ul id="item-list">
//  <li>Молоко</li>
//  <li class="new-item">Хлеб</li>
//  <li>Сыр</li>
//  <li class="new-item">Сок</li>
// </ul>
// Твоя задача: Написать JS-код, который "обработает" все новые элементы.
// 1. Найди все элементы с классом new-item.
// 2. Используя цикл, перебери найденные элементы.
// 3. Для каждого из них сделай две вещи:
// - Добавь в конец их текста пометку "(новинка!)".
// - Сделай их текст жирным.
// Подсказка: Чтобы сделать текст жирным, можно использовать свойство .style.fontWeight = 'bold';. Чтобы добавить текст в конец, можно использовать конструкцию element.textContent = element.textContent + ' какой-то текст'; или более короткую element.textContent += ' какой-то текст';.

function getNewItems() {
  const itemsList = document.querySelectorAll('li');

  if (itemsList.length < 1) {
    return false;
  }

  itemsList.forEach((item) => {
    if (item.classList.contains('new-item')) {
      item.style.fontWeight = 'bold';
      item.textContent += ' (новинка!)';
    }
  });
}

// getNewItems();

// ?? альтернативное решение
// Сразу находим только то, что нам нужно
const newItems = document.querySelectorAll('.new-item');

// Теперь не нужна проверка if, ведь в newItems УЖЕ лежат только нужные элементы
newItems.forEach((item) => {
  item.style.fontWeight = 'bold';
  item.textContent += ' (новинка!)';
});
