// Нужно написать калькулятор, который позволяет ввести 2-ва числа в 2-ва input, и нажать на кнопку операции (сложение, деление, вычитание, умножение)
// - Вывести результат в отдельном окне/поле.
// - После операций инпуты должны очищаться.

'use strict';

const inputWrap = document.querySelector('.input-wrap');
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const btnsWrap = document.querySelector('.btns-wrap');
const resultSpan = document.getElementById('result');

let firstInputValue;
let secondInputValue;

// DRY
function clearValue() {
  firstInput.value = '';
  secondInput.value = '';
  firstInputValue = 0;
  secondInputValue = 0;
}

function calc(event) {
  const targetId = event.target.id;

  if (targetId === 'plus-btn') {
    resultSpan.textContent = String(firstInputValue + secondInputValue);
    clearValue();
  } else if (targetId === 'minus-btn') {
    resultSpan.textContent = String(firstInputValue - secondInputValue);
    clearValue();
  } else if (targetId === 'division-btn') {
    resultSpan.textContent = String(firstInputValue / secondInputValue);
    clearValue();
  } else if (targetId === 'multiply-btn') {
    resultSpan.textContent = String(firstInputValue * secondInputValue);
    clearValue();
  } else if (targetId === 'clear-btn') {
    resultSpan.textContent = '';
    clearValue();
  }
}

firstInput.addEventListener('input', () => {
  const value = firstInput.value;
  firstInputValue = Number(value);
});

secondInput.addEventListener('input', () => {
  const value = secondInput.value;
  secondInputValue = Number(value);
});

btnsWrap.addEventListener('click', calc);

// ?? альтернативное решение
// function clearInputs() {
//   firstInput.value = '';
//   secondInput.value = '';
// }
//
// function onCalcButtonClick(event) {
//   // Получаем ID кнопки, на которую кликнули
//   const targetId = event.target.id;
//
//   // Если клик был не по кнопке, а по обертке, выходим из функции
//   if (event.target === btnsWrap) {
//     return;
//   }
//
//   // Обрабатываем кнопку очистки отдельно
//   if (targetId === 'clear-btn') {
//     clearInputs();
//     resultSpan.textContent = '';
//     return; // Выходим из функции, чтобы не выполнять дальнейшие проверки
//   }
//
//   // Считываем значения из инпутов и сразу преобразуем их в числа.
//   // Используем parseFloat, чтобы работать с дробными числами.
//   const firstValue = parseFloat(firstInput.value);
//   const secondValue = parseFloat(secondInput.value);
//
//   // Проверяем, являются ли введенные значения числами.
//   // Если нет - выводим сообщение об ошибке и выходим.
//   if (isNaN(firstValue) || isNaN(secondValue)) {
//     resultSpan.textContent = 'Ошибка: введите числа!';
//     return;
//   }
//
//   let result;
//
//   // Используем switch для определения, какую операцию выполнить.
//   // Это чище, чем много if-else if.
//   switch (targetId) {
//     case 'plus-btn':
//       result = firstValue + secondValue;
//       break;
//     case 'minus-btn':
//       result = firstValue - secondValue;
//       break;
//     case 'multiply-btn':
//       result = firstValue * secondValue;
//       break;
//     case 'division-btn':
//       // Проверяем деление на ноль
//       if (secondValue === 0) {
//         resultSpan.textContent = 'Ошибка: на ноль делить нельзя!';
//         return; // Выходим, чтобы не очищать поля
//       }
//       result = firstValue / secondValue;
//       break;
//   }
//
//   // Выводим результат и очищаем поля ввода
//   resultSpan.textContent = result;
//   clearInputs();
// }
//
// // Вешаем один обработчик на родительский элемент
// btnsWrap.addEventListener('click', onCalcButtonClick);
