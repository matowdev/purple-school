// Задание 1:
// У вас есть массив с возрастом посетителей:
// const ages = [15, 25, 17, 30, 18, 16, 45, 21];
// Создайте новый массив allowedIn с помощью метода filter(), который будет содержать только те возрасты, которые больше или равны 18.

const ages = [15, 25, 17, 30, 18, 16, 45, 21];
const allowedIn = ages.filter((age) => age >= 18);

console.log(allowedIn); // [ 25, 30, 18, 45, 21 ]

// Задание 2:
// Есть массив объектов, представляющих товары на складе.
// const products = [
//   { id: 1, name: 'Ноутбук', category: 'Электроника', stock: 12 },
//   { id: 2, name: 'Футболка', category: 'Одежда', stock: 0 },
//   { id: 3, name: 'Смартфон', category: 'Электроника', stock: 25 },
//   { id: 4, name: 'Джинсы', category: 'Одежда', stock: 8 },
//   { id: 5, name: 'Мышь', category: 'Электроника', stock: 0 },
// ];
// Создайте новый массив electronicsInStock с помощью filter(), который будет содержать только товары из категории 'Электроника', и при этом их количество на складе (stock) должно быть больше нуля.

const products = [
  { id: 1, name: 'Ноутбук', category: 'Электроника', stock: 12 },
  { id: 2, name: 'Футболка', category: 'Одежда', stock: 0 },
  { id: 3, name: 'Смартфон', category: 'Электроника', stock: 25 },
  { id: 4, name: 'Джинсы', category: 'Одежда', stock: 8 },
  { id: 5, name: 'Мышь', category: 'Электроника', stock: 0 },
];

// const electronicsInStock = products
//   .filter((product) => product.category === 'Электроника')
//   .filter((product) => product.stock > 0);
const electronicsInStock = products.filter(
  (product) => product.category === 'Электроника' && product.stock > 0
);

console.log(electronicsInStock);

/*
[
  { id: 1, name: 'Ноутбук', category: 'Электроника', stock: 12 },
  { id: 3, name: 'Смартфон', category: 'Электроника', stock: 25 }
]
*/

// Задание 3:
// Есть список пользователей.
// const users = [
//   { id: 101, name: 'Alex', email: 'alex@example.com' },
//   { id: 102, name: 'Ben', email: 'ben@gmail.com' },
//   { id: 103, name: 'casey', email: 'casey@example.com' },
//   { id: 104, name: 'Alexey', email: 'alexey@gmail.com' },
// ];
//
// const searchTerm = 'alex';
//
// Создайте новый массив foundUsers с помощью filter(). В него должны попасть пользователи, которые удовлетворяют двум условиям одновременно:
// 1. Их name ИЛИ email содержит строку searchTerm. Важно: поиск должен быть нечувствительным к регистру (т.е. 'Alex' должен найтись по запросу 'alex').
// 2. Их id не равен 104.

const users = [
  { id: 101, name: 'Alex', email: 'alex@example.com' },
  { id: 102, name: 'Ben', email: 'ben@gmail.com' },
  { id: 103, name: 'casey', email: 'casey@example.com' },
  { id: 104, name: 'Alexey', email: 'alexey@gmail.com' },
];

const searchTerm = 'alex';
const foundUsers = users.filter(
  (user) =>
    (user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)) &&
    user.id !== 104
);

console.log(foundUsers); // [ { id: 101, name: 'Alex', email: 'alex@example.com' } ]
