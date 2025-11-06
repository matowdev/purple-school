'use strict';

// ** Задание 1:
// Как "починить" эти два проблемных вызова?
// Как нужно изменить строку setTimeout(counter.increment, 100) с помощью bind(), чтобы this не терялся?
// Как можно было бы сразу вызвать standaloneIncrement с правильным this с помощью call()?

const counter = {
  count: 0,
  increment() {
    this.count += 1;
    console.log(this.count);
  },
};

setTimeout(counter.increment.bind(counter), 100); // 1

const standaloneIncrement = counter.increment;
standaloneIncrement.call(counter); // 2

// ** Задание 2:
// Согласно разметки напиши JavaScript-код, который:
// 1. Найдёт оба инпута (#num1, #num2), кнопку (#addBtn) и span для результата (#result).
// 2. Добавит обработчик события (addEventListener) на кнопку (#addBtn) по клику ('click').
// 3. Внутри этого обработчика:
// - Получит значения (.value) из обоих инпутов.
// - Важно! Преобразует эти значения в числа (вспомни Унарный + или Number()).
// - Сложит их.
// Запишет итоговую сумму в span (#result), используя textContent.

const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const addBtnEl = document.getElementById('addBtn');
const resultEl = document.getElementById('result');

addBtnEl.addEventListener('click', () => {
  const num1 = +num1El.value;
  const num2 = +num2El.value;
  const sum = num1 + num2;
  resultEl.textContent = sum;
});
