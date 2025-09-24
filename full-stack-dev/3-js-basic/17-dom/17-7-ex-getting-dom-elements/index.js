'use strict';

// Представлено 4-ре DOM-элемента, нужно получить их.. вывести в console их контентное содержимое разными способами, согласно их атрибутов.

const someEl = document.querySelectorAll('.one');
console.log(someEl[0].innerText); // Элемент 1
console.log(someEl[1].innerText); // Элемент 2

// ?? альтернативное решение
const oneTwoEl = document.querySelectorAll('.one span'); // через div's с классом .one выборка внутренних span элементов
oneTwoEl.forEach((el) => console.log(el.textContent));
/*
Элемент 1
Элемент 2
*/

// const threeEl = document.querySelector('#two');
const threeEl = document.getElementById('two'); // ИМЕННО для ID.. getElementById() метод (поиск сразу по ID)
console.log(threeEl.textContent); // Элемент 3

const fourEl = document.querySelector('[user-id="4"]');
console.log(fourEl.textContent); // Элемент 4
