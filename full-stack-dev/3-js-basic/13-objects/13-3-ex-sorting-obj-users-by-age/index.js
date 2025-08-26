// Дан массив объектов/пользователей, нужно его отсортировать по возрасту, по возрастанию.

const users = [
  { name: 'Вася', age: 30 },
  { name: 'Катя', age: 18 },
  { name: 'Аня', age: 40 },
  { name: 'Петя', age: 25 },
];

const sortUsers = users.sort((a, b) => a.age - b.age);
console.log(sortUsers);

/*
[
  { name: 'Катя', age: 18 },
  { name: 'Петя', age: 25 },
  { name: 'Вася', age: 30 },
  { name: 'Аня', age: 40 }
]
*/
