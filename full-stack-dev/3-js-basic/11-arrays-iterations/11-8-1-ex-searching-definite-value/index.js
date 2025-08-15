// Нужно сразу написать функцию some, которая возвращает true, если такое значение/элемент есть, и false, если его нет в искомом массиве. Внутри функции можно использовать или цикл for, или методы filter(), или find().
// const arr = [2, 4, 4, 10, 20];
// А после этого, как альтернативное решение.. нужно отработать поиск посредствам метода some().

const arr = [2, 4, 4, 10, 20];
const definiteNum = 20;

// через цикл for()
function some(value, arr) {
  for (const num of arr) {
    if (num === value) {
      return true;
    }
  }

  return false;
}

console.log(some(definiteNum, arr)); // true

// через метод filter() ..можно, НО не рекомендуется
function someWithFilter(arr, value) {
  const filteredArr = arr.filter((num) => num === value);
  return filteredArr.length > 0; // если длина нового массива > 0, значит.. элемент(ы) были найдены
}

console.log(someWithFilter(arr, definiteNum)); // true

// через метод find()
function someWithFind(arr, value) {
  const result = arr.find((num) => num === value);
  // return !!result; // перевод результат в boolean, т.е. find() возвращает или сам элемент или undefined (а если нужно найти undefined)
  return result === undefined ? false : true; // так с undefined проблем не будет
}

console.log(someWithFind(arr, definiteNum)); // true

// через метод findIndex()
function someWithFindIndex(arr, value) {
  const index = arr.findIndex((item) => item === value);
  return index !== -1; // проблем с поиском undefined не будет..
}

console.log(someWithFindIndex(arr, definiteNum)); // true

// ?? через метод some()
const hasDefiniteNum = arr.some((num) => num === definiteNum);
console.log(hasDefiniteNum); // true
