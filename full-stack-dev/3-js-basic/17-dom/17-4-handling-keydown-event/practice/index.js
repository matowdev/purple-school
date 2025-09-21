'use strict';

// Задание 1:
// У тебя есть простое текстовое поле. Напиши HTML и JavaScript код, который будет выводить в консоль сообщение 'Привет!' каждый раз, когда пользователь нажимает клавишу Пробел, находясь в этом поле.
// <input type="text" id="myInput" placeholder="Нажми пробел здесь...">

const input = document.querySelector('#myInput');

function sayHi(event) {
  if (event.code === 'Space') {
    console.log('Привет!');
  }
}

input.addEventListener('keydown', sayHi);

// Задание 2:
// У тебя есть поле для ввода и пустой список под ним.
// Задача: Напиши скрипт, который по нажатию на Enter в поле ввода будет:
// 1. Создавать новый пункт списка (<li>) с текстом из поля ввода.
// 2. Добавлять этот новый пункт в список (<ul>).
// 3. Очищать поле ввода, чтобы можно было вводить следующую задачу.
// 4. И, конечно же, предотвращать перезагрузку страницы.
// <form>
//  <input type="text" id="itemInput" placeholder="Новый пункт и нажми Enter">
// </form>
// <ul id="itemList"></ul>

const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemList');

function addItem(event) {
  if (event.code === 'Enter') {
    const inputValue = itemInput.value;

    if (!inputValue) {
      return;
    }

    const element = document.createElement('li');
    element.textContent = inputValue;
    itemList.append(element);

    itemInput.value = '';
    event.preventDefault();
  }
}

itemInput.addEventListener('keydown', addItem);

// Задание 3:
// Представь, что на твоём сайте есть "тёмная тема". Нужно сделать её переключение с помощью "горячей клавиши".
// Задача: Напиши скрипт, который будет переключать (то есть добавлять, если нет, и убирать, если есть) CSS-класс dark-mode на элементе <body> по нажатию комбинации клавиш Alt + M.
// Подсказки:
// 1. Чтобы комбинация работала в любом месте страницы, а не только в поле ввода, "слушателя" событий нужно вешать на весь document.
// 2. Для переключения класса есть очень удобный метод: element.classList.toggle('имя-класса').
// У тебя уже есть весь document.

const body = document.querySelector('#body');

function changeTheme(event) {
  if (event.altKey && event.code === 'KeyM') {
    body.classList.toggle('dark-theme');
  }
}

document.addEventListener('keydown', changeTheme);
