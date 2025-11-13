'use strict';

// Задание 1:
// Создайте объект, представляющий информацию о книге, и выведете его свойства.

const book = {
  name: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  year: 2008,
  pages: 176,
};

for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}
/*
name: JavaScript: The Good Parts
author: Douglas Crockford
year: 2008
pages: 176
*/

// Задание 2:
// Создайте объект с информацией о студенте и найдите конкретное значение по динамическому ключу.

let propertyName;

if (process.argv.slice(2).length === 0) {
  propertyName = 'name';
} else {
  propertyName = process.argv[2];
}

const personObj = {
  name: 'Алексей',
  age: 21,
  university: 'МГУ',
};

console.log(personObj[propertyName]); // "Алексей"

// Задание 3:
// Создайте объект с информацией о товаре и добавьте к нему новое свойство с помощью оператора присваивания.

const product = {
  name: 'Laptop',
  brand: 'Apple',
  color: 'red',
  price: 999,
};

const newKey = 'warranty';
const period = '2 years';

product[newKey] = period;

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}
/*
name: Laptop
brand: Apple
color: red
price: 999
warranty: 2 years
*/

// Задание 4:
// Создайте объект с информацией о сотруднике и удалите из него указанное свойство.

const personPropDelete = {
  department: 'web',
  name: 'Мария',
  position: 'Разработчик',
  salary: 80000,
};

const propToDelete = 'department';

if (propToDelete in personPropDelete) {
  delete personPropDelete[propToDelete];
}

for (const key in personPropDelete) {
  console.log(`${key}: ${personPropDelete[key]}`);
}
/*
name: Мария
position: Разработчик
salary: 80000
*/

// Задание 5:
// Создайте объект с информацией о фильме и скопируйте его с помощью spread-оператора, добавив новое свойство.

const copyMovieObj = {
  title: 'Inception',
  genre: 'Sci-Fi',
  year: 2010,
  rating: 8.8,
};

const newMovieObj = { ...copyMovieObj, director: 'Christopher Nolan' };

for (const key in newMovieObj) {
  console.log(`${key}: ${newMovieObj[key]}`);
}
/*
title: Inception
genre: Sci-Fi
year: 2010
rating: 8.8
director: Christopher Nolan
*/

// Задание 6:
// Создайте объект с информацией о ресторане и проверьте наличие определенного свойства в объекте.

const checkPropInObj = {
  name: 'John',
  cuisine: true,
  parking: 'no',
};

if ('name' in checkPropInObj) {
  console.log('Свойство существует');
} else {
  console.log('Свойство отсутствует');
}
