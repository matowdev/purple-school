// Задание 1:
// Напиши функцию getPower(base, power). Она должна возводить число base в степень power. Если power не указан, функция должна считать, что он равен 2 (то есть, по умолчанию возводить число в квадрат).
// getPower(3, 3) должна вернуть 27.
// getPower(5) должна вернуть 25.

function getPower(base, power = 2) {
  return base ** power;
}

console.log(getPower(3, 3)); // 27
console.log(getPower(5)); // 25

// Задание 2:
// Представь, что у нас есть такая функция: function logMessage(message = "Сообщение по умолчанию"). Что выведется в консоль, если мы вызовем ее как logMessage(null)?

function logMessage(message = 'Сообщение по умолчанию') {
  return message;
}

console.log(logMessage(null)); // null
console.log(logMessage('')); // ''
console.log(logMessage()); // 'Сообщение по умолчанию'

// Задание 3:
// Не запуская код в консоли, скажи, что выведет каждая из этих строк?

function setConfig(user, theme = 'dark') {
  console.log(`Пользователь: ${user}, Тема: ${theme}`);
}

setConfig('Alex', 'light'); // Пользователь: Alex, Тема: light
setConfig('Alex', undefined); // Пользователь: Alex, Тема: dark
setConfig('Alex', null); // Пользователь: Alex, Тема: null
setConfig('Alex'); // Пользователь: Alex, Тема: dark

// ** Задание 4:
// Напиши функцию createMessage(author, text, topic).
// Функция должна создавать объект сообщения.
// author и text — обязательные строки.
// topic — необязательная строка. Если topic не передан, его значением по умолчанию должно стать: "Сообщение от " + author.
// createMessage("Анна", "Всем привет!") должна вернуть объект { author: "Анна", text: "Всем привет!", topic: "Сообщение от Анна" }.
// createMessage("Петр", "Нужна помощь", "Срочно") должна вернуть { author: "Петр", text: "Нужна помощь", topic: "Срочно" }.

function isRequired(para) {
  throw new Error(`Параметр ${para} обязателен!`);
}

function createMessage(
  author = isRequired('author'),
  text = isRequired('text'),
  topic = `Сообщение от ${author}`
) {
  return { author, text, topic };
}

console.log(createMessage('Анна', 'Всем привет!')); // { author: 'Анна', text: 'Всем привет!', topic: 'Сообщение от Анна' }
console.log(createMessage('Петр', 'Нужна помощь', 'Срочно')); // { author: 'Петр', text: 'Нужна помощь', topic: 'Срочно' }
console.log(createMessage('Валя')); // Error: Параметр text обязателен!

// ** Задание 5:
// Напиши функцию createWindow(options). Она принимает один необязательный объект options.
// Функция должна выводить в консоль параметры создаваемого окна.
// У объекта options могут быть свойства:
// - width (число), по умолчанию 800.
// - height (число), по умолчанию 600.
// - title (строка), по умолчанию "Новое окно".
// Реализуй это через деструктуризацию с параметрами по умолчанию прямо в аргументах функции.
// createWindow({ width: 1024, title: "Профиль" }); // Должен использовать height по умолчанию.
// createWindow(); // Должен использовать все значения по умолчанию.

function createWindow({
  width = 800,
  height = 600,
  title = 'Новое окно',
} = {}) {
  return { width, height, title };
}

console.log(createWindow({ width: 1024, title: 'Профиль' })); // { width: 1024, height: 600, title: 'Профиль' }
console.log(createWindow()); // { width: 800, height: 600, title: 'Новое окно' }
