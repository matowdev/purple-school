'use strict';

// Задание 1:
// Сделать так, чтобы сайт "запоминал" выбранную пользователем тёмную тему.
// Условия:
// - Представь, что у тебя есть готовый HTML и CSS. В CSS уже есть класс dark-theme, который при добавлении к элементу <body> включает тёмное оформление.
// - Тебе нужно написать JavaScript-код, который будет выполняться при каждой загрузке страницы.
// Задание:
// При загрузке страницы твой скрипт должен проверить, есть ли в localStorage значение по ключу 'theme'.
// Если по этому ключу лежит строка 'dark', скрипт должен найти <body> и добавить ему класс dark-theme.

localStorage.setItem('theme', 'dark');

// const body = document.querySelector('body');
const body = document.body; // а можно вот так.. сразу/напрямую

function checkPageTheme() {
  const theme = localStorage.getItem('theme');

  if (theme && theme === 'dark') {
    body.classList.add('dark-theme');
  }
}

checkPageTheme();

// Задание 2:
// Написать функцию, которая добавляет новую задачу в список дел и сохраняет весь обновлённый список в localStorage. Это основа любого to-do приложения.
// Задание:
// Напиши функцию с названием addTask, которая принимает один аргумент — текст новой задачи (taskText).
// Эта функция должна:
// 1. Получить из localStorage по ключу 'tasks' текущий список задач.
// 2. Важный момент: localStorage вернёт либо JSON-строку (если задачи уже есть), либо null (если это первая задача). Твой код должен правильно обработать оба случая. Если вернулся null, нужно считать, что изначально у нас пустой массив [].
// 3. Преобразовать полученную JSON-строку обратно в массив.
// 4. Добавить в конец этого массива новую задачу (taskText).
// 5. Преобразовать обновлённый массив снова в JSON-строку.
// 6. Сохранить эту строку обратно в localStorage по тому же ключу 'tasks'.

function addTask(taskText) {
  if (!taskText || typeof taskText !== 'string') {
    return;
  }

  const tasks = localStorage.getItem('tasks');

  if (tasks === null) {
    const todo = [];

    todo.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(todo));

    return todo;
  } else {
    const storageTodo = JSON.parse(tasks);

    if (!storageTodo.includes(taskText)) {
      storageTodo.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storageTodo));
    }

    return storageTodo;
  }
}

console.log(addTask('Погулять с собакой')); // ['Убрать в квартире']
console.log(addTask('Убрать в квартире')); // ['Убрать в квартире', 'Погулять с собакой']

// ?? альтернативное решение
function addNewTask(taskText) {
  if (!taskText || typeof taskText !== 'string') {
    return;
  }

  let currentTasks = JSON.parse(localStorage.getItem('tasks')) || []; // хитрый способ получить массив или пустой массив в одну строку

  if (!currentTasks.includes(taskText)) {
    currentTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
  }

  return currentTasks;
}

// Задание 3:
// Напиши функцию removeTask, которая принимает один аргумент — текст задачи, которую нужно удалить (taskText).
// Эта функция должна:
// 1. Получить массив задач из localStorage (не забывая про JSON.parse и проверку на null).
// 2. Если массив существует и он не пустой, удалить из него элемент, который в точности совпадает с taskText.
// 3. Сохранить изменённый массив (уже без удалённой задачи) обратно в localStorage.
// Подсказка: для удаления элемента из массива по значению очень удобно использовать метод .filter(). Он позволяет создать новый массив со всеми элементами, которые проходят проверку

function removeTask(taskText) {
  if (!taskText || typeof taskText !== 'string') {
    return;
  }

  const storageTodo = JSON.parse(localStorage.getItem('tasks'));

  if (storageTodo && storageTodo.length > 0) {
    const newTasks = storageTodo.filter((task) => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    return newTasks;
  }
}

console.log(removeTask('Убрать в квартире')); // ['Погулять с собакой']
