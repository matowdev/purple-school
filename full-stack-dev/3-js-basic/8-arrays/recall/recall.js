'use strict';

// Задание 1:
// Напиши функцию reverseWords(sentence), которая принимает строку (предложение) и переворачивает каждое слово в нём, но сохраняет исходный порядок слов.
// Пример:
// Вход: "Hello world"
// Выход: "olleH dlrow"
// Что понадобится:
// Методы для превращения строки в массив и обратно.
// Метод для переворачивания массива.

function reverseWords(sentence) {
  if (!sentence || typeof sentence !== 'string') {
    return '';
  }

  const reverseSentence = sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''));

  return reverseSentence.join(' ');
}

console.log(reverseWords('Hello world')); // "olleH dlrow"

// Задание 2:
// Напиши функцию getExamResult(studentScores), которая принимает массив. В этом массиве первый элемент — это имя студента, а все остальные — его оценки за экзамены.
// Функция должна возвращать строку в формате: "Student: [Имя], Average Score: [Средний балл]".
// Обязательное условие: используй деструктуризацию прямо в параметрах функции, чтобы сразу получить имя и массив с оценками в разные переменные.
// Пример:
// Вход: ['Alice', 90, 85, 92]
// Выход: "Student: Alice, Average Score: 89"
// Подсказка: Чтобы найти средний балл, нужно сложить все оценки и разделить на их количество. Тебе понадобится какой-нибудь способ просуммировать все элементы в массиве с оценками.

function getExamResult([name, ...studentScores] = []) {
  if (!name || typeof name !== 'string') {
    return false;
  }

  if (!studentScores || studentScores.length === 0) {
    return [];
  }

  const totalScore = studentScores.reduce((acc, score) => acc + score);
  const averageScore = totalScore / studentScores.length;

  return `Student: ${name}, Average Score: ${averageScore}`;
}

console.log(getExamResult(['Alice', 90, 85, 92])); // "Student: Alice, Average Score: 89"

// Задание 3:
// У тебя есть массив, представляющий плейлист с нарушенным порядком треков:
// let playlist = ['Song 1', 'Song 2', 'Song 5', 'Song 6'];
// Тебе нужно "починить" плейлист, вставив 'Song 3' и 'Song 4' на их правильные места.
// Задание: Напиши одну строку кода, которая изменит (мутирует) исходный массив playlist так, чтобы он стал ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6'].
// Подсказка: Тебе понадобится "швейцарский нож" для массивов, который умеет вставлять элементы в середину, ничего при этом не удаляя.

let playlist = ['Song 1', 'Song 2', 'Song 5', 'Song 6'];
playlist.splice(2, 0, 'Song 3', 'Song 4');

console.log(playlist); // [ 'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6' ]

// Задание 4:
// Напиши функцию getLastNReversed(arr, n), которая возвращает n последних элементов массива arr в перевёрнутом порядке.
// Самое главное условие: исходный массив arr не должен измениться.
// Пример:
// Вход: arr = [1, 2, 3, 4, 5], n = 3
// Выход: [5, 4, 3]
// При этом, если после вызова функции проверить arr, он должен остаться [1, 2, 3, 4, 5].
// Намёк: Здесь тебе придётся скомбинировать два метода. Помни, что один из них мутирующий, поэтому его нужно применять "безопасно".

function getLastNReversed(arr = [], n) {
  if (!arr || arr.length === 0) {
    return [];
  }

  if (!n || typeof n !== 'number') {
    return false;
  }

  // return [...arr].splice(arr.length - n, n).reverse();
  return arr.slice(-n).reverse();
}

console.log(getLastNReversed([1, 2, 3, 4, 5], 3)); // [ 5, 4, 3 ]

// Задание 5:
// Напиши функцию findSecondOccurrence(arr, item), которая находит индекс второго вхождения элемента item в массиве arr.
// - Если элемент встречается два или более раз, верни индекс второго вхождения.
// - Если элемент встречается только один раз или не встречается вовсе, верни -1.
// Пример:
// - findSecondOccurrence(['a', 'b', 'c', 'b', 'd'], 'b') должен вернуть 3.
// - findSecondOccurrence(['a', 'b', 'c'], 'b') должен вернуть -1.
// - findSecondOccurrence(['a', 'b', 'c'], 'x') должен вернуть -1.
// Подсказка: Тебе нужно будет использовать indexOf() дважды. Вспомни про его второй, необязательный параметр.

function findSecondOccurrence(arr, item) {
  if (!arr || arr.length === 0) {
    return [];
  }

  if (!item || typeof item !== 'string') {
    return false;
  }

  const index = arr.indexOf(item);

  if (index === -1) {
    return index; // или можно возвращать -1 (это равнозначно)
  }

  const secondIndex = arr.indexOf(item, index + 1);

  if (secondIndex === -1) {
    return secondIndex; // или можно возвращать -1 (это равнозначно)
  }

  return secondIndex;
}

console.log(findSecondOccurrence(['a', 'b', 'c', 'b', 'd'], 'b')); // 3
console.log(findSecondOccurrence(['a', 'b', 'c'], 'b')); // -1
console.log(findSecondOccurrence(['a', 'b', 'c'], 'x')); // -1
