'use strict';

// Задание 1:
// У тебя есть массив cart, представляющий корзину в интернет-магазине. Каждый элемент — это объект с названием товара, его ценой за штуку (price) и количеством (quantity).
// Твоя задача — посчитать общую стоимость всех товаров в корзине. Постарайся решить это элегантно, с помощью одного из изученных методов перебора.

const cart = [
  { name: 'Apple', price: 0.5, quantity: 4 },
  { name: 'Banana', price: 0.25, quantity: 6 },
  { name: 'Orange', price: 0.75, quantity: 3 },
  { name: 'Milk', price: 2.5, quantity: 1 },
];

const totalCost = cart.reduce(
  (acc, product) => acc + product.price * product.quantity,
  0
);

console.log(totalCost); // 8.25

// Задание 2:
// У тебя есть список транзакций. Тебе нужно получить массив имен всех клиентов, которые совершили покупки на сумму больше 1000, отсортированный по алфавиту.

const transactions = [
  { id: 1, customer: 'Mike', amount: 1200 },
  { id: 2, customer: 'Sara', amount: 900 },
  { id: 3, customer: 'John', amount: 1500 },
  { id: 4, customer: 'Anna', amount: 1100 },
  { id: 5, customer: 'Mike', amount: 800 },
];

const highSpenders = transactions
  .filter((transaction) => transaction.amount > 1000)
  .map((transaction) => transaction.customer)
  .filter(
    (customer, index, currentArr) => currentArr.indexOf(customer) === index
  )
  .sort((a, b) => a.localeCompare(b));

console.log(highSpenders); // ['Anna', 'John', 'Mike']

// Задание 3:
// У тебя есть массив students, каждый из которых принадлежит к какому-то факультету (faculty). Тебе нужно преобразовать этот массив в объект, где ключами будут названия факультетов, а значениями — массивы студентов, которые на них учатся.

const students = [
  { name: 'Alice', faculty: 'History' },
  { name: 'Bob', faculty: 'Physics' },
  { name: 'Charlie', faculty: 'History' },
  { name: 'David', faculty: 'Math' },
  { name: 'Eve', faculty: 'Physics' },
];

const studentsByFaculty = students.reduce((acc, student) => {
  const faculty = student.faculty;

  if (!acc[faculty]) {
    acc[faculty] = [];
  }

  acc[faculty].push(student);

  return acc;
}, {});

console.log(studentsByFaculty);
/*
{
  History: [
    { name: 'Alice', faculty: 'History' },
    { name: 'Charlie', faculty: 'History' }
  ],
  Physics: [
    { name: 'Bob', faculty: 'Physics' },
    { name: 'Eve', faculty: 'Physics' }
  ],
  Math: [
    { name: 'David', faculty: 'Math' }
  ]
}
*/

// Задание 4:
// Тебе нужно написать функцию createDeck(), которая создает и возвращает стандартную колоду из 52 карт. Карта — это строка вида "Туз Пик" ("Ace of Spades").
// Используй два исходных массива: один для мастей (suits), другой для рангов (ranks). Тебе нужно скомбинировать их, чтобы получить полную колоду. Подумай, как можно решить это с помощью изученных методов перебора, а не обычных циклов for.

function createDeck() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const ranks = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];

  const deck = [];

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push(`${rank} of ${suit}`);
    });
  });

  return deck;
}

const deck = createDeck();

console.log(deck.length); // 52
console.log(deck[0]); // "Ace of Hearts"
console.log(deck[51]); // "King of Spades"

// ?? альтернативное решение (через flatMap())
function createDeckFunctional() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const ranks = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];

  return suits.flatMap((suit) => ranks.map((rank) => `${rank} of ${suit}`));
}

// Как это работает:
// 1. Мы вызываем flatMap на массиве мастей suits.
// 2. Для каждой масти (suit), мы запускаем ranks.map, который создает новый массив из 13 карт этой масти (например, ['Ace of Hearts', '2 of Hearts', ...]).
// 3. И тут в дело вступает flatMap: он берет этот созданный массив карт и автоматически "выпрямляет" его, добавляя все 13 карт в итоговый результат. И так для каждой масти.
