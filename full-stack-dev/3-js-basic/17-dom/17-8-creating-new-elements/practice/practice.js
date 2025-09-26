'use strict';

// Задание 1:
// Напиши код, который:
// 1. Создаёт новый элемент <div>.
// 2. Добавляет в него текст: "Это мой первый динамически созданный элемент!".
// 3. Присваивает этому <div> CSS-класс с именем notification.
// 4. Добавляет получившийся элемент в конец тега <body>.
// Можешь считать, что у тебя есть пустой HTML-файл, в котором есть только <body></body>.

const body = document.querySelector('body');
const newDiv = document.createElement('div');

newDiv.classList.add('notification');
newDiv.textContent = 'Это мой первый динамически созданный элемент!';

body.prepend(newDiv); // МЕТОД prepend() т.е. в начало элемента

// Задание 2:
// Дано:
// - HTML-код: <div id="root"></div>
// - Массив JavaScript: const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
// Задача:
// Напиши код, который:
// 1. Находит на странице <div id="root">.
// 2. Создает элемент <ul>.
// 3. Проходит по массиву skills в цикле. Для каждого элемента массива создает <li>, в который помещает название технологии.
// 4. Добавляет все созданные <li> внутрь <ul>.
// 5. Добавляет готовый <ul> со всеми элементами внутрь <div id="root">.
// В результате на странице должен появиться маркированный список твоих навыков.

const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

const root = document.getElementById('root');
const list = document.createElement('ul');

list.classList.add('root__list');

for (const skill of skills) {
  const item = document.createElement('li');
  item.classList.add('root__item');
  item.textContent = skill;

  list.append(item);
}

root.append(list);

// Задание 3:
// Нужно создать информационное сообщение и добавить его на страницу. Сообщение состоит из иконки (просто текст) и самого текста, обернутого в <span>.
// Напиши код, который:
// 1. Создает родительский элемент <div>.
// 2. Создает дочерний элемент <span> с текстом "Действие выполнено.".
// 3. За один вызов метода добавляет внутрь <div> сначала иконку в виде строки '✅ ' (обрати внимание на пробел после галочки), а сразу за ней — созданный <span>.
// 4. Добавляет готовый <div> в <body>.
// Намёк: Подумай, какой метод позволит тебе добавить и строку, и HTML-элемент за один вызов.

const wrap = document.createElement('div');
const span = document.createElement('span');

wrap.classList.add('info', 'info-wrap');
span.classList.add('info__span');

span.textContent = 'Действие выполнено.';

wrap.append('✅ ', span);
body.append(wrap);
