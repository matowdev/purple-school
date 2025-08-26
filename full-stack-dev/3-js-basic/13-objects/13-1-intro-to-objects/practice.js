// Задание 1:
// Создайте объект с именем user, у которого будут два свойства:
// 1. name со значением "John"
// 2. age со значением 30
// После создания добавьте в этот объект новое свойство isAdmin со значением true. В конце выведите весь объект user в консоль.

const user = {
  name: 'John',
  age: 30,
};

user.isAdmin = true;

console.log(user); // { name: 'John', age: 30, isAdmin: true }

// Задание 2:
// Добавьте в ваш объект user метод sayHi.
// Этот метод должен выводить в консоль строку: "Hello, my name is John!", используя для этого значение свойства name из этого же объекта.

user.sayHi = function () {
  console.log(`Hello, my name is ${this.name}!`);
};

user.sayHi(); // "Hello, my name is John!"

// Задание 3:
// Напишите отдельную функцию printUserInfo, которая:
// 1. Принимает на вход один аргумент — объект.
// 2. Выводит в консоль все пары "ключ: значение" этого объекта в формате: key: value.

function printUserInfo(object) {
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}

printUserInfo(user);

/*
name: John
age: 30
isAdmin: true
sayHi: function () {
  console.log(`Hello, my name is ${this.name}!`);
}
*/
