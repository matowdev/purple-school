'use strict';

let habbits = [
  {
    id: 1,
    icon: 'gantel-icon',
    name: 'Гантеля',
    title: 'Отжимания',
    width: 23,
    height: 23,
    target: 10,
    days: [
      { comment: 'Первый подход всегда даётся тяжело..' },
      { comment: 'Второй день немного легче!' },
      { comment: 'Продолжаем!' },
    ],
  },
  {
    id: 2,
    icon: 'water-icon',
    name: 'Бутылка с водой',
    title: 'Водный баланс',
    width: 25,
    height: 25,
    target: 10,
    days: [{ comment: 'Очень хотелось!' }, { comment: 'Супер!' }],
  },
  {
    id: 3,
    icon: 'food-icon',
    name: 'Тарелка с едой',
    title: 'Правильное питание',
    width: 23,
    height: 24,
    target: 10,
    days: [{ comment: 'Круто!' }],
  },
];

let globalActiveHabbitId;
const HABBITS_KEY = 'HABBITS';

// app
const app = {
  'menu-list': document.getElementById('sidebar-list'),
  header: {
    title: document.getElementById('header-title'),
    progressPercent: document.getElementById('progress-percent'),
    progressValue: document.getElementById('progress-value'),
  },
  'habbit-days': {
    list: document.getElementById('habbit-days-list'),
  },
  'pop-up': {
    popupCover: document.getElementById('pop-up-cover'),
    popupElement: document.getElementById('pop-up'),
    hiddenIconInput: document.getElementById('hidden-input'),
  },
};

// ** utility **
function loadData() {
  const habbitsStr = localStorage.getItem(HABBITS_KEY);
  const habbitsArr = JSON.parse(habbitsStr);

  if (Array.isArray(habbitsArr) && habbitsArr.length) {
    habbits = habbitsArr;
  }
}

function saveData() {
  localStorage.setItem(HABBITS_KEY, JSON.stringify(habbits));
}

function togglePopup() {
  app['pop-up'].popupCover.classList.toggle('pop-up_cover-hidden');

  // очистка формы/полей, возврат к по default выбранной иконке
  if (!app['pop-up'].popupCover.classList.contains('pop-up_cover-hidden')) {
    const form = app['pop-up'].popupElement.querySelector('.pop-up__form');

    if (form) {
      form.reset(); // сброс полей/значений
      const titleInput = form['title-habbit'];
      const targetInput = form['target-habbit'];
      titleInput.classList.remove('input-error'); // снятие "красной" обводки
      targetInput.classList.remove('input-error'); // ...

      const defaultIcon = document.querySelector(
        '.pop-up__icons-btn[title="Жидкости"]'
      ); // фиксация default/иконки (по середине)

      if (defaultIcon) {
        defaultIcon.click(); // имитация её выбора (т.е. при новом открытии pop-up на неё перемещение, обновление скрытого инпута)
      }
    }
  }
}

// ** render **
function rerenderMenu(activeHabbit) {
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

function rerenderHabbitDaysContentEl(activeHabbit) {
  app['habbit-days'].list.innerHTML = ''; // предварительная очистка списка (всё будет создаваться заново)

  const docFragment = document.createDocumentFragment(); // создание промежуточного/специального контейнера (сразу в него.. потом уже в document)

  // создание/отрисовка уже существующих дней (согласно массива days)
  for (let i = 0; i < activeHabbit.days.length; i++) {
    const habbitDaysItem = document.createElement('li');
    habbitDaysItem.classList.add('habbit-days__item');

    habbitDaysItem.innerHTML = `<div class="habbit-days__label">День ${
      i + 1
    }</div>
      <div class="habbit-days__comment-wrap">
        <div class="habbit-days__comment">${activeHabbit.days[i].comment}</div>
        <button class="habbit-days__delete-btn" type="button" aria-label="Удалить день" title="Удалить день" onclick="deleteCommentDay(${i})">
          <img class="habbit-days__delete-icon" src="./images/trash-icon.svg" width="24" height="24"
            alt="Иконка: Мусорное ведро">
        </button>
      </div>`;

    docFragment.append(habbitDaysItem); // сразу добавление в "docFragment"
  }

  // "отдельное" создание/отрисовка крайнего дня с комментарием (пустым)
  const habbitDaysCommentItem = document.createElement('li');
  habbitDaysCommentItem.classList.add(
    'habbit-days__item',
    'habbit-days__item-comment'
  );

  // ..здесь добавление onsubmit="" логики для формы, и name для инпута (важный момент)
  habbitDaysCommentItem.innerHTML = `<div class="habbit-days__label">День ${
    activeHabbit.days.length + 1
  }</div>
  <form class="habbit-days__form" id="comment-form" onsubmit="addCommentDay(event)">
    <input class="habbit-days__form-input" id="comment-input" type="text" name="comment-day" placeholder="Комментарий" autocomplete="off">
    <button class="habbit-days__form-btn" type="submit">Готово</button>
  </form>`;

  docFragment.append(habbitDaysCommentItem);
  app['habbit-days'].list.append(docFragment); // и всё за раз на страницу/в DOM-дерево

  // организация прослушки инпута/комментария для корректировки класса ошибки/обводки
  const commentInput = document.getElementById('comment-input');
  commentInput.addEventListener('input', () => {
    if (commentInput.classList.contains('comment-error')) {
      commentInput.classList.remove('comment-error');
    }
  });
}

// поиск/определение "активной" привычки.. запуск отрисовок элементов/переключение активностей
function rerender(activeHabbitId) {
  globalActiveHabbitId = activeHabbitId; // глобальная фиксация ID (т.е. какая привычка в данный момент активна)
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);

  if (!activeHabbit) {
    return;
  }

  document.location.replace(document.location.pathname + '#' + activeHabbitId); // добавление хеш #id выбранной привычки к/в конец адресной строки/url

  rerenderMenu(activeHabbit);
  rerenderHeaderContentEl(activeHabbit);
  rerenderHabbitDaysContentEl(activeHabbit);
}

// ** business **
function addCommentDay(event) {
  event.preventDefault(); // отмена default отправки формы, перезагрузки страницы

  const targetForm = event.target; // фиксация формы
  const commentInput = targetForm['comment-day']; // фиксация инпута
  const formData = new FormData(targetForm); // создание объекта данных согласно искомой формы (получаемой через onsubmit/event.target логику)
  const dayComment = formData.get('comment-day'); // получение значения/комментария из инпута согласно его имени/name

  if (!dayComment) {
    commentInput.classList.add('comment-error');
  } else {
    commentInput.classList.remove('comment-error');

    habbits = habbits.map((habbit) => {
      if (habbit.id === globalActiveHabbitId) {
        return { ...habbit, days: habbit.days.concat({ comment: dayComment }) }; // создание новых объектов, на основе старых (с корректировкой поля/массива days)
      }
      return habbit;
    });

    commentInput.classList.remove('comment-error'); // итоговая очистка инпута от обводки/ошибки (нужное дублирование)
    targetForm['comment-day'].value = ''; // очистка поля инпута (после корректного "Готово")

    rerender(globalActiveHabbitId); // перерисовка всего/content элемента
    saveData(); // обновление/сохранение в localStorage
  }
}

function deleteCommentDay(index) {
  habbits = habbits.map((habbit) => {
    if (habbit.id === globalActiveHabbitId) {
      habbit.days.splice(index, 1);
      return { ...habbit, days: habbit.days }; // создание новых объектов, на основе старых (с корректировкой поля/массива days)
    }
    return habbit;
  });

  rerender(globalActiveHabbitId); // перерисовка всего/content элемента
  saveData(); // обновление/сохранение в localStorage
}

function setHabbitIcon(context, iconName, iconWidth, iconHeight, altText) {
  app['pop-up'].hiddenIconInput.value = iconName; // обновление value/названия иконки у "скрытого" инпута
  app['pop-up'].hiddenIconInput.dataset.width = iconWidth; // обновление width/иконки
  app['pop-up'].hiddenIconInput.dataset.height = iconHeight; // обновление height/иконки
  app['pop-up'].hiddenIconInput.dataset.alt = altText; // обновление alt/текста

  // определение активной иконки/кнопки (какая выделена)
  const activeIcon = document.querySelector(
    '.pop-up__icons-btn.pop-up__icons-btn_active'
  );
  activeIcon.classList.remove('pop-up__icons-btn_active'); // удаление "активности"

  context.classList.add('pop-up__icons-btn_active'); // добавление "активности" текущей кнопке, т.е. по котрой onclick
}

function addNewHabbit(event) {
  event.preventDefault(); // отмена default отправки формы, перезагрузки страницы

  const targetForm = event.target; // фиксация формы
  const titleInput = targetForm['title-habbit']; // фиксация названия привычки
  const targetInput = targetForm['target-habbit']; // фиксация количества дней

  // валидация полей формы через флаг (добавление соответствующей обводки)
  let formIsValid = true;

  if (!titleInput.value.trim()) {
    titleInput.classList.add('input-error');
    formIsValid = false;
  } else {
    titleInput.classList.remove('input-error');
  }

  if (!targetInput.value.trim()) {
    targetInput.classList.add('input-error');
    formIsValid = false;
  } else {
    targetInput.classList.remove('input-error');
  }

  if (!formIsValid) {
    return; // если не валидна.. возврат
  }

  // а если форма валидна, фиксация данных добавление объекта привычки
  const iconInput = targetForm['icon-habbit']; // фиксация выбранной иконки
  const iconWidth = targetForm['icon-habbit'].dataset.width; // фиксация размера/width выбранной иконки
  const iconHeight = targetForm['icon-habbit'].dataset.height; // фиксация размера/height выбранной иконки
  const iconAlt = targetForm['icon-habbit'].dataset.alt; // фиксация alt/текста выбранной иконки

  const maxId = habbits.reduce(
    (acc, habbit) => (acc > habbit.id ? acc : habbit.id),
    0
  ); // формирование последующего id

  habbits.push({
    id: maxId + 1,
    icon: iconInput.value,
    name: iconAlt,
    title: titleInput.value,
    width: iconWidth,
    height: iconHeight,
    target: targetInput.value,
    days: [],
  });

  saveData(); // обновление/сохранение в localStorage
  togglePopup(); // закрытие pop-up окна

  setTimeout(() => {
    rerender(maxId + 1); // перерисовка всего/content элемента
  }, 300); // замедление перерисовки
}

// init
(() => {
  // загрузка данных.. по сути автоматическая/сразу (соответственно через IIFE)
  loadData();

  // запуск работы с sidebar/меню..
  if (habbits.length > 0) {
    const hashIdFromURL = Number(document.location.hash.replace('#', '')); // получение из адресной строки "hash id" привычки
    const habbit = habbits.find((habbit) => habbit.id === hashIdFromURL); // поиск соответствия

    if (habbit) {
      rerender(habbit.id); // отрисовка/передача привычки/id согласно хеша из url
    } else {
      rerender(habbits[0].id); // нет.. принудительная отрисовка/передача первой привычки согласно глобального habbits массива
    }
  }

  // организация прослушек pop-up инпутов для корректировки классов ошибки (т.е. ввод данных, отмена обводки)
  const form = app['pop-up'].popupElement.querySelector('.pop-up__form');
  const titleInput = form['title-habbit'];
  const targetInput = form['target-habbit'];

  titleInput.addEventListener('input', () => {
    if (titleInput.classList.contains('input-error')) {
      titleInput.classList.remove('input-error');
    }
  });

  targetInput.addEventListener('input', () => {
    if (targetInput.classList.contains('input-error')) {
      targetInput.classList.remove('input-error');
    }
  });
})();
