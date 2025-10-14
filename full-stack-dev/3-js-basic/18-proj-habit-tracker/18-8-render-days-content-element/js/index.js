'use strict';

let habbits = [];
const HABBITS_KEY = 'HABBITS';

// app
const app = {
  'menu-list': document.getElementById('sidebar-list'),
  header: {
    title: document.getElementById('header-title'),
    progressPercent: document.getElementById('progress-percent'),
    progressValue: document.getElementById('progress-value'),
  },
};

// ** utility **
function loadData() {
  const habbitsStr = localStorage.getItem(HABBITS_KEY);
  const habbitsArr = JSON.parse(habbitsStr);

  if (Array.isArray(habbitsArr)) {
    habbits = habbitsArr;
  }
}

function saveData() {
  localStorage.setItem(HABBITS_KEY, JSON.stringify(habbits));
}

// ** render **
function rerenderMenu(activeHabbit) {
  if (!activeHabbit) {
    return;
  }

  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`); // определение/флаг.. есть уже элемент (создавался) или нет

    if (!existed) {
      // если НЕТ.. создание li/элемента sidebar/меню.. привычки (согласно data)
      const habbitItem = document.createElement('li');
      habbitItem.classList.add('sidebar__nav-item');

      const habbitBtn = document.createElement('button');
      habbitBtn.classList.add('sidebar__nav-btn');
      habbitBtn.setAttribute('type', 'button');
      habbitBtn.setAttribute('aria-label', 'Выбрать привычку');
      habbitBtn.setAttribute('title', habbit.title);
      habbitBtn.setAttribute('menu-habbit-id', habbit.id);
      habbitBtn.innerHTML = `<img class="sidebar__nav-icon" src="./images/${habbit.icon}.svg" width="${habbit.width}" height="${habbit.height}" alt="Иконка: ${habbit.name}">`;

      habbitBtn.addEventListener('click', () => rerender(habbit.id)); // тонкий момент.. по сути "замыкание" для каждой кнопки/её ID.. потом передача именно его/себя в rerender()

      // проверка на активность (при создании)
      if (activeHabbit.id === habbit.id) {
        habbitBtn.classList.add('sidebar__nav-btn_active');
      }

      habbitItem.append(habbitBtn);
      app['menu-list'].append(habbitItem);
    } else {
      // если ЕСТЬ.. только обновление "активного" класса
      if (activeHabbit.id === habbit.id) {
        existed.classList.add('sidebar__nav-btn_active');
      } else {
        existed.classList.remove('sidebar__nav-btn_active');
      }
    }
  }
}

function rerenderHeaderContentEl(activeHabbit) {
  if (!activeHabbit) {
    return;
  }

  app.header.title.textContent = activeHabbit.title; // добавление/обновление заголовка

  // подсчёт прогресса/выполнения (согласно "уже" отмеченных дней и "ранее" поставленной цели/дней)
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : (activeHabbit.days.length / activeHabbit.target) * 100;

  app.header.progressPercent.textContent = `${progress.toFixed(0)}%`;
  app.header.progressValue.setAttribute(
    'style',
    `width: ${progress.toFixed(0)}%`
  );
}

// поиск/определение "активной" привычки.. запуск отрисовок элементов/переключение активностей
function rerender(activeHabbitId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHeaderContentEl(activeHabbit);
}

// init
(() => {
  // загрузка данных.. по сути автоматическая/сразу (соответственно через IIFE)
  loadData();

  // запуск работы с sidebar/меню..
  if (habbits.length > 0) {
    rerender(habbits[0].id); // пока.. принудительно передаёт
  }
})();
