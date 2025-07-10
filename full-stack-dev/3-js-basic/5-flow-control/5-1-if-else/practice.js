// Задание 1:
// Напиши функцию canBuyAlcohol(age), которая принимает возраст пользователя и возвращает строку:

function canBuyAlcohol(age) {
  if (age >= 18) {
    console.log('Можно купить алкоголь!');
  } else {
    console.log('Нельзя купить алкоголь!');
  }
}

canBuyAlcohol(16); // Нельзя купить алкоголь!
canBuyAlcohol(21); // Можно купить алкоголь!

// Задание 2:
// Напиши функцию getAccessLevel(userRole), которая принимает строку с ролью пользователя и возвращает:

function getAccessLevel(userRole) {
  if (userRole === 'admin') {
    console.log('Доступ администратора');
  } else if (userRole === 'user') {
    console.log('Доступ пользователя');
  } else {
    console.log('Доступ запрещен!');
  }
}

getAccessLevel('user'); // Доступ пользователя
getAccessLevel('admin'); // Доступ администратора
getAccessLevel('moderator'); // Доступ запрещен!

// Задание 3:
// Напиши код, который проверяет переменную itemsCount.
// Если в itemsCount находится число больше нуля, нужно вывести в консоль сообщение: В корзине ${itemsCount} товар(ов).
// Если itemsCount — это 0 (или любое другое falsy-значение, например undefined), нужно вывести: Ваша корзина пуста.
// Попробуй решить эту задачу в одну строку, используя тернарный оператор (? :).

function checkItemsCount(items) {
  let itemsCount = items || 0;
  let message =
    itemsCount > 0
      ? `В корзине ${itemsCount} товар(ов).`
      : 'Ваша корзина пуста.';

  return message;
}

console.log(checkItemsCount(5)); // В корзине 5 товар(ов).
console.log(checkItemsCount(0)); // Ваша корзина пуста.
console.log(checkItemsCount()); // Ваша корзина пуста.

// Задание 4:
// Напиши функцию getUserGreeting(user). Эта функция принимает объект user, у которого могут быть свойства name и isAdmin (булево значение).
// Сначала проверь, существует ли вообще объект user. Если он не передан (т.е. undefined), функция должна вернуть строку "Привет, гость!".
// Если объект user есть, проверь, есть ли у него свойство name.
// Если name есть, нужно дополнительно проверить, является ли пользователь админом (isAdmin === true).
// Если он админ, вернуть "Здравствуйте, ${user.name}! Вам предоставлен полный доступ."
// Если он не админ, вернуть "Привет, ${user.name}!"
// Если у объекта user нет свойства name, вернуть "Привет, анонимный пользователь!".

function getUserGreeting(user) {
  if (!user) {
    return 'Привет, гость!';
  }

  if (user.name) {
    if (user.isAdmin) {
      return `Здравствуйте, ${user.name}! Вам предоставлен полный доступ.`;
    } else {
      return `Привет, ${user.name}!`;
    }
  } else {
    return 'Привет, анонимный пользователь!';
  }
}

const adminUser = { name: 'Алиса', isAdmin: true };
const simpleUser = { name: 'Борис', isAdmin: false };
const anonymousUser = { isAdmin: false }; // нет имени
const guestUser = undefined; // нет объекта

console.log(getUserGreeting(adminUser)); // Здравствуйте, Алиса! Вам предоставлен полный доступ.
console.log(getUserGreeting(simpleUser)); // Привет, Борис!
console.log(getUserGreeting(anonymousUser)); // Привет, анонимный пользователь!
console.log(getUserGreeting(guestUser)); // Привет, гость!

// ? альтернативное решение
// ? Этот подход избегает глубокой вложенности и называется "ранний выход" или "Guard Clause".

function getUserGreetingAlternative(user) {
  if (!user) {
    return 'Привет, гость!';
  }

  // Если имени нет, сразу выходим
  if (!user.name) {
    return 'Привет, анонимный пользователь!';
  }
  // Если имя есть, проверяем админку
  if (user.isAdmin) {
    return `Здравствуйте, ${user.name}! Вам предоставлен полный доступ.`;
  }

  // Если дошли до сюда, значит, это обычный пользователь с именем
  return `Привет, ${user.name}!`;
}
