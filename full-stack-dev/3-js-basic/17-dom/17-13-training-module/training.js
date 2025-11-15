'use strict';

// Задание 1:
// Напишите логику, которая находит элемент на веб-странице по CSS-селектору и выводит его текстовое содержимое в консоль.

function findAndDisplayElement(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    console.log(`Элемент не найден по селектору: ${selector}`);
    return;
  }

  const message = element.textContent;

  console.log(message); // "Добро пожаловать на наш сайт!"
}

findAndDisplayElement('.welcome-message');

// Задание 2:
// Напишите логику, которая изменяет текстовое содержимое HTML-элемента на новое значение.

function changeContent(selector, newText) {
  if (!newText || typeof newText !== 'string') {
    return false;
  }

  newText = newText.trim();
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = newText;
    return true;
  }

  return false;
}

console.log(changeContent('#status', 'Готово!')); // true

// Задание 3:
// Напишите логику, которая создает новый HTML-элемент с заданным тегом и добавляет его в указанный контейнер на странице.

function createNewElement(tag, selector) {
  if (!tag || typeof tag !== 'string') {
    return '';
  }

  tag = tag.trim();
  const container = document.querySelector(selector);

  if (!container) {
    console.log(`Контейнер по селектору: ${selector}, не найден!`);
    return;
  }

  const newElement = document.createElement(tag);
  newElement.textContent = 'Я новый элемент!';

  container.append(newElement);

  console.log(
    `Новый элемент <${tag}> добавлен внутрь элемента, соответствующего селектору '${selector}'`
  ); // "Новый элемент <p> добавлен внутрь элемента, соответствующего селектору '.content'"
}

createNewElement('p', '.content');

// !! Задание 4:
// Напишите логику, которая получает значение из input поля и сохраняет его в Local Storage браузера под указанным ключом.

function addValueToStorage(selector, key) {
  if (!key || typeof key !== 'string') {
    return '';
  }

  const element = document.querySelector(selector);

  if (!element) {
    console.log(`Элемент не найден по селектору: ${selector}`);
    return;
  }

  element.addEventListener('input', () => {
    let value = element.value;
    localStorage.setItem(key, JSON.stringify(value));
  }); // !! без прослушки/без события "input" обрабатывать/получать "текущие" (вот/только введённые) данные не получится

  console.log(
    `Значение из поля с селектором ${selector} сохранено в localStorage под ключом ${key}`
  ); // "Значение из поля с селектором #username сохранено в localStorage под ключом user_name"
}

addValueToStorage('#username', 'user_name');

// !! Задание 5:
// Напишите логику, которая удаляет HTML-элемент со страницы по указанному CSS-селектору.

function deleteElement(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    console.log(`Элемент не найден по селектору: ${selector}`);
    return;
  }

  element.remove();

  console.log(`Элемент с селектором ${selector}, удалён успешно!`); // "Элемент с селектором .temporary-banner, удалён успешно!"
}

deleteElement('.temporary-banner');

// !! Задание 6:
// Напишите логику, которая получает все атрибуты HTML-элемента и выводит их в виде объекта в консоль.

function getAttributes(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    console.log(`Элемент не найден по селектору: ${selector}`);
    return;
  }

  const attributesObj = {};

  for (const attr of element.attributes) {
    attributesObj[attr.name] = attr.value;
  }

  console.log(attributesObj); // {class: 'profile-card active', id: 'user-profile', data-user: '123'}
}

getAttributes('#user-profile');

// !! Задание 7:
// Напишите логику, которая копирует все CSS-стили одного элемента и применяет их к другому элементу на странице.

function changeInlineStyle(sourceSelector, recipientSelector) {
  const sourceElement = document.querySelector(sourceSelector);
  const recipientElement = document.querySelector(recipientSelector);

  if (!sourceElement) {
    console.log(`Элемент-источник не найден по селектору: ${sourceSelector}`);
    return;
  }
  if (!recipientElement) {
    console.log(
      `Элемент-получатель не найден по селектору: ${recipientSelector}`
    );
    return;
  }

  recipientElement.style.cssText = sourceElement.style.cssText;

  console.log(
    `Стили с элемента '${sourceSelector}' были скопированы на элемент '${recipientSelector}'`
  ); // "Стили с элемента '.styled-button' были скопированы на элемент '.plain-button'"
}

changeInlineStyle('.styled-button', '.plain-button');

// Задание 8:
// Напишите логику, которая находит все элементы на странице с определенным тегом и подсчитывает их количество.

function countDOMElements(tag) {
  if (!tag || typeof tag !== 'string' || tag.trim() === '') {
    return '';
  }

  tag = tag.trim().toLowerCase();
  const elements = document.querySelectorAll(tag);

  if (!elements || elements.length === 0) {
    console.log(`Элементы не найдены по тегу: ${tag}`);
    return;
  }

  const count = elements.length;

  console.log(`Элементов '${tag}' вот такое количество: ${count} на странице!`); // "Элементов 'div' вот такое количество: 2 на странице!"
}

countDOMElements('div');

// Задание 9:
// Напишите логику, которая находит элемент на странице и проверяет, содержит ли он определенный CSS-класс.

function getAllClasses(selector, className) {
  if (!className || typeof className !== 'string' || className.trim() === '') {
    console.log(`Передано не корректное имя класса: ${className}`);
    return false;
  }

  className = className.trim();
  const element = document.querySelector(selector);

  if (!element) {
    console.log(`Элемент не найден по селектору: ${selector}`);
    return false;
  }

  const classList = Array.from(element.classList);
  const result = classList.includes(className);

  console.log(result); // true

  return result;
}

getAllClasses('.menu-item', 'active');
