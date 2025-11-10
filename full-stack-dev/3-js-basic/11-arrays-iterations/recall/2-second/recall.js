'use strict';

// Задание 1:
// Как бы ты, используя связку (chaining) filter() и map(), получил новый массив, содержащий только имена (name) активных (isActive: true) пользователей?
// Ожидаемый результат: ['Alex', 'Bob']

const users = [
  { id: 1, name: 'Alex', isActive: true },
  { id: 2, name: 'Jane', isActive: false },
  { id: 3, name: 'Bob', isActive: true },
  { id: 4, name: 'Kate', isActive: false },
];

const activeUsers = users
  .filter((user) => user.isActive === true)
  .map((user) => user.name);

console.log(activeUsers); // [ 'Alex', 'Bob' ]

// Задание 2:
// Используя только метод reduce(), преобразуй этот массив в объект, где ключом будет id товара, а значением — его name.
// Подсказка: Не забудь про initialValue для reduce()! Каким он должен быть, если мы хотим на выходе получить объект?
// Ожидаемый результат:
/*
{
  'p-001': 'Laptop',
  'p-002': 'Mouse',
  'p-003': 'Keyboard'
}
*/

const products = [
  { id: 'p-001', name: 'Laptop', price: 1200 },
  { id: 'p-002', name: 'Mouse', price: 25 },
  { id: 'p-003', name: 'Keyboard', price: 75 },
];

const productsId = products.reduce((acc, product) => {
  acc[product.id] = product.name;
  return acc;
}, {});

// альтернативный "иммутабельный" способ
// const productsId = products.reduce((acc, product) => {
//   return { ...acc, [product.id]: product.name };
// }, {});

console.log(productsId); // { 'p-001': 'Laptop', 'p-002': 'Mouse', 'p-003': 'Keyboard' }

// Задание 3:
// Используя только Array.from() (и его аргументы), создай массив из первых 5 чётных чисел, начиная с 0.
// Подсказка: Тебе нужно будет передать в Array.from() "массивоподобный" объект ({ length: 5 }) в качестве первого аргумента и map-функцию в качестве второго.
// Ожидаемый результат: [0, 2, 4, 6, 8]

const evenArr = Array.from({ length: 5 }, (_, index) => index * 2);
console.log(evenArr); // [ 0, 2, 4, 6, 8 ]

// Задание 4:
// Напиши код, который использует метод some(), чтобы проверить, есть ли в массиве хотя бы одна "подозрительная" транзакция.
// "Подозрительная" транзакция — это та, у которой type равен 'debit' И amount больше 1000.
// Код должен вывести в консоль true или false.

const transactions = [
  { id: 't1', amount: 50, type: 'debit' },
  { id: 't2', amount: 200, type: 'credit' },
  { id: 't3', amount: 1500, type: 'debit' },
  { id: 't4', amount: 300, type: 'credit' },
];

const isDebit = transactions.some(
  (transaction) => transaction.type === 'debit' && transaction.amount > 1000
);

console.log(isDebit); // true
