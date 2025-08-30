// Задание 1:
// Дан объект movie.
// Твоя задача — используя деструктуризацию, создать три переменные:
// 1. title (с названием фильма)
// 2. year (с годом выпуска)
// 3. movieDirector (с именем режиссёра, обрати внимание на переименование)
// Напиши одну строку кода, которая решает эту задачу.

const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  year: 2010,
  rating: 8.8,
};

const { title, year, director: movieDirector } = movie;
console.log(`Фильм "${title}", ${year}. ${movieDirector}`); // "Фильм "Inception", 2010. Christopher Nolan"

// Задание 2:
// У нас есть два объекта. Один содержит базовую информацию о пользователе, а второй — обновления для него.
// Твоя задача — создать новый объект finalUser, который будет содержать все свойства из baseUser, но с применёнными изменениями из объекта updates. Используй ...spread оператор.

const baseUser = {
  id: 123,
  name: 'Alex',
  role: 'editor',
};

const updates = {
  name: 'Alexander', // Обрати внимание, имя должно обновиться
  status: 'active', // А это свойство должно добавиться
};

const finalUser = {
  ...baseUser,
  ...updates,
};

console.log(finalUser); // { id: 123, name: 'Alexander', role: 'editor', status: 'active' }

// Задание 3:
// У нас есть объект с полной информацией о пользователе.
// Твоя задача — извлечь id и username в отдельные переменные, а все остальные свойства собрать в новый объект под названием userData. Используй деструктуризацию вместе с ...rest.

const userProfile = {
  id: 'a1b2-c3d4',
  username: 'webdev_pro',
  email: 'dev@example.com',
  firstName: 'Maria',
  lastName: 'Ivanova',
};

const { id, username, ...userData } = userProfile;

console.log(`id: ${id}, username: ${username}`); // "id: a1b2-c3d4, username: webdev_pro"
console.log(userData); // { email: 'dev@example.com', firstName: 'Maria', lastName: 'Ivanova' }
