// Дан массив чисел: const arr = [1, 40, -5, 10, 0]
// Нужно написать функцию, которая сортирует данный массив при помощи циклов for (т.е. по возрастанию или убыванию).
// Подсказка:
// - Нужно использовать 2 цикла, вложенных друг в друга.
// - Нужно сравнивать и менять элементы.

const arr = [1, 40, -5, 10, 0];

function getSortingArr(arr = []) {
  if (arr.length < 2) {
    return `Массив слишком короткий!`;
  }

  let sortingArr = [...arr]; // копия

  // "Пузырьковая" логика/сортировка
  for (let i = 0; i < sortingArr.length; i++) {
    for (let j = 0; j < sortingArr.length - 1 - i; j++) {
      if (sortingArr[j] > sortingArr[j + 1]) {
        const temp = sortingArr[j];
        sortingArr[j] = sortingArr[j + 1];
        sortingArr[j + 1] = temp;
      }
    }
  }

  return sortingArr;
}

console.log(getSortingArr(arr)); // [ -5, 0, 1, 10, 40 ]

// ?? моё решение
// function getSortingArr(arr = []) {
//   if (arr.length < 1) {
//     return `Сортировка не возможна, пустой массив!`;
//   }
//
//   let tempArr = [...arr];
//   const sortingArr = [];
//
//   for (let i = tempArr.length - 1; i >= 0; i--) {
//     let smallestNum = tempArr[i];
//
//     for (let j = tempArr.length - 1; j >= 0; j--) {
//       if (tempArr[j] < smallestNum) {
//         smallestNum = tempArr[j];
//       }
//     }
//
//     if (!sortingArr.includes(smallestNum)) {
//       sortingArr.push(smallestNum);
//     }
//
//     let getIndex = tempArr.indexOf(smallestNum);
//     tempArr.splice(getIndex, 1);
//   }
//
//   return sortingArr;
// }
//
// console.log(getSortingArr(arr)); // [ -5, 0, 1, 10, 40 ]
