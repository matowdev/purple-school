// Задание 1:
// Напиши выражение на JavaScript, в котором результат сложения и деления будет отличаться в зависимости от того, используешь ли ты скобки.

let a = 6 + 2 / 2;
console.log(a); // 7

let b = (6 + 2) / 2;
console.log(b); // 4

// Задание 2:
// Что будет выведено в консоль в примере ниже?

let x = 5;
let y = 10;
let z = 15;

let result = (x += y *= z - x / 5); // сразу деление, потом вычитание..
console.log(result); // 145
console.log(y); // 140

// Задание 3:
// Не запуская код, попробуй определить, какое значение окажется в переменной result?

let c = 5;
let sum = 10 + c++;
console.log(sum); // 15, получается так: взять 10 и значение c (которое равно 5) -> сложить 10 + 5 -> присвоить 15 в sum -> увеличить c до 6.

// Задание 4:
// Каким будет итоговое значение в переменной order?

let order = (10 + 5) * 2 > 20 && 10 / 2 === 5; // 15 * 2.. 10 / 2.. true.. true.. true
console.log(order); // true
