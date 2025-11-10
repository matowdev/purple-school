'use strict';

// Задание 1:
// Напишите функцию filterArray(arr, callback).
// 1. Она должна принимать массив arr и callback-функцию.
// 2. callback принимает один элемент массива и возвращает true, если элемент "хороший", и false, если он "плохой".
// 3. Ваша функция filterArray должна вернуть новый массив, содержащий только "хорошие" элементы.
// 3. Ограничение: Не используйте встроенный .filter(). Используйте цикл (например, for...of).

const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;

function filterArray(arr = [], callback) {
  if (!arr) {
    return [];
  }

  const evenArr = [];

  for (const num of arr) {
    if (callback(num)) {
      evenArr.push(num);
    }
  }

  return evenArr;
}

console.log(filterArray(numbers, isEven)); // [2, 4]

// Задание 2:
// Напишите функцию-фабрику createMultiplier(factor).
// 1. Она должна принимать один аргумент factor (число-множитель).
// 2. Она должна возвращать новую функцию.
// 3. Эта новая функция, в свою очередь, должна принимать один аргумент number (число).
// 4. При вызове новая функция должна возвращать результат умножения number на factor, который она "запомнила".

function createMultiplier(factor) {
  if (!factor || typeof factor !== 'number') {
    return () => {}; // или null можно вернуть.. но НЕ NaN как я хотел, т.к. идёт возврат функций
  }

  return (number) => {
    if (!number || typeof number !== 'number') {
      return () => {}; // или null можно вернуть.. но НЕ NaN как я хотел, т.к. идёт возврат функций
    }

    return number * factor;
  };
}

const multiplyByFive = createMultiplier(5);

console.log(multiplyByFive(10)); // 50
console.log(multiplyByFive(3)); // 15
console.log(createMultiplier(2)(8)); // 16

// Задание 3:
// Давайте объединим то, что мы только что сделали, со встроенными функциями высшего порядка. Это очень распространенный паттерн (как arr.filter(inBetween(3, 6)) в вашем уроке ).
// 1. Возьмите вашу функцию createMultiplier(factor) из предыдущей задачи.
// 2. Создайте массив const numbers = [10, 20, 30];.
// 3. Создайте "специализированную" функцию const triple = createMultiplier(3);.
// 4. Теперь, используя метод .map() и передав ему напрямую вашу функцию triple, получите новый массив, в котором каждое число утроено.

const arr = [10, 20, 30];
const triple = createMultiplier(3);

const tripleArr = arr.map(triple);
console.log(tripleArr); // [30, 60, 90]

// Задание 4:
// Напишите функцию fetchUserData(callback), которая имитирует запрос на сервер:
// 1. Она принимает callback-функцию.
// 2. Внутри она должна сгенерировать const randomNum = Math.random();.
// 3. Имитируйте задержку в 1 секунду с помощью setTimeout.
// 4. Логика внутри setTimeout:
// - Успех: Если randomNum > 0.5, вызовите callback, передав null (для ошибки) и "успешные" данные (например, { name: 'Alice', id: 1 }).
// - Ошибка: Если randomNum <= 0.5 (используйте else для надежности!), вызовите callback, передав new Error('Server error') (для ошибки) и null (для данных).
// 5. Вызов: Вызовите fetchUserData и передайте ей колбэк, который правильно обрабатывает оба случая ("Error-first"):
// - Если err есть, он должен вывести в консоль сообщение об ошибке (например, err.message).
// - Если err нет, он должен вывести в консоль полученные data.
// Подсказка: Вспомните, как выглядел outputData(err, data) в вашем уроке 10.2 .

function fetchUserData(callback) {
  const randomNum = Math.random();

  setTimeout(() => {
    if (randomNum > 0.5) {
      callback(null, { name: 'Alice', id: 1 });
    } else {
      callback(new Error('Server error'), null);
    }
  }, 1000);
}

fetchUserData((err, data) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(data); // можно и без else блока.. просто console.log(data);
  }
});
