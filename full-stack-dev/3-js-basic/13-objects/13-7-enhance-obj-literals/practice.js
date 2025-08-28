// Задание 1:
// Вот объект, написанный в "старом" стиле (до ES6).
// const name = 'Laptop';
// const price = 1200;
//
// const product = {
//   name: name,
//   price: price,
//   getInfo: function () {
//     return this.name + ' costs $' + this.price;
//   },
// };
// Перепиши объект product, применив все возможные улучшения для объектных литералов, которые мы обсудили.

const type = 'Laptop';
const price = 1200;

const product = {
  type,
  price,
  getInfo() {
    return this.type + ', costs $' + this.price;
  },
};

console.log(product.getInfo()); // "Laptop, costs $1200"

// Задание 2:
// Напиши функцию createDynamicObject(key, value).
// Эта функция должна принимать два аргумента: key (строка) и value (любое значение).
// Она должна создать и вернуть новый объект, у которого:
// 1. Имя свойства — это значение переменной key (используй вычисляемые имена свойств).
// 2. Значение этого свойства — это значение переменной value.
// 3. Также в объекте должно быть свойство createdAt со значением текущей даты (new Date()).
// Пример вызова:
// createDynamicObject('userId', 123) должен вернуть объект, похожий на { userId: 123, createdAt: <текущая дата> }.

function createDynamicObject(key, value) {
  return {
    [key]: value,
    createdAt: new Date(),
  };
}

const result = createDynamicObject('userId', 123);
console.log(result); // { userId: 123, createdAt: 2025-08-28T13:32:53.775Z }

// Задание 3:
// Представь, что нужно сформировать объект для отправки на сервер. У тебя есть несколько переменных:
// const login = 'admin_user';
// const token = 'a1b2-c3d4-e5f6';
// const actionType = 'deletePost';
// Твоя задача: Создать объект requestData, который будет включать в себя:
// 1. Свойства login и token, используя сокращенную запись.
// 2. Динамическое свойство, где ключ — это значение переменной actionType (deletePost), а значение — true. Используй вычисляемые имена.
// 3. Метод getAction(), который возвращает значение переменной actionType. Используй сокращенную запись метода.

const login = 'admin_user';
const token = 'a1b2-c3d4-e5f6';
const actionType = 'deletePost';

const requestData = {
  login,
  token,
  [actionType]: true,
  getAction() {
    return actionType;
  },
};

console.log(requestData);
/*
{
  login: 'admin_user',
  token: 'a1b2-c3d4-e5f6',
  deletePost: true,
  getAction: [Function: getAction]

*/

console.log(requestData.getAction()); // "deletePost"
