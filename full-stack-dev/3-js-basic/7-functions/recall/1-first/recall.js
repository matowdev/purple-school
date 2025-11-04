'use strict';

// Задание 1:
// Напиши функцию calculateTotalPrice, которая принимает объект order. Этот объект может содержать свойства price (цена), quantity (количество) и discount (скидка в процентах).
// Требования:
// 1. Функция должна возвращать итоговую стоимость заказа.
// 2. Параметр quantity должен по умолчанию быть равен 1.
// 3. Параметр discount должен по умолчанию быть равен 0.
// 4. Если price не передан или равен нулю, функция должна сразу вернуть строку "Ошибка: не указана цена". Используй для этого паттерн "раннего возврата".
// 5. Используй синтаксис деструктуризации с параметрами по умолчанию прямо в аргументах функции.

function calculateTotalPrice({ price, quantity = 1, discount = 0 } = {}) {
  if (!price || price === 0) {
    return 'Ошибка: не указана цена';
  }

  const totalCost = quantity * price;
  const discountAmount = totalCost * (discount / 100);
  const finalPrice = totalCost - discountAmount;

  return finalPrice;
}

console.log(calculateTotalPrice({ price: 100, quantity: 2, discount: 10 })); // 180
console.log(calculateTotalPrice({ price: 50, quantity: 5 })); // 250
console.log(calculateTotalPrice({ price: 200 })); // 200
console.log(calculateTotalPrice({ discount: 15 })); // "Ошибка: не указана цена"

// Задание 2:
// Напиши функцию getValidUserMessages, которая принимает массив пользователей и функцию-коллбэк для валидации. Функция должна отфильтровать пользователей по правилу из коллбэка, а затем для каждого валидного пользователя сформировать приветственное сообщение.
// Требования:
// 1. Функция должна принимать два аргумента: users (массив объектов) и validator (функция-коллбэк).
// 2. validator — это функция, которая принимает одного пользователя и возвращает true или false.
// 3. Используй метод .filter() для отбора валидных пользователей с помощью коллбэка validator.
// 4. Используй метод .map() для преобразования отфильтрованного массива в массив строк вида "Привет, <Имя>!".
// 5. Постарайся написать основную логику в одну строку, используя цепочку вызовов (.filter().map()).

const users = [
  { name: 'Анна', age: 25 },
  { name: 'Виктор', age: 17 },
  { name: 'Сергей', age: 30, isAdmin: true },
  { name: 'Ирина', age: 16 },
  { name: 'Иван', age: 40, isAdmin: true },
];

const isAdminAndAdult = (user) => user.age >= 18 && user.isAdmin;

function getValidUserMessages(users, isAdminAndAdult) {
  return users.filter(isAdminAndAdult).map((user) => `Привет, ${user.name}!`); // метод .filter() сам подставит каждый элемент массива в качестве аргумента в isAdminAndAdult (т.е. дополнительно, стрелочную функцию разворачивать не надо)
}

const validMessages = getValidUserMessages(users, isAdminAndAdult);
console.log(validMessages); // [ "Привет, Сергей!", "Привет, Иван!" ]

// Задание 3:
// Напиши функцию-фабрику createMultiplier. Эта функция должна принимать один аргумент multiplier (число) и возвращать новую функцию.
// Возвращённая функция, в свою очередь, должна принимать один аргумент number (число) и умножать его на тот multiplier, который "запомнила" из родительской функции.
// Требования:
// 1. createMultiplier должна принимать число и возвращать функцию.
// 2. Возвращённая функция должна принимать число и возвращать результат умножения.
// 3. Этот механизм должен работать за счёт замыкания (closure).

function createMultiplier(multiplier) {
  return (number) => number * multiplier;
}

const multiplyByTwo = createMultiplier(2);
const multiplyByTen = createMultiplier(10);

console.log(multiplyByTwo(5)); // 10
console.log(multiplyByTwo(100)); // 200

console.log(multiplyByTen(5)); // 50
console.log(multiplyByTen(42)); // 420

// Задание 4:
// Напиши функцию getFinalGrade, которая рассчитывает итоговую оценку студента. Функция должна использовать вспомогательную функцию для определения буквенной оценки.
// Основная функция: getFinalGrade(score, projectBonus)
// 1. Принимает score (число от 0 до 100) и projectBonus (число).
// 2. Должна использовать "ранний возврат": если score находится вне диапазона от 0 до 100, вернуть "Неверная оценка".
// 3. Рассчитывает totalScore, суммируя score и projectBonus. Итоговый балл не может быть больше 100.
// 4. Вызывает вспомогательную функцию getLetterGrade, передавая ей totalScore, и возвращает её результат.
// Вспомогательная функция: getLetterGrade(totalScore)
// 1. Принимает итоговый балл totalScore.
//2. Возвращает буквенную оценку по правилам:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Ниже 60: "F"

function getLetterGrade(totalScore) {
  if (totalScore >= 90) return 'A';
  if (totalScore >= 80) return 'B';
  if (totalScore >= 70) return 'C';
  if (totalScore >= 60) return 'D';
  return 'F';
}

function getFinalGrade(score, projectBonus) {
  if (score < 0 || score > 100) {
    return `Неверная оценка`;
  }

  let totalScore = score + projectBonus;

  // ограничиваем максимальный бал
  if (totalScore > 100) {
    totalScore = 100;
  }

  // ?? альтернативное решение в одну строчку (без if блока)
  // const totalScore = Math.min(100, score + projectBonus);

  return getLetterGrade(totalScore);
}

console.log(getFinalGrade(85, 10)); // "A" (85 + 10 = 95)
console.log(getFinalGrade(95, 10)); // "A" (итог не может быть > 100)
console.log(getFinalGrade(50, 5)); // "F" (50 + 5 = 55)
console.log(getFinalGrade(70, 5)); // "C" (70 + 5 = 75)
console.log(getFinalGrade(101, 0)); // "Неверная оценка"
console.log(getFinalGrade(-10, 5)); // "Неверная оценка"
