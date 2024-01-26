// типы данных
let a = 5;
let b = 5.5;
console.log(typeof a); // number
console.log(typeof b); // number

b = 'новый тип';
console.log(typeof b); // string

let isAdmin = true;
console.log(typeof isAdmin); // boolean

let c;
console.log(typeof c); // undefined

let d = null;
console.log(typeof d); // ? object - it's a language error, it's need to remember (should be null)
