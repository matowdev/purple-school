'use strict';

// Задание 1:
// 1. Создай переменную priceMap (типа Map) на основе pricesObj.
// 2. Добавь в эту мапу новый товар 'grape' с ценой 300.
// 3. Преобразуй получившуюся мапу обратно в обычный объект и сохрани в переменную finalObj.
// 4. Выведи finalObj в консоль.

const pricesObj = {
  banana: 100,
  apple: 200,
  pear: 150,
};

const priceMap = new Map(Object.entries(pricesObj));
priceMap.set('grape', 300);

const finalObj = Object.fromEntries(priceMap);

console.log(finalObj); // { banana: 100, apple: 200, pear: 150, grape: 300 }

// Задание 2:
// Нам нужно подготовить простой объект для отправки на сервер, но в него должны попасть только студенты, которые сдали экзамен (балл 50 и выше).
// 1. Создай scoresMap через литеральное наполнение (массив массивов) с данными:
// - 'Ivan': 40
// - 'Anna': 85
// - 'Oleg': 55
// 2. Используя цепочку методов (конвертация в массив -> фильтрация -> конвертация в объект), создай переменную passedObj.
// 3. В passedObj должны остаться только Anna и Oleg в формате обычного объекта.
// Подсказка: Object.fromEntries() умеет "съедать" не только Map, но и обычный массив пар, который вернёт тебе .filter().

const scoresMap = new Map([
  ['Ivan', 40],
  ['Anna', 85],
  ['Oleg', 55],
]);

// console.log(scoresMap); // Map(3) { 'Ivan' => 40, 'Anna' => 85, 'Oleg' => 55 }
// console.log(Array.from(scoresMap)); // [ [ 'Ivan', 40 ], [ 'Anna', 85 ], [ 'Oleg', 55 ] ]
// console.log([...scoresMap]); // [ [ 'Ivan', 40 ], [ 'Anna', 85 ], [ 'Oleg', 55 ] ]

const passedObj = Object.fromEntries(
  // [...scoresMap].filter(([_, score]) => score > 50)
  Array.from(scoresMap).filter(([_, score]) => score > 50)
);

console.log(passedObj); // { Anna: 85, Oleg: 55 }
