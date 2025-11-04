'use strict';

// Задание 1:
// Нужно проанализировать полученный рейтинг фильма и решить, к какой из трех категорий он относится: "Отличный фильм", "Хороший фильм" или "Плохой фильм".
// - Согласно if...else логики.

function getMovieCategory(rating) {
  rating = parseFloat(rating);

  if (isNaN(rating)) {
    return 'Передайте числовой рейтинг';
  }

  if (rating < 0 || rating > 10) {
    return 'Некорректный рейтинг';
  }

  if (rating >= 8) {
    return 'Отличный фильм';
  } else if (rating >= 5) {
    return 'Хороший фильм';
  } else {
    return 'Плохой фильм';
  }
}

console.log(getMovieCategory(8.5)); // "Отличный фильм"
console.log(getMovieCategory(6.2)); // "Хороший фильм"
console.log(getMovieCategory(3.1)); // "Плохой фильм"
console.log(getMovieCategory(11)); // "Некорректный рейтинг"
console.log(getMovieCategory('')); // "Передайте числовой рейтинг"

// Задание 2:
// Создайте программу для определения скидки на товар в зависимости от категории покупателя.
// - Категория покупателей ("regular", "premium", "vip").
// - Скидка 5, 15, 25.

function getDiscount(category) {
  if (!category || typeof category !== 'string') {
    return 0;
  }

  category = category.trim().toLowerCase();

  if (category === 'vip') {
    return 25;
  } else if (category === 'premium') {
    return 15;
  } else if (category === 'regular') {
    return 5;
  } else {
    return 0;
  }
}

console.log(getDiscount('vip')); // 25
console.log(getDiscount('premium')); // 15
console.log(getDiscount('regular')); // 5
console.log(getDiscount(99)); // 0

// Задание 3:
// Создайте программу для определения типа транспорта на основе скорости движения.
// - Число (скорость в км/ч): 25, 60, 900.
// - Транспорт: велосипед, автомобиль, самолет.
// Скорость должна быть положительным числом.

function getTransportType(speed) {
  if (typeof speed !== 'number' || Number.isNaN(speed) || speed <= 0) {
    return 'Неверный ввод';
  }

  if (speed > 120) {
    return 'Самолет';
  } else if (speed > 40) {
    return 'Автомобиль';
  } else if (speed >= 20) {
    return 'Велосипед';
  } else {
    return 'Пешком';
  }
}

console.log(getTransportType(900)); // "Самолет"
console.log(getTransportType(60)); // "Автомобиль"
console.log(getTransportType(20)); // "Велосипед"

// Задание 4:
// Создайте программу для определения статуса заказа в интернет-магазине на основе его номера/первой буквы.
// Номер заказа должен содержать ровно 5 символов (1 буква + 4 цифры).
// - "A1234", Заказ обрабатывается.
// - "B5678", Заказ отправлен.
// - "C9999", Заказ доставлен.

function getOrderStatus(order) {
  if (typeof order !== 'string') {
    return 'Неизвестный статус';
  }

  order = order.trim().toUpperCase();

  if (order.length !== 5) {
    return 'Неизвестный статус';
  }

  if (!/^[A-Za-z]\d{4}$/.test(order)) {
    return 'Неизвестный статус'; // если НЕ 1 буква + 4 цифры.. по сути это и проверка длинны ещё
  }

  const statusCode = order[0];

  switch (statusCode) {
    case 'A':
      return 'Заказ обрабатывается';
    case 'B':
      return 'Заказ отправлен';
    case 'C':
      return 'Заказ доставлен';
    default:
      return 'Неизвестный статус';
  }
}

console.log(getOrderStatus('A1234')); // "Заказ обрабатывается"
console.log(getOrderStatus('B5678')); // "Заказ отправлен"
console.log(getOrderStatus('C9999')); // "Заказ доставлен"
console.log(getOrderStatus('D0157')); // "Неизвестный статус"

// Задание 5:
// Создайте программу для определения статуса студента на основе его итогового балла.
// Балл должен быть числом от 0 до 100 включительно.
// - 95, "Отличник"
// - 75, "Хорошист"
// - 55, "Троечник"
// - 35, "Неуспевающий"

function getStudentStatus(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    return 'Некорректный балл';
  }

  if (score >= 90) {
    return 'Отличник';
  } else if (score >= 70) {
    return 'Хорошист';
  } else if (score >= 50) {
    return 'Троечник';
  } else {
    return 'Неуспевающий';
  }
}

console.log(getStudentStatus(95)); // "Отличник"
console.log(getStudentStatus(75)); // "Хорошист"
console.log(getStudentStatus(55)); // "Троечник"
console.log(getStudentStatus(35)); // "Неуспевающий"
