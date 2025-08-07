// Нужно написать 2 функции:
// 1. Шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
// 2. Проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает "true", если он совпадает со втором паролем и "false", если нет.
// Результат должен быть следующим:
// crypto(‘password’) -> ssapdorw
// check(‘ssapdorw’, ‘password’) -> true
// check(‘ssapdorw’, ‘wrong’) -> false

const passwordToEncrypt = 'password';
const wrongPassword = 'wrong';

function crypto(password) {
  if (!password || password.trim() === '') {
    return false;
  }

  const middleIndex = Math.floor(password.length / 2);
  const firstPart = password.slice(0, middleIndex);
  const secondPart = password.slice(middleIndex);

  // 1. Переворачиваем первую часть
  const encryptedFirstPart = firstPart.split('').reverse().join('');

  // 2. Во второй части меняем местами первый и последний символы
  let encryptedSecondPart;
  if (secondPart.length > 1) {
    const firstLetter = secondPart[0];
    const lastLetter = secondPart[secondPart.length - 1];
    const middlePart = secondPart.slice(1, -1);
    encryptedSecondPart = lastLetter + middlePart + firstLetter;
  } else {
    // Если вторая часть состоит из одного символа или пуста, оставляем как есть
    encryptedSecondPart = secondPart;
  }

  return encryptedFirstPart + encryptedSecondPart;
}

function check(encryptedPassword, originalPassword) {
  // Самый надежный способ проверки - зашифровать оригинальный пароль и сравнить результат с уже зашифрованным.
  if (!originalPassword || !encryptedPassword) {
    return false;
  }
  return crypto(originalPassword) === encryptedPassword;
}

// Шифруем пароль 'password'
const encrypted = crypto(passwordToEncrypt);
console.log(encrypted); // ssapdorw

// Проверяем правильный пароль
const isCorrect = check(encrypted, passwordToEncrypt);
console.log(isCorrect); // true

// Проверяем неправильный пароль
const isWrong = check(encrypted, wrongPassword);
console.log(isWrong); // false
