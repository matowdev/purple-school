'use strict';

// Задание 1:
// Напишите логику для обработки массива чисел с использованием метода forEach().

let numbers;

if (process.argv.slice(2).length === 0) {
  numbers = [5, 10, 15];
} else {
  numbers = process.argv.slice(2).map(Number);
}

numbers.forEach((num, index) => {
  console.log(`Позиция ${index}: значение ${num}`);
});
/*
Позиция 0: значение 5
Позиция 1: значение 10
Позиция 2: значение 15
*/

// Задание 2:
// Напишите логику для преобразования массива строк в новый массив с использованием метода map().

const items = ['apple', 'banana', 'cherry', 'orange'];

const newItems = items.map((item) => `ITEM: ${item.toUpperCase()}`);
console.log(newItems); // [ 'ITEM: APPLE', 'ITEM: BANANA', 'ITEM: CHERRY', 'ITEM: ORANGE' ]

// Задание 3:
// Напишите логику для поиска первого элемента в массиве, который удовлетворяет заданному условию, согласно find().

const findNumbers = [2, 8, 3, 15, 6];
const threshold = 10;

const result = findNumbers.find((num) => num > threshold);

if (result !== undefined) {
  console.log(result); // 15
} else {
  console.log('Элемент не найден');
}

// !! Задание 4:
// Напишите функцию для группировки чисел по четности/не чётности в объект, с использованием метода reduce().

const reduceNumbers = [1, 2, 3, 4, 5, 6];

function getEvenOddObj(arr) {
  if (!Array.isArray(arr)) {
    return {};
  }

  return arr.reduce(
    (acc, num) => {
      if (num % 2 === 0) {
        acc.even.push(num);
      } else {
        acc.odd.push(num);
      }

      return acc;
    },
    { even: [], odd: [] }
  );
}

console.log(getEvenOddObj(reduceNumbers)); // { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }

// Задание 5:
// Реализуйте логику для сортировки массива чисел по возрастанию с использованием метода sort().

const sortNumbers = [15, 3, 8, 1, 12];
console.log(sortNumbers.sort((a, b) => a - b)); // [ 1, 3, 8, 12, 15 ]

// Задание 6:
// Напишите функцию для подсчета количества элементов в массиве, которые удовлетворяют определенному условию.
// - используйте метод filter() для фильтрации и свойство length для подсчета.
// - выведите результат в консоль в формате "Найдено X строк длиннее 5 символов".

const words = ['cat', 'elephant', 'dog', 'butterfly', 'ant'];

function countCharacters(arr, requiredLength) {
  if (!Array.isArray(arr) || typeof requiredLength !== 'number') {
    return '';
  }

  const filteredArr = arr.filter((word) => word.length > requiredLength);
  const totalWords = filteredArr.length;

  return totalWords;
}

const charResult = countCharacters(words, 5);
console.log(`Найдено ${charResult} строк длиннее 5 символов`); // "Найдено 2 строк длиннее 5 символов"

// !! Задание 7:
// Напишите функцию для создания нового массива из диапазона чисел с использованием Array.from().
// т.е. массив должен быть согласно указанной длинны и начинаться с указанного значения.

function createArrayFrom(startValue, arrLength) {
  if (typeof startValue !== 'number' || typeof arrLength !== 'number') {
    return [];
  }

  return Array.from({ length: arrLength }, (_, index) => index + startValue);
}

console.log(createArrayFrom(5, 4)); // [ 5, 6, 7, 8 ]
console.log(createArrayFrom(-2, 5)); // [ -2, -1, 0, 1, 2 ]

// Задание 8:
// Напишите логику для выпрямления массива, посредствам flat() метода.

const flatArr = [
  [1, 2],
  [3, [4, 5]],
  [6, 7, 8],
];
console.log(flatArr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8]

// Задание 9:
// Напишите функцию для проверки наличия элемента в массиве с использованием метода includes().

const indexArr = ['apple', 'banana', 'orange', 'grape'];

function searchValue(arr, value) {
  if (!Array.isArray(arr) || typeof value !== 'string') {
    return '';
  }

  value = value.trim().toLowerCase();

  if (arr.includes(value)) {
    return 'Элемент найден';
  }

  return 'Элемент не найден';
}

console.log(searchValue(indexArr, 'BanaNA ')); // "Элемент найден"
console.log(searchValue(indexArr, 'fish')); // "Элемент не найден"

// Задание 10:
// Написать функцию для вычисления общей стоимости товаров в корзине с помощью reduce() метода (с применением скидки).

const cart = [
  { name: 'Хлеб', price: 30 },
  { name: 'Молоко', price: 65 },
  { name: 'Яйца', price: 80 },
];
const discount = 10;

function getTotalPrice(cartArr, discount) {
  if (!Array.isArray(cartArr) || typeof discount !== 'number') {
    return '';
  }

  const price = cartArr.reduce((acc, item) => acc + item.price, 0);
  const totalPrice = price * (1 - discount / 100);

  return totalPrice;
}

const totalPrice = getTotalPrice(cart, discount);
console.log(`Общая стоимость: ${totalPrice.toFixed(2)} руб.`); // "Общая стоимость: 157.50 руб."
