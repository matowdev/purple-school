'use strict';

// Задание 1:
// Представь, что мы агрегатор блогов. Нам приходят списки тегов из разных статей. Нам нужно написать функцию mergeTags, которая принимает два массива тегов и возвращает один массив, содержащий только уникальные теги из обоих списков.
// Требования:
// 1. Использовать Set для уникализации.
// 2. Постараться сделать решение максимально лаконичным (в идеале — в одну строку).
// 3. Вернуть именно массив (Array), а не Set.

const tags1 = ['js', 'css', 'html'];
const tags2 = ['css', 'react', 'js'];

function mergeTags(tags1, tags2) {
  return [...new Set([...tags1, ...tags2])];
}

console.log(mergeTags(tags1, tags2)); // ['js', 'css', 'html', 'react'];

// Задание 2:
// Напиши функцию countItems, которая принимает массив строк (товаров) и возвращает Map, где ключ — это название товара, а значение — количество его повторений.
// Требования:
// 1. Использовать Map.
// 2. Использовать метод .set() для записи.
// 3. Использовать логику: "Если товара нет — записываем 1, если есть — берем текущее + 1". (Можно через if/else или тернарный оператор — как тебе удобнее).

const cart = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function countItems(cart) {
  const cartMap = new Map();

  for (const item of cart) {
    if (!cartMap.has(item)) {
      cartMap.set(item, 1);
    } else {
      const count = cartMap.get(item);
      cartMap.set(item, count + 1);
    }
  }

  return cartMap;
}

console.log(countItems(cart)); // Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

// Задание 3:
// Напиши функцию processUser(user), которая имитирует "тяжелые вычисления" для пользователя. У нас есть внешняя переменная cache (используй WeakMap).
// Логика функции:
// 1. Если результат для этого user уже есть в cache — вернуть его и вывести в консоль "Взято из кеша".
// 2. Если нет — сгенерировать случайное число (Math.random()), записать его в cache (связав с этим юзером) и вернуть. (Можно вывести "Вычисляю...").

const cache = new WeakMap();

function processUser(user) {
  if (cache.has(user)) {
    console.log('Взято из кеша');
    return cache.get(user);
  } else {
    const num = Math.random();
    cache.set(user, num);
    console.log('Вычисляю...');
    return num;
  }
}

const alex = { name: 'Alex' };

processUser(alex); // "Вычисляю..."
processUser(alex); // "Взято из кеша"

// Задание 4:
// У нас есть объект с зарплатами salaries. Напиши функцию filterSalaries(salariesObj), которая:
// 1. Принимает обычный объект.
// 2. Превращает его в Map (или массив пар), чтобы удобно работать.
// 3. Оставляет (фильтрует) только тех сотрудников, у кого зарплата больше 200.
// 4. Возвращает результат снова в виде обычного объекта.
// Постарайся сделать это максимально элегантно, используя Object.entries и Object.fromEntries.

const salaries = {
  John: 100,
  Ann: 500,
  Pete: 300,
  Mary: 150,
};

function filterSalaries(salariesObj) {
  return Object.fromEntries(
    Object.entries(salariesObj).filter(([name, salary]) => salary > 200)
  );
}

console.log(filterSalaries(salaries)); // { Ann: 500, Pete: 300 }
