// Нужно создать функцию для симуляции броска многогранника “Дайса”, для различных типов: d4, d6, d8, d10, d12, d16, d20.
// - функция должна возвращать случайное число в диапазоне возможных значений для выбранного многогранника. Например, для D6 это числа от 1 до 6 включительно.

'use strict';

function getDiceRoll(diceSide) {
  if (!diceSide || typeof diceSide !== 'string') {
    return NaN;
  }

  const parsedDiceSide = Number(diceSide.toLocaleUpperCase().replace('D', ''));

  if (Number.isNaN(parsedDiceSide) || parsedDiceSide <= 0) {
    return NaN;
  }

  return Math.floor(Math.random() * parsedDiceSide) + 1;
}

console.log(getDiceRoll('d4')); // 2
console.log(getDiceRoll('d6')); // 6
console.log(getDiceRoll('d8')); // 7
console.log(getDiceRoll('d10')); // 9
console.log(getDiceRoll('d16')); // 16
console.log(getDiceRoll('d20')); // 19
