'use strict';

// Нужно организовать функцию, которая генерирует случайное целое число в заданном min/max диапазоне, включая границы диапазона.

function getRandomNum(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    console.error('Ошибка: Аргументы должны быть числами!');
    return null;
  }

  // что бы наверняка.. можно и такую проверку добавить (хотя и не обязательно)
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(1, 20)); // 5

// проверка корректности диапазона..
console.log(getRandomNum(1, 1)); // 1
console.log(getRandomNum(0, 0)); // 0
