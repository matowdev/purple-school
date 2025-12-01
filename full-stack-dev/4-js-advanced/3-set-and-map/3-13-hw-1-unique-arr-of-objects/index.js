// Нужно сделать с помощью Set() уникализацию массива объектов:
// Момент: Прямая уникализация объектов с помощью Set() невозможна.
// - Необходимо уникализировать массив, содержащий объекты с идентичными идентификаторами (например, ID1, ID2, повторно ID1), удаляя повторяющиеся идентификаторы.
// - Используем комбинацию `Set` с другими методами, такими как `map` и `find`, для обхода ограничений `Set` по отношению к объектам.

'use strict';

const users = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const usersSet = [...new Set(users.map((user) => user.id))].map((id) =>
  users.find((user) => user.id === id)
);

console.log(usersSet); // [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]

// ?? альтернативное решение, через Map() (с линейной сложностью O(N))
const usersMap = new Map();

for (const user of users) {
  if (!usersMap.has(user.id)) {
    usersMap.set(user.id, user);
  }
}

const usersMapResult = Array.from(usersMap.values());
console.log(usersMapResult); // [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]
