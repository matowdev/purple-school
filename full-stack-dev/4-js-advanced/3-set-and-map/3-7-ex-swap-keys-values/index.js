'use strict';

// Нужно поменять местами ключи/значения в искомом Map() объекте. Возможно разными способами?

const weatherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14],
]);

const reverseWeatherMap = new Map([...weatherMap].map((el) => el.reverse()));

// ?? альтернативное решение (без мутаций массива.. деструктуризация и "просто" перестановка)
// const reverseWeatherMap = new Map(
//   [...weatherMap].map(([key, value]) => [value, key])
// );

// ?? альтернативное решение (через Array.from() и его второй аргумент/параметр map() функцию)
// const reverseWeatherMap = new Map(
//   Array.from(weatherMap, ([key, value]) => [value, key])
// );

console.log(reverseWeatherMap); // Map(3) { 10 => 'London', 7 => 'Moscow', 14 => 'Paris' }

/*
!! Все решения рабочие. Вариант с reverse() лучше исключить из-за мутаций. Вариант с Array.from является наиболее "зрелым" и оптимизированным технически, так как исключает лишнюю итерацию и создание временного массива.
*/
