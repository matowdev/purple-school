'use strict';

// Задание 1:
// Поработайте с массивом чисел, получите следующие элементы/данные:
// - Первый элемент массива.
// - Последний элемент массива (используя array.length).
// - Элемент с индексом 3.
// - Длина массива.
// - Последний элемент массива (используя метод at()).
// - Первый элемент массива (используя метод at()).

const exArr = [15, 28, 42, 7, 91, 33, 56];

console.log(exArr[0]); // 15
console.log(exArr[exArr.length - 1]); // 56
console.log(exArr[3]); // 7
console.log(exArr.length); // 7
console.log(exArr.at(-1)); // 56
console.log(exArr.at(0)); // 15

// Задание 2:
// Найдите элементы используя indexOf() и includes() методы:

const fruitsArr = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log(fruitsArr.indexOf('orange')); // 2
console.log(fruitsArr.includes('orange')); // true
console.log(fruitsArr.indexOf('mango')); // -1
console.log(fruitsArr.includes('mango')); // false

// Задание 3:
// Попрактикуйтесь в поочерёдном объединении массивов (трёх), с помощью concat() метода:

const firstArray = [10, 20];
const secondArray = [30, 40, 50];
const thirdArray = [60];

const initConcat = firstArray.concat(secondArray); // [ 10, 20, 30, 40, 50 ]
const totalConcat = initConcat.concat(thirdArray); // [ 10, 20, 30, 40, 50, 60 ]

console.log(totalConcat.length); // 6
console.log(totalConcat.at(0)); // 10
console.log(totalConcat.at(-1)); // 60

// Задание 4:
// Попрактиковаться с методами split() и join().

const inputString = 'JavaScript-это-мощный-язык-программирования';

const strArr = inputString.split('-');
console.log(strArr); // [ 'JavaScript', 'это', 'мощный', 'язык', 'программирования' ]
console.log(strArr.length); // 5

const underscoreStr = strArr.join('_');
console.log(underscoreStr); // "JavaScript_это_мощный_язык_программирования"

console.log(strArr.at(0)); // "JavaScript"
console.log(strArr.at(-1)); // "программирования"

// Задание 5:
// Попрактиковаться с методами push/pop(), shift/unshift().

const initArr = [100, 200, 300];

initArr.push(400);
console.log(initArr); // [ 100, 200, 300, 400 ]
console.log(initArr.length); // 4

console.log(initArr.pop()); // 400
console.log(initArr); // [ 100, 200, 300 ]

initArr.unshift(50);
console.log(initArr); // [ 50, 100, 200, 300 ]

console.log(initArr.shift()); // 50
console.log(initArr); // [ 100, 200, 300 ]

// Задание 6:
// Попрактиковаться с методом slice().

const sliceArr = [5, 12, 8, 130, 44, 25, 67];

console.log(sliceArr.slice(2)); // [ 8, 130, 44, 25, 67 ]
console.log(sliceArr.slice(1, 4)); // [ 12, 8, 130 ]
console.log(sliceArr.slice(-3)); // [ 44, 25, 67 ]
console.log(sliceArr.slice(-5, -2)); // [ 8, 130, 44 ]

console.log(sliceArr.length); // 7

// Задание 7:
// Создайте копию массива, посредствам slice().

const initStrArr = ['red', 'green', 'blue', 'yellow', 'purple'];

const copyStrArr = initStrArr.slice();
console.log(copyStrArr); // [ 'red', 'green', 'blue', 'yellow', 'purple' ]

console.log(initStrArr[0] === copyStrArr[0]); // true
console.log(initStrArr.length); // 5
console.log(copyStrArr.length); // 5

copyStrArr.push('orange');
console.log(initStrArr); // [ 'red', 'green', 'blue', 'yellow', 'purple' ]
console.log(copyStrArr); // [ 'red', 'green', 'blue', 'yellow', 'purple', 'orange' ]

// Задание 8:
// Попрактикуйтесь с методом reverse().

const revArr = [45, 78, 12, 89, 34];

revArr.reverse();
console.log(revArr); // [ 34, 89, 12, 78, 45 ]
console.log(revArr.length); // 5
console.log(revArr.at(0)); // 34
console.log(revArr.at(-1)); // 45
