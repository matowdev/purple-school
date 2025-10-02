// Задание 1. Права доступа:
// Напиши одну строку кода для определения, может ли пользователь редактировать статью.
// Условия: Пользователь может редактировать, если он админ (isAdmin) ИЛИ у него есть права на редактирование (canWrite), И при этом статья НЕ находится на модерации (!isModerated).

const isAdmin = false;
const canWrite = true;
const isModerated = false;

const canEdit = (isAdmin || canWrite) && !isModerated;

console.log(`Может редактировать: ${canEdit}`); // Может редактировать: true

// Задание 2. Настройка профиля:
// У тебя есть объект userProfile. Нужно написать одну строку кода, которая устанавливает для него тему оформления по умолчанию ('light'), но только в том случае, если тема (theme) ещё не задана (т.е. свойство theme равно undefined или null). Если тема уже есть (даже 'dark'), ничего меняться не должно.
// Используй для этого самый короткий и современный синтаксис.

let user = { name: 'Alex', theme: 'dark' };
user.theme ??= 'light';

console.log(user); // { name: 'Alex', theme: 'dark' }

user = { name: 'Bob' };
user.theme ??= 'light';

console.log(user); // { name: 'Bob', theme: 'light' }
