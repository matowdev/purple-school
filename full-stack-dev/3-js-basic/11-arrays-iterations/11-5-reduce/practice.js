// Задание 1:
// У тебя есть массив объектов, представляющих товары в корзине. У каждого товара есть цена (price) и количество (quantity).
// Используя метод reduce(), посчитай общую стоимость всех товаров в корзине.

const cart = [
  { product: 'Телефон', price: 50000, quantity: 1 },
  { product: 'Чехол', price: 1500, quantity: 2 },
  { product: 'Зарядка', price: 2500, quantity: 1 },
  { product: 'Наушники', price: 5000, quantity: 1 },
];

const totalCost = cart.reduce(
  (acc, item) => acc + item.quantity * item.price,
  0
); // если отрабатывать через += то нужно будет явно возвращать acc, через return (т.е. сразу присвоение, потом возврат)

console.log(totalCost); // 60500

// Задание 2:
// Есть массив, в котором каждый элемент — это другой массив с тегами (строками).
// Используя reduce(), создай новый один плоский массив, который будет содержать все теги из вложенных массивов без повторений (каждый тег должен встречаться только один раз).

const tagArrays = [
  ['javascript', 'react', 'css'],
  ['html', 'css', 'nodejs'],
  ['react', 'redux', 'nodejs', 'express'],
];

const uniqueTags = tagArrays
  .reduce((acc, currentArr) => acc.concat(currentArr), [])
  .reduce((acc, currentTag) => {
    if (!acc.includes(currentTag)) {
      acc.push(currentTag);
    }
    return acc;
  }, []);

console.log(uniqueTags); // [ 'javascript', 'react', 'css', 'html', 'nodejs', 'redux', 'express' ]

// ?? альтернативное решение
const uniqueTagsOnePass = tagArrays.reduce((acc, currentArr) => {
  // Пробегаемся по каждому тегу во вложенном массиве
  currentArr.forEach((tag) => {
    // Добавляем тег в аккумулятор, только если его там еще нет
    if (!acc.includes(tag)) {
      acc.push(tag);
    }
  });
  return acc; // Возвращаем измененный аккумулятор
}, []); // Начинаем с пустого массива

console.log(uniqueTagsOnePass); // [ 'javascript', 'react', 'css', 'html', 'nodejs', 'redux', 'express' ]

// Задание 3:
// Есть список файлов, каждый из которых представлен объектом с именем (name) и типом (type).
// Используя reduce(), сгруппируй все файлы по их типам. В результате должен получиться объект, где ключи — это типы файлов, а значения — массивы с именами файлов соответствующего типа.

const files = [
  { name: 'cv.docx', type: 'document' },
  { name: 'photo.jpeg', type: 'image' },
  { name: 'music.mp3', type: 'audio' },
  { name: 'letter.docx', type: 'document' },
  { name: 'cat.jpeg', type: 'image' },
  { name: 'logo.svg', type: 'image' },
];

const groupedFiles = files.reduce((acc, file) => {
  const type = file.type;

  if (!acc[type]) {
    acc[type] = [];
  }

  acc[type].push(file.name);
  return acc;
}, {});

console.log(groupedFiles);
/*
{
  document: ['cv.docx', 'letter.docx'],
  image: ['photo.jpeg', 'cat.jpeg', 'logo.svg'],
  audio: ['music.mp3']
}
*/
