'use strict';

// Задание 1:
// Нужно создать простой счётчик, значение которого хранится прямо в HTML.
/*
<div>
  <button id="decreaseBtn">-</button>
  <span id="counter" data-value="0">0</span>
  <button id="increaseBtn">+</button>
</div>
*/
// Твоя задача — написать JavaScript код, который:
// 1. Находит все три элемента: две кнопки и span.
// 2. При клике на кнопку + (increaseBtn):
// - Считывает текущее значение из data-value у span.
// - Увеличивает его на единицу.
// - Записывает новое значение обратно в data-value и в текстовое содержимое span.
// При клике на кнопку - (decreaseBtn) делает то же самое, но уменьшает значение на единицу.

const counterContainer = document.querySelector('.counter-container');
const counter = document.querySelector('#counter');
const decreaseBtn = document.querySelector('#decreaseBtn');
const increaseBtn = document.querySelector('#increaseBtn');

function updateCounter(event) {
  const target = event.target;
  let countValue = Number(counter.dataset.value);

  if (target.tagName === 'BUTTON') {
    if (target.id === 'decreaseBtn') {
      countValue--;
      counter.dataset.value = countValue;
      counter.textContent = countValue;
    } else if (target.id === 'increaseBtn') {
      countValue++;
      counter.dataset.value = countValue;
      counter.textContent = countValue;
    }
  }
}

counterContainer.addEventListener('click', updateCounter);

// ?? альтернативное решение (более прямолинейное)
increaseBtn.addEventListener('click', () => {
  let currentValue = Number(counter.dataset.value);
  currentValue++;
  counter.dataset.value = currentValue;
  counter.textContent = currentValue;
});

decreaseBtn.addEventListener('click', () => {
  let currentValue = Number(counter.dataset.value);
  currentValue--;
  counter.dataset.value = currentValue;
  counter.textContent = currentValue;
});

// Задание 2:
// Нужно использовать data- атрибут для управления состоянием элемента.
/*
<div>
  <button id="toggleBtn">Показать</button>
  <div id="spoiler" data-state="hidden" style="display: none;">
    Этот текст изначально скрыт.
  </div>
</div>
*/
// Твоя задача — написать JavaScript код, который:
// 1. При клике на кнопку toggleBtn проверяет значение атрибута data-state у элемента spoiler.
// 2. Если значение равно "hidden":
// - Меняет его на "visible".
// - Показывает элемент spoiler (например, через spoiler.style.display = 'block').
// - Меняет текст на кнопке на "Скрыть".
// 3. Если значение равно "visible":
// - Меняет его на "hidden".
// - Скрывает элемент spoiler (через spoiler.style.display = 'none').
// - Меняет текст на кнопке обратно на "Показать".

const toggleBtn = document.querySelector('#toggleBtn');
const spoiler = document.querySelector('#spoiler');

function changeVisible() {
  let state = spoiler.dataset.state;

  if (state === 'hidden') {
    spoiler.dataset.state = 'visible';
    spoiler.style.display = 'block';
    toggleBtn.textContent = 'Скрыть';
  } else if (state === 'visible') {
    spoiler.dataset.state = 'hidden';
    spoiler.style.display = 'none';
    toggleBtn.textContent = 'Показать';
  }
}

toggleBtn.addEventListener('click', changeVisible);

// ?? альтернативное решение (DRY)
toggleBtn.addEventListener('click', () => {
  // Проверяем текущее состояние
  const isHidden = spoiler.dataset.state === 'hidden';

  // Обновляем состояние и стили
  spoiler.dataset.state = isHidden ? 'visible' : 'hidden';
  spoiler.style.display = isHidden ? 'block' : 'none';

  // Обновляем текст кнопки
  toggleBtn.textContent = isHidden ? 'Скрыть' : 'Показать';
});

// Задание 3:
// Сделать интерактивный фильтр для списка, используя data- атрибуты.
/*
<div>
    <h4>Категории:</h4>
    <div id="filter-controls">
        <button data-filter="all">Все</button>
        <button data-filter="fruit">Фрукты</button>
        <button data-filter="vegetable">Овощи</button>
    </div>

    <h4>Список:</h4>
    <ul id="item-list">
        <li data-category="fruit">Апельсин</li>
        <li data-category="vegetable">Картофель</li>
        <li data-category="fruit">Банан</li>
        <li data-category="vegetable">Помидор</li>
        <li data-category="fruit">Киви</li>
    </ul>
</div>
*/
// Твоя задача — написать JavaScript код, который:
// 1. Находит все кнопки-фильтры и все элементы списка <li>.
// 2. Добавляет один обработчик событий (лучше всего на родительский div filter-controls, используя делегирование, как ты делал в первой задаче) на клики по кнопкам.
// 3. При клике на кнопку:
// - Получает значение её атрибута data-filter (например, "fruit").
// - Проходит по всем элементам списка <li>.
// - Для каждого элемента <li> сравнивает его data-category со значением из data-filter кнопки.
// - Если data-filter на кнопке равен "all" ИЛИ data-category элемента совпадает с data-filter кнопки, элемент <li> должен быть виден.
// - В противном случае элемент <li> должен быть скрыт.

const filterControls = document.querySelector('#filter-controls');
const allItems = document.querySelectorAll('li[data-category]');

function interactiveFilter(event) {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    const filter = target.dataset.filter;

    allItems.forEach((item) => {
      const category = item.dataset.category;

      if (filter === 'all' || category === filter) {
        item.style.display = 'list-item'; // именно list-item, а не block (т.к. у списков другое отображение.. а то ul "точки" пропадут)
      } else {
        item.style.display = 'none'; // а здесь, none.. подходит, стандартно
      }
    });
  }
}

filterControls.addEventListener('click', interactiveFilter);
