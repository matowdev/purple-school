'use strict';

// Задание 1:
// Напиши программу, которая определяет тип скидки для пользователя в зависимости от суммы его заказа.
// 1. Создай константу orderAmount (сумма заказа) и присвой ей значение 950.
// 2. Создай переменную discountType (тип скидки).
// 3. Используя конструкцию if...else, else...if (из 5.1):
// - Если orderAmount больше или равно 1000, discountType = 'gold'.
// - Если orderAmount больше или равно 500 (но меньше 1000), discountType = 'silver'.
// - Во всех остальных случаях, discountType = 'bronze'.
// 4. Выведи discountType в консоль.

const orderAmount = 950;
let discountType;

if (orderAmount >= 1000) {
  discountType = 'gold';
} else if (orderAmount >= 500) {
  discountType = 'silver';
} else {
  discountType = 'bronze';
}

console.log(discountType); // silver

// Задание 2:
// У нас есть переменная userRole (роль пользователя) и userName.
// let userRole = 'moderator';
// let userName = 'Alex';
// Нам нужно создать переменную accessLevel (уровень доступа).
// Используя тернарный оператор (? :) (из файла 5.5), напиши однострочное выражение, которое:
// - Если userRole равен 'admin', присваивает accessLevel значение 'Full Access'.
// - Иначе (во всех остальных случаях), присваивает accessLevel значение 'Limited Access'.
// После этого, используя шаблонную строку, выведи в консоль: "User: [userName], Level: [accessLevel]"

let userRole = 'moderator';
let userName = 'Alex';

let accessLevel = userRole === 'admin' ? 'Full Access' : 'Limited Access';
console.log(`User: ${userName}, Level: ${accessLevel}`); // User: Alex, Level: Limited Access

// Задание 3:
// Давай напишем небольшой "переводчик" дней недели.
// 1. Создай константу dayOfWeek (день недели) и присвой ей значение 'Вторник'.
// 2. Создай переменную dayInEnglish.
// 3. Используя конструкцию switch (из 5.4), проверь dayOfWeek.
// 4. Создай case для 'Понедельник', 'Вторник', 'Среда'.
// 5. В case 'Понедельник', dayInEnglish должен стать 'Monday'.
// 6. В case 'Вторник', dayInEnglish должен стать 'Tuesday'.
// 7. В case 'Среда', dayInEnglish должен стать 'Wednesday'.
// 8. Добавь default, который будет присваивать dayInEnglish значение 'Unknown'.
// 9. Не забудь break (или используй return, если поместишь switch в функцию, как в файле "Пример_оптимизации...").
// 10. Выведи dayInEnglish в консоль.

const dayOfWeek = 'Вторник';
let dayInEnglish;

switch (dayOfWeek) {
  case 'Понедельник':
    dayInEnglish = 'Monday';
    break;
  case 'Вторник':
    dayInEnglish = 'Tuesday';
    break;
  case 'Среда':
    dayInEnglish = 'Wednesday';
    break;
  default:
    dayInEnglish = 'Unknown';
}

console.log(dayInEnglish); // Tuesday

// Задание 4:
// У нас есть два объекта (хотя мы их ещё не проходили, представим, что это просто переменные).
// let user = {
//   name: 'Alex'
// }; // Объект с данными
// let admin = null; // Пустая переменная
// Нам нужно создать переменную activeUser (активный пользователь).
// Используя оператор || (который мы проходили в 4.9, но он относится и к этой теме), напиши однострочное выражение, которое:
// 1. Проверит user. Если user — truthy (а user у нас объект, помнишь, что это?), он должен попасть в activeUser.
// 2. Если user вдруг falsy, он должен проверить admin.
// 3. Если и admin falsy, то activeUser должен стать 'Guest'.
// (Подсказка: user || admin || 'Guest')
// После этого, используя шаблонную строку, выведи activeUser.name (имя пользователя).
// (И снова предупреждение: что произойдёт, если activeUser станет 'Guest' (строкой), а мы попытаемся взять у него .name? Как это связано с порядком проверки в ||?)

let user = {
  name: 'Alex',
}; // Объект с данными

let admin = null; // Пустая переменная
let activeUser = user || admin || 'Guest';

console.log(`${activeUser.name}`); // Alex

// Задание 5:
// Давай напишем скрипт, который рекомендует, что надеть, в зависимости от погоды.
// let temperature = 15;
// let weather = 'rain'; // 'rain', 'sunny' и т.д.
// Нам нужно:
// 1. Создать переменную recommendation (рекомендация).
// 2. Используя хитрый switch (true) (из 5.4), который мы обсуждали, проверить несколько условий:
// - case 1: Если temperature > 25 И weather === 'sunny', recommendation = 'Футболка и шорты'.
// - case 2: Если temperature > 10 И weather === 'rain', recommendation = 'Куртка и зонт'.
// - case 3: Если temperature <= 10, recommendation = 'Теплая куртка'.
// - default: recommendation = 'Оденьтесь по погоде'.
// Выведи recommendation в консоль.

let temperature = 15;
let weather = 'rain'; // 'rain', 'sunny' и т.д.
let recommendation;

switch (true) {
  case temperature > 25 && weather === 'sunny':
    recommendation = 'Футболка и шорты';
    break;
  case temperature > 10 && weather === 'rain':
    recommendation = 'Куртка и зонт';
    break;
  case temperature <= 10:
    recommendation = 'Теплая куртка';
    break;
  default:
    recommendation = 'Оденьтесь по погоде';
}

console.log(recommendation); // Куртка и зонт
