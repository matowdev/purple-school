'use strict';

// Задание 1:
// Напиши функцию высшего порядка createLogger.
// 1. Эта функция должна принимать один аргумент — строку prefix.
// 2. Она должна возвращать новую функцию, которая, в свою очередь, принимает один аргумент — строку message.
// 3. Возвращенная функция должна выводить в консоль сообщение в формате [prefix] message.

function createLogger(prefix) {
  if (!prefix || typeof prefix !== 'string') {
    return '';
  }

  return (message) => {
    if (!message || typeof message !== 'string') {
      return '';
    }

    return `[${prefix}] ${message}`;
  };
}

const infoLogger = createLogger('INFO:');
const errorLogger = createLogger('ERROR:');

console.log(infoLogger('Система успешно запущена')); // [INFO:] Система успешно запущена
console.log(errorLogger('Произошла критическая ошибка')); // [ERROR:] Произошла критическая ошибка

// Задание 2:
// Напиши функцию filterArray, которая:
// Принимает два аргумента:
// 1. arr — массив чисел.
// 2. isEvenCallback — callback-функция.
// Эта isEvenCallback сама принимает одно число и возвращает true, если оно четное, и false, если нечетное.
// Функция filterArray должна вернуть новый массив, содержащий только четные числа из исходного массива arr.
// Важное ограничение: Внутри filterArray нельзя использовать встроенный метод .filter(). Нужно реализовать логику фильтрации самостоятельно, используя цикл.

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;

function filterArray(arr = [], isEvenCallback) {
  if (!arr || arr.length < 1) {
    return [];
  }

  if (!isEvenCallback) {
    return [];
  }

  let evenNum = [];

  for (const num of arr) {
    if (isEvenCallback(num)) {
      evenNum.push(num);
    }
  }

  return evenNum;
}

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // [2, 4, 6]

// Задание 3:
// Напиши функцию createChecker(minLength).
// 1. Она принимает один аргумент — minLength (минимальная длина).
// 2. Она возвращает новую функцию (используем замыкание!).
// 3. Эта новая (возвращенная) функция должна принимать строку и возвращать true, если длина строки больше или равна minLength, и false в противном случае.

const words = ['слово', 'буква', 'предложение', 'звук'];

function createChecker(minLength) {
  if (!minLength || typeof minLength !== 'number') {
    return;
  }

  return (str) => {
    if (!str || typeof str !== 'string') {
      return false;
    }

    if (str.length >= minLength) {
      return true;
    }

    return false;
  };
}

// Создаем "проверщик" с минимальной длиной 5
const isLongEnough = createChecker(5);

// Используем его как колбэк для нативного метода .filter()
const longWords = words.filter(isLongEnough);

console.log(longWords); // ["слово", "предложение"]

// Задание 4:
// Давай создадим более сложный "конструктор" функций.
// Напиши функцию createAdvancedMultiplier(factor).
// 1. Она принимает один аргумент — factor (множитель).
// 2. Она возвращает объект, у которого есть два метода:
// - multiply(arr): Этот метод принимает массив чисел arr и возвращает новый массив, где каждое число умножено на factor. (Используй для решения встроенный метод .map()).
// - getFactor(): Этот метод просто возвращает значение factor, которое было "запомнено" при создании.

function createAdvancedMultiplier(factor) {
  if (!factor || typeof factor !== 'number') {
    return {};
  }

  return {
    multiply: (arr) => arr.map((num) => num * factor),
    getFactor: () => factor,
  };
}

// Создаем "умножитель" на 3
const multiplierX3 = createAdvancedMultiplier(3);

console.log(multiplierX3.getFactor()); // 3

const numbersArr = [1, 10, 20];
const multipliedNumbers = multiplierX3.multiply(numbersArr);

console.log(multipliedNumbers); // [3, 30, 60]

// Создаем "умножитель" на 10
const multiplierX10 = createAdvancedMultiplier(10);
console.log(multiplierX10.multiply([1, 2, 3])); // Выведет: [10, 20, 30]
