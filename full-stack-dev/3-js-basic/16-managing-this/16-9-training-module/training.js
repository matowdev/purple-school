'use strict';

// Задание 1:
// Создайте объект с методом, используя сокращённую запись метода, и продемонстрируйте доступ к свойству объекта через this.

const userName = 'Alice';

const greeter = {
  name: userName,
  greet() {
    console.log(`Привет, ${this.name}! Добро пожаловать!`);
  },
};

greeter.greet(); // "Привет, Alice! Добро пожаловать!"

// Задание 2:
// Создайте функцию, которая использует замыкание для хранения приватного счетчика и возвращает объект с методами для работы с этим счетчиком.

const initialValue = 5;

function getClosureCount(initial) {
  let count = initial;

  return {
    countIncrease() {
      return ++count;
    },
    countDecrease() {
      return --count;
    },
  };
}

if (
  typeof initialValue !== 'number' ||
  !Number.isInteger(initialValue) ||
  initialValue < 0 ||
  initialValue > 100
) {
  console.log(
    'Ошибка: initialValue должно быть целым числом от 0 до 100. Замыкание не может быть создано!'
  );
} else {
  const counter = getClosureCount(initialValue);
  const increasedValue = counter.countIncrease();
  const decreasedValue = counter.countDecrease();
  console.log(
    `Начальное значение: ${initialValue}, Увеличенное: ${increasedValue}, Уменьшенное: ${decreasedValue}`
  ); // "Начальное значение: 5, Увеличенное: 6, Уменьшенное: 5"
}

// Задание 3:
// Создайте функцию, которая принимает объект и возвращает новую функцию с привязанным контекстом для работы с данными этого объекта.

const user = {
  name: 'Alice',
  age: 25,
  city: 'Moscow',
};

function addContext(obj) {
  if (!obj || typeof obj !== 'object') {
    return () => {};
  }

  return (key) => {
    if (!key || typeof key !== 'string') {
      return '';
    }

    key = key.trim();

    if (key in obj) {
      return obj[key];
    }

    return `Нет такого ключа!`;
  };
}

const getObjKey = addContext(user);

const getName = getObjKey('  name');
console.log(getName); // "Alice"

const getAge = getObjKey('age');
console.log(getAge); // 25

const getError = getObjKey('hobby');
console.log(getError); // "Нет такого ключа!"

// !! Задание 4:
// Создайте функцию, которая использует IIFE для инициализации приватного объекта с данными и возвращает функцию для доступа к этим данным.

const getIIFEBookContext = (() => {
  const book = {
    title: 'Изучение JavaScript',
    author: 'Иван Петров',
  };

  return (key) => {
    if (!key || typeof key !== 'string') {
      return '';
    }

    key = key.trim();

    if (key in book) {
      return book[key];
    }

    return `Нет такого ключа!`;
  };
})();

console.log(getIIFEBookContext('title')); // "Изучение JavaScript"
console.log(getIIFEBookContext('author')); // "Иван Петров"
console.log(getIIFEBookContext('pages')); // "Нет такого ключа!"

// !! Задание 5:
// Создайте функцию, которая принимает объект и строку с именем метода, а затем использует call для вызова указанного метода с переданным объектом в качестве контекста.

const person = {
  firstName: 'Анна',
  lastName: 'Смирнова',
  age: 28,
  getName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getAge() {
    return this.age;
  },
};

function callObjMethod(obj, methodName) {
  if (!obj || typeof obj !== 'object') {
    return '';
  }

  if (!methodName || typeof methodName !== 'string') {
    return '';
  }

  return obj[methodName].call(obj); // !! только через [ДИНАМИЧЕСКИЙ ключ]  обрабатывается переменная, так определяется свойство
}

console.log(callObjMethod(person, 'getName')); // "Анна Смирнова"
console.log(callObjMethod(person, 'getAge')); // 28

// Задание 6:
// Создайте функцию, которая принимает массив чисел и возвращает объект с методами для математических операций над этими числами.

const numbers = [2, 4, 6];

function returnMathMethods(arr) {
  if (!arr || !Array.isArray(arr)) {
    return '';
  }

  return {
    sum() {
      return arr.reduce((acc, num) => acc + num, 0);
    },

    multiply() {
      return arr.reduce((acc, num) => acc * num);
    },

    average() {
      return arr.reduce((acc, num) => acc + num, 0) / arr.length;
    },
  };
}

const mathObj = returnMathMethods(numbers);
const sum = mathObj.sum();
const multiply = mathObj.multiply();
const average = mathObj.average();

console.log(`Сумма: ${sum}, Произведение: ${multiply}, Среднее: ${average}`); // "Сумма: 12, Произведение: 48, Среднее: 4"

// Задание 7:
// Создайте функцию, которая принимает объект и использует bind для создания новой функции с фиксированным контекстом и предустановленными аргументами.

const a = 8;
const b = 3;

const anotherMathObj = {
  multiply(a, b) {
    return a * b;
  },
};

function multiplyNum(obj) {
  return obj.multiply.bind(obj, a, b);
}

const mathMultiply = multiplyNum(anotherMathObj);
const result = mathMultiply();
console.log(`Результат умножения: ${result}`); // "Результат умножения: 24"

// !! Задание 8:
// Напишите логику, которая демонстрирует работу с приватными данными через замыкание и использует apply для вызова методов с массивом аргументов.

const num1 = 4;
const num2 = 7;

const numbersArray = [num1, num2];

function createCalculator() {
  function multiply(a, b) {
    return a * b;
  }

  return { performMultiply: multiply };
}

const calculator = createCalculator();
const calcResult = calculator.performMultiply.apply(null, numbersArray);

console.log('Операция выполнена: ' + calcResult); // "Операция выполнена: 28"
