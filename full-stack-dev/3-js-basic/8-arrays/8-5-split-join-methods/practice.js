// Задание 1:
// Напишите функцию createUrlSlug(title), которая принимает строку (например, заголовок статьи) и возвращает "URL-дружелюбную" версию этой строки.
// Требования:
// 1. Все буквы должны быть в нижнем регистре.
// 2. Пробелы должны быть заменены на дефисы (-).
// Пример:
// createUrlSlug("Hello World, this is a great article")
// Должно вернуть: "hello-world,-this-is-a-great-article"

function createUrlSlug(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(createUrlSlug('Hello World, this is a great article')); // "hello-world,-this-is-a-great-article"

// Задание 2:
// Напишите функцию reverseWords(sentence), которая принимает предложение и переворачивает каждое слово в нем, но сохраняет исходный порядок слов.
// Требования:
// 1. Разделить предложение на слова.
// 2. Каждое слово перевернуть задом наперед.
// 3. Собрать перевернутые слова обратно в предложение с сохранением пробелов.
// Пример:
// reverseWords("Welcome to the jungle")
// Должно вернуть: "emocleW ot eht elgnuj"

function reverseWords(sentence) {
  const sentenceArr = sentence.split(' '); // [ 'Welcome', 'to', 'the', 'jungle' ]
  const reverseSentenceArr = [];

  for (const world of sentenceArr) {
    reverseSentenceArr.push(world.split('').reverse().join('')); // [ 'emocleW', 'ot', 'eht', 'elgnuj' ]
  }

  return reverseSentenceArr.join(' ');
}

console.log(reverseWords('Welcome to the jungle')); // "emocleW ot eht elgnuj"

// ?? альтернативное решение
function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

// Задание 3:
// Напишите функцию isPalindrome(str), которая проверяет, является ли переданная строка палиндромом.
// Требования:
// 1. Функция должна возвращать true или false.
// 2. Палиндром — это слово или фраза, которая читается одинаково в обоих направлениях (например, "топот").
// 3. Проверка должна быть нечувствительна к регистру букв и пробелам.
// Пример:
// isPalindrome("А роза упала на лапу Азора") → true
// isPalindrome("Racecar") → true
// isPalindrome("Hello world") → false

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const defaultStr = lowerStr.split(' ').join('');
  let reverseStr;
  const reverseStrArr = lowerStr.split(' ').reverse();
  const newReverseStrArr = [];

  for (const world of reverseStrArr) {
    newReverseStrArr.push(world.split('').reverse().join(''));
  }

  reverseStr = newReverseStrArr.join('');

  return defaultStr === reverseStr;
}

console.log(isPalindrome('А роза упала на лапу Азора')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Hello world')); // false

// ?? альтернативное решение
function isPalindrome(str) {
  // 1. Очищаем строку от пробелов и приводим к нижнему регистру
  const cleanStr = str.toLowerCase().split(' ').join('');

  // 2. Создаем перевернутую копию очищенной строки
  const reversedStr = cleanStr.split('').reverse().join('');

  // 3. Сравниваем их
  return cleanStr === reversedStr;
}
