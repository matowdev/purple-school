// Задание 1:
// У вас есть объект, в котором хранятся результаты тестов.
// Напишите код, который посчитает сумму баллов только по тем предметам, где указан числовой результат. Игнорируйте строковые значения ('passed', 'failed').
// Подсказка: Подумайте, какой метод (Object.keys, Object.values или Object.entries) здесь будет наиболее удобен.

const testResults = {
  math: 95,
  literature: 88,
  physics: 'passed', // Обратите внимание, не все значения - числа
  chemistry: 91,
  biology: 'failed',
  history: 75,
};

function getResultsSum(resultsObj = {}) {
  if (Object.keys(resultsObj).length === 0) {
    return false;
  }

  let resultSum = 0;

  for (const result of Object.values(resultsObj)) {
    if (typeof result === 'number') {
      resultSum += result;
    }
  }

  return resultSum;
}

console.log(getResultsSum(testResults)); // 349

// ?? альтернативное решение
function getNewResultsSum(resultsObj = {}) {
  if (Object.keys(resultsObj).length === 0) {
    return false;
  }

  return Object.values(resultsObj)
    .filter((result) => typeof result === 'number')
    .reduce((acc, result) => (acc += result), 0);
}

console.log(getNewResultsSum(testResults)); // 349

// Задание 2:
// У вас есть объект с настройками пользователя.
// Нужно создать новый объект, который будет содержать только "публичные" настройки. Скопируйте в новый объект все свойства из userSettings, кроме тех, чьи ключи начинаются с символа подчеркивания _.
// Подсказка: Здесь вам понадобятся и ключ, и значение. Какой метод для этого подходит лучше всего? Возможно, после получения пар [ключ, значение] вам понадобится метод Object.fromEntries(), чтобы собрать из них новый объект.

const userSettings = {
  theme: 'dark',
  fontSize: 16,
  showAvatars: true,
  lastLogin: '2025-08-29',
  _internalId: 'xyz-123-abc', // "приватное" свойство
};

const returnNewObj = Object.fromEntries(
  Object.entries(userSettings).filter(([key]) => !key.startsWith('_'))
);

console.log(returnNewObj); // { theme: 'dark', fontSize: 16, showAvatars: true, lastLogin: '2025-08-29' }

// Задание 3:
// У вас есть объект, который сопоставляет названия ролей с ID пользователей.
// Создайте новый объект roleIds, который будет "перевёрнутой" версией userRoles. То есть, ключами должны стать ID пользователей, а значениями — названия ролей.
// Важное условие: В новый объект должны попасть только активные роли (те, у которых ID пользователя не null).
// Ожидаемый результат:
// {
//   user_1: 'admin',
//   user_2: 'editor',
//   user_3: 'viewer'
// }

const userRoles = {
  admin: 'user_1',
  editor: 'user_2',
  viewer: 'user_3',
  moderator: null, // Эта роль неактивна
};

const roleIds = Object.fromEntries(
  Object.entries(userRoles)
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => [value, key])
);

console.log(roleIds); // { user_1: 'admin', user_2: 'editor', user_3: 'viewer' }
