// Задание 1:
// Напиши код, который выполняет следующие действия:
// 1. Создаёт объект user с двумя свойствами: name со значением 'Alex' и status со значением 'online'.
// 2. Создаёт переменную propToUpdate и присваивает ей строку 'status'.
// 3. Используя переменную propToUpdate и скобочную нотацию, измени значение свойства status в объекте user на 'offline'.
// 4. Выводит итоговый объект user в консоль.

const user = {
  name: 'Alex',
  status: 'online',
};

const propToUpdate = 'status';
user[propToUpdate] = 'offline';

console.log(user); // { name: 'Alex', status: 'offline' }

// Задание 2:
// Напиши код, который:
// 1. Создаёт объект product со свойствами name ('Laptop') и price (1200).
// 2. Добавляет в этот объект метод getInfo, который возвращает строку вида "Product: Laptop, Price: $1200".
// 3. Внутри метода getInfo для доступа к свойствам объекта обязательно используй ключевое слово this.
// 4. Вызови метод product.getInfo() и выведи результат в консоль.

const product = {
  name: 'Laptop',
  price: 1200,
  getInfo() {
    return `Product: ${this.name}, Price: $${this.price}`;
  },
};

const getProductInfo = product.getInfo();
console.log(getProductInfo); // "Product: Laptop, Price: $1200"

// Задание 3:
// Дан массив объектов users.
// Используя метод .map(), создай новый массив usersInfo, который будет содержать строки с информацией о каждом пользователе в формате "User: [имя], Age: [возраст]".

const users = [
  { name: 'Vasya', age: 30 },
  { name: 'Katya', age: 18 },
  { name: 'Petya', age: 25 },
];

const usersInfo = users.map((user) => `User: ${user.name}, Age: ${user.age}`);
console.log(usersInfo);
/*
[
  "User: Vasya, Age: 30",
  "User: Katya, Age: 18",
  "User: Petya, Age: 25"
]
*/

// Задание 4:
// Дан массив объектов users.
// Используя метод .sort(), отсортируй этот массив по возрасту (age) в порядке убывания (от большего к меньшему). Метод .sort() изменяет массив на месте, поэтому новый создавать не нужно.

const newUsers = [
  { name: 'Vasya', age: 30 },
  { name: 'Katya', age: 18 },
  { name: 'Petya', age: 25 },
];

newUsers.sort((a, b) => b.age - a.age);
console.log(newUsers);
/*
[
  { name: 'Vasya', age: 30 },
  { name: 'Petya', age: 25 },
  { name: 'Katya', age: 18 },
];
*/

// Задание 5:
// Дан объект movie. Используя деструктуризацию, выполни следующие действия:
// 1. Извлеки свойство title в одноимённую переменную.
// 2. Извлеки свойство director, но переименуй его в новую переменную movieDirector.
// 3. Выведи обе созданные переменные (title и movieDirector) в консоль.

const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  year: 2010,
};

const { title, director: movieDirector } = movie;
console.log(`Movie: ${title}, ${movieDirector}`); // "Movie: Inception, Christopher Nolan"

// Задание 6:
// Даны два объекта: baseUser с базовой информацией и updates с обновлениями.
// Создай новый объект finalUser с помощью операторов ...spread. Этот объект должен содержать все свойства из baseUser, и свойства из updates должны быть добавлены к нему то же (может получиться перезаписать существующие, да/нет.. какие?).

const baseUser = {
  id: 1,
  name: 'Alex',
  role: 'user',
};

const updates = {
  name: 'Alexander',
  status: 'active',
};

const finalUser = {
  ...baseUser,
  ...updates,
};

console.log(finalUser); // { id: 1, name: 'Alexander', role: 'user', status: 'active' }

// Задание 7:
// Дан объект cart, представляющий корзину товаров с ценами.
// Напиши код для подсчёта общей стоимости всех товаров в корзине. Для этого:
// 1. С помощью метода Object получи массив, состоящий только из цен товаров.
// 2. С помощью метода .reduce() посчитай сумму всех элементов этого массива.
// 3. Выведи итоговую сумму в консоль.

const cart = {
  laptop: 1200,
  mouse: 50,
  keyboard: 150,
};

const total = Object.values(cart).reduce((acc, price) => acc + price, 0);
console.log(total); // 1400
