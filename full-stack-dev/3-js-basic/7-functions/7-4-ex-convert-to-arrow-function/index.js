// Переписать/преобразовать данную функцию в стрелочную.
// - по возможности в одну строку (с неявным возвратом)

// function toPower(num, power) {
//   const res = num ** power;
//   return res;
// }
//
// console.log(toPower(2, 3)); // 8

const toPower = (num, power) => num ** power;
console.log(toPower(2, 3)); // 8
