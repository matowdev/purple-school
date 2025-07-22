// Задание 1:
// У нас есть объект greeter, который должен приветствовать каждого из списка names. Но сейчас он не работает, потому что this.greeting внутри forEach определяется как undefined.
// Исправь код, заменив всего одну вещь — обычную функцию внутри forEach на стрелочную. Это должно заставить код работать правильно.

// const greeter = {
//   greeting: 'Hello',
//   names: ['John', 'Jane'],
//   greet() {
//     this.names.forEach(function (name) {
//       // Проблема вот здесь. 'this' теряется.
//       console.log(this.greeting + ', ' + name);
//     });
//   },
// };

// greeter.greet(); // Сейчас выводит "undefined, John" и "undefined, Jane"

const greeter = {
  greeting: 'Hello',
  names: ['John', 'Jane'],
  greet() {
    this.names.forEach((name) => {
      console.log(this.greeting + ', ' + name);
    });
  },
};

greeter.greet();

/*
Hello, John
Hello, Jane
*/

// Задание 2:
// Представь, что у тебя есть массив объектов, каждый из которых представляет пользователя.
// Напиши функцию getUserNames. Она должна принимать массив users и возвращать новый массив, содержащий только имена пользователей. Используй метод .map() и максимально короткий синтаксис стрелочной функции.
// Как будет выглядеть твоя реализация функции getUserNames?

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 },
// ];

// Здесь должен быть твой код
// const getUserNames = ...

// Проверка
// const names = getUserNames(users);
// console.log(names); // Ожидаемый результат: ['Alice', 'Bob', 'Charlie']

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

// ?? первое решение
// const getUserNames = function (users) {
//   const namesArr = [];
//
//   for (let i = 0; i < users.length; i++) {
//     namesArr.push(users[i].name);
//   }
//
//   return namesArr;
// };

const getUserNames = (users) => users.map((user) => user.name);

const names = getUserNames(users);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Задание 3:
// Напиши функцию formatProducts. Она должна преобразовать массив products в новый массив, где каждый объект имеет другую структуру: свойство name должно стать label, а price — cost.
// Постарайся сделать это с помощью .map() и однострочной стрелочной функции. Вспомни, как правильно вернуть объект в кратком синтаксисе.

// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Mouse', price: 25 },
//   { name: 'Keyboard', price: 75 }
// ];

// Твой код для функции formatProducts
// const formatProducts = ...

// Проверка
// const formatted = formatProducts(products);
// console.log(formatted);
/* Ожидаемый результат:
[
  { label: 'Laptop', cost: 1200 },
  { label: 'Mouse', cost: 25 },
  { label: 'Keyboard', cost: 75 }
]
*/

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
];

const formatProducts = (products) =>
  products.map((product) => ({ label: product.name, cost: product.price }));

const formatted = formatProducts(products);
console.log(formatted); // [{ label: 'Laptop', cost: 1200 }, { label: 'Mouse', cost: 25 }, { label: 'Keyboard', cost: 75 }]
