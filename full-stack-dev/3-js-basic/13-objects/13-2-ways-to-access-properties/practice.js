// Задание 1:
// Создай объект с именем car.
// У этого объекта должно быть два свойства:
// 1. model со строковым значением (например, "Audi").
// 2. "engine type" со строковым значением (например, "V8").
// После создания объекта выведи в консоль значение свойства "engine type".

const car = {
  model: 'Audi',
  'engine type': 'V8',
};

console.log(car['engine type']); // "V8"

// Задание 2:
// Ниже дан объект file и переменная action.
// Напиши код, который будет выводить в консоль значение того свойства, имя которого хранится в переменной action. То есть, в данном случае, он должен вывести 1024.
// Если ты потом изменишь action на "extension", твой код без исправлений должен будет вывести "pdf".

const file = {
  name: 'document.pdf',
  size: 1024,
  extension: 'pdf',
};

let action = 'size';
console.log(file[action]); // 1024

action = 'extension';
console.log(file[action]); // "pdf"

// Задание 3:
// Есть объект user и массив keysToDisplay, содержащий имена ключей, которые нужно вывести.
// Напиши цикл (подойдет for...of), который переберёт массив keysToDisplay и для каждого ключа из этого массива выведет в консоль его значение из объекта user.

const user = {
  id: 101,
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'admin',
};

const keysToDisplay = ['name', 'role'];

for (const key of keysToDisplay) {
  console.log(user[key]);
}

/*
John Doe
admin
*/

// Задание 4:
// У нас есть объект configuration. Мы хотим динамически обновить одно из его полей.
// Напиши одну строчку кода, которая, используя переменную settingToChange, изменит значение свойства port в объекте configuration на 9000.
// После этого выведи в консоль весь объект configuration, чтобы убедиться, что он изменился.

const configuration = {
  host: 'localhost',
  port: 8080,
  useSSL: false,
};

const settingToChange = 'port';
configuration[settingToChange] = 9000;

console.log(configuration); // { host: 'localhost', port: 9000, useSSL: false }
