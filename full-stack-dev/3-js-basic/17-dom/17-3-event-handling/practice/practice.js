'use strict';

// Задание 1:
// Перед тобой простое текстовое поле и счётчик. Напиши JavaScript-код, который будет в реальном времени считать количество символов, введённых в <textarea>, и отображать это число внутри <span>.
// <div>
//  <label for="feedback">Ваш отзыв:</label>
//  <textarea id="feedback" maxlength="200"></textarea>
//  <p>Введено символов: <span id="charCounter">0</span></p>
// </div>
// Подсказка: Для отслеживания ввода текста лучше всего подходит событие 'input', оно срабатывает при любом изменении в поле.

const feedback = document.querySelector('#feedback');
const span = document.querySelector('#charCounter');

function charCount(event) {
  const feedbackLength = event.target.value.length; // в реальном времени получение длинны введённых символов
  span.textContent = feedbackLength;
}

// feedback.addEventListener('input', (event) => charCount(event)); // вызов функции с передачей события
feedback.addEventListener('input', charCount); // можно и без стрелочной.. т.к. данный метод саи/автоматически вызывает переданную в него функцию и туда/в неё кулуарно передаёт событие event.. МАГИЯ!

// Задание 2:
// Перед тобой поле для ввода пароля и текстовая подсказка. Напиши код, который будет менять цвет этой подсказки в зависимости от длины пароля:
// - Если в пароле меньше 8 символов, текст подсказки должен стать красным.
// - Если в пароле 8 или больше символов, текст подсказки должен стать зелёным.
// Подсказка: Ты можешь менять CSS-свойства элемента напрямую из JavaScript через его свойство style. Например: element.style.color = 'red';.
// <div>
//  <label for="password">Пароль:</label>
//  <input type="password" id="passwordInput">
//  <p id="passwordHint">Пароль должен содержать не менее 8 символов.</p>
// </div>

const passwordInput = document.querySelector('#passwordInput');
const hint = document.querySelector('#passwordHint');

function checkPassword(event) {
  const passwordLength = event.target.value.length;

  if (passwordLength === 0) {
    hint.style.color = 'black';
  } else if (passwordLength < 8) {
    hint.style.color = 'red';
  } else {
    hint.style.color = 'green';
  }
}

passwordInput.addEventListener('input', checkPassword);

// Задание 3:
// Это задача на проверку самого полезного "хака" — делегирования событий. Перед тобой список дел. Тебе нужно написать код, который позволит "вычёркивать" дела из списка по клику.
// Главное условие: Нужно повесить только один обработчик событий на весь список <ul>.
// Требования:
// - При клике на любой элемент <li> ему должен добавляться или убираться CSS-класс .done.
// - Слушатель событий должен быть только один, и он должен быть на элементе <ul id="todoList">.
// Подсказка: Используй event.target, чтобы определить, на какой именно <li> кликнули. А для удобного управления классами есть прекрасный метод: element.classList.toggle('className'). Он добавляет класс, если его нет, и убирает, если он есть.
// <ul id="todoList">
//  <li>Повторить теорию по событиям</li>
//  <li>Решить практическую задачу</li>
//  <li>Выпить кофе</li>
//  <li>Похвалить себя за хорошую работу</li>
// </ul>

const todoList = document.querySelector('#todoList');

function strikeTask(event) {
  const target = event.target;

  if (target.tagName === 'LI') {
    target.classList.toggle('done');
  }
}

todoList.addEventListener('click', strikeTask);
