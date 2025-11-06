'use strict';

// Задание 1:
// Тебе нужно написать функцию maskEmail(email).
// Эта функция должна принимать email (строку) и возвращать его в "замаскированном" виде, чтобы скрыть часть до символа @.
// Правила маскировки:
// 1. Она должна показывать первую букву имени (логина).
// 2. Все остальные символы до @ должны быть заменены на *.
// 3. Вся часть после @ (включая сам @) должна остаться неизменной.
// Примеры:
// maskEmail("brendan.eich@example.com") должна вернуть "b***********@example.com"
// maskEmail("test@gmail.com") должна вернуть "t***@gmail.com"
// maskEmail("a@mail.ru") должна вернуть "a@mail.ru" (так как после первой буквы сразу идет @)
// Подсказка: Для этой задачи тебе, скорее всего, понадобятся indexOf() (чтобы найти @), slice() (чтобы разделить строку на части) и, возможно, repeat() или padStart() для создания звёздочек.

function maskEmail(email) {
  if (!email || typeof email !== 'string') {
    return '';
  }

  if (!email.includes('@')) {
    return '';
  }

  const splitEmail = email.split('@');
  const maskFirstPart = splitEmail[0][0].padEnd(splitEmail[0].length, '*');

  return `${maskFirstPart}@${splitEmail[1]}`;
}

console.log(maskEmail('brendan.eich@example.com')); // "b***********@example.com"
console.log(maskEmail('test@gmail.com')); // "t***@gmail.com"
console.log(maskEmail('a@mail.ru')); // "a@mail.ru"
