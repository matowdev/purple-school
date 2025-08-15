// Задание 1:
// Есть массив возрастов:
// const ages = [14, 25, 32, 18, 17, 40];
// Нужно написать код, который проверяет, есть ли в этом массиве хотя бы один совершеннолетний (возраст 18 лет или больше). Используй метод some(). Результат (true или false) выведи в консоль.

const ages = [14, 25, 32, 18, 17, 40];

const hasAdults = ages.some((age) => age >= 18);
console.log(hasAdults); // true

// Задание 2:
// Представь, что ты получаешь с сервера список пользователей. Нужно проверить, у всех ли пользователей заполнено поле name.
// Напиши код, который проверит, что у каждого пользователя name — это не пустая строка. Используй метод every(). Выведи результат в консоль.

const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bill' },
  { id: 3, name: '' },
  { id: 4, name: 'Kate' },
];

const isNamesOk = users.every((user) => user.name !== ''); // можно/просто user.name (но для большей наглядности..)
console.log(isNamesOk); // false

// Задание 3:
// У тебя есть отсортированный по дате список транзакций. Нужно проверить, есть ли в этом списке "подозрительная" активность: транзакция на сумму больше 1000, за которой сразу же следует другая транзакция в тот же день.
// Используй метод some() вместе со вторым и третьим параметрами колбэка (index, array), чтобы найти такую транзакцию. Выведи результат (true или false) в консоль.

const transactions = [
  { amount: 500, date: '2023-01-15' },
  { amount: 1200, date: '2023-01-16' }, // <-- Подозрительная
  { amount: 300, date: '2023-01-16' }, // <-- Следующая в тот же день
  { amount: 800, date: '2023-01-17' },
  { amount: 1500, date: '2023-01-18' },
];

const weirdActivity = transactions.some(
  (transaction, index, arr) =>
    transaction.amount > 1000 &&
    index !== arr.length - 1 &&
    arr[index + 1].date === transaction.date
);
console.log(weirdActivity); // true

// ?? альтернативное решение
const hasSuspiciousActivity = transactions.some((transaction, index, array) => {
  // 1. Проверяем, что есть следующий элемент, чтобы избежать ошибки
  const hasNextTransaction = index < array.length - 1;

  // Если следующего нет, то и проверять нечего
  if (!hasNextTransaction) {
    return false;
  }

  // 2. Формируем полное условие
  const isLargeAmount = transaction.amount > 1000;
  const isSameDay = array[index + 1].date === transaction.date;

  return isLargeAmount && isSameDay;
});

console.log(hasSuspiciousActivity); // true
