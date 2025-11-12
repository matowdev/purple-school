'use strict';

// Задание 1:
// Напишите логику, которая принимает строку и символ-разделитель, разбивает строку на массив по этому разделителю, а затем объединяет элементы массива обратно в строку с помощью символа подчеркивания.

let inputString;
let separator;

if (process.argv.slice(2).length === 0) {
  inputString = 'apple,banana,cherry';
  separator = ',';
} else {
  inputString = process.argv[2];
  separator = process.argv[3];
}

const newStr = inputString.split(separator).join('_');
console.log(newStr); // "apple_banana_cherry"

// Задание 2:
// Напишите функцию, которая принимает строку и проверяет, начинается ли она с определенного префикса и заканчивается ли определенным суффиксом.

function checkPrefixSuffix(str, prefix, suffix) {
  if (
    typeof str !== 'string' ||
    typeof prefix !== 'string' ||
    typeof suffix !== 'string'
  ) {
    return '';
  }

  str = str.trim();
  prefix = str.trim();
  suffix = str.trim();

  let isPrefix = false;
  let isSuffix = false;

  if (str.startsWith(prefix)) {
    isPrefix = true;
  }

  if (str.endsWith(suffix)) {
    isSuffix = true;
  }

  return `prefix: ${isPrefix}, suffix: ${isSuffix}`;
}

console.log(checkPrefixSuffix('JavaScript', 'Java', 'Script')); // "prefix: true, suffix: true"
console.log(checkPrefixSuffix('programming', 'pro', 'ing')); // "prefix: true, suffix: true"
console.log(checkPrefixSuffix('hello world', 'hi', 'bye')); // "prefix: false, suffix: false"

// Задание 3:
// Напишите функцию, которая принимает строку и удаляет все пробелы с начала и конца строки, а затем преобразует результат в верхний регистр.

function getModifyStr(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str.trim().toUpperCase();
}

console.log(getModifyStr('  hello world  ')); // "HELLO WORLD"
console.log(getModifyStr('   JavaScript Programming   ')); // "JAVASCRIPT PROGRAMMING"
console.log(getModifyStr('test')); // "TEST"

// Задание 4:
// Напишите функцию, которая принимает строку и число, а затем создает новую строку путем повторения исходной строки указанное количество раз.

function repeatStr(str, quantity) {
  if (typeof str !== 'string' || typeof quantity !== 'number') {
    return '';
  }

  str = str.trim();

  return str.repeat(quantity);
}

console.log(repeatStr('Hello', 3)); // "HelloHelloHello"
console.log(repeatStr('JS', 5)); // "JSJSJSJSJS"
console.log(repeatStr('Code', 2)); // "CodeCode"

// Задание 5:
// Напишите функцию, которая принимает строку и число, а затем дополняет строку символами звездочки (*) до указанной длины, добавляя их в начало строки.

function addSignsToStr(str, length) {
  if (typeof str !== 'string' || typeof length !== 'number') {
    return '';
  }

  str = str.trim();

  return str.padStart(length, '*');
}

console.log(addSignsToStr('hello', 8)); // "***hello"
console.log(addSignsToStr('JS', 6)); // "****JS"
console.log(addSignsToStr('code', 10)); // "******code"

// Задание 6:
// Напишите функцию, которая принимает строку и символ, а затем подсчитывает количество вхождений этого символа в строке.

function characterCount(str, char) {
  if (typeof str !== 'string' || typeof char !== 'string') {
    return null;
  }

  str = str.trim();
  char = char.trim();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(characterCount('programming', 'r')); // 2
console.log(characterCount('JavaScript', 'a')); // 2
console.log(characterCount('hello world', 'l')); // 3

// Задание 7:
// Напишите функцию, которая принимает строку и два числа (начальный и конечный индекс), а затем извлекает подстроку между этими индексами.

function getSubStr(str, startIndex, endIndex) {
  if (
    typeof str !== 'string' ||
    typeof startIndex !== 'number' ||
    typeof endIndex !== 'number'
  ) {
    return null;
  }

  str = str.trim();
  const subStr = str.slice(startIndex, endIndex);

  return subStr;
}

console.log(getSubStr('JavaScript Programming', 4, 10)); // "Script"
console.log(getSubStr('Hello World', 0, 5)); // "Hello"
console.log(getSubStr('Programming', 3, 7)); // "gram"

// Задание 8:
// Напишите функцию, которая принимает строку и заменяет в ней все вхождения одной подстроки на другую подстроку.

function getReplaceStr(str, outSubStr, inSubStr) {
  if (
    typeof str !== 'string' ||
    typeof outSubStr !== 'string' ||
    typeof inSubStr !== 'string'
  ) {
    return '';
  }

  str = str.trim();
  outSubStr = outSubStr.trim();
  inSubStr = inSubStr.trim();

  return str.replaceAll(outSubStr, inSubStr);
}

console.log(getReplaceStr('Hello world, hello universe', 'hello', 'hi')); // "Hello world, hi universe"
console.log(
  getReplaceStr('JavaScript is great, JavaScript rocks', 'JavaScript', 'Python')
); // "Python is great, Python rocks"
console.log(getReplaceStr('apple apple banana apple', 'apple', 'orange')); // "orange orange banana orange"

// Задание 9:
// Напишите функцию, которая принимает строку и находит индекс первого вхождения определенного символа в этой строке.

function getSubStrIndex(str, subStr) {
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    return null;
  }

  str = str.trim();
  subStr = subStr.trim();

  return str.indexOf(subStr);
}

console.log(getSubStrIndex('programming', 'g')); // 3
console.log(getSubStrIndex('JavaScript', 'S')); // 4
console.log(getSubStrIndex('hello world', 'x')); // -1

// Задание 10:
// Напишите функцию, которая принимает строку и проверяет, содержит ли она определенную подстроку.

function hasSubStr(str, subStr) {
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    return null;
  }

  str = str.trim();
  subStr = subStr.trim();

  return str.includes(subStr);
}

console.log(hasSubStr('JavaScript Programming', 'Script')); // true
console.log(hasSubStr('Hello World', 'Python')); // false
console.log(hasSubStr('web development', 'dev')); // true
