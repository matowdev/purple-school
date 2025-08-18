// Задание 1:
// У тебя есть массив с результатами тестов: const scores = [55, 80, 95, 48, 76, 100, 99];
// Напиши код, который выводит этот массив в консоль, отсортированный от наибольшего результата к наименьшему.

scores = [55, 80, 95, 48, 76, 100, 99];
console.log(scores.sort((a, b) => b - a)); // [ 100, 99, 95, 80, 76, 55, 48 ]

// Задание 2:
// У тебя есть массив объектов, представляющих товары в магазине.
// Напиши код, который отсортирует этот массив по цене (price) от самого дешёвого к самому дорогому и выведет результат в консоль.

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 300 },
];

console.log(products.sort((a, b) => a.price - b.price));
/*
[
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 300 },
  { name: 'Laptop', price: 1200 }
]
*/

// Задание 3:
// У тебя есть список людей. Некоторые из них одного возраста.
// Нужно отсортировать этот массив по следующим правилам:
// 1. Сначала по возрасту, от младшего к старшему.
// 2. Если возрасты одинаковые, то отсортировать таких людей по имени в алфавитном порядке.
// Напиши код, который выполнит такую двухуровневую сортировку.

const people = [
  { name: 'Bob', age: 30 },
  { name: 'Alex', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Carl', age: 35 },
  { name: 'Alice', age: 25 },
];

people.sort((a, b) => {
  if (a.age - b.age < 0) {
    return -1;
  }
  if (a.age - b.age > 0) {
    return 1;
  }
  if (a.age - b.age === 0) {
    return a.name.localeCompare(b.name);
  }
});

console.log(people);
/*
[
  { name: 'Alice', age: 25 },
  { name: 'Jane', age: 25 },
  { name: 'Alex', age: 30 },
  { name: 'Bob', age: 30 },
  { name: 'Carl', age: 35 }
]
*/

// ?? альтернативное решение (в одну строку)
people.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));
