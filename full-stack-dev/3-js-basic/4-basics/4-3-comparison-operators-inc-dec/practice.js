// Задание 1:
// Объяви две переменные: myAge со значением 25 и friendAge со значением 27.
// Сравни эти значения с помощью оператора "меньше" (<) и выведи результат в консоль.
// Увеличь значение переменной myAge на 5 одним из операторов присваивания и выведи новое значение в консоль.
// Проверь, стало ли теперь значение myAge больше или равно значению friendAge с помощью соответствующего оператора сравнения, и выведи результат в консоль.

let myAge = 25;
let friendAge = 27;
let comparisonAge = myAge < friendAge;
console.log(comparisonAge); // true

myAge += 5;
console.log(myAge); // 30

console.log(myAge >= friendAge); // true

// Задание 2:
// Попробуй определить, что будет выведено в консоль в каждом из этих случаев, и по возможности объясни, почему.

console.log('5' + 1); // "51", конкатенация строк
console.log('5' - 1); // 4, приведение строки к числовому типу
console.log(10 > '9'); // true, приведение строки к числовому типу

let counter = 0;
console.log(counter++); // 0, старое значение т.к. постфиксная запись
console.log(counter); // 1, т.к. увеличение было (ранее)

let result = null >= 0;
console.log(result); // true, приведение к числу 0 = 0

// Задание 3:
// Напиши небольшую функцию checkEquality(a, b).
// Она должна принимать два аргумента, a и b.
// Она должна возвращать одну из трёх строк:
// - "Strictly equal", если a и b строго равны.
// - "Equal, but different types", если a и b равны при нестрогом сравнении, но не равны при строгом.
// - "Not equal", если они не равны даже при нестрогом сравнении.

function checkEquality(a = 0, b = 0) {
  if (a === b) {
    return 'Strictly equal';
  } else if (a == b) {
    return 'Equal, but different types';
  } else {
    return 'Not equal';
  }
}

console.log(checkEquality(5, '5')); // "Equal, but different types"
console.log(checkEquality(5, 5)); // "Strictly equal"
console.log(checkEquality(5, 10)); // "Not equal"
console.log(checkEquality()); // "Strictly equal"
