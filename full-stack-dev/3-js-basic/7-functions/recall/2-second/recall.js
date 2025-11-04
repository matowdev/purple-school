'use strict';

// Задание 1:
// Напиши функцию getWelcomeMessage.
// 1. Функция должна принимать два параметра: name и age.
// 2. Параметр name должен иметь значение по умолчанию "Гость" (используй синтаксис ES6) .
// 3. Функция должна использовать паттерн "раннего возврата" (Early Return). Если age меньше 18, функция должна немедленно вернуть строку "Доступ запрещен".
// 4. Если проверка пройдена (т.е. возраст 18+), функция должна вернуть строку "Добро пожаловать, [name]!".

function getWelcomeMessage(name = 'Гость', age) {
  if (!age || age < 18) {
    return 'Доступ запрещен';
  }

  name = name.trim();
  name = name[0].toUpperCase() + name.toLowerCase().slice(1);

  return `Добро пожаловать, ${name}!`;
}

console.log(getWelcomeMessage(' rOnI ', 18));
('Добро пожаловать, Roni!'); // Добро пожаловать, Roni!

// Задание 2:
// У нас есть массив "грязных" данных — строки с пробелами и разным регистром. Нам нужно получить массив "чистых" имён, которые длиннее 3-х символов.
// const dirtyNames = ['  John ', '   ANNA', ' al', ' Peter  '];
// 1. Напиши вспомогательную (helper) функцию formatName(name).
// - Она должна принимать одну строку (name).
// -- Убрать пробелы в начале и в конце (например, .trim()).
// -- Привести имя к формату: первая буква заглавная, остальные — строчные (например, "Anna", "Peter").
// - Она должна вернуть (return) отформатированную строку.
// 2. Напиши основную функцию getValidNames(names).
// - Она должна использовать formatName и методы массивов (.map() и .filter()), чтобы:
// -- Отформатировать каждое имя в массиве.
// -- Оставить (отфильтровать) только те имена, чья длина (после форматирования) больше 3 символов.
// - Используй стрелочные функции для колбэков в .map() и .filter().
// Ожидаемый результат: console.log(getValidNames(dirtyNames)) должен вывести ['John', 'Anna', 'Peter'].

const dirtyNames = ['  John ', '   ANNA', ' al', ' Peter  ', '', ' '];

// helper
function formatName(name) {
  if (!name || name.trim().length < 2) {
    return '';
  }

  name = name.trim();
  name = name[0].toUpperCase() + name.toLowerCase().slice(1);

  return name;
}

function getValidNames(names = []) {
  if (!names) {
    return [];
  }

  return names
    .map((name) => formatName(name))
    .filter((name) => name.length > 3);
}

console.log(getValidNames(dirtyNames)); // [ 'John', 'Anna', 'Peter' ]

// Задание 3:
// Напиши функцию calculateOrder(price, options).
// 1. price — это обязательное число (цена товара).
// 2. options — это объект с настройками, который не является обязательным.
// 3. Используй деструктуризацию прямо в параметрах, чтобы "вытащить" из options два свойства:
// - discount (число), по умолчанию 0.
// - tax (число), по умолчанию 0.21 (т.е. 21% НДС).
// 4. Используй "трюк" = {}, чтобы функция не ломалась, если options вообще не передали.
// 5. Функция должна вернуть итоговую цену по формуле: price - (price * discount) + (price * tax).

function calculateOrder(price, { discount = 0, tax = 0.21 } = {}) {
  if (!price) {
    return 0;
  }

  return price - price * discount + price * tax;
}

console.log(calculateOrder(100)); // 121
console.log(calculateOrder(100, { discount: 0.1 })); // 111
console.log(calculateOrder(100, { tax: 0.05 })); // 105

// Задание 4:
// Представь, что у нас есть система, которая генерирует серию отложенных приветствий. У нас есть массив объектов users.
/*
const users = [
  { name: 'Alex', delay: 1500 },
  { name: 'Anna', delay: 500 },
  { name: '', delay: 1000 } // Невалидный пользователь
];
*/
// Нам нужно написать "основную" функцию scheduleGreetings(users), которая переберёт этот массив и для каждого пользователя:
// 1. Немедленно вызовет вспомогательную функцию isValidUser(user).
// 2. Если пользователь невалидный, scheduleGreetings должна пропустить его.
// 3. Если пользователь валидный, scheduleGreetings должна использовать setTimeout (который, как ты помнишь, создаёт "проблему this и var" ), чтобы вывести в консоль Привет, [name]! через user.delay миллисекунд.
// Твои задачи:
// 1. Напиши вспомогательную функцию isValidUser(user):
// - Она должна использовать "ранний возврат".
// - Она должна возвращать false, если !user или !user.name.
// - Во всех остальных случаях — true.
// 2. Напиши основную функцию scheduleGreetings(users):
// - Она должна использовать forEach для перебора.
// - Она должна использовать isValidUser для "раннего" пропуска.
// - Внутри forEach, используй setTimeout.
// Внимание (главная часть): Внутри setTimeout используй стрелочную функцию  для колбэка, чтобы избежать любых проблем с this или var, и правильно вывести имя пользователя.
// Ожидаемый результат в консоли: Сначала (через 0.5 сек): Привет, Anna! Потом (через 1.5 сек): Привет, Alex! (Пустая строка должна быть проигнорирована)

const users = [
  { name: 'Alex', delay: 1500 },
  { name: 'Anna', delay: 500 },
  { name: '', delay: 1000 }, // Невалидный пользователь
];

// helper
function isValidUser(user) {
  if (!user || !user.name) {
    return false;
  }

  return true;
}

function scheduleGreetings(users = []) {
  users.forEach((user) => {
    if (isValidUser(user)) {
      setTimeout(() => console.log(`Привет, ${user.name}!`), user.delay);
    }
  });
}

scheduleGreetings(users); // "Привет, Anna!", "Привет, Alex!"
