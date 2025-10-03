'use strict';

// Задание 1:
// Напишите функцию calculateAverage(numbers), которая принимает массив чисел и возвращает их среднее арифметическое. Если массив пустой, функция должна вернуть 0. Используйте любой из изученных циклов для решения.

const numbers = [1, 7, 99];

function calculateAverage(numbers = []) {
  if (!numbers || numbers.length < 1) {
    return 0;
  }

  let sum = 0;

  for (const num of numbers) {
    sum += num;
  }

  return Math.round(sum / numbers.length);
}

console.log(calculateAverage(numbers)); // 36

// Задание 2:
// Напишите функцию guessTheNumber(). Внутри этой функции генерируется случайное целое число от 1 до 10. Затем, используя цикл while, функция должна запрашивать у пользователя число через prompt до тех пор, пока пользователь не угадает число.
// - Если догадка пользователя меньше загаданного числа, выведите в alert сообщение "Больше!".
// - Если догадка больше — "Меньше!".
// - Когда пользователь угадает, выведите в alert сообщение "Вы угадали!" и завершите цикл.
// Подсказка: Чтобы сгенерировать случайное целое число от 1 до 10, можно использовать конструкцию:
// const secretNumber = Math.floor(Math.random() * 10) + 1;

function guessTheNumber() {
  const secretNumber = Math.floor(Math.random() * 10) + 1; // рандомное число от 0 до 10

  while (true) {
    let answer = +prompt('Угадайте число, от 1 до 10:');

    if (answer < secretNumber) {
      alert('Больше!');
    }

    if (answer > secretNumber) {
      alert('Меньше!');
    }

    if (answer === secretNumber) {
      alert('Вы угадали!');
      break;
    }
  }
}

guessTheNumber();

// Задание 3:
// Напишите функцию printPyramid(height), которая принимает число height (высоту) и рисует в консоли "пирамиду" из звёздочек.
// Например, вызов printPyramid(5) должен вывести в консоль:
//     *
//    ***
//   *****
//  *******
// *********
// Предупреждение/Намёк: Эта задача специально создана для того, чтобы вы поработали с вложенными циклами. Подумайте, как внешний цикл может отвечать за строки, а внутренний — за формирование символов в каждой строке (и пробелов, и звёздочек).

function printPyramid(height) {
  if (!height || typeof height !== 'number') {
    return false;
  }

  for (let i = 1; i <= height; i++) {
    let str = '';

    // добавление пробелов, 4, 3, 2.. 0
    for (let j = 1; j <= height - i; j++) {
      str += ' ';
    }

    // добавление звёздочек (после пробелов.. в туже строку)
    for (let j = 1; j <= i - 1 + i; j++) {
      str += '*';
    }

    console.log(str); // вывод строки после каждой i итерации
  }
}

printPyramid(5);
//     *
//    ***
//   *****
//  *******
// *********

// Задание 4:
//  Напишите функцию formatObject(obj), которая принимает объект и возвращает массив строк, где каждая строка представляет собой пару "Ключ: Значение". Первая буква ключа должна быть заглавной.
// Например, вызов formatObject({ name: 'Alex', age: 30, city: 'riga' }) должен вернуть:
// [
//   "Name: Alex",
//   "Age: 30",
//   "City: riga"
// ]
// Подсказка: Для перебора ключей объекта лучше всего подойдёт цикл for...in.

function formatObject(obj = {}) {
  if (!obj || Object.keys(obj).length < 1) {
    return [];
  }

  let strArr = [];

  for (const key in obj) {
    strArr.push(`${key[0].toUpperCase() + key.slice(1)}: ${obj[key]}`);
  }

  return strArr;

  // ?? альтернативное решение
  // return Object.entries(obj).map(
  //   ([key, value]) => `${key[0].toUpperCase() + key.slice(1)}: ${value}`
  // );
}

console.log(formatObject({ name: 'Alex', age: 30, city: 'riga' })); // [ 'Name: Alex', 'Age: 30', 'City: riga' ]

// Задание 5:
// Напишите функцию checkTransactionHistory(balance, transactions).
// - Она принимает начальный баланс balance (число) и историю транзакций transactions (массив чисел).
// - Положительные числа в массиве — это доходы, отрицательные — расходы.
// - Функция должна проверить, опускался ли баланс хотя бы раз ниже нуля в процессе проведения всех транзакций.
// - Если баланс в какой-то момент становится отрицательным, функция должна немедленно прекратить работу и вернуть false.
// - Если все транзакции успешно проведены и баланс ни разу не был отрицательным, функция должна вернуть true.
// Пример 1 (неудачный исход):
// checkTransactionHistory(100, [20, -50, -80, 10])
// - Баланс: 100 -> 120 -> 70 -> -10. В этот момент проверка останавливается.
// - Функция должна вернуть false.
// Пример 2 (удачный исход):
// checkTransactionHistory(50, [-20, -10, 40, -50])
// - Баланс: 50 -> 30 -> 20 -> 60 -> 10. Все транзакции прошли, баланс всегда был >= 0.
// - Функция должна вернуть true

function checkTransactionHistory(balance, transactions = []) {
  if (!balance || typeof balance !== 'number') {
    return false;
  }

  if (!transactions || transactions.length < 1) {
    return true;
  }

  for (const transaction of transactions) {
    balance += transaction; // такая запись будет корректно обрабатывать, как и плюсовые, так и минусовые операции

    if (balance < 0) {
      return false;
    }
  }

  return true;
}

console.log(checkTransactionHistory(100, [20, -50, -80, 10])); // false
console.log(checkTransactionHistory(50, [-20, -10, 40, -50])); // true
