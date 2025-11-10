'use strict';

// Задание 1:
// Создайте функцию, которая принимает имя пользователя и возвращает персонализированное приветствие.

function sayHi(name) {
  if (!name || typeof name !== 'string') {
    return '';
  }

  name = name.trim();

  if (name.length > 10) {
    return '';
  }

  return `Привет, ${name}!`;
}

console.log(sayHi('Анна')); // "Привет, Анна!"
console.log(sayHi('Максим')); // "Привет, Максим!"
console.log(sayHi('ВасяИванНиколай')); // ""

// Задание 2:
// Создайте функцию, которая вычисляет площадь прямоугольника по заданным длине и ширине.

function getRectangleArea(width, height) {
  if (!width || typeof width !== 'number') {
    return 0;
  }

  if (!height || typeof height !== 'number') {
    return 0;
  }

  if (width > 1000 || height > 1000) {
    return 0;
  }

  return width * height;
}

console.log(getRectangleArea(5, 3)); // 15
console.log(getRectangleArea(7.5, 2.4)); // 18
console.log(getRectangleArea(9.1, 0)); // 0

// Задание 3:
// Создайте функцию, которая проверяет, является ли переданное число четным.

function isNumEven(num) {
  if (!num || typeof num !== 'number') {
    return false;
  }

  if (!Number.isInteger(num)) {
    return false; // если не целое..
  }

  return num % 2 === 0; // одна строка, if...else не нужен
}

console.log(isNumEven(4)); // true
console.log(isNumEven(7)); // false
console.log(isNumEven(0)); // true
console.log(isNumEven(-2)); // true
console.log(isNumEven(9.9)); // false

// Задание 4:
// Создайте функцию, которая принимает строку и возвращает её длину в символах.

function returnCharLength(str) {
  if (!str || typeof str !== 'string') {
    return 0;
  }

  return str.length;
}

console.log(returnCharLength('JavaScript')); // 10
console.log(returnCharLength('Привет мир!')); // 11
console.log(returnCharLength('')); // 0
console.log(returnCharLength('123 abc')); // 7

// Задание 5:
// Создайте стрелочную функцию, которая принимает два числа и возвращает их произведение.

const multiplyNumbers = (a, b) => {
  if (typeof a !== 'number') {
    return NaN;
  }

  if (typeof b !== 'number') {
    return NaN;
  }

  return a * b;
};

console.log(multiplyNumbers(6, 4)); // 24
console.log(multiplyNumbers(2.5, 3)); // 7.5
console.log(multiplyNumbers(-5, 8)); // -40
console.log(multiplyNumbers(0, 15)); // 0
