// Задание 1:
// Напиши функцию createLogger(prefix).
// 1. Эта функция должна принимать один аргумент — строку prefix.
// 2. Она должна возвращать новую функцию, которая, в свою очередь, принимает сообщение (message) и выводит в консоль строку в формате: [prefix] message.

function createLogger(prefix) {
  return function (message) {
    return `${prefix} ${message}`;
  };
}

const errorLog = createLogger('[ERROR]');
console.log(errorLog('Произошла ошибка в системе')); // "[ERROR] Произошла ошибка в системе"

const warningLog = createLogger('[WARNING]');
console.log(warningLog('Внимание, память почти заполнена')); // "[WARNING] Внимание, память почти заполнена"

// Задание 2:
// Напиши функцию inBetween(a, b).
// Она должна принимать два числа, a и b, и возвращать новую функцию.
// Эта новая функция должна принимать один аргумент x и возвращать true, если x находится между a и b (включая концы), и false в противном случае.
// Главная цель — показать, как использовать её вместе с методом arr.filter().

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function inBetween(a, b) {
  return function (x) {
    if (x >= a && x <= b) {
      return true;
    }

    return false;
  };
}

let filteredArr = arr.filter(inBetween(3, 6));
console.log(filteredArr); // [3, 4, 5, 6]

// Задание 3:
// Напиши каррированную функцию multiply.
// Она должна позволять перемножать три числа вот таким образом: multiply(a)(b)(c).

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

let result = multiply(2)(3)(4);
console.log(result); // 24
