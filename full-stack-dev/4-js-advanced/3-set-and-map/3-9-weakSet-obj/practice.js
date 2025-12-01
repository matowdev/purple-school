'use strict';

// Задание 1:
// Представь, что мы пишем ядро фреймворка. У нас есть функция render(component), которая отрисовывает компоненты на экране.
// 1. Создай WeakSet с именем trustedComponents.
// 2. Напиши код, где создаются два объекта:
// - validComponent = { id: 1 } (этот нужно "официально зарегистрировать" в нашем наборе).
// - fakeComponent = { id: 1 } (этот регистрировать не нужно, это подделка).
// 3. Напиши функцию render(comp), которая:
// - Принимает объект.
// - Проверяет, есть ли он в trustedComponents.
// - Если есть — выводит в консоль "Отрисовка компонента...".
// - Если нет — выводит "Ошибка! Неизвестный компонент.".

const trustedComponents = new WeakSet();

const validComponent = { id: 1 };
const fakeComponent = { id: 1 };

trustedComponents.add(validComponent);

function render(comp) {
  if (trustedComponents.has(comp)) {
    console.log('Отрисовка компонента...');
  } else {
    console.log('Ошибка! Неизвестный компонент.');
  }
}

render(validComponent); // "Отрисовка компонента..."
render(fakeComponent); // "Ошибка! Неизвестный компонент."

// Задание 2:
// Представь, что мы разрабатываем модуль для интернет-магазина. У нас есть промокоды (объекты). Промокод можно применить только один раз.
// 1. Создай WeakSet с именем usedCodes.
// 2. Напиши функцию applyPromo(code), которая:
// - Проверяет, был ли этот код уже использован.
// - Если да — выводит: "Ошибка! Код уже использован".
// - Если нет — добавляет код в "использованные" и выводит: "Успех! Скидка применена".
// 3. Проверь работу:
// - Создай объект promo = { discount: "10%" }.
// - Вызови applyPromo(promo) первый раз (должен быть успех).
// - Вызови applyPromo(promo) второй раз (должна быть ошибка).

const usedCodes = new WeakSet();
const promo = { discount: '10%' };

function applyPromo(code) {
  if (!usedCodes.has(code)) {
    usedCodes.add(code); // второй аргумент, типа true.. не надо (это не WeakMap().. там можно/нужно, в WeakSet() нет)
    console.log('Успех! Скидка применена');
  } else {
    console.log('Ошибка! Код уже использован');
  }
}

applyPromo(promo); // "Успех! Скидка применена"
applyPromo(promo); // "Ошибка! Код уже использован"
