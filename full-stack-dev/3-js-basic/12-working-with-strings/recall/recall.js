'use strict';

// Задание 1:
// Напишите функцию normalizeTitle(title), которая принимает "грязную" строку с названием товара и приводит её к стандартному виду.
// Что нужно сделать:
// 1. Убрать лишние пробелы в начале и в конце строки.
// 2. Сделать первую букву всей строки заглавной, а все остальные — оставить как есть.
// Пример работы:
// normalizeTitle("   ssd накопитель 512gb   ") должна вернуть "Ssd накопитель 512gb".
// normalizeTitle("  микрофон BM-800") должна вернуть "Микрофон BM-800".
// normalizeTitle("монитор") должна вернуть "Монитор".

function normalizeTitle(title) {
  if (!title || typeof title !== 'string') {
    return '';
  }

  const cleanTitle = title.trim();

  return `${cleanTitle.slice(0, 1).toUpperCase()}${cleanTitle.slice(1)}`;
}

console.log(normalizeTitle('   ssd накопитель 512gb   ')); // "Ssd накопитель 512gb"
console.log(normalizeTitle('  микрофон BM-800')); // "Микрофон BM-800"
console.log(normalizeTitle('монитор')); // "Монитор"

// Задание 2:
// Напишите функцию checkSpam(text, keywords), которая проверяет текст на наличие спам-слов.
// Что нужно сделать:
// 1. Функция принимает два аргумента: text (проверяемая строка) и keywords (массив запрещенных слов).
// 2. Проверка должна быть нечувствительной к регистру. То есть, если в keywords есть слово "скидка", то "СКИДКА", "СкИдКа" и "скидка" в тексте должны быть обнаружены.
// 3. Функция должна возвращать true, если найдено хотя бы одно спам-слово, и false в противном случае.
// Подсказка: чтобы сделать проверку нечувствительной к регистру, будет удобно привести и текст, и ключевые слова к одному регистру перед сравнением.

const text = 'Приглашаем на новую супер-акцию! Большая СКИДКА только сегодня!';
const text2 = 'Это обычное уведомление о доставке.';
const spamKeywords = ['акция', 'скидка', 'бесплатно'];

function checkSpam(text, keywords = []) {
  if (!text || typeof text !== 'string') {
    return false;
  }

  if (!keywords) {
    return false;
  }

  const prepareText = text.trim().toLowerCase();

  for (const spamWord of spamKeywords) {
    if (prepareText.includes(spamWord.toLowerCase())) {
      return true;
    }
  }

  return false;
}

console.log(checkSpam(text, spamKeywords)); // true
console.log(checkSpam(text2, spamKeywords)); // false

// Задание 3:
// Напишите функцию createSlug(title), которая создает "слаг" (часть URL) из названия статьи.
// Что нужно сделать:
// 1. Привести всю строку title к нижнему регистру.
// 2. Заменить все пробелы на дефисы (-).
// 3. Вернуть результат.
// Пример работы:
// createSlug("Как работают строки в JavaScript") должна вернуть "как-работают-строки-в-javascript".
// createSlug("  Основы Работы с Git  ") должна вернуть "основы-работы-с-git". (Обратите внимание на пробелы в начале и конце).
// Предупреждение/Намёк: Эта задача кажется простой, но в ней есть небольшой подвох, связанный с одним из методов замены. Подумайте, какой из них (replace или replaceAll) здесь подойдет лучше всего.

function createSlug(title) {
  if (!title || typeof title !== 'string') {
    return '';
  }

  const prepareTitle = title.trim().toLowerCase();

  return prepareTitle.replaceAll(' ', '-');
}

console.log(createSlug('Как работают строки в JavaScript')); // "как-работают-строки-в-javascript"
console.log(createSlug('  Основы Работы с Git  ')); // "основы-работы-с-git"

// Задание 4:
// Напишите функцию parseUrlParams(url), которая принимает URL-адрес в виде строки и возвращает объект с его GET-параметрами.
// Что нужно сделать:
// 1. Найти в строке url ту часть, которая идет после знака ?.
// 2. Разбить эту часть на отдельные пары "ключ=значение" (они разделены символом &).
// 3. Каждую пару разобрать на ключ и значение (они разделены символом =).
// 4. Собрать все ключи и значения в один объект и вернуть его.
// 5. Если параметров нет (отсутствует ?), функция должна возвращать пустой объект {}.
// Подсказка: Вам могут понадобиться методы indexOf() (или includes()), slice(), а также новый для нас, но очень важный метод split(), который разбивает строку на массив подстрок по указанному разделителю.

const url1 = 'https://example.com/path/to/page?name=John&age=30&city=NewYork';
const url2 = 'https://example.com/path/to/page';

function parseUrlParams(url) {
  if (!url || typeof url !== 'string') {
    return {};
  }

  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    return {};
  }

  const getParameters = url.split('?')[1];

  if (!getParameters) {
    return {};
  }

  const getPairs = getParameters.split('&');
  const getKeyValue = getPairs.map((pair) => pair.split('='));

  return getKeyValue.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

console.log(parseUrlParams(url1)); // { name: "John", age: "30", city: "NewYork" }
console.log(parseUrlParams(url2)); // {}

// Задание 5:
// Напишите функцию maskEmail(email), которая частично скрывает email-адрес.
// Что нужно сделать:
// 1. Функция принимает строку с email.
// 2. Нужно скрыть часть имени пользователя (то, что до символа @).
// 3. Часть после @ (домен) должна остаться неизменной.
// 3. Правило маскировки: Показать первые три символа имени, затем ..., затем последние два символа имени.
// Особый случай (намёк на 'подвох'): Подумайте, что делать, если имя пользователя слишком короткое для такого маскирования (например, 5 символов или меньше). Предложите свой вариант обработки такой ситуации. Например, можно показать только первую букву и ... .

function maskEmail(email) {
  if (!email || typeof email !== 'string') {
    return '';
  }

  const userName = email.split('@')[0];
  const emailDomain = email.split('@')[1];
  const nameLength = userName.length;

  const firstLetters = userName.slice(0, 3);
  let lastLetters;

  if (nameLength <= 5) {
    lastLetters = userName.slice(-1);
  } else {
    lastLetters = userName.slice(-2);
  }

  return `${firstLetters.padEnd(6, '.')}${lastLetters}@${emailDomain}`;
}

console.log(maskEmail('very.long.name@gmail.com')); // "ver...me@gmail.com"
console.log(maskEmail('user@example.com')); // "use...r@example.com"
