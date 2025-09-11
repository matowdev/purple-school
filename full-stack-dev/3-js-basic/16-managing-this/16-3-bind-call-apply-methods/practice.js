'use strict';

// Задание 1:
// Как, используя call или apply, можно "одолжить" метод forEach у настоящего массива и заставить его работать с псевдомассивом arguments?

function showAll() {
  // Array.prototype.forEach.call(arguments, (arg) => {
  //   console.log(arg);
  // });
  // ?? или так, просто.. литеральная запись [] и далее одолжаем метод forEach() и вызываем для arguments
  [].forEach.call(arguments, (arg) => {
    console.log(arg);
  });
}

showAll('Привет', 'мир', '!'); // Привет мир !

// Задание 2:
// У вас есть объект logger, который должен добавлять префикс ко всем сообщениям. А также есть сторонняя, очень простая функция print, которая просто выводит в консоль всё, что ей передали.
// Ваша задача: Реализовать метод logger.log, не меняя функцию print. Внутри logger.log вы должны использовать (вызвать) функцию print таким образом, чтобы она вывела сначала префикс из logger, а затем все остальные аргументы.
// Как вы решите эту задачу с помощью call или apply?

function print(...args) {
  console.log(...args);
}

const logger = {
  prefix: 'INFO:',
  log(...args) {
    // print.apply(logger, [this.prefix, ...args]);
    print.apply(null, [this.prefix, ...args]); // можно не указывать объект/logger, т.к. в print нет отработки this
  },
};

logger.log('Пользователь залогинился', 'ID: 123'); // "INFO: Пользователь залогинился ID: 123"
logger.log('Данные успешно сохранены'); // "INFO: Данные успешно сохранены"

// Задание 3:
// Представьте, что у вас есть одна универсальная функция для отправки уведомлений на сайте: sendNotification(type, message, duration).
// Ваша задача: На основе этой одной функции создать две новые, более специализированные:
// 1. sendErrorNotification: должна принимать только message и duration, а type у неё всегда должен быть 'error'.
// 2. sendSuccessNotification: должна принимать только message, а type у неё всегда 'success' и duration всегда 5000.
// Используйте bind, где это возможно. Если bind не подходит, используйте другой метод.

function sendNotification(type, message, duration) {
  console.log(`[${type}] ${message} (будет видно ${duration}ms)`);
}

const sendErrorNotification = sendNotification.bind(null, 'error');
const sendSuccessNotification = (message) => {
  sendNotification('success', message, 5000);
}; // ?? пример custom функции обвёртки.. в bind(), нельзя пропустить параметр

sendErrorNotification('Не удалось загрузить данные', 3000); // [error] Не удалось загрузить данные (будет видно 3000ms)
sendSuccessNotification('Профиль успешно обновлён'); // [success] Профиль успешно обновлён (будет видно 5000ms)

// Задание 4:
// У нас есть объект calculator с методом add, который должен складывать числа. Сам calculator не умеет складывать, но у него есть доступ к универсальной функции sum, которая принимает массив чисел и возвращает их сумму.
// Ваша задача: Реализовать метод calculator.add. Он должен принимать любое количество чисел в качестве аргументов. Внутри этого метода вам нужно вызвать глобальную функцию sum, передав ей все аргументы, полученные методом add.
// Используйте call или apply для решения.

function sum(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const calculator = {
  add(...args) {
    return sum.call(null, args);
  },
};

const result1 = calculator.add(1, 2, 3);
console.log(result1); // 6

const result2 = calculator.add(10, 20, 30, 40);
console.log(result2); // 100
