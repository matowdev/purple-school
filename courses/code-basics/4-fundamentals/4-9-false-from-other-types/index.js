// получение false (из других типов)
console.log(Boolean(0)); // false
console.log(Boolean('')); // false

let a;
console.log(a); // undefined
console.log(Boolean(Boolean(undefined))); // false

let b = null;
console.log(b); // null
console.log(Boolean(null)); // false

let c = 'abc';
console.log(Number(c)); // NaN
console.log(Boolean(NaN)); // false
