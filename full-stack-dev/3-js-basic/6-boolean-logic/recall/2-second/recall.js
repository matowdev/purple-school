'use strict';

// Задание 1:
// Представь, что у нас есть система доступа к админ-панели.
// Условия для доступа:
// 1. Пользователь должен быть авторизован (isLoggedIn).
// 2. И при этом он должен быть либо isAdmin, либо isModerator.
// Напиши одну строку кода, которая в переменную canAccess запишет true или false в зависимости от этих условий.

const isLoggedIn = true;
const isAdmin = false;
const isModerator = true;

const canAccess = isLoggedIn && (isAdmin || isModerator);

console.log('Доступ разрешен:', canAccess); // "Доступ разрешен: true"

// Задание 2:
// Представь, что у нас есть функция, которая получает настройки анимации. Нам нужно установить "duration" (длительность).
// Условия:
// 1. Мы получаем объект options, у которого может быть свойство duration.
// 2. Если duration не null и не undefined, мы должны использовать его.
// 3. Важный момент: Если duration равен 0, это валидное (допустимое) значение, и мы должны использовать именно 0.
// 4. Если duration равен null или undefined, мы должны установить значение по умолчанию — 500.
// Какой оператор (|| или ??) здесь нужно использовать, чтобы правильно обработать ситуацию с duration: 0?

const options1 = { duration: 0 };
const options2 = { duration: 1000 };
const options3 = { color: 'red' }; // duration здесь undefined
const options4 = { duration: null };

// const options = options1;
const options = options3;

const finalDuration = options.duration ?? 500;

console.log('Итоговая длительность:', finalDuration); // "Итоговая длительность: 500"
