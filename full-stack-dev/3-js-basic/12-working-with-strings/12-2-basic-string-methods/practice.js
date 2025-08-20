// Задание 1:
// Дана строка: const language = "JavaScript";
// Напиши одну строчку кода, которая получает последний символ из этой строки и сохраняет его в новую переменную с именем lastChar.

const language = 'JavaScript';
// const lastChar = language[language.length - 1];
const lastChar = language.slice(-1);

console.log(lastChar); // t

// Задание 2:
// Напиши код, который находит индекс второго вхождения слова "ERROR". Сохрани результат в переменную secondErrorIndex.
// Используй indexOf() дважды.

const logMessage =
  'ERROR: First error. Something went wrong. ERROR: Second error.';

const firstErrorIndex = logMessage.indexOf('ERROR');
const secondErrorIndex = logMessage.indexOf('ERROR', firstErrorIndex + 1);

console.log(secondErrorIndex); // 42

// Задание 3:
// Представь, что у тебя есть переменная с полным именем человека, состоящим из имени и фамилии, разделенных пробелом.
// const fullName = "Brendan Eich"; // Создатель JavaScript
// Задание: Напиши код, который извлекает из этой строки только фамилию ("Eich") и сохраняет её в переменную lastName.
// Важное условие: Твой код должен быть универсальным. То есть, если мы поменяем fullName на "Grace Hopper" или "Ada Lovelace", он всё равно должен правильно извлечь фамилию. Он не должен "завязываться" на конкретную длину имени.
// Подсказка: Тебе, скорее всего, понадобятся два метода, которые мы сегодня обсуждали: один для поиска, а другой для извлечения.

let fullName = 'Brendan Eich';

function getLastName(fullName) {
  if (!fullName || fullName === '') {
    return null;
  }

  const spaceIndex = fullName.indexOf(' ');
  const lastName = fullName.slice(spaceIndex + 1); // можно вместо +1 отработать при возврате trim()

  return lastName;
}

console.log(getLastName(fullName)); // Eich

fullName = 'Grace Hopper';
console.log(getLastName(fullName)); // Hopper

fullName = 'Ada Lovelace';
console.log(getLastName(fullName)); // Lovelace
