'use strict';

// Задание 1:
// Нужно написать функцию, которая рассчитает итоговую цену всей покупки с учетом скидки.
// 1. Сначала нужно узнать "первичную" цену (общую стоимость без скидки).
// 2. Затем нужно рассчитать, сколько составляет скидка от этой цены.
// 3. Вычесть сумму скидки из "первичной" цены, чтобы получить (итоговую) цену.

function getFinalPrice(price = 0, quantity = 0, discount = 0) {
  const initPrice = price * quantity;
  const discountSum = initPrice * (discount / 100);
  const finalPrice = initPrice - discountSum;

  return finalPrice;
}

console.log(getFinalPrice(100, 3, 15)); // 255
console.log(getFinalPrice(50, 2, 10)); // 90
console.log(getFinalPrice()); // 0
