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
