// Нужно проверить, является ли строка валидным номером телефона в формате одной страны (для примера, России).
// - Верные: с учетом возможного использования скобок, пробелов, дефисов и начала как "+7", и просто "8".
// - Неверные: с ошибками в количестве цифр (НЕ 11 именно цифр), присутствием букв или неправильным форматом/расположением символов.
// Рекомендации: как то итерировать, проверять на число.

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isCorrectPhoneNum(phoneStr) {
  if (!phoneStr) {
    return null;
  }

  let trimPhoneStr = phoneStr.trim();

  if (trimPhoneStr.startsWith('+7') || trimPhoneStr.startsWith('8')) {
    const regex = /[+()\s-]/g;
    const cleanPhoneStr = trimPhoneStr.replace(regex, '');

    if (cleanPhoneStr.length === 11) {
      for (const strNum of cleanPhoneStr) {
        if (isNaN(Number(strNum))) {
          return false;
        }
      }

      return true;
    }
  }

  return false;
}

console.log(isCorrectPhoneNum(num1)); // true
console.log(isCorrectPhoneNum(num2)); // true
console.log(isCorrectPhoneNum(num3)); // true
console.log(isCorrectPhoneNum(num4)); // true
console.log(isCorrectPhoneNum(num5)); // true

console.log(isCorrectPhoneNum(num1Error)); // false
console.log(isCorrectPhoneNum(num2Error)); // false
console.log(isCorrectPhoneNum(num3Error)); // false
console.log(isCorrectPhoneNum(num4Error)); // false

// ?? альтернативное решение (с отработкой метода test() - "проверяющего" по шаблону, всё строку сразу)
function isCorrectPhoneNum(phoneStr) {
  if (!phoneStr) {
    return null;
  }

  let trimPhoneStr = phoneStr.trim();

  if (trimPhoneStr.startsWith('+7') || trimPhoneStr.startsWith('8')) {
    const allowedSymbolsRegex = /[+()\s-]/g;
    const cleanPhoneStr = trimPhoneStr.replace(allowedSymbolsRegex, '');

    // /^\d{11}$/ - вариант, который сразу проверяет на число, согласно \d и на общее количество повторений {11}
    if (/^\d{11}$/.test(cleanPhoneStr)) {
      return true;
    }
  }

  return false;
}

// ?? альтернативное решение от PS
function isPhoneNumber(num) {
  num = num.trim();
  num = num.replace('+7', '8');

  if (!num.startsWith('8')) {
    return false;
  }

  num = num.replaceAll('(', '');
  num = num.replaceAll(')', '');
  num = num.replaceAll(' ', '');
  num = num.replaceAll('-', '');

  if (num.length != 11) {
    return false;
  }

  let onlyNumber = true;

  for (const char of num) {
    if (isNaN(Number(char))) {
      onlyNumber = false;
      break;
    }
  }

  return onlyNumber;
}
