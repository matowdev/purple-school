'use strict';

// Задание 1:
// У вас есть два независимых объекта. Один — logger, который умеет красиво выводить имя в консоль. Второй — user, у которого есть имя, но нет своего метода для его вывода.
// Задача:
// Не меняя исходные объекты, вызовите метод logger.logName таким образом, чтобы он сработал для объекта user и вывел в консоль: User Alina.

const logger = {
  prefix: 'User:',
  logName: function () {
    console.log(this.prefix, this.name);
  },
};

const user = {
  name: 'Alina',
};

logger.logName.call({ ...user, prefix: logger.prefix }); // "User: Alina"

// Задание 2:
// У вас есть объект wallet. У него есть метод getBonus, который добавляет 100 к балансу. Проблема в том, что его можно вызвать много раз и получить бесконечные бонусы.
// const wallet = {
//   balance: 500,
//   getBonus: function () {
//     this.balance += 100;
//     console.log('Бонус начислен! Текущий баланс:', this.balance);
//   },
// };
// Задача:
// Напишите функцию makeSafe(object, methodName).
// Эта функция должна:
// 1. Принимать на вход объект (wallet) и имя его метода в виде строки ('getBonus').
// 2. Заменять исходный метод на новый, "безопасный".
// 3. Новый метод должен работать так:
// - При первом вызове он должен сработать как обычно.
// - Все последующие вызовы этого метода не должны делать ничего.
// Намёк: Вам понадобится переменная-флаг (например, isUsed) и замыкание, чтобы эта переменная "запомнилась" для нового метода.

const wallet = {
  balance: 500,
  getBonus: function () {
    this.balance += 100;
    console.log('Бонус начислен! Текущий баланс:', this.balance);
  },
};

function makeSafe(object = {}, methodName) {
  if (!object || Object.keys(object).length === 0) {
    return false;
  }

  if (!methodName || typeof methodName !== 'string') {
    return false;
  }

  // ?? моё решение
  //   let isUsed = false;
  //
  //   wallet.getBonus = function () {
  //     if (!isUsed) {
  //       this.balance += 100;
  //       console.log('Бонус начислен! Текущий баланс:', this.balance);
  //
  //       isUsed = true;
  //     }
  //
  //     return;
  //   };

  const originMethod = object[methodName]; // сохраняем исходный метод, по сути wallet.getBonus (универсально)
  let isUsed = false; // добавляем флаг

  object[methodName] = function () {
    if (!isUsed) {
      originMethod.call(this); // вызываем метод не от объекта, а для объекта.. который зашёл в makeSafe функцию

      isUsed = true;
    }

    return;
  };
}

// сначала "обезопасим" метод
makeSafe(wallet, 'getBonus');

wallet.getBonus(); // "Бонус начислен! Текущий баланс: 600"
wallet.getBonus(); // ...
wallet.getBonus(); // ...

console.log(wallet.balance); // 600

// Задание 3:
// У вас есть одна универсальная, но неудобная функция sendRequest. Она умеет отправлять любые запросы, но каждый раз требует указывать все три параметра: метод, URL и данные.
// function sendRequest(method, url, data) {
//   console.log(`Отправляем ${method} запрос на ${url}`);
//   if (data) {
//     console.log('С данными:', data);
//   }
//   // (здесь могла бы быть логика реальной отправки запроса)
//   return 'Ответ от сервера';
// }
// Задача:
// Не меняя функцию sendRequest, создайте с помощью метода bind две новые, удобные и специализированные функции:
// 1. getUsers: Эта функция должна вызываться без аргументов (getUsers()) и всегда отправлять GET-запрос на /api/users.
// 2. createUser: Эта функция должна принимать один аргумент (userData) и отправлять POST-запрос с этими данными на тот же /api/users.
// Намёк: В этой задаче this внутри sendRequest не используется, поэтому первым аргументом в bind можно смело ставить null. Всё ваше внимание — на второй и последующие аргументы bind.

function sendRequest(method, url, data) {
  console.log(`Отправляем ${method} запрос на ${url}`);
  if (data) {
    console.log('С данными:', data);
  }
  // здесь могла бы быть логика реальной отправки запроса
  return 'Ответ от сервера';
}

const getUsers = sendRequest.bind(null, 'GET', '/api/users');
getUsers(); // "Отправляем GET запрос на /api/users"

const newUser = { name: 'Pavel', role: 'admin' };
const createUser = sendRequest.bind(null, 'POST', '/api/users');
createUser(newUser);

/*
Отправляем POST запрос на /api/users
С данными: { name: 'Pavel', role: 'admin' }
*/
