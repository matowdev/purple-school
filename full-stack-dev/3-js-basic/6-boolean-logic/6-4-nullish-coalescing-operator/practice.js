// Задание 1:
// Посмотри на код ниже. Какие значения будут у переменных a, b, и c в результате?

let a = false ?? 'default'; // false
let b = 0 ?? 'default'; // 0
let c = undefined ?? 'default'; // 'default'

// Задание 2:
// Представь, что у нас есть функция, которая настраивает анимацию. Она принимает объект с настройками. Одно из свойств, duration, может быть равно 0 (анимация мгновенная).
// В коде ниже есть баг из-за неправильного оператора. Анимация с duration: 0 не работает как надо.
// Как исправить этот код, чтобы при duration: 0 использовался именно 0, а не значение по умолчанию 300?

function animate(options) {
  const duration = options.duration ?? 300;
  console.log(`Длительность анимации: ${duration}мс`);
}

animate({ duration: 0 }); // Длительность анимации: 0мс
animate({}); // Длительность анимации: 300мс

// Задание 3:
// Представь, что у нас есть объект userProfile. Нам нужно написать функцию, которая устанавливает тему оформления ('light') по умолчанию, но только если она ещё не задана в профиле.
// Перепиши код в функции setupProfile, используя оператор ??= для более короткой и чистой записи.

function setupProfile(profile) {
  // if (profile.theme === undefined || profile.theme === null) {
  //   profile.theme = 'light';
  // }
  profile.theme ??= 'light'; // одной строчкой замена if логики
  return profile;
}

const user1 = { name: 'Alex', theme: 'dark' };
console.log(setupProfile(user1)); // { name: 'Alex', theme: 'dark' }

const user2 = { name: 'Bob' };
console.log(setupProfile(user2)); // { name: 'Bob', theme: 'light' }
