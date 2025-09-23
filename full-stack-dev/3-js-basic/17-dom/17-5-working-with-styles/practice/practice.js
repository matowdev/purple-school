'use strict';

// Задание 1:
// Создать простую механику "Показать/Скрыть" для текстового блока.
/*
<div class="card">
 <h3>Заголовок карточки</h3>
 <p>Этот текст виден всем и всегда.</p>
 <div id="details" class="hidden">
   <p>А это дополнительная информация, которая изначально скрыта от пользователя.</p>
 </div>
 <button id="toggle-btn">Читать далее</button>
</div>
*/
// Твоя задача:
// Напиши JavaScript код, который:
// 1. При клике на кнопку с id="toggle-btn".
// 2. Находит блок с id="details" и переключает у него класс hidden.
// 3. Бонус (необязательно): Попробуй сделать так, чтобы текст на кнопке менялся с "Читать далее" на "Скрыть", и обратно, в зависимости от того, виден ли скрытый текст.

const details = document.querySelector('#details');
const toggleBtn = document.querySelector('#toggle-btn');

// function showHideAddInfo() {
//   details.classList.toggle('hidden');
//
//   if (details.classList.contains('hidden')) {
//     toggleBtn.textContent = 'Читать далее';
//   } else {
//     toggleBtn.textContent = 'Скрыть';
//   }
// }
//
// toggleBtn.addEventListener('click', showHideAddInfo);

// ?? альтернативное решение
toggleBtn.addEventListener('click', () => {
  // 1. Проверяем, был ли элемент скрыт ДО переключения
  const wasHidden = details.classList.contains('hidden');

  // 2. Меняем текст кнопки в зависимости от того, что было
  toggleBtn.textContent = wasHidden ? 'Скрыть' : 'Читать далее';

  // 3. Переключаем класс
  details.classList.toggle('hidden');
});

// Задание 2:
// Нужно написать JavaScript-код, который при клике на любую из кнопок-вкладок (.tab-btn) делает следующее:
// 1. Убирает класс active со всех кнопок.
// 2. Убирает класс active со всех панелей с контентом (.tab-pane).
// 3. Добавляет класс active только той кнопке, по которой кликнули.
// 4. Находит соответствующую панель с контентом и добавляет ей класс active. (Подсказка: кнопки и панели связаны. У кнопки есть data-tab="tab1", а у панели id="tab1").
/*
<div class="tabs-container">
   <div id="tabs-buttons">
       <button class="tab-btn active" data-tab="tab1">Котики</button>
       <button class="tab-btn" data-tab="tab2">Собачки</button>
       <button class="tab-btn" data-tab="tab3">Еноты</button>
   </div>
   <div id="tabs-content">
       <div class="tab-pane active" id="tab1">Содержимое про котиков 😺</div>
       <div class="tab-pane" id="tab2">Содержимое про собачек 🐶</div>
       <div class="tab-pane" id="tab3">Содержимое про енотов 🦝</div>
   </div>
</div>
*/

const tabsContainer = document.querySelector('.tabs-container');
const allTabBtn = document.querySelectorAll('.tab-btn');
const allTabPanel = document.querySelectorAll('.tab-pane');

function activeManipulation(event) {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    allTabBtn.forEach((tabBtn) => {
      tabBtn.classList.remove('active');
    });

    allTabPanel.forEach((panel) => {
      panel.classList.remove('active');
    });

    target.classList.add('active');
    const tabValue = target.dataset.tab;

    // allTabPanel.forEach((panel) => {
    //   if (panel.id === tabValue) {
    //     panel.classList.add('active');
    //   }
    // });

    // ?? что бы не перебирать все элементы.. можно сразу по ID отрабатывать
    const targetPanel = document.getElementById(tabValue);
    targetPanel.classList.add('active');
  }
}

tabsContainer.addEventListener('click', activeManipulation);

// Задание 3:
// Создать работающий "аккордеон".
/*
<div class="accordion">
  <div class="accordion-item">
    <h3 class="accordion-header">Раздел 1</h3>
    <div class="accordion-content">
      <p>Содержимое первого раздела. Оно изначально скрыто.</p>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">Раздел 2</h3>
    <div class="accordion-content">
      <p>Содержимое второго раздела. Оно также скрыто.</p>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header">Раздел 3</h3>
    <div class="accordion-content">
      <p>Содержимое третьего раздела. И оно тоже скрыто.</p>
    </div>
  </div>
</div>
*/
// Напиши JavaScript, который при клике на любой заголовок (.accordion-header):
// 1. Переключает класс active у нажатого заголовка.
// 2. Бонус (сложная часть): Сделай так, чтобы одновременно мог быть открыт только один раздел. То есть, при открытии нового раздела, любой другой, который был открыт до этого, должен закрыться.
// Намёк: Обрати внимание на CSS. Тебе не нужно напрямую стилизовать или скрывать .accordion-content. Вся магия происходит, когда ты добавляешь/убираешь класс active у заголовка .accordion-header.

const accordion = document.querySelector('.accordion');
const allAccHeaders = document.querySelectorAll('.accordion-header');

function openCloseAccordion(event) {
  const target = event.target;

  // определение "именно" заголовка
  if (target.classList.contains('accordion-header')) {
    // проверка состояния (закрыт.. открыт)
    const isAlreadyActive = target.classList.contains('active');

    // закрытие всех элементов
    allAccHeaders.forEach((header) => {
      header.classList.remove('active');
    });

    // исходя из первичного состояния, далее.. открытие или закрытие
    if (!isAlreadyActive) {
      target.classList.add('active');
    }
  }
}

accordion.addEventListener('click', openCloseAccordion);
