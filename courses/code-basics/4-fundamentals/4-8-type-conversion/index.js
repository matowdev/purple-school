// преобразование типов данных
let age = '18';
console.log(age + 3); // '183' - строкой, момент/правило конкатенации
console.log(Number(age) + 5); // 23, число
console.log(age - 2); // 16, число

let userName = 'Вася';
console.log(Number(userName) + 5); // NaN, т.к. явная строка не преобразовывается к явному числу
console.log(typeof NaN); // number

console.log(String(3) + 7); // '37', строка
console.log(Boolean('abc') + 10); // 11, т.к. Boolean('abc') - это true, а true - это 1
console.log(true + 2); // 3

let a = 2 + '10';
console.log(a - 10); // 200, т.к. первично a = '210', потом преобразование в число 210 - 10 = 200
