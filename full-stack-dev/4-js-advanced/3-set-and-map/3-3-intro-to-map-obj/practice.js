'use strict';

// Задание 1:
// 1. Создай переменную adminUser и присвой ей объект { name: 'Bob' }.
// 2. Создай пустой Map с именем roles.
// 3. Используя chaining (цепочку вызовов .set().set()), добавь в карту две записи:
// - Ключ: строка 'guest', Значение: 'view_only'
// - Ключ: переменная adminUser, Значение: 'super_admin'
// В конце выведи в консоль размер карты (через свойство .size) и права для админа (через .get()).

const adminUser = { name: 'Bob' };
const roles = new Map();

roles.set('guest', 'view_only').set(adminUser, 'super_admin');

console.log(roles.size); // 2
console.log(roles.get(adminUser)); // "super_admin"

console.log(roles); // Map(2) {'guest' => 'view_only', {…} => 'super_admin'}

// Задание 2:
// 1. Создай salaryMap, передав data прямо в new Map().
// 2. Создай переменную total = 0.
// 3. Перебери salaryMap любым удобным способом (цикл for..of или метод .forEach) и просуммируй все зарплаты в переменную total.
// 4. Выведи итоговую сумму.

const data = [
  ['Alice', 500],
  ['Bob', 700],
  ['Charlie', 600],
];

const salaryMap = new Map(data);
let total = 0;

console.log(salaryMap); // Map(3) { 'Alice' => 500, 'Bob' => 700, 'Charlie' => 600 }

// salaryMap.forEach((value) => (total += value));
for (const value of salaryMap.values()) {
  total += value;
}

console.log(total); // 1800

// Задание 3:
// 1. Создай priceMap на основе pricesObj. (Подсказка: вспомни про Object.entries(), чтобы подготовить данные для Map).
// 2. Внеси изменения в карту:
// - Цена на 'meat' выросла в 2 раза (получи старое значение, умножь и запиши обратно).
// - Товар 'banana' закончился — удали этот ключ из карты.
// 4. Бонус: Преврати получившийся priceMap обратно в обычный объект newPrices (используй Object.fromEntries()) и выведи его в консоль.

const pricesObj = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const priceMap = new Map(Object.entries(pricesObj));
const upMeatPrice = priceMap.get('meat') * 2;

priceMap.set('meat', upMeatPrice);
priceMap.delete('banana');

console.log(Object.fromEntries(priceMap)); // { orange: 2, meat: 8 }

// !! Задание 4:
// 1. Создай Map.
// 2. Пройдись по массиву events и заполни карту так, чтобы ключом был id, а значением — весь объект целиком. (Подсказка: так как .set перезаписывает старое значение, если ключ совпадает, тебе даже не нужны проверки if).
// 3. В конце получи из карты массив уникальных объектов (используя .values()) и выведи его.
// В итоге должен получиться массив из 3 элементов, где у id: 101 статус 'done'.

const events = [
  { id: 101, status: 'pending' },
  { id: 102, status: 'pending' },
  { id: 101, status: 'done' }, // Обновление для 101
  { id: 103, status: 'error' },
];

const eventsMap = new Map();

events.forEach((event) => {
  eventsMap.set(event.id, event);
});

const uniqueEvents = [...eventsMap.values()];

console.log(uniqueEvents);
/*
[
  { id: 101, status: 'done' },
  { id: 102, status: 'pending' },
  { id: 103, status: 'error' }
]
*/

// !! Задание 5:
// 1. Создай пустой Map с именем tagCounts.
// 2. Пройдись циклом по массиву tags.
// 3. Логика внутри цикла:
// - Если такой тег уже есть в карте: получи текущее количество, прибавь 1 и запиши обратно.
// - Если такого тега нет: запиши его со значением 1.
// 4. Выведи итоговый Map.
// (Ожидаемый результат: js => 3, css => 2, html => 1, react => 1)

const tags = ['js', 'css', 'html', 'js', 'css', 'js', 'react'];

const tagCounts = new Map();

for (const tag of tags) {
  if (!tagCounts.has(tag)) {
    tagCounts.set(tag, 1);
  } else {
    const count = tagCounts.get(tag);
    tagCounts.set(tag, count + 1);
  }
}

// ?? альтернативное решение (более лаконичное)
// for (const tag of tags) {
//   // Получаем текущее значение ИЛИ 0, прибавляем 1 и сразу записываем
//   const currentCount = tagCounts.get(tag) || 0;
//   tagCounts.set(tag, currentCount + 1);
// }

console.log(tagCounts); // Map(4) { 'js' => 3, 'css' => 2, 'html' => 1, 'react' => 1 }
