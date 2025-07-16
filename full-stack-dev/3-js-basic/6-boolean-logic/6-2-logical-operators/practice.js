// Задание 1:
// Напиши условие, при котором пользователь может просматривать страницу только если он авторизован (isLoggedIn), но не заблокирован (!isBanned).

const isLoggedIn = true;
const isBanned = false;

console.log(
  `Пользователь может просматривать страницу: ${isLoggedIn && !isBanned}!`
); // Пользователь может просматривать страницу: true!

// Задание 2:
// Напиши условие, при котором пользователь может редактировать документ, если у него есть права на запись (canWrite) или он админ (isAdmin), и документ не находится на модерации (!isModerated).

const isAdmin = false;
const canWrite = true;
const isModerated = false;

console.log(
  `Пользователь может редактировать документ: ${
    (isAdmin || canWrite) && !isModerated
  }!`
); // Пользователь может редактировать документ: true!

// ? Задание 3:
// Попробуй предсказать, что выведет console.log в этом выражении
// console.log(null || 0 && "Привет");

console.log(null || (0 && 'Привет')); // 0

// ? Задание 4:
// Что появится в консоли после выполнения этого кода?
// console.log(!!" " && 100);

console.log(!!' ' && 100); // 100

// ? Задание 5:
// У тебя есть объект user, у которого может быть, а может и не быть свойство name. Напиши одну строку кода, которая объявляет переменную displayName и присваивает ей значение user.name, но если user.name — это undefined или пустая строка (""), displayName должна получить значение "Аноним".

const user1 = { name: 'Алиса' };
const user2 = { name: '' };
const user3 = {};

let displayName = user2.name || 'Аноним';
console.log(displayName); // 'Аноним'

// ? Задание 6:
// У тебя есть переменная isLoggedIn (которая может быть true или false) и функция showAdminPanel(). Напиши одну строку кода, которая вызывает функцию showAdminPanel(), но только в том случае, если isLoggedIn равно true.

let isLogged = true; // или false

function showAdminPanel() {
  console.log('Показываем панель администратора!');
}

isLogged && showAdminPanel();
