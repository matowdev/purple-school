'use strict';

// Задание 1:
// Создайте функцию высшего порядка, которая принимает число и возвращает новую функцию для умножения на это число.

function createMultiplier(multiplier) {
  if (typeof multiplier !== 'number') {
    return null; // если.. некорректные входные данные
  }

  return (num) => {
    if (typeof num !== 'number') {
      return null; // если.. некорректные входные данные
    }

    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(''); // "Вернулась не функция!"
if (triple) {
  console.log(triple(3));
} else {
  console.log('Вернулась не функция!');
}

// Задание 2:
// Создайте функцию, которая принимает callback-функцию и два числа, а затем применяет эту callback-функцию к этим числам.

function processNumbers(x, y, callback) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }

  if (typeof callback !== 'function') {
    return () => {};
  }

  return callback(x, y);
}

console.log(processNumbers(5, 3, (x, y) => x + y)); // 8
console.log(processNumbers(10, 4, (x, y) => x - y)); // 6

// Задание 3:
//  Создайте функцию, которая принимает строку и возвращает новую функцию для проверки, содержит ли переданная ей строка заданный текст.

function createContainsChecker(searchText) {
  searchText = searchText.trim();
  return (str) => str.trim().includes(searchText);
}

const hasHello = createContainsChecker('hello');
console.log(hasHello('hello world')); // true

// Задание 4:
// Создайте функцию, которая принимает число и возвращает новую функцию для сравнения чисел с этим значением.

function createComparator(x) {
  return (y) => y > x;
}

const isGreaterThan5 = createComparator(5);
console.log(isGreaterThan5(8)); // true

// Задание 5:
// Создайте функцию, которая принимает функцию-предикат и возвращает новую функцию для фильтрации массивов по этому условию.

function createFilter(predicate) {
  if (typeof predicate !== 'function') {
    return () => {};
  }

  return (arr) => {
    if (!Array.isArray(arr)) {
      return null;
    }

    const filteredArr = [];

    for (const el of arr) {
      if (predicate(el)) {
        filteredArr.push(el);
      }
    }

    return filteredArr;
  };
}

const filterPositive = createFilter((x) => x > 0);
console.log(filterPositive([1, -2, 3, -4, 5])); // [ 1, 3, 5 ]

// Задание 6:
// Создайте функцию, которая принимает начальное значение и возвращает новую функцию для накопления суммы.

function createAccumulator(initSum) {
  if (typeof initSum !== 'number') {
    return () => {};
  }

  return (num) => {
    if (typeof num !== 'number') {
      return NaN;
    }

    return (initSum += num);
  };
}

const acc = createAccumulator(10);
console.log(acc(5)); // 15
console.log(acc(3)); // 18

const acc2 = createAccumulator('');
console.log(acc2); // [Function (anonymous)]
console.log(acc2(5)); // undefined

// Задание 7:
// Создайте функцию, которая принимает два числа и возвращает новую функцию для проверки, находится ли переданное ей число в диапазоне между этими значениями.

function createRangeChecker(minRange, maxRange) {
  if (typeof minRange !== 'number' || typeof maxRange !== 'number') {
    return () => {};
  }

  return (num) => {
    if (typeof num !== 'number') {
      return NaN;
    }

    return num >= minRange && num <= maxRange;
  };
}

const inRange = createRangeChecker(10, 20);
console.log(inRange(15)); // true

const inRange2 = createRangeChecker(10, true);
console.log(inRange2); // [Function (anonymous)]
console.log(inRange2(99)); // undefined
