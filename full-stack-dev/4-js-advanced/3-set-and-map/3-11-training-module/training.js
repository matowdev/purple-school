'use strict';

// Задание 1:
// У нас есть массив тегов от постов блога, но авторы часто пишут одни и те же теги по несколько раз. Напиши функцию getUniqueTags(tags), которая:
// 1. Принимает массив строк.
// 2. Использует Set для удаления дублей.
// 3. Возвращает обычный массив (не Set) с уникальными тегами.

const rawTags = ['javascript', 'css', 'html', 'javascript', 'css', 'react'];

function getUniqueTags(tags) {
  if (!tags || !Array.isArray(tags)) {
    return [];
  }

  return [...new Set(tags)];
}

console.log(getUniqueTags(rawTags)); // ['javascript', 'css', 'html', 'react']

// Задание 2:
// Нам нужно создать простое хранилище настроек.
// 1. Создай переменную settings через new Map().
// 2. Добавь в неё данные (используя метод .set()):
// - Ключ 1 (число) -> Значение 'Admin ID'
// - Ключ 'theme' (строка) -> Значение 'dark'
// - Ключ true (булево) -> Значение 'isActive'
// 3. Выведи в консоль значение, которое лежит под ключом 1 (число).
// 4. Выведи в консоль значение, которое лежит под ключом 'theme'.
// Цель: Привыкнуть к методам .set() и .get() и убедиться, что число 1 работает как ключ.

const settings = new Map();

settings.set(1, 'Admin ID');
settings.set('theme', 'dark');
settings.set(true, 'isActive');

console.log(settings.get(1)); // "Admin ID"
console.log(settings.get('theme')); // "dark"

// Задание 3:
// 1. Дан обычный объект prices.
// 2. Создай переменную priceMap (типа Map), инициализировав её данными из prices. Подсказка: используй Object.entries(prices) внутри конструктора new Map(...).
// 3. Добавь в этот Map новый товар: orange с ценой 300.
// 4. Преобразуй полученный Map обратно в обычный объект updatedPrices. Подсказка: используй Object.fromEntries(...).
// 5. Выведи updatedPrices в консоль.

const prices = {
  banana: 100,
  apple: 200,
};

const priceMap = new Map(Object.entries(prices));
priceMap.set('orange', 300);

const updatedPrices = Object.fromEntries(priceMap);
console.log(updatedPrices); // { banana: 100, apple: 200, orange: 300 }

// Задание 4:
// У нас есть Map с инвентарем магазина (товар -> количество).
// 1. Напиши цикл for...of, который перебирает inventory.
// 2. Используй деструктуризацию [item, qty] прямо в круглых скобках цикла.
// 3. Внутри цикла выведи строку: Товар: Mice, Остаток: 10 (и так для каждого).

const inventory = new Map([
  ['Mice', 10],
  ['Keyboards', 5],
  ['Monitors', 2],
]);

for (const [item, qty] of inventory) {
  console.log(`Товар: ${item}, Остаток: ${qty}`);
}
/*
Товар: Mice, Остаток: 10
Товар: Keyboards, Остаток: 5
Товар: Monitors, Остаток: 2
*/

// Задание 5:
// 1. Создай объект пользователя: const userBob = { name: 'Bob' };.
// 2. Создай пустой Map visits.
// 3. Запиши в visits, что userBob был у нас 10 раз. (Ключ — переменная userBob).
// 4. Попробуй получить данные, используя новый объект с теми же данными: console.log(visits.get({ name: 'Bob' }));.
// 5. Попробуй получить данные, используя правильную ссылку: console.log(visits.get(userBob));.
// В комментариях к коду напиши, что выведет консоль в пунктах 4 и 5 (undefined или 10), и почему.

const userBob = { name: 'Bob' };
const visits = new Map();

visits.set(userBob, 10);

console.log(visits.get({ name: 'Bob' })); // undefined
console.log(visits.get(userBob)); // 10

// Задание 6:
// Мы хотим хранить секретные данные пользователя, пока он существует в системе.
// 1. Создай let user = { name: 'Secret Agent' };.
// 2. Создай const secretStorage = new WeakMap();.
// 3. Запиши данные: ключ — user, значение — "super_secret_key".
// 4. Проверь наличие данных через .has(user) (выведи в консоль).
// 5. Теперь сымитируй удаление пользователя: user = null;.
// 6. Вопрос на понимание: Напиши в комментарии, можем ли мы теперь как-то получить "super_secret_key" из secretStorage? И почему?

let user = { name: 'Secret Agent' };
const secretStorage = new WeakMap();

secretStorage.set(user, 'super_secret_key');
console.log(secretStorage.has(user)); // true

user = null;

setTimeout(() => {
  console.log(secretStorage.has(user)); // false
}, 100);

// Задание 7:
// Напиши функцию processUser(user), которая имитирует сложные вычисления.
// 1. Создай внешнюю переменную cache (через WeakMap).
// 2. Напиши функцию processUser(user), которая:
// - Шаг А: Проверяет, есть ли результат для этого user в cache. Если есть — возвращает его (и выводит в консоль "Взято из кеша").
// - Шаг Б: Если нет — генерирует случайное число (Math.random()), сохраняет его в cache для этого юзера и возвращает (выводит в консоль "Вычисляю...").
// 3. Создай объект alex = { name: 'Alex' }.
// 4. Вызови функцию 2 раза подряд для alex.
// Ожидание: первый раз — "Вычисляю...", второй раз — "Взято из кеша".

const cache = new WeakMap();

function processUser(user) {
  if (cache.has(user)) {
    console.log('Взято из кеша');
    return cache.get(user);
  } else {
    const num = Math.random();
    cache.set(user, num);
    console.log('Вычисляю...');
    return num;
  }
}

const alex = { name: 'Alex' };

processUser(alex); // "Вычисляю..."
processUser(alex); // "Взято из кеша"

// Задание 8:
// Мы делаем чат. Нужно помечать сообщения как "прочитанные", не меняя сами объекты сообщений (не добавляя в них свойство isRead: true).
// 1. Создай два объекта сообщений: let msg1 = { text: 'Привет!' }; let msg2 = { text: 'Как дела?' };
// 2. Создай коллекцию readMessages, используя WeakSet.
// 3. Пользователь прочитал первое сообщение: добавь msg1 в readMessages.
// 4. Напиши функцию isRead(msg), которая принимает сообщение и возвращает true (если прочитано) или false (если нет).
// 5. Проверь оба сообщения через эту функцию и выведи результат.

const msg1 = { text: 'Привет!' };
const msg2 = { text: 'Как дела?' };

const readMessages = new WeakSet();
readMessages.add(msg1);

function isRead(msg) {
  return readMessages.has(msg);
}

console.log(isRead(msg1)); // true
console.log(isRead(msg2)); // false
