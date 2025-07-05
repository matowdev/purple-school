// Задание 1:
// Объяви переменные всех примитивных типов данных и задай им любые значения.
// Затем, с помощью оператора typeof, выведи в консоль тип каждой переменной.

let a = 10;
console.log(typeof a); // number

let b = 'hello';
console.log(typeof b); // string

let c = true;
console.log(typeof c); // boolean

let d;
console.log(typeof d); // undefined

let e = null;
console.log(typeof e); // object

let f = Symbol('id');
console.log(typeof f); // symbol

let g = 10n;
console.log(typeof g); // bigint

// Задание 2:
// Напиши функцию, которая принимает один параметр и выводит в консоль:
// - "undefined value" — если передано undefined
// - "null value" — если передано null
// - "other type" — во всех других случаях

function checkType(param) {
  if (param === undefined) {
    return 'undefined value';
  } else if (param === null) {
    return 'null value';
  } else {
    return 'other type';
  }
}

console.log(checkType(undefined)); // "undefined value"
console.log(checkType(null)); // "null value"
console.log(checkType(0)); // "other type"

// Задание 3:
// Что здесь будет выведено в console&

let x = 100;
let y = a;
y = 200;

console.log(x); // 100

let user1 = { name: 'Петр' };
let user2 = user1;
user2.name = 'Анна';

console.log(user1.name); // "Анна"

// Задание 4:
// Проанализируй код ниже. Какой тип данных будет в console.log для каждой строки?

let value1 = 'Hello';
let value2 = [1, 2, 3];
let value3 = '5' - 3;
let value4 = 1 / 0;

console.log(typeof value1); // string
console.log(typeof value2); // object
console.log(typeof value3); // number
console.log(typeof value4); // number (infinity и NaN - относятся к типу number)
