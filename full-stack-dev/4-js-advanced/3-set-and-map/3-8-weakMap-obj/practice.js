'use strict';

// Задание 1:
// 1. Создай массив messages с парой объектов-сообщений.
// 2. Создай WeakMap для хранения статуса "прочитано".
// 3. Напиши код, который помечает первое сообщение как прочитанное (true).
// 4. Напиши код, который проверяет статус прочтения для первого (должно быть true) и второго (должно быть false или undefined) сообщения и выводит это в консоль.

const messages = [{ text1: 'Hello!' }, { text2: 'Hay!' }];
const messagesWeak = new WeakMap();

messagesWeak.set(messages[0], true);

console.log(messagesWeak.get(messages[0])); // true
console.log(messagesWeak.get(messages[1])); // undefined

// !! Задание 2:
// Логика такая:
// 1. Если результат для этого user уже есть в cache — верни его сразу (не делая вычислений).
// 2. Если нет — "вычисли" (сгенерируй случайное число), запиши в cache и верни.

let cache = new WeakMap();

function calculateUser(user) {
  // 1. Проверь: если user уже есть в cache, верни значение из cache.
  // Твой код здесь...
  if (cache.has(user)) {
    return cache.get(user);
  }

  // 2. Если нет, делаем "вычисления"
  let result = Math.random(); // Имитация сложной работы

  // 3. Запиши result в cache для этого user
  // Твой код здесь...
  cache.set(user, result);

  return result;
}

let bob = { name: 'Bob' };

let result1 = calculateUser(bob); // Должно вычислить (случайное число)
let result2 = calculateUser(bob); // Должно взять из кеша (то же самое число!)

console.log(result1); // 0.2011841727034649
console.log(result2); // 0.2011841727034649
console.log(result1 === result2); // Должно быть true

// Задание 3:
// Есть объект user = { name: "Alex" }.
// 1. Создай WeakMap с именем visits.
// 2. Запиши туда, что user был у нас 5 раз.
// 3. Докажи кодом, что само свойство "5" не находится внутри объекта user (выведи ключи объекта или попробуй обратиться к свойству напрямую), но при этом мы можем получить его из visits.

const user = { name: 'Alex' };
const visits = new WeakMap();

visits.set(user, 5);

console.log(visits); // WeakMap {{…} => 5}
console.log(Object.keys(user)); // [ 'name' ]
console.log(Object.values(user)); // [ 'Alex' ]

console.log(visits.get(user)); // 5
