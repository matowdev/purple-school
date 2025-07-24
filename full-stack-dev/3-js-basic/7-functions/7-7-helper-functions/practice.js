// Задание 1:
// Есть функция formatUserMessage, которая выполняет сразу несколько действий. Это делает её громоздкой и трудной для понимания.
// Перепиши (проведи рефакторинг) этот код так, чтобы formatUserMessage стала основной функцией, а вся логика была вынесена в две отдельные вспомогательные функции.

// function formatUserMessage(fullName, comment) {
//   // 1. Убираем лишние пробелы и приводим имя к нужному виду
//   const nameParts = fullName.trim().split(' ');
//   const firstName = nameParts[0];
//   const lastNameInitial = nameParts[1].charAt(0).toUpperCase() + '.';
//   const formattedName = `${firstName} ${lastNameInitial}`;
//
//   // 2. Обрезаем слишком длинный комментарий
//   let formattedComment = comment.trim();
//   if (formattedComment.length > 50) {
//     formattedComment = formattedComment.substring(0, 47) + '...';
//   }
//
//   // 3. Собираем финальное сообщение
//   return `${formattedName}: "${formattedComment}"`;
// }
//
// // Пример вызова
// const message = formatUserMessage(
//   '  Иван петров  ',
//   '    Этот комментарий слишком длинный и его нужно обязательно обрезать.   '
// );
// console.log(message); // Ожидаемый результат: "Иван П.: Этот комментарий слишком длинный и его нужно о..."

function formatName(fullName) {
  const nameParts = fullName.trim().split(' ');
  const firstName = nameParts[0];
  const lastNameInitial = nameParts[1].charAt(0).toUpperCase() + '.';
  const formattedName = `${firstName} ${lastNameInitial}`;

  return formattedName;
}

function formatComment(comment) {
  let formattedComment = comment.trim();

  if (formattedComment.length > 50) {
    formattedComment = formattedComment.substring(0, 47) + '...';
  }

  return formattedComment;
}

function formatUserMessage(fullName, comment) {
  const formattedName = formatName(fullName);
  const formattedComment = formatComment(comment);

  return `${formattedName}: ${formattedComment}`;
}

const message = formatUserMessage(
  '  Иван петров  ',
  '    Этот комментарий слишком длинный и его нужно обязательно обрезать.   '
);

console.log(message); // Иван П.: Этот комментарий слишком длинный и его нужно об...

// Задание 2:
// У нас есть массив заявок от пользователей. Нам нужно отобрать только "валидных" пользователей (у кого есть имя и возраст 18+) и для каждого из них сформировать строку приветствия.
// Перепиши этот код, используя вспомогательные функции. Тебе понадобятся:
// - Функция-валидатор isValidUser(user), которая будет проверять пользователя и возвращать true или false.
// - Функция-форматтер formatGreeting(user), которая будет создавать строку для валидного пользователя.
// - Основная функция processApplications, которая будет использовать эти две функции для обработки массива. (Бонусный балл, если используешь методы массивов .filter() и .map()).

// const applications = [
//   { name: 'Сергей', age: 25 },
//   { name: '', age: 30 }, // невалидное имя
//   { name: 'Анна', age: 17 }, // невалидный возраст
//   { name: 'Виктор', age: 41 },
// ];

// function processApplications(apps) {
//   const validUsersGreetings = [];
//   for (const user of apps) {
//     // Проверка имени и возраста в одном месте
//     if (user.name.length > 0 && user.age >= 18) {
//       // Форматирование строки тоже здесь
//       const greeting = `Здравствуйте, ${user.name}! Вам ${user.age} лет.`;
//       validUsersGreetings.push(greeting);
//     }
//   }
//   return validUsersGreetings;
// }

// const greetings = processApplications(applications);
// console.log(greetings);

/* Ожидаемый результат:
[
  "Здравствуйте, Сергей! Вам 25 лет.",
  "Здравствуйте, Виктор! Вам 41 лет."
]
*/

const applications = [
  { name: 'Сергей', age: 25 },
  { name: '', age: 30 },
  { name: 'Анна', age: 17 },
  { name: 'Виктор', age: 41 },
];

function isValidUser(usersArr) {
  return usersArr.filter((user) => user.name.length > 0 && user.age >= 18);
}

function formatGreeting(validUsersArr) {
  return validUsersArr.map(
    (user) => `Здравствуйте, ${user.name}! Вам ${user.age} лет.`
  );
}

function processApplications(apps) {
  const validUsers = isValidUser(apps);
  const addGreetings = formatGreeting(validUsers);

  return addGreetings;
}

const greetings = processApplications(applications);
console.log(greetings);

/*
[
  "Здравствуйте, Сергей! Вам 25 лет.",
  "Здравствуйте, Виктор! Вам 41 лет."
]
*/

// ?? альтернативное решение
// Валидатор, который работает с ОДНИМ пользователем и возвращает true/false.
function isValidUser(user) {
  return user.name.length > 0 && user.age >= 18;
}

// Форматтер, который работает с ОДНИМ пользователем и возвращает строку.
function formatGreeting(user) {
  return `Здравствуйте, ${user.name}! Вам ${user.age} лет.`;
}

// Основная функция использует хелперы прямо в методах .filter() и .map()
function processApplications(apps) {
  return apps.filter(isValidUser).map(formatGreeting);
}

const newGreetings = processApplications(applications);
console.log(newGreetings);

/*
[
  "Здравствуйте, Сергей! Вам 25 лет.",
  "Здравствуйте, Виктор! Вам 41 лет."
]
*/
