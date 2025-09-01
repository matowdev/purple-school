// Задание 1:
// У вас есть объект user. Напишите код, который выводит в консоль имя первого друга пользователя (user.friends[0].name). Если у пользователя нет свойства friends или массив друзей пуст, код не должен вызывать ошибку, и в консоль ничего выводиться не должно.

const user = {
  name: 'Alice',
  age: 30,
  // Свойства friends может и не быть
  friends: [{ name: 'Roni' }],
};

const firstFriendName = user?.friends?.[0]?.name;

if (firstFriendName) {
  console.log(firstFriendName); // "Roni"
}

// Задание 2:
// Представь, что ты получаешь объект с настройками от API. Некоторые настройки могут отсутствовать.
// Напиши одну строку кода, которая получает размер шрифта (settings.theme.font.size). Если какое-либо свойство на пути (theme, font или size) отсутствует, переменная fontSize должна получить значение по умолчанию, равное 16.

const settings = {
  theme: {
    color: 'dark',
    // свойство font может отсутствовать
    font: {
      name: 'Arial',
      // свойство size может отсутствовать
    },
  },
  sidebar: 'left',
};

const fontSize = settings?.theme?.font?.size ?? 16;

console.log(fontSize); // 16

// Задание 3:
// У тебя есть массив объектов, где могут быть разные пользователи. У некоторых пользователей есть метод getInfo(), который возвращает строку с их именем и ролью, а у других такого метода нет.
// Нужно написать код, который перебирает массив users и для каждого пользователя пытается вызвать метод getInfo(). Если метод существует, его результат выводится в консоль. Если метода нет, ничего не должно происходить (никаких ошибок, никакого вывода в консоль).

const users = [
  {
    name: 'Admin',
    role: 'administrator',
    getInfo() {
      return `${this.name} (Role: ${this.role})`;
    },
  },
  {
    name: 'Guest',
    role: 'guest',
    // метода getInfo нет
  },
  {
    name: 'Editor',
    role: 'editor',
    getInfo() {
      return `${this.name} (Role: ${this.role})`;
    },
  },
];

for (const user of users) {
  if (user?.getInfo) {
    console.log(user.getInfo());
  }
}

/*
Admin (Role: administrator)
Editor (Role: editor)
*/

// ?? альтернативное решение

for (const user of users) {
  // Вызываем getInfo(), только если этот метод существует.
  const info = user.getInfo?.();

  // Если метод был вызван и вернул результат, выводим его.
  if (info) {
    console.log(info);
  }
}

/*
Admin (Role: administrator)
Editor (Role: editor)
*/
