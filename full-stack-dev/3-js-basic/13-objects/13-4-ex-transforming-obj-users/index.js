// Нужно преобразовать искомый массив с объектами/пользователями до следующего вида:
// [{ fullName: 'Вася Пупкин', skillNum: 2 }, ... ]
// Рекомендуется отработать через метод map().

const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps'],
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн'],
  },
];

const newLookUsers = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  skillNum: user.skills.length,
}));

console.log(newLookUsers);

/*
[
  { fullName: 'Вася Пупкин', skillNum: 2 },
  { fullName: 'Катя Белова', skillNum: 1 }
]
*/
