'use strict';

// Задание 1:
// Как "починить" эти два проблемных вызова?
// Как нужно изменить строку setTimeout(counter.increment, 100) с помощью bind(), чтобы this не терялся?
// Как можно было бы сразу вызвать standaloneIncrement с правильным this с помощью call()?

const counter = {
  count: 0,
  increment() {
    this.count += 1;
    console.log(this.count);
  },
};

setTimeout(counter.increment.bind(counter), 100); // 1

const standaloneIncrement = counter.increment;
standaloneIncrement.call(counter); // 2

// Задание 2:
// Согласно разметки напиши JavaScript-код, который:
// 1. Найдёт оба инпута (#num1, #num2), кнопку (#addBtn) и span для результата (#result).
// 2. Добавит обработчик события (addEventListener) на кнопку (#addBtn) по клику ('click').
// 3. Внутри этого обработчика:
// - Получит значения (.value) из обоих инпутов.
// - Важно! Преобразует эти значения в числа (вспомни Унарный + или Number()).
// - Сложит их.
// Запишет итоговую сумму в span (#result), используя textContent.

const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const addBtnEl = document.getElementById('addBtn');
const resultEl = document.getElementById('result');

addBtnEl.addEventListener('click', () => {
  const num1 = +num1El.value;
  const num2 = +num2El.value;
  const sum = num1 + num2;
  resultEl.textContent = sum;
});

// !! Задание 3:
// Напиши функцию mySort(arr), которая сортирует массив чисел по возрастанию, не используя метод .sort(). Реализуй алгоритм «Пузырьковой сортировки» (Bubble Sort).
// Условия:
// 1. Используй вложенные циклы for.
// 2. Помни про оптимизацию: если массив уже частично отсортирован, лишние итерации не нужны (но для начала сделай хотя бы базовый рабочий вариант).

const bubbleNum = [45, 12, 3, 67, 1, 9];

for (let i = 0; i < bubbleNum.length; i++) {
  for (let j = 0; j < bubbleNum.length - 1 - i; j++) {
    if (bubbleNum[j] > bubbleNum[j + 1]) {
      let temp = bubbleNum[j + 1];
      bubbleNum[j + 1] = bubbleNum[j];
      bubbleNum[j] = temp;
    }
  }
}

console.log(bubbleNum); // [1, 3, 9, 12, 45, 67]

// !! Задание 4:
// Пришли "грязные" данные с сервера. В массиве есть дубликаты, пустые строки, null, undefined и прочий мусор.
// Напиши код, который вернет чистый массив уникальных строковых и числовых значений (без 0, null, false и т.д.).
// Требование: Реализуй два разных варианта удаления дубликатов (как раз вспомним способы из конспекта):
// 1. Вариант Modern: Используя структуру Set (самый лаконичный способ).
// 2. Вариант Functional: Используя методы массивов (filter + indexOf).
// Ожидаемый результат (для обоих вариантов): [1, 'apple', 'banana', 'orange']

const dirtyData = [
  1,
  0,
  'apple',
  '',
  'banana',
  null,
  'apple',
  undefined,
  'orange',
  0,
  false,
  'banana',
];

const setDirtyData = [...new Set(dirtyData)].filter(Boolean);
console.log(setDirtyData); // [1, 'apple', 'banana', 'orange']

const filterDirtyData = dirtyData
  .filter(Boolean)
  .filter((value, index, currentArr) => currentArr.indexOf(value) === index);
console.log(filterDirtyData); // [1, 'apple', 'banana', 'orange']

// !! Задание 5:
// Напиши функцию maskCreditCard(card), которая скрывает все цифры номера карты, кроме последних четырёх.
// Требования:
// 1. Функция должна принимать как строку, так и число (нужна конвертация типов, Source 14 ).
// 2. Используй метод .slice() с отрицательным индексом для получения последних 4 цифр.
// 3. Используй метод .padStart() для заполнения начала строки звёздочками *. Длина итоговой строки должна соответствовать длине исходного номера.

function maskCreditCard(card) {
  if (!card) {
    return '';
  }

  if (typeof card === 'string') {
    card = card.trim();
  }

  if (typeof card === 'number') {
    card = String(card);
  }

  if (card.length < 4) {
    return '';
  }

  const cardLength = card.length;
  const lastNum = card.slice(-4);

  return lastNum.padStart(cardLength, '*');
}

console.log(maskCreditCard('1234567812345678')); // "************5678"
console.log(maskCreditCard(4455667788991234)); // "************1234"
console.log(maskCreditCard('1234')); // "1234"

// !! Задание 6:
// Напиши модуль "Счётчик", который защищает свои данные от прямого изменения извне.
// Требования:
// 1. Используй IIFE (Immediately Invoked Function Expression), чтобы создать закрытую область видимости сразу при объявлении.
// 2. Внутри должна быть приватная переменная count (начальное значение 0).
// 3. Функция должна возвращать объект с тремя методами:
// 4. increase(): увеличивает счётчик на 1.
// 5. decrease(): уменьшает счётчик на 1.
// 6. getValue(): возвращает текущее значение.
// 7. Переменная count не должна быть доступна напрямую (например, counter.count должно быть undefined).

const counterIIFE = (function () {
  let count = 0;

  return {
    increase() {
      count++;
    },
    decrease() {
      count--;
    },
    getValue() {
      return count;
    },
  };
})();

counterIIFE.increase();
counterIIFE.increase();
console.log(counterIIFE.getValue()); // 2
console.log(counterIIFE.count); // undefined

// !! Задание 7:
// У нас есть "Волшебник", который умеет лечить (heal). И есть "Воин", у которого мало здоровья, но нет метода лечения.
// Твоя задача:
// 1. Вылечи воина Артура на 20 HP заклинанием 'Holy Light', используя метод волшебника и .call().
// 2. Вылечи воина Артура ещё на 50 HP заклинанием 'Great Heal', используя метод волшебника и .apply().
// Требование: Обрати внимание на разницу в передаче аргументов между call и apply (запятые vs массив).

const wizard = {
  name: 'Merlin',
  health: 50,
  heal(amount, spellName) {
    this.health += amount;
    console.log(
      `${this.name} исцелен на ${amount} HP с помощью заклинания "${spellName}". Текущее здоровье: ${this.health}`
    );
  },
};

const warrior = {
  name: 'Arthur',
  health: 30,
};

wizard.heal.call(warrior, 20, 'Holy Light'); // "Arthur исцелен на 20 HP с помощью заклинания "Holy Light". Текущее здоровье: 50"
wizard.heal.apply(warrior, [50, 'Great Heal']); // "Arthur исцелен на 50 HP с помощью заклинания "Great Heal". Текущее здоровье: 100"

// !! Задание 8:
// Используя тот же объект wizard и его метод heal(amount, spellName), создай новую функцию.
// Требования:
// 1. Создай функцию healArthur50.
// 2. Она должна быть основана на методе wizard.heal.
// 3. Контекст (this) должен быть навсегда привязан к воину Arthur (warrior).
// 4. Первый аргумент (amount) должен быть навсегда зафиксирован на значении 50.
// 5. Вызови полученную функцию healArthur50, передав ей только название заклинания (например, "Super Potion").
// Ожидаемый результат: "Arthur исцелен на 50 HP с помощью заклинания "Super Potion". Текущее здоровье: ..."

const healArthur50 = wizard.heal.bind(warrior, 50);
console.log(healArthur50('Super Potion')); // "Arthur исцелен на 50 HP с помощью заклинания "Super Potion". Текущее здоровье: 150"

// !! Задание 9:
// Твоя задача: Используя только метод .reduce(), создай объект, где ключами будут имена пользователей, а значениями — общая сумма их заказов.
// Алгоритм:
// 1. Начни с пустого объекта {} (initialValue).
// 2. На каждой итерации проверяй: есть ли уже такой user в аккумуляторе?
// 3. Если есть — прибавляй price.
// 4. Если нет — создавай ключ и записывай туда price.
// 5. Не забудь вернуть аккумулятор.
// Ожидаемый результат:
/*
{
  Alice: 200,
  Bob: 120,
  Charlie: 40
}
*/

const orders = [
  { user: 'Alice', price: 50 },
  { user: 'Bob', price: 100 },
  { user: 'Alice', price: 150 },
  { user: 'Charlie', price: 40 },
  { user: 'Bob', price: 20 },
];

const users = orders.reduce((acc, order) => {
  if (!acc[order.user]) {
    acc[order.user] = 0;
  }

  acc[order.user] += order.price;

  return acc;
}, {});

console.log(users); // {Alice: 200, Bob: 120, Charlie: 40}

// Задание 10:
// Напиши функцию myFilter(array, callback), которая полностью повторяет логику стандартного метода .filter().
// Требования:
// 1. Функция принимает два аргумента: array (исходный массив) и callback (функция-условие).
// 2. Функция должна возвращать новый массив.
// 3. Внутри функции используй цикл for (или for...of) для перебора элементов.
// 4. callback должен вызываться для каждого элемента. Если callback возвращает true, элемент попадает в новый массив. Если false — игнорируется.
// 5. Важно: callback в стандартном filter принимает 3 аргумента: (item, index, array). Реализуй поддержку всех трёх аргументов при вызове колбэка внутри своей функции.

const numbers = [10, 20, 5, 30, 2, 15];
const isBigEnough = (value, index, arr) => value >= 10;

function myFilter(array, callback) {
  if (!array || !Array.isArray(array)) {
    return [];
  }

  if (!callback || typeof callback !== 'function') {
    return [];
  }

  const filteredArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }

  return filteredArr;
}

console.log(myFilter(numbers, isBigEnough)); // [10, 20, 30, 15]

// !! Задание 11:
// Напиши функцию renderTasks(tasks), которая принимает массив строк и отрисовывает их в HTML-списке.
// Требования:
// 1. Внутри функции найди элемент <ul> с id="todo-list" (предположим, он есть в HTML).
// 2. Очисти его текущее содержимое перед отрисовкой (чтобы не дублировать задачи при повторном вызове). Используй innerHTML = '' или textContent = ''.
// 3. Пройдись циклом по массиву tasks.
// 4. Для каждой задачи:
// - Создай новый элемент <li> через document.createElement.
// - Запиши текст задачи внутрь <li> (свойство textContent предпочтительнее, чем innerText, так как работает быстрее и предсказуемее).
// - Добавь этот <li> в конец списка <ul> (метод append или appendChild).

const myTasks = ['Сделать рефакторинг', 'Выпить кофе', 'Запушить в main'];
const toDoList = document.getElementById('todo-list');

function renderTasks(tasksArr) {
  if (!tasksArr || !Array.isArray(tasksArr)) {
    return [];
  }

  toDoList.innerHTML = ''; // предварительная очистка
  const toDoFragment = document.createDocumentFragment();

  for (const task of tasksArr) {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-item');
    toDoItem.textContent = task;

    toDoFragment.appendChild(toDoItem);
  }

  toDoList.append(toDoFragment);
}

renderTasks(myTasks);

// !! Задание 12:
// Добавь функционал: при клике на любую задачу (<li>), она должна "зачеркиваться" (добавляем/убираем класс).
// Входящие данные: Используй переменную toDoList из прошлой задачи (это наш <ul>). Предположим, в CSS есть класс:
// .completed { text-decoration: line-through; opacity: 0.5; }
// Требования:
// 1. Навесь слушатель события 'click' только на родительский элемент toDoList.
// 2. Внутри функции-обработчика используй event.target, чтобы понять, куда именно кликнули.
// 3. Проверь, что клик был именно по LI (или внутри него). Подсказка: здесь пригодится метод closest()  или проверка tagName.
// 4. Если клик был по задаче — переключи класс 'completed' с помощью classList.toggle().

toDoList.addEventListener('click', (event) => {
  const target = event.target;

  // if (target.tagName === 'LI') {
  //   target.classList.toggle('completed');
  // }

  const li = target.closest('li'); // исключение проблем, если в li есть ещё/появятся другие элементы

  if (li) {
    li.classList.toggle('completed');
  }
});

// !! Задание 13:
// Напиши две утилитарные функции для работы с localStorage.
// Требования:
// 1. Функция saveToStorage(key, data):
// - Принимает ключ (строка) и данные (массив или объект).
// - Преобразует данные в строку формата JSON (используй JSON.stringify).
// - Сохраняет в localStorage.
// 2. Функция loadFromStorage(key):
// - Принимает ключ.
// - Получает данные из localStorage.
// - Если данных нет (вернулся null) — возвращает пустой массив [] (чтобы код не падал).
// - Если данные есть — преобразует их обратно из JSON в объект/массив (используй JSON.parse).

const myData = [{ id: 1, text: 'Code' }];

function saveToStorage(key, data) {
  if (!key || typeof key !== 'string') {
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  localStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorage(key) {
  if (!key || typeof key !== 'string') {
    return [];
  }

  return JSON.parse(localStorage.getItem(key) || '[]'); // очень важное ИЛИ.. указание [] не даст упасть в ошибку
}

saveToStorage('tasks', myData);

const loaded = loadFromStorage('tasks');
console.log(loaded); // [{ id: 1, text: 'Code' }]
