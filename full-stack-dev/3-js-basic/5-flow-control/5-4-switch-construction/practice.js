// Задание 1:
// Реализуй конструкцию switch, которая по значению переменной role присваивает переменной accessLevel строку в зависимости от роли:
// если "admin" — "full",
// если "manager" — "partial",
// если "user" — "limited",
// для любых других значений — "denied".

const role = 'noname';
let accessLevel;

switch (role) {
  case 'admin':
    accessLevel = 'full';
    break;
  case 'manager':
    accessLevel = 'partial';
    break;
  case 'user':
    accessLevel = 'limited';
    break;
  default:
    accessLevel = 'denied';
    break;
}

console.log(accessLevel); // 'denied'

// Задание 2:
// Реализуй пример группировки кейсов.
// Пусть переменная day содержит значение ("пн", "вт", "ср", "чт", "пт", "сб", "вс").
// Требуется присвоить переменной type один из вариантов:
// - "workday" для рабочих дней ("пн", "вт", "ср", "чт", "пт")
// - "weekend" для выходных ("сб", "вс")

const day = 'ср';
let type;

switch (day) {
  case 'пн':
  case 'вт':
  case 'ср':
  case 'чт':
  case 'пт':
    type = 'Это - workday!';
    break;
  case 'сб':
  case 'вс':
    type = 'Ура, это - weekend!';
    break;
  default:
    console.log('Такого дня не существует..');
    break;
}

console.log(type); // 'Это - workday!'

// Задание 3:
// Напиши пример switch-case, где в качестве условия используется switch (true), и внутри кейсов идут выражения.
// Например, переменная age (число), а переменной typeAge нужно присвоить:
// "child" — если age меньше 18,
// "adult" — если age от 18 и до 65 включительно,
// "senior" — если age больше 65.

const age = 16;
let typeAge;

switch (true) {
  case age < 18:
    typeAge = 'child';
    break;
  case age >= 18 && age <= 65:
    typeAge = 'adult';
    break;
  case age > 65:
    typeAge = 'senior';
    break;
  default:
    console.log('Какой интересный возраст..');
    break;
}

console.log(typeAge); // 'child'
