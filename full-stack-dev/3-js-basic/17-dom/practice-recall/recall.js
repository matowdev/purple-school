'use strict';

// Задание 1:
// Дана вот такая HTML-структура:
/*
<div id="app">
  <p>Количество кликов: <span id="counter-value">0</span></p>
  <button id="increment-btn">Кликни меня!</button>
</div>
*/
// Твоя задача — написать JavaScript-код, который:
// 1. Находит кнопку (increment-btn) и элемент span (counter-value).
// 2. Создаёт переменную-счётчик, которая изначально равна 0.
// 3. При клике на кнопку увеличивает этот счётчик на 1.
// 4. Обновляет текстовое содержимое span'а, чтобы в нём отображалось актуальное значение счётчика.

const appSpan = document.getElementById('counter-value');
const appBtn = document.getElementById('increment-btn');

let count = 0;
let countTimer; // переменная для хранения ID таймера

function increaseCount() {
  count++;
  appSpan.textContent = count;

  // очищаем предыдущий таймер
  clearTimeout(countTimer);

  // устанавливаем новый таймер (заносим в переменную ID таймера)
  countTimer = setTimeout(() => {
    appSpan.textContent = 0;
  }, 3000);
}

appBtn.addEventListener('click', increaseCount);

// Задание 2:
// Представь, что у тебя есть поле для ввода пароля, и ты хочешь в реальном времени показывать пользователю, соответствует ли его ввод минимальным требованиям.
// Твоя задача — написать JavaScript-код, который:
// 1. Находит поле ввода (password-input) и сообщение об ошибке (error-message).
// 2. Добавляет на поле ввода обработчик события input (оно срабатывает каждый раз, когда меняется содержимое поля).
// 3. Внутри обработчика реализует следующую логику:
// Если длина введённого текста меньше 6 символов, то:
// - Полю ввода добавляется класс error.
// - У поля ввода удаляется класс success.
// - Сообщению об ошибке добавляется класс visible.
// Если длина введённого текста 6 символов или больше, то:
// - У поля ввода удаляется класс error.
// - Полю ввода добавляется класс success.
// - У сообщения об ошибке удаляется класс visible.

const passInput = document.getElementById('password-input');
const errMessage = document.getElementById('error-message');

function checkPassword() {
  const value = passInput.value;

  if (value.length === 0) {
    passInput.classList.remove('success');
    passInput.classList.remove('error');
    errMessage.classList.remove('visible');
  } else if (value.length < 6) {
    passInput.classList.add('error');
    passInput.classList.remove('success');
    errMessage.classList.add('visible');
  } else {
    passInput.classList.remove('error');
    passInput.classList.add('success');
    errMessage.classList.remove('visible');
  }
}

passInput.addEventListener('input', checkPassword);

// Задание 3:
// Это классическая задача, которая отлично тренирует навыки создания элементов.
/*
<h2>Мой список дел</h2>
<div class="input-group">
  <input type="text" id="todo-input" placeholder="Добавить новое дело...">
  <button id="add-btn">Добавить</button>
</div>
<ul id="todo-list">
  </ul>
*/
// Твоя задача — написать JavaScript-код, который:
// 1. Находит поле ввода (todo-input), кнопку (add-btn) и список (todo-list).
// 2. Вешает на кнопку обработчик события click.
// 3. Когда происходит клик, функция-обработчик должна:
// - Получить текст из поля ввода.
// - Проверить, что текст не пустой.
// - Если текст есть, создать новый элемент <li>.
// - Присвоить textContent этого <li> тексту из поля ввода.
// - Добавить новый <li> в конец списка <ul>.
// - Очистить поле ввода, чтобы было удобно добавлять следующее дело.
// Бонус: Попробуй сделать так, чтобы дело добавлялось не только по клику на кнопку, но и по нажатию клавиши Enter в поле ввода.

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTodoTask() {
  const value = todoInput.value.trim(); // лучше/желательно всегда добавлять trim().. да бы исключать пробелы

  if (value !== '') {
    const item = document.createElement('li');

    item.textContent = value;
    todoList.append(item);

    todoInput.value = '';
  }
}

addBtn.addEventListener('click', addTodoTask);
todoInput.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    addTodoTask();
  }
});

// Задание 4:
// Эта задача объединит сразу несколько важных тем: делегирование событий, работу с data- атрибутами и сохранение данных в localStorage. Это уже похоже на настоящую маленькую фичу для сайта.
// Концепция: Мы не будем вешать обработчик на каждую кнопку "Добавить". Вместо этого мы повесим один обработчик на весь список товаров и будем "ловить" клики внутри него. Это и называется делегированием.
/*
<div class="shop">
  <h2>Наши товары</h2>
  <ul id="product-list">
    <li>
      <span>Яблоко (50р)</span>
      <button class="add-to-cart-btn" data-id="1" data-name="Яблоко" data-price="50">Добавить</button>
    </li>
    <li>
      <span>Банан (70р)</span>
      <button class="add-to-cart-btn" data-id="2" data-name="Банан" data-price="70">Добавить</button>
    </li>
    <li>
      <span>Апельсин (90р)</span>
      <button class="add-to-cart-btn" data-id="3" data-name="Апельсин" data-price="90">Добавить</button>
    </li>
  </ul>
</div>

<div class="cart">
  <h2>Корзина</h2>
  <ul id="cart-items">
    </ul>
  <p>Итого: <span id="total-price">0</span> р</p>
  <button id="clear-cart-btn">Очистить корзину</button>
</div>
*/
// Твоя задача — написать JS-код, который реализует полную логику корзины:
// 1. Инициализация:
// - При загрузке страницы нужно попытаться загрузить корзину из localStorage.
// - Создай функцию renderCart(), которая будет брать массив товаров из localStorage, отображать их в списке cart-items и пересчитывать общую стоимость. Вызови её при старте скрипта.
// 2. Добавление товара (Делегирование):
// - Повесь один обработчик click на весь список product-list.
// - Внутри обработчика проверь, что клик был именно по кнопке с классом add-to-cart-btn. (Подсказка: event.target.classList.contains(...)).
// - Если да, то считай data- атрибуты (id, name, price) с этой кнопки.
// - Добавь товар (как объект) в массив корзины, сохрани обновлённый массив в localStorage и вызови renderCart() для обновления отображения.
// 3. Очистка корзины:
// - Повесь обработчик click на кнопку clear-cart-btn.
// - При клике он должен очищать массив в localStorage и снова вызывать renderCart().

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const clearBtn = document.getElementById('clear-cart-btn');
let currentCart = JSON.parse(localStorage.getItem('Cart')) || []; // хорошее решение.. если в storage нет ничего создаём "пустой" массив (далее с ним работаем)

function renderCart() {
  let totalSum = 0;

  cartList.innerHTML = ''; // очистка списка "корзины" перед отрисовкой (последующей)

  if (currentCart.length > 0) {
    currentCart.forEach((cartItem) => {
      const { id, name, price } = cartItem;
      const listItem = document.createElement('li');

      listItem.textContent = `${name} (${price} р.)`;
      cartList.append(listItem);

      totalSum += Number(price);
    });
  }

  totalPrice.textContent = totalSum;
}

renderCart();

function clearData() {
  cartList.innerHTML = ''; // очистка списка товаров в корзине
  totalPrice.textContent = '0'; // сброс итоговой суммы
  localStorage.setItem('Cart', JSON.stringify([])); // очистка storage массива
  currentCart = []; // очистка глобального массива
}

productList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('add-to-cart-btn')) {
    const itemData = target.dataset;

    currentCart.push(itemData);
    localStorage.setItem('Cart', JSON.stringify(currentCart));

    renderCart();
  }
});
clearBtn.addEventListener('click', clearData);
