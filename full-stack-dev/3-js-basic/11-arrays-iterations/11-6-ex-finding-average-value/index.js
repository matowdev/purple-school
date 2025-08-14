// Нужно найти "среднее значение" чисел произвольного массива, с помощью reduce().

const arr = [1, 4, 4, 10];

const meanValue = arr.reduce((acc, num) => acc + num / arr.length, 0);
console.log(meanValue); // 4.75

// ?? альтернативное решение
const newMeanValue = arr.reduce((acc, num, index, array) => {
  acc += num;

  if (index === array.length - 1) {
    return acc / array.length;
  }

  return acc;
}, 0);

console.log(newMeanValue); // 4.75
