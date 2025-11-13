'use strict';

// Задание 1:
// Напишите логику, которая демонстрирует работу цепочки областей видимости (scope chain) с вложенными функциями.

const globalVar = 'global-value';

function outerFunction() {
  const outerVar = 'outer-value';
  innerFunction();

  function innerFunction() {
    const innerVar = 'inner-value';

    console.log(innerVar); // "inner-value"
    console.log(outerVar); // "outer-value"
    console.log(globalVar); // "global-value"
  }
}

outerFunction();

// Задание 2:
// Напишите логику, которая демонстрирует поведение переменных `var`, `let` и `const` в строгом режиме (strict mode).

function demonstrateStrictMode() {
  if (true) {
    let block_let = 10;
    const block_const = 20;
    var function_var = 30;
  }

  try {
    console.log(block_let);
  } catch (e) {
    console.log('Переменная let недоступна вне блока');
  }

  try {
    console.log(block_const);
  } catch (e) {
    console.log('Переменная const недоступна вне блока');
  }

  console.log(function_var); // 30

  try {
    stray = 5;
  } catch (e) {
    console.log('В строгом режиме присвоение без объявления вызовет ошибку');
  }
}

demonstrateStrictMode();

try {
  console.log(function_var);
} catch (e) {
  console.log('Переменная function_var недоступна вне функции');
}

// Задание 3:
// Напишите логику, которая демонстрирует поведение переменных `let` и `const` в блочной области видимости внутри функции.

function demonstrateBlockScope() {
  if (true) {
    let value = 100;
    const message = 'первый блок';

    console.log(value); // 100
    console.log(message); // "первый блок"
  }

  if (true) {
    let value = 200;
    const message = 'второй блок';

    console.log(value); // 200
    console.log(message); // "второй блок"
  }
}

demonstrateBlockScope();

// Задание 4:
// Напишите логику, которая демонстрирует поведение объекта `arguments` в обычных функциях и его недоступность в стрелочных функциях.

function ordinaryFunc() {
  console.log(`Обычная функция - количество аргументов: ${arguments.length}`); // "Обычная функция - количество аргументов: 2"
  console.log(`Обычная функция - первый аргумент: ${arguments[0]}`); // "Обычная функция - первый аргумент: hello"
  console.log(`Обычная функция - второй аргумент: ${arguments[1]}`); // "Обычная функция - второй аргумент: world"
}

ordinaryFunc('hello', 'world');

const arrowFunc = (...args) => {
  console.log(`Стрелочная функция - аргументы через rest: [${args}]`); // "Стрелочная функция - аргументы через rest: [10,20,30]"
  console.log(`Стрелочная функция - количество аргументов: ${args.length}`); // "Стрелочная функция - количество аргументов: 3"
};

arrowFunc(10, 20, 30);

// Задание 5:
// Создайте программу, которая демонстрирует поведение переменных `var`, `let` и `const` при поднятии (hoisting).

console.log('--- Hoisting with var ---');
console.log('Переменная var до объявления:', hoistedVar);
var hoistedVar = 42;
console.log('Переменная var после инициализации:', hoistedVar);

console.log('\n--- Temporal Dead Zone with let ---');
try {
  console.log(hoistedLet);
} catch (e) {
  console.log('Ошибка при обращении к let до объявления: ReferenceError');
}

let hoistedLet = 15;
console.log('Переменная let после объявления:', hoistedLet);

console.log('\n--- Temporal Dead Zone with const ---');
try {
  console.log(hoistedConst);
} catch (e) {
  console.log('Ошибка при обращении к const до объявления: ReferenceError');
}
const hoistedConst = 30;
console.log('Переменная const после объявления:', hoistedConst);
