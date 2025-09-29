'use strict';

// Задание 1:
// Представь, что ты делаешь веб-приложение, в котором пользователь может выбрать тему (светлую или тёмную) и язык интерфейса. Эти настройки нужно сохранять в браузере, чтобы при следующем визите они не сбрасывались.
// Напиши две функции:
// 1. saveSettings(settingsObj): Эта функция принимает объект с настройками (например, { theme: 'dark', language: 'ru' }) и сохраняет его в localStorage под ключом appSettings.
// 2. loadSettings(): Эта функция должна загружать настройки из localStorage, парсить их обратно в объект и возвращать его. Если в localStorage по ключу appSettings ничего нет, функция должна вернуть пустой объект {}.

function saveSettings(settingsObj = {}) {
  localStorage.setItem('appSettings', JSON.stringify(settingsObj));
}

saveSettings({}); // {}
saveSettings({ theme: 'dark', language: 'ru' }); // {"theme":"dark","language":"ru"}

function loadSettings() {
  const storageSettings = JSON.parse(localStorage.getItem('appSettings'));

  if (!storageSettings) {
    return {};
  }

  return storageSettings;
}

const loadResult = loadSettings();
console.log(loadResult); // {theme: 'dark', language: 'ru'}

// Задание 2:
// У тебя есть объект с данными пользователя, который содержит как публичную, так и приватную информацию.
// Напиши функцию getPublicProfileJSON(userObject), которая принимает такой объект и возвращает его в виде красиво отформатированной JSON-строки (с отступами). Однако в этой строке не должно быть полей email и passwordHash.
// Подсказка: Вспомни про второй и третий аргументы JSON.stringify(). Они здесь очень пригодятся.

const user = {
  id: 101,
  username: 'admin',
  email: 'admin@example.com',
  passwordHash: 'a1b2c3d4e5f6...', // Секретный хэш
  lastLogin: new Date(),
  settings: {
    notifications: true,
    theme: 'dark',
  },
};

function getPublicProfileJSON(userObject = {}) {
  return JSON.stringify(
    userObject,
    ['id', 'username', 'lastLogin', 'settings', 'notifications'],
    2
  );
}

console.log(getPublicProfileJSON(user));
/*
{
  "id": 101,
  "username": "admin",
  "lastLogin": "2025-09-29T07:28:52.745Z",
  "settings": {
    "notifications": true,
  }
}
*/

// ?? пример продвинутого применения
function getNewPublicProfileJSON(userObject) {
  const replacer = (key, value) => {
    if (key === 'passwordHash') {
      return undefined; // Это полностью уберёт ключ из JSON
    }
    if (key === 'email') {
      return '[REDACTED]'; // А это - заменит значение
    }
    if (typeof value === 'number') {
      return String(value); // Превратит число в строку
    }
    return value; // Все остальные значения оставляем как есть
  };

  return JSON.stringify(userObject, replacer, 2);
}

console.log(getNewPublicProfileJSON(user));
/*
{
  "id": "101",
  "username": "admin",
  "email": "[REDACTED]",
  "lastLogin": "2025-09-29T07:35:05.000Z",
  "settings": {
    "notifications": true,
    "theme": "dark"
  }
}
*/
