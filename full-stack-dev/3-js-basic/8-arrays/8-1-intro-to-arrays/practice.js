// Задание 1:
// Напиши функцию addUser(users, newUser).
// Что она делает: Принимает массив имён users (например, ['Анна', 'Виктор']) и новое имя newUser (например, 'Светлана').
// Что возвращает: Функция должна вернуть новый массив, в котором будут все старые пользователи и новый пользователь в конце.
// Самое важное условие: Оригинальный массив users после вызова функции не должен измениться.

const users = ['Анна', 'Виктор'];
let newUser = 'Светлана';

function addUser(users, newUser) {
  return [...users, newUser];
}

console.log(addUser(users, newUser)); // [ 'Анна', 'Виктор', 'Светлана' ]
console.log(users); // [ 'Анна', 'Виктор' ]

// Задание 2:
// Напиши функцию getTicketInfo(tickets, ticketNumber).
// Что она делает: Принимает массив с номерами билетов tickets (например, ['T-1', 'T-2', 'T-3', 'T-4']) и ticketNumber — порядковый номер билета, который нужно найти.
// Особенность: Если ticketNumber — положительное число, оно означает номер с начала (1 — первый, 2 — второй и т.д.). Если ticketNumber — отрицательное, оно означает номер с конца (-1 — последний, -2 — предпоследний).
// Что возвращает: Строку с информацией. Если билет найден, то "Билет ... найден". Если такого номера нет (например, в массиве 4 билета, а ищут 5-й), то "Билет не найден".
// Подсказка: Подумай, как метод at() может упростить эту задачу.
// Пример вызова:
// getTicketInfo(['T-1', 'T-2', 'T-3', 'T-4'], -2) должен вернуть "Билет T-3 найден".
// getTicketInfo(['T-1', 'T-2'], 3) должен вернуть "Билет не найден".

function getTicketInfo(tickets, ticketNumber) {
  if (tickets.at(ticketNumber) !== undefined) {
    return `Билет ${tickets.at(ticketNumber)} найден!`;
  } else {
    return `Билет не найден..`;
  }
}

console.log(getTicketInfo(['T-1', 'T-2', 'T-3', 'T-4'], -2)); // Билет T-3 найден!
console.log(getTicketInfo(['T-1', 'T-2', 'Т-3'], 0)); // Билет T-1 найден!
console.log(getTicketInfo(['T-1', 'T-2'], 3)); // Билет не найден..

// ?? альтернативное решение (с учётом того, что 0 должен исключаться)
function getTicketInfo(tickets, ticketNumber) {
  // Если номер билета 0, at() вернет первый элемент, НО по условию отсчет идет с 1, поэтому 0 считаем невалидным.
  if (ticketNumber === 0) {
    return 'Билет не найден';
  }

  // Преобразуем 1-based индекс в 0-based для положительных чисел
  const index = ticketNumber > 0 ? ticketNumber - 1 : ticketNumber;
  const ticket = tickets.at(index);

  if (ticket !== undefined) {
    return `Билет ${ticket} найден`;
  } else {
    return 'Билет не найден';
  }
}

console.log('Поиск по отрицательному индексу (-2):');
console.log(getTicketInfo(['T-1', 'T-2', 'T-3', 'T-4'], -2)); // "Билет T-3 найден"

console.log('\nПоиск по положительному индексу (1):');
console.log(getTicketInfo(['T-1', 'T-2', 'T-3'], 1)); // "Билет T-1 найден"

console.log('\nПоиск по индексу 0:');
console.log(getTicketInfo(['T-1', 'T-2', 'Т-3'], 0)); // "Билет не найден"

console.log('\nПоиск несуществующего билета (3):');
console.log(getTicketInfo(['T-1', 'T-2'], 3)); // "Билет не найден"
