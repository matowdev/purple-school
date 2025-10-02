'use strict';

// Задание 1:
// У нас есть объект counter. У него есть свойство count и метод increment, который увеличивает это свойство на единицу.
// Твоя задача: Добавить в этот объект новый метод incrementAfterDelay(delay). Этот метод должен принимать delay (задержку в миллисекундах) и вызывать оригинальный метод increment спустя указанное время.
// Намёк/Предупреждение: setTimeout — это функция, которая вызывает переданный ей колбэк в "особых условиях". Подумай, чему будет равен this внутри функции, когда setTimeout её вызовет, и как это можно исправить.

const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
};

function incrementAfterDelay(delay) {
  setTimeout(() => this.increment(), delay);
}

counter.incrementAfterDelay = incrementAfterDelay;

counter.incrementAfterDelay(1000); // 1

// ?? пример отработки/увязки с bind() методом
const newCounter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
  incrementAfterDelay(delay) {
    setTimeout(this.increment.bind(this), delay);
  },
};

newCounter.incrementAfterDelay(2000); // 1

// Задание 2:
// Напиши функцию createLogger(prefix). Эта функция должна принимать один аргумент — строку prefix. В результате своего вызова она должна возвращать другую функцию.
// Возвращённая функция, в свою очередь, должна принимать один аргумент — строку message — и выводить в консоль сообщение в формате: [prefix] message.
// Эта задача проверит твоё понимание того, как вложенные функции "помнят" переменные из своей родительской области видимости.

function createLogger(prefix) {
  if (!prefix || typeof prefix !== 'string') {
    return '';
  }

  return (message) => {
    if (!message || typeof message !== 'string') {
      return '';
    }

    return `${prefix} ${message}`;
  };
}

const warningLogger = createLogger('[WARNING]:');
console.log(warningLogger('Что-то пошло не так!')); // "[WARNING]: Что-то пошло не так!"

const infoLogger = createLogger('[INFO]:');
console.log(infoLogger('Это информационное сообщение.')); // "[INFO]: Это информационное сообщение."

// Задание 3:
// У нас есть объект user и отдельная функция greet.
// Твоя задача:
// Не меняя код объекта user или функции greet, напиши два вызова функции greet, чтобы в консоли появились следующие строки:
// 1. "Привет, Анна!"
// 2. "До свидания, Анна."
// Подсказка: Используй два разных метода для привязки контекста, которые мы обсуждали в теории. Один для первого вызова, другой — для второго.

const user = {
  name: 'Анна',
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.call(user, 'Привет', '!'); // "Привет, Анна!"
greet.apply(user, ['До свидания', '.']); // "До свидания, Анна."

// Задание 4:
// Напиши функцию calculate(operation, ...numbers).
// - Первый аргумент operation — это строка, которая может быть либо "+", либо "-".
// - Все остальные аргументы (...numbers) — это числа.
// Функция должна:
// - Если operation равно "+", вернуть сумму всех чисел.
// - Если operation равно "-", вернуть разность (результат последовательного вычитания всех чисел из первого числа).
// - Если operation — что-то другое, вернуть null.
// Эта задача проверит твоё умение работать с ...rest параметрами и строить базовую логику.

function calculate(operation, ...numbers) {
  if (!operation) {
    return null;
  }

  if (operation === '+') {
    return numbers.reduce((acc, num) => acc + num, 0);
  } else if (operation === '-') {
    return numbers.reduce((acc, num) => acc - num);
  } else {
    return null;
  }
}

console.log(calculate('+', 10, 20, 30)); // 60
console.log(calculate('-', 100, 10, 20)); // 70 (100 - 10 - 20)
console.log(calculate('*', 5, 5)); // null
