// приоритеты операторов
let isSuited = 100 - 10 > 90 - 5;
console.log(isSuited); // true, т.к. 90 > 85

let a = 6 + 10 / 2;
console.log(a); // 11, т.к. 10 / 2 = 5, потом + 6

let b = (6 + 10) / 2;
console.log(b); // 8, т.к. (6 + 10) = 16, потом / 2

let c;
let d;
c = d = 100 + 50;
console.log(d); // 150, т.к. 100 + 50, потом = d
console.log(c); // 150, т.к. c = d (150)
