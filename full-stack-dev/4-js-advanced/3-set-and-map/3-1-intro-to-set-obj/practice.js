'use strict';

// Задание 1:
// Напиши функцию uniqueTags(tags), которая принимает массив и возвращает новый массив, содержащий только уникальные теги.

const rawTags = ['js', 'css', 'html', 'js', 'css', 'react'];

function uniqueTags(tags) {
  if (!tags || !Array.isArray(tags)) {
    return [];
  }

  return [...new Set(tags)];
}

console.log(uniqueTags(rawTags)); // [ 'js', 'css', 'html', 'react' ]

// Задание 2:
// Напиши функцию filterUsers(users, bannedIds), которая вернет массив пользователей без тех, кто находится в черном списке.
// Важное условие: Для проверки блокировки используй Set, чтобы поиск был максимально быстрым (представим, что bannedIds может быть очень большим).
// Подсказка: тебе понадобится метод filter для массива пользователей и метод has для множества забаненных ID.

const users = [
  { id: 1, name: 'Max' },
  { id: 2, name: 'Kate' }, // забанена
  { id: 3, name: 'Leo' },
  { id: 4, name: 'Alex' }, // забанен
];

const bannedIds = [2, 4];

function filterUsers(users, bannedIds) {
  if (!users || !Array.isArray(users)) {
    return [];
  }

  if (!bannedIds || !Array.isArray(bannedIds)) {
    return [];
  }

  const bannedIdsSet = new Set(bannedIds);

  return users.filter((user) => !bannedIdsSet.has(user.id));
}

console.log(filterUsers(users, bannedIds)); // [ { id: 1, name: 'Max' }, { id: 3, name: 'Leo' } ]

// Задание 3:
// Напиши функцию findCommonEmployees(dept1, dept2), которая вернет массив имен, встречающихся в обоих списках.
// Совет: Здесь логика похожа на предыдущую задачу, но «наоборот». Тебе нужно оставить тех, кто есть в Set, а не тех, кого нет.

const frontend = ['Alice', 'Bob', 'Charlie', 'Dan'];
const backend = ['Bob', 'Dan', 'Eve', 'Frank'];

function findCommonEmployees(dept1, dept2) {
  if (!dept1 || !Array.isArray(dept1)) {
    return [];
  }

  if (!dept2 || !Array.isArray(dept2)) {
    return [];
  }

  const dept2Set = new Set(dept2);

  return dept1.filter((name) => dept2Set.has(name));
}

console.log(findCommonEmployees(frontend, backend)); // [ 'Bob', 'Dan' ]

// Задание 4:
// Напиши функцию getUniqueCategories(orders), которая вернет массив строк: ['food', 'electronics', 'clothing'].
// Подсказка: Нельзя просто засунуть объекты в Set. Тебе нужно сначала «достать» категории. Попробуй скомбинировать методы массива (map) и Set.

const orders = [
  { id: 1, category: 'food', price: 100 },
  { id: 2, category: 'electronics', price: 500 },
  { id: 3, category: 'food', price: 200 },
  { id: 4, category: 'clothing', price: 50 },
  { id: 5, category: 'electronics', price: 600 },
];

function getUniqueCategories(orders) {
  if (!orders || !Array.isArray(orders)) {
    return [];
  }

  return [...new Set(orders.map((order) => order.category))];
}

console.log(getUniqueCategories(orders)); // [ 'food', 'electronics', 'clothing' ]
