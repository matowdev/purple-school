'use strict';

// Задание 1:
// Что будет выведено в alert(phrase)?

function sayHi() {
  var phrase = 'Привет!';

  alert(phrase); // Привет!
}

sayHi();
alert(phrase); // В alert буде - undefined, а в console - ReferenceError: phrase is not defined

// Задание 2:
// А что здесь будет в alert(phrase)?

if (true) {
  var phrase = 'Привет, ещё раз!';
  alert(phrase); // Привет, ещё раз!
}

alert(phrase); // Привет, ещё раз!

// Задание 3:
// https://bigfrontend.dev/problem/find-the-single-integer
// Имея массив целых чисел, все числа появляются дважды, кроме одного, сможете ли вы быстро найти его?

const arr = [10, 2, 2, 1, 0, 0, 10];

function findSingle(arr = []) {
  const initSum = arr.reduce((acc, num) => acc + num, 0); // сумма 25
  const setSum = [...new Set(arr)].reduce((acc, num) => acc + num * 2, 0); // сумма 26

  return setSum - initSum;
}

// ? альтернативное решение (через побитовый оператор XOR (^))
function findSingleXOR(arr = []) {
  return arr.reduce((acc, num) => acc ^ num, 0);
}

console.log(findSingleXOR(arr)); // 1

// ! Логика XOR, побитового оператора (^):
// Любое число XOR само на себя равно 0 (например, 10 ^ 10 = 0).
// Любое число XOR 0 равно самому себе (например, 1 ^ 0 = 1).
// Когда вы применяете reduce с оператором ^ ко всему массиву, все парные числа "схлопываются" в 0, и в конце остается только одиночное число.

// ? альтернативное решение (через объект)
// function findSingle(arr = []) {
//   const obj = {};
//
//   for (const num of arr) {
//     if (!obj[num]) {
//       obj[num] = 1;
//     } else {
//       obj[num] += 1;
//     }
//   }
//
//   for (const key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
// }

console.log(findSingle(arr)); // 1

// Задание 4:
// https://bigfrontend.dev/problem/create-a-counter-object
// Создайте объект со свойством count, которое увеличивается при каждом доступе к count, начальное значение равно 0.

function createCounter() {
  class Obj {
    constructor() {
      this.counter = 0;
    }

    get count() {
      this.counter = this.counter + 1;
      return this.counter;
    }

    set count(value) {
      if (value > 10) {
        console.error('Prohibited');
        return;
      }

      this.counter = value;
      return this.counter;
    }
  }

  return new Obj();
}

const counter = createCounter();
console.log(counter.count); // 0, then it should increment
console.log(counter.count); // 1
console.log(counter.count); // 2
counter.count = 100;
counter.count = 9;
console.log(counter.count);
