// Задание 1:
// Напиши код, который использует цикл for...of для подсчета суммы всех чисел в этом массиве:
// const numbers = [10, 20, 30, 40, 50];

const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log(sum); // 150

// Задание 2:
// Дан массив строк:
// const words = ["hello", "world", "javascript", "loop"];
// Используя for...of, напиши код, который создаст новую строку, состоящую только из первых букв каждого слова в массиве.
// Ожидаемый результат в консоли: hwjl

const words = ['hello', 'world', 'javascript', 'loop'];
let newStr = '';

for (const world of words) {
  newStr += world[0];
}

console.log(newStr); // hwjl

// Задание 3:
// Есть массив объектов, представляющих пользователей:
// const users = [
//   { name: 'Erik', isAdmin: true },
//   { name: 'Anna', isAdmin: false },
//   { name: 'John', isAdmin: true }
// ];
// Напиши код, который с помощью for...of и деструктуризации выведет в консоль имена только тех пользователей, у которых свойство isAdmin равно true.

const users = [
  { name: 'Erik', isAdmin: true },
  { name: 'Anna', isAdmin: false },
  { name: 'John', isAdmin: true },
];

for (const { name, isAdmin } of users) {
  if (isAdmin) {
    console.log(name); // "Erik", "John"
  }
}
