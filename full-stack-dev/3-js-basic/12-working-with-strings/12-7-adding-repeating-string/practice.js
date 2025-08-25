// Задание 1:
// У тебя есть две переменные: minutes и seconds. Напиши код, который выведет их в формате MM:SS. То есть, если число состоит из одной цифры, перед ним должен стоять ноль.
// Попробуй решить это, используя padStart().

const minutes = 5;
const seconds = 30;

const time1 =
  String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
console.log(time1); // "05:30"

const minutes2 = 15;
const seconds2 = 7;

// или через `шаблонную` строку
const time2 = `${String(minutes2).padStart(2, '0')}:${String(seconds2).padStart(
  2,
  '0'
)}`;
console.log(time2); // "15:07"

// Задание 2:
// Тебе нужно создать "чек" в виде строки. Названия товаров должны быть выровнены по левому краю и занимать 15 символов, дополняясь точками.
// Используй padEnd() для решения.

const item1 = 'Молоко';
const price1 = '99 RUB';

const item2 = 'Хлеб';
const price2 = '45 RUB';

const item3 = 'Шоколадный батончик';
const price3 = '65 RUB';

const receipt1 = `${item1.padEnd(15, '.')} ${price1}`;
const receipt2 = `${item2.padEnd(15, '.')} ${price2}`;
const receipt3 = `${item3.padEnd(15, '.')} ${price3}`;

console.log(receipt1); // "Молоко......... 99 RUB"
console.log(receipt2); // "Хлеб........... 45 RUB"
console.log(receipt3); // "Шоколадный батончик 65 RUB"

// Задание 3:
// Тебе нужно написать функцию maskCreditCard, которая принимает строку (номер карты) и возвращает её в замаскированном виде. Маска должна скрывать все цифры, кроме последних четырех, заменяя их на звездочки.
// Требования:
// 1. Функция должна принимать один аргумент — строку с номером карты.
// 2. Результат должен быть строкой той же длины, что и исходная.
// 3. Видимыми должны остаться только последние 4 символа.
// 4. Скрытая часть должна состоять из символов *.
// Подсказка: Тебе может понадобиться метод для извлечения части строки (например, slice()) в комбинации с одним из методов, которые мы сегодня обсуждали. Подумай, как получить последние 4 цифры, а затем как добавить к ним нужное количество звездочек.

function maskCreditCard(cardNumber) {
  if (!cardNumber) {
    return null;
  }

  const sign = '*';
  const lastNum = cardNumber.slice(-4);
  const residualLength = cardNumber.length - lastNum.length;

  return `${sign.repeat(residualLength)}${lastNum}`;
}

console.log(maskCreditCard('1234567890123456')); // "************3456"
console.log(maskCreditCard('9876543210')); // "******3210"

// ?? альтернативное решение
function maskCreditCardWithPad(cardNumber) {
  const lastFourDigits = cardNumber.slice(-4);
  return lastFourDigits.padStart(cardNumber.length, '*');
}

console.log(maskCreditCardWithPad('1234567890123456')); // "************3456"
console.log(maskCreditCardWithPad('9876543210')); // "******3210"
