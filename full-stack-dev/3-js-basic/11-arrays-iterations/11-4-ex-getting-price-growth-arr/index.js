// Дан  массив изменения цен prices:
// const prices = [[100, 200], [120, 100], [200, 350]];
// Где внутри: 1-й элемент массива является ценой в момент Х, 2-й - ценой в момент Y.
// Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен, т.е. положительная разница/увеличение, типа: [100, 150] согласно первого и третьего товара.

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const growthPrice = prices
  .filter((price) => price[1] > price[0])
  .map((price) => price[1] - price[0]);

console.log(growthPrice); // [ 100, 150 ]

// ?? альтернативное решение (через деструктуризацию)
const growthNewPrice = prices
  .filter(([oldPrice, newPrice]) => newPrice > oldPrice)
  .map(([oldPrice, newPrice]) => newPrice - oldPrice);

console.log(growthNewPrice); // [ 100, 150 ]

// ?? альтернативное решение от PS
const result = prices
  .map((productPrice) => productPrice[1] - productPrice[0])
  .filter((price) => price > 0);

console.log(result); // [ 100, 150 ]
