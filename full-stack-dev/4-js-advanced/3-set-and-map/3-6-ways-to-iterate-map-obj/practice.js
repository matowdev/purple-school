'use strict';

// Задание 1:
// У нас есть Map, который хранит список продуктов в корзине и их стоимость.
// Напиши код, который считает общую стоимость всей корзины.
// Условие: Используй тот способ итерации, который наиболее логичен и "чист" в ситуации, когда нам вообще не важны названия продуктов (ключи), а нужны только цифры.

const cart = new Map([
  ['Apple', 1.5],
  ['Banana', 0.8],
  ['Milk', 2.0],
  ['Bread', 1.2],
]);

// const cartSum = [...cart.values()].reduce((acc, price) => acc + price, 0);

// ?? альтернативное решение (проще.. но быстрее, т.к. без создания доп. массива)
let cartSum = 0;

for (const price of cart.values()) {
  cartSum += price;
}

console.log(cartSum); // 5.5

// !! Задание 2:
// У нас есть статистика посещений сайта пользователями. Ключ — это объект пользователя, Значение — количество посещений.
// Напиши цикл for...of, который выведет в консоль фразы вида: User Alex visited 5 times, User Ivan visited 10 times
// Челендж (по желанию): Попробуй сделать деструктуризацию максимально глубокой прямо в объявлении цикла, чтобы внутри цикла не писать key.name, а обращаться к имени напрямую через переменную name.

const user1 = { name: 'Alex', id: 1 };
const user2 = { name: 'Ivan', id: 2 };

const visits = new Map([
  [user1, 5],
  [user2, 10],
]);

for (const [{ name }, numOfVisits] of visits) {
  console.log(`User ${name} visited ${numOfVisits} times`); // "User Alex visited 5 times", "User Ivan visited 10 times"
}

// Задание 3:
// У нас есть складской учет. Map хранит название товара и его остаток на складе.
// Нам нужно получить простой массив (Array) названий товаров, которые закончились (количество равно 0). Ожидаемый результат: ['Shirt', 'Hat'].
// Подсказка: Подумай, какой тип итерации (ключи, значения или пары) тебе нужен, чтобы проверить условие и сохранить результат.

const inventory = new Map([
  ['Socks', 10],
  ['Shirt', 0],
  ['Pants', 5],
  ['Hat', 0],
]);

// const outOfStock = [];
//
// for (const [key, value] of inventory) {
//   if (value === 0) {
//     outOfStock.push(key);
//   }
// }

// ?? альтернативное решение (современное.. функциональное)
const outOfStock = [...inventory]
  .filter(([_, qty]) => qty === 0)
  .map(([name]) => name);

console.log(outOfStock); // [ 'Shirt', 'Hat' ]
