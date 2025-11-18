'use strict';

// Задание 1:
// Представь, что мы делаем простой "To-Do" лист.
// Напиши одну функцию createTodoItem(text). Эта функция должна:
// 1. Принимать один аргумент — text (строка, текст задачи).
// 2. Создавать новый DOM-элемент <li>.
// 3. Внутрь <li> помещать:
// - Сам text (безопасным способом).
// - Элемент <button> с текстом "Удалить".
// 4. При клике на эту кнопку "Удалить" — весь элемент <li> должен удаляться из DOM.
// 5. Функция должна возвращать (return) созданный и настроенный элемент <li>.

const todoList = document.getElementById('todo-list');

function createTodoItem(text) {
  if (!text || typeof text !== 'string') {
    return;
  }

  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.setAttribute('id', 'todo-item');
  todoItem.textContent = text.trim();

  const todoBtn = document.createElement('button');
  todoBtn.classList.add('todo-btn');
  todoBtn.setAttribute('id', 'todo-btn');
  todoBtn.textContent = 'Удалить';

  todoItem.append(todoBtn);

  todoBtn.addEventListener('click', () => {
    todoItem.remove();
  });

  return todoItem;
}

todoList.append(createTodoItem('Погулять с собакой')); // создание элемента и сразу добавление

// Задание 2:
// Я — твой тимлид. Я вижу, что другой 'джун' написал код для интерактивного списка продуктов. Код работает, но у меня к нему есть претензии.
// Вот его Html:
/*
<ul id="product-list">
  <li onclick="selectProduct(this)">Молоко</li>
  <li onclick="selectProduct(this)">Хлеб</li>
  <li onclick="selectProduct(this)">Масло</li>
  <li onclick="selectProduct(this)">Сыр</li>
</ul>
*/
// Вот его JS:
/* function selectProduct(element) {
  // Сначала убираем 'selected' у всех
  const allItems = document.querySelectorAll('#product-list li');
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove('selected');
  }

  // Добавляем 'selected' тому, по которому кликнули
  element.classList.add('selected');
}*/
// Твоя задача — проанализировать этот код:
// 1. Какие концептуальные проблемы ты видишь в HTML?.
// 2. Какие проблемы с производительностью создает этот подход (и в JS, и в HTML), если в списке будет 1000 элементов?
// 3. Как бы ты полностью переписал этот код (и HTML, и JS), используя паттерн делегирования событий, чтобы он был чистым и эффективным?

const productList = document.getElementById('product-list');
const productItems = document.querySelectorAll('.product-item');

function selectProduct(event) {
  const target = event.target;

  // Шаг 1: Убедимся, что кликнули по LI
  if (target.tagName !== 'LI') {
    return;
  }

  // Шаг 2: (Опционально) Если кликнули по уже выбранному, ничего не делаем
  if (target.classList.contains('selected')) {
    return;
  }

  // Шаг 3: Находим *текущий* выбранный элемент (если он есть)
  // Это очень быстрый поиск, который ищет только *один* элемент
  const currentSelected = productList.querySelector('.selected');

  // Шаг 4: Снимаем с него класс
  if (currentSelected) {
    currentSelected.classList.remove('selected');
  }

  // Шаг 5: Добавляем класс цели
  target.classList.add('selected');
}

productList.addEventListener('click', selectProduct);

// ? альтернативное решение для multi-выбора (с возможность отметил/убрал зачёркивание)
// function selectProducts(event) {
//   const target = event.target;
//
//   if (target.tagName !== 'LI') {
//     return;
//   }
//
//   target.classList.toggle('selected');
// }
//
// productList.addEventListener('click', selectProducts);

// Задание 3:
// Задача: Напиши функцию getPositiveReviews(reviewsArray), которая в одну цепочку (chaining) делает следующее:
// 1. Отфильтровывает "плохие" отзывы: оставляет только те, у которых rating >= 4.
// 2. Отфильтровывает "пустые" отзывы: оставляет только те, у которых text — это не null и не пустая строка (после trim()'а).
// 3. Преобразует (маппирует) оставшиеся объекты в строки вида: ID 1: Отличный товар!
// 4 .Функция должна вернуть новый массив этих строк.
// Ожидаемый результат для reviews: [ "ID 1: Отличный товар!", "ID 3: Неплохо, но могло быть лучше.", "ID 5: Просто супер" ]
/*
const reviews = [
  { id: 1, text: 'Отличный товар!', rating: 5 },
  { id: 2, text: '  ', rating: 3 }, // Пустой текст
  { id: 3, text: 'Неплохо, но могло быть лучше.', rating: 4 },
  { id: 4, text: 'Ужасно.', rating: 1 },
  { id: 5, text: 'Просто супер', rating: 5 },
  { id: 6, text: null, rating: 2 }, // null вместо текста
];
*/

const reviews = [
  { id: 1, text: 'Отличный товар!', rating: 5 },
  { id: 2, text: '  ', rating: 3 }, // Пустой текст
  { id: 3, text: 'Неплохо, но могло быть лучше.', rating: 4 },
  { id: 4, text: 'Ужасно.', rating: 1 },
  { id: 5, text: 'Просто супер', rating: 5 },
  { id: 6, text: null, rating: 2 }, // null вместо текста
];

function getPositiveReviews(reviewsArray = []) {
  if (!reviewsArray) {
    return [];
  }

  return reviewsArray
    .filter((review) => review.rating >= 4)
    .filter((review) => review.text !== null && review.text.trim() !== '')
    .map((review) => `ID ${review.id}: ${review.text}`);
}

console.log(getPositiveReviews(reviews)); //  ['ID 1: Отличный товар!', 'ID 3: Неплохо, но могло быть лучше.', 'ID 5: Просто супер']
