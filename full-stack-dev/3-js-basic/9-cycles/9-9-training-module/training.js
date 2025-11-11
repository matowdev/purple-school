'use strict';

// Задание 1:
// Напишите функцию для подсчета количества четных чисел в массиве с использованием цикла for.

const numbers1 = [2, 7, 4, 9, 6, 1, 8];
const numbers2 = [1, 3, 5, 7, 9];

function getEvenNum(arr) {
  // ! такой проверки достаточно, т.е. не нужно "тогда" указывать по умолчанию [] и добавлять !arr
  if (!Array.isArray(arr)) {
    return 0; // некорректные входящие данные
  }

  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    }
  }

  return evenCount;
}

console.log(getEvenNum(numbers1)); // 4
console.log(getEvenNum(numbers2)); // 0
console.log(getEvenNum('')); // 0

// Задание 2:
// Напишите функцию для поиска первого элемента в массиве, который больше заданного порогового значения.

let numbers3 = [5, 12, 3, 45, 8, 22];
let threshold = 20;

function getOverNum(arr, threshold) {
  if (!Array.isArray(arr)) {
    return null; // некорректные входящие данные
  }

  if (!threshold || typeof threshold !== 'number') {
    return null; // некорректные входящие данные
  }

  for (const num of arr) {
    if (num > threshold) {
      return num;
    }
  }

  return null; // элемент не найден
}

console.log(getOverNum(numbers3, threshold)); // 45

// Задание 3:
// Напишите функцию для вывода всех элементов двумерного массива построчно с использованием вложенных циклов.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// function outputMatrixNum(matrix) {
//   if (!Array.isArray(matrix)) {
//     return ''; // некорректные входящие данные
//   }
//
//   for (let i = 0; i < matrix.length; i++) {
//     let outputStr = '';
//     for (let j = 0; j < matrix[i].length; j++) {
//       inputStr += `${matrix[i][j]} `;
//     }
//
//     console.log(outputStr.slice(0, -1));
//   }
// }

// ?? альтернативное решение (один цикл, никаких конкатенаций)
function outputMatrixNum(matrix) {
  if (!Array.isArray(matrix)) {
    return ''; // некорректные входящие данные
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}

outputMatrixNum(matrix);
/*
1 2 3
4 5 6
7 8 9
*/

// Задание 4:
// Напишите функцию для подсчета суммы всех элементов массива с использованием цикла while.

// function getArrSum(arr) {
//   if (!Array.isArray(arr)) {
//     return null; // некорректные входящие данные
//   }
//
//   let length = arr.length - 1;
//   let sum = 0;
//
//   while (length >= 0) {
//     sum += arr[length];
//     length--;
//   }
//
//   return sum;
// }

// ?? альтернативное решение (чаще встречающийся паттерн)
function getArrSum(arr) {
  if (!Array.isArray(arr)) {
    return null; // некорректные входящие данные
  }

  let index = 0;
  let sum = 0;

  while (index < arr.length) {
    sum += arr[index];
    index++;
  }

  return sum;
}

console.log(getArrSum([3, 7, -2, 15, 8])); // 31
console.log(getArrSum([10, -5, 20, 0])); // 25

// Задание 5:
// Напишите функцию для поиска максимального элемента в массиве с использованием цикла for...of.

function getHigherNum(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return null; // некорректные входящие данные
  }

  let higherNum = arr[0];

  for (const num of arr) {
    if (num > higherNum) {
      higherNum = num;
    }
  }

  return higherNum;
}

console.log(getHigherNum([12, 45, 3, 67, 23, 8])); // 67
console.log(getHigherNum([-5, -12, -3, -20, -1])); // -1

// Задание 6:
// Напишите функцию для подсчета количества отрицательных чисел в двумерном массиве с использованием вложенных циклов.

function countNegativeNum(arr) {
  if (!Array.isArray(arr)) {
    return 0; // некорректные входящие данные
  }

  let count = 0;

  for (const subArr of arr) {
    if (!Array.isArray(subArr)) {
      continue; // продолжение.. исключение ошибки, если вложенность не []
    }

    for (const num of subArr) {
      if (num < 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(
  countNegativeNum([
    [5, -3, 8],
    [-12, 0, 7],
    [15, -9, -1],
  ])
); // 4
console.log(
  countNegativeNum([
    [10, 20, 30],
    [40, 50, 60],
  ])
); // 0
console.log(countNegativeNum([[-1, 99, 36], false, [18, 33]])); // 1

// Задание 7:
// Напишите функцию для создания нового массива, содержащего только элементы с четными индексами из исходного массива.

function getEvenIndexNewArr(arr) {
  if (!Array.isArray(arr)) {
    return []; // некорректные входящие данные
  }

  const evenIndexArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (i % 2 === 0) {
  //     evenIndexArr.push(arr[i]);
  //   }
  // }

  // ?? в завершающем действии отрабатываем +2 и if блок исключается
  for (let i = 0; i < arr.length; i += 2) {
    evenIndexArr.push(arr[i]);
  }

  return evenIndexArr;
}

console.log(
  getEvenIndexNewArr(['apple', 'banana', 'cherry', 'date', 'elderberry'])
); // [ 'apple', 'cherry', 'elderberry' ]
console.log(
  getEvenIndexNewArr(['cat', 'dog', 'fish', 'bird', 'mouse', 'rabbit'])
); // [ 'cat', 'fish', 'mouse' ]
console.log(getEvenIndexNewArr(['milk'])); // [ 'milk' ]
console.log(getEvenIndexNewArr([])); // []

// Задание 8:
// Напишите функцию для генерации таблицы умножения для заданного числа с использованием цикла for.

let number = 5;

function getMultipleTableForNum(number) {
  if (!number || typeof number !== 'number') {
    return null; // некорректные входящие данные
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

getMultipleTableForNum(number);
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

// Задание 9:
// Напишите функцию для обращения строки (реверса) с использованием цикла for.

let inputString = 'hello world';
let inputString2 = 'JavaScript';

function getReverseStr(str) {
  if (!str || typeof str !== 'string') {
    return ''; // некорректные входящие данные
  }

  let reverseStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log(getReverseStr(inputString)); // "dlrow olleh"
console.log(getReverseStr(inputString2)); // "tpircSavaJ"

// Задание 10:
// Напишите функцию для подсчета количества символов в каждом слове строки с использованием цикла for...in.

function addCharacterCount(str) {
  if (!str || typeof str !== 'string') {
    return ''; // некорректные входящие данные
  }

  for (const i in str) {
    console.log(`Позиция ${i}: ${str[i]}`);
  }
}

addCharacterCount('hello 123');
/*
Позиция 0: h
Позиция 1: e
Позиция 2: l
Позиция 3: l
Позиция 4: o
Позиция 5:
Позиция 6: 1
Позиция 7: 2
Позиция 8: 3
*/
addCharacterCount('abc def');
/*
Позиция 0: a
Позиция 1: b
Позиция 2: c
Позиция 3:
Позиция 4: d
Позиция 5: e
Позиция 6: f
*/
