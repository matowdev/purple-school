// Нужно написать функцию, которая принимает объект query c и возвращает строку для вставки в URL путь:
// const query = {
//   search: 'Вася',
//   take: 10,
// };
// Пример строки:
// search=Вася&take=10

const query = {
  search: 'Вася',
  take: 10,
};

function getQueryStr(queryObj = {}) {
  // предварительная if/проверка на пустой объект не нужна (типа Object.keys(queryObj).length), т.к. данная цепочка методов и так хорошо/правильно отработает пустой массив.. если такое будет в итоге получится "пустая строка"
  const queryStr = Object.entries(queryObj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return queryStr;
}

const result = getQueryStr(query);
console.log(result); // "search=Вася&take=10"

// ?? альтернативное решение (на шаг вперёд)
// Для реальных проектов значения в URL нужно кодировать. Это нужно на случай, если в значении попадутся спецсимволы, например, пробелы, & или кириллица (хотя с ней современные браузеры справляются). Для этого есть встроенная функция encodeURIComponent().

// function createQueryString(params) {
//   return Object.entries(params)
//     .map(
//       ([key, value]) =>
//         `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//     )
//     .join('&');
// }

// Пример с пробелом и русскими буквами
// const myParams = {
//   city: 'Санкт-Петербург',
//   'order by': 'name',
// };

// console.log(createQueryString(myParams));
// Вывод: "city=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3&order%20by=name"
// Такую строку поймёт любой сервер!
