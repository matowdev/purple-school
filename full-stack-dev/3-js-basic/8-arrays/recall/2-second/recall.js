'use strict';

// Задание 1:
// У вас есть массив permissions, который хранит список прав доступа пользователя. const permissions = ['READ', 'WRITE', 'DELETE', 'SHARE'];
// Вам нужно написать функцию grantAdminAccess(arr), которая добавляет право 'ADMIN' в начало списка и убирает право 'SHARE' из конца списка.
// Требования:
// 1. Функция должна мутировать (изменять) исходный массив.
// 2. Функция должна использовать методы, предназначенные для работы с началом и концом массива (из файла 8.2).
// 3. Функция должна вернуть удаленный элемент ('SHARE').

const permissions = ['READ', 'WRITE', 'DELETE', 'SHARE'];

function grantAdminAccess(arr = []) {
  if (!arr) {
    return [];
  }

  arr.unshift('ADMIN'); // [ 'ADMIN', 'READ', 'WRITE', 'DELETE', 'SHARE' ]

  return arr.pop();
}

console.log(grantAdminAccess(permissions)); // SHARE

// Задание 2:
// У вас есть два списка: coreFeatures (основные функции) и experimentalFeatures (экспериментальные).
// const coreFeatures = ['Login', 'Dashboard']; и const experimentalFeatures = ['Analytics', 'Chat'];
// Вам нужно написать функцию combineFeatures(core, experimental), которая возвращает один новый массив, содержащий сначала все coreFeatures, а затем все experimentalFeatures.
// Требования:
// 1. Функция не должна изменять (мутировать) исходные массивы coreFeatures и experimentalFeatures.
// 2. Используйте методы, которые не мутируют исходные массивы (из файла 8.4).

const coreFeatures = ['Login', 'Dashboard'];
const experimentalFeatures = ['Analytics', 'Chat'];

function combineFeatures(core = [], experimental = []) {
  if (!core || !experimental) {
    return [];
  }

  return [...core, ...experimental];
}

console.log(combineFeatures(coreFeatures, experimentalFeatures)); // [ 'Login', 'Dashboard', 'Analytics', 'Chat' ]

// Задание 3:
// У вас есть массив logEntries, в котором хранятся все действия пользователя. const logEntries = ['user_login', 'view_page', 'click_button', 'user_logout', 'error_404'];
// Вам нужно написать функцию getLastImportantLogs(logs, count), которая возвращает новый массив, содержащий count последних логов.
// Требования:
// 1. Функция не должна изменять исходный массив logEntries.
// 2. Используйте метод, который позволяет "вырезать" часть массива, не мутируя его (из файла 8.4).
// 3. Функция должна корректно работать с отрицательными индексами (подсказка из файла 8.4).
// Пример вызова: getLastImportantLogs(logEntries, -2) должен вернуть ['user_logout', 'error_404'].

const logEntries = [
  'user_login',
  'view_page',
  'click_button',
  'user_logout',
  'error_404',
];

function getLastImportantLogs(logs = [], count = 0) {
  if (!logs || !count) {
    return [];
  }

  return logs.slice(-count);
}

console.log(getLastImportantLogs(logEntries, 2)); // [ 'user_logout', 'error_404' ]

// Задание 4:
// У вас есть строка с тегами, разделенными запятыми и пробелами. const tagsString = 'js, react, node, http, css';
// Вам нужно написать функцию parseTags(str), которая превращает эту строку в массив тегов.
// Требования:
// 1. Функция должна вернуть массив.
// 2. Используйте метод, который "разрезает" строку на части (из файла 8.5).
// 3. Обратите внимание, что разделитель — это не просто запятая, а запятая И пробел.
// Ожидаемый результат: ['js', 'react', 'node', 'http', 'css']

const tagsString = 'js, react, node, http, css';

function parseTags(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }

  return str.split(', ');
}

console.log(parseTags(tagsString)); // [ 'js', 'react', 'node', 'http', 'css' ]

// Задание 5:
// Эта задача основана на материалах 8.3 и 8.9 ("Два интереснейших примера"). Вам нужно найти все вхождения элемента в массив, а не только первое.
// const logLevels = ['INFO', 'DEBUG', 'INFO', 'ERROR', 'WARNING', 'INFO'];
// Напишите функцию findAllIndexes(arr, item), которая принимает массив и элемент, а возвращает массив всех индексов, по которым этот элемент найден.
// Требования:
// 1. Если элемент не найден, вернуть пустой массив [].
// 2. Вы должны использовать indexOf() для поиска.
// 3. Подвох (намек): indexOf() находит только первое вхождение. Вам понадобится использовать indexOf() в цикле и его второй аргумент (fromIndex), чтобы продолжать поиск, не находя один и тот же элемент снова и снова.
// Пример вызова: findAllIndexes(logLevels, 'INFO') должен вернуть [0, 2, 5].

const logLevels = ['INFO', 'DEBUG', 'INFO', 'ERROR', 'WARNING', 'INFO'];

function findAllIndexes(arr = [], item) {
  if (!arr || !item || typeof item !== 'string') {
    return [];
  }

  const indexArr = [];
  let index = 0;

  while (true) {
    let currentIndex = arr.indexOf(item, index);

    if (currentIndex === -1) {
      break;
    }

    indexArr.push(currentIndex);
    index = currentIndex + 1;
  }

  return indexArr;
}

console.log(findAllIndexes(logLevels, 'INFO')); // [ 0, 2, 5 ]

// Задание 6:
// У вас есть массив urlParts, который представляет собой разобранный URL. const urlParts = ['https', 'purpleschool.ru', 'courses', 'javascript', 'lesson-8'];
// Вам нужно написать функцию getProtocolAndPath(arr), которая:
// 1. Забирает первый элемент в переменную protocol.
// 2. Забирает второй элемент в переменную domain.
// 3. Всё остальное (['courses', 'javascript', 'lesson-8']) собирает в новый массив с именем path.
// 4. Функция должна вернуть строку в формате: "Протокол: [protocol], Домен: [domain], Путь: [path]". (Для path можете использовать JSON.stringify, чтобы он красиво вывелся как массив).
// Требования:
// 1. Используйте деструктуризацию для "распаковки" массива arr.
// 2. Используйте оператор ...rest для сбора path.
// Пример вызова: getProtocolAndPath(urlParts) должен вернуть строку, похожую на: "Протокол: https, Домен: purpleschool.ru, Путь: ["courses","javascript","lesson-8"]"

const urlParts = [
  'https',
  'purpleschool.ru',
  'courses',
  'javascript',
  'lesson-8',
];

function getProtocolAndPath(arr = []) {
  if (!arr) {
    return [];
  }

  const [protocol, domain, ...path] = arr;

  return `Протокол: ${protocol}, Домен: ${domain}, Путь: ${JSON.stringify(
    path
  )}`;
}

console.log(getProtocolAndPath(urlParts)); // "Протокол: https, Домен: purpleschool.ru, Путь: ["courses","javascript","lesson-8"]"
