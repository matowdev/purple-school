'use strict';

// Задание 1:
// Напиши функцию createLogger(prefix).
// 1. Эта функция должна принимать один аргумент — строку prefix.
// 2. Она должна возвращать объект с двумя методами: log(message) и warn(message).
// 3. При вызове logger.log("some text") в консоль должно выводиться: [<prefix>] some text.
// 4. При вызове logger.warn("some warning") в консоль должно выводиться: [<prefix>] WARNING: some warning.

function createLogger(prefix) {
  return {
    log(message) {
      return `[${prefix}] ${message}`;
    },
    warn(message) {
      return `[${prefix}] WARNING: ${message}`;
    },
  };
}

const appLogger = createLogger('MyApp');
console.log(appLogger.log('User logged in')); // [MyApp] User logged in
console.log(appLogger.warn('Disk space low')); // [MyApp] WARNING: Disk space low

const dbLogger = createLogger('Database');
console.log(dbLogger.log('Query successful')); // [Database] Query successful

// Задание 2:
// Напиши функцию createPasswordChecker(validPassword).
// 1. Она принимает один аргумент — правильный пароль (строку).
// 2 .Она должна возвращать другую функцию, которая будет принимать пароль для проверки.
// 3. Эта внутренняя функция должна вести себя так:
// - При первом вызове с неверным паролем она должна возвращать строку: "Wrong password. You have 2 attempts left."
// - При втором вызове с неверным паролем: "Wrong password. You have 1 attempt left."
// - При третьем вызове с неверным паролем: "Access denied." Все последующие вызовы (четвертый, пятый...) также должны возвращать "Access denied."
// - Если в любой момент вводится верный пароль, она должна вернуть "Access granted." и "сбросить" счетчик попыток на будущее (хотя это уже не так важно, главное — предоставить доступ).
// Намёк: Тебе понадобится переменная-счетчик внутри замыкания, чтобы отслеживать количество оставшихся попыток.

function createPasswordChecker(validPassword) {
  let attemptsLeft = 3;

  return function (password) {
    if (attemptsLeft === 0) {
      return 'Access denied.';
    }

    if (password === validPassword) {
      attemptsLeft = 3;
      return 'Access granted.';
    }

    attemptsLeft--;

    if (attemptsLeft > 0) {
      return `Wrong password. You have ${attemptsLeft} attempt(s) left.`;
    } else {
      return 'Access denied.';
    }
  };
}

const checkPassword = createPasswordChecker('12345');

console.log(checkPassword('wrong')); // "Wrong password. You have 2 attempts left."
console.log(checkPassword('still-wrong')); // "Wrong password. You have 1 attempt left."
console.log(checkPassword('12345')); // "Access granted."

const checkAnotherPassword = createPasswordChecker('qwerty');
console.log(checkAnotherPassword('wrong')); // "Wrong password. You have 2 attempts left."
console.log(checkAnotherPassword('still-wrong')); // "Wrong password. You have 1 attempt left."
console.log(checkAnotherPassword('final-wrong')); // "Access denied."
console.log(checkAnotherPassword('qwerty')); // "Access denied." (Доступ уже заблокирован)
