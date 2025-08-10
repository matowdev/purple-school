// Переписать функцию power с использованием стрелочных функций.
// function power(pow) {
//   return function (num) {
//     return num ** pow;
//   };
// }

function power(pow) {
  return (num) => num ** pow;
}

// ?? или вообще так..
const newPower = (pow) => (num) => num ** pow;

const getPowerOfNum = power(2);
console.log(getPowerOfNum(5)); // 25
console.log(getPowerOfNum(10)); // 100

console.log(power(3)(5)); // 125
console.log(newPower(2)(9)); // 81
