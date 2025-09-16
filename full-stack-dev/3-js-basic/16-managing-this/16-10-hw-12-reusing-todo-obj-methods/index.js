// Возьмите объект из предыдущего домашнего задания и последовательно примените все методы его на новый объект:
// const newTask = {
//   tasks: [
//     {
//       id: 1,
//       name: 'тест',
//       description: 'описание',
//       order: 0,
//     },
//   ],
// };
// Цель: расширить функциональность без изменения исходных методов.

'use strict';

const todo = {
  tasks: [],

  isValidId(id) {
    if (!id || typeof id !== 'number') {
      console.error('Ошибка: ID должен быть числом!');
      return false;
    }

    return true;
  },

  isValidTitle(title) {
    if (!title || typeof title !== 'string') {
      console.error('Ошибка: Заголовок должен быть непустой строкой!');
      return false;
    }

    return true;
  },

  isValidPriority(priority) {
    if (!priority || typeof priority !== 'number') {
      console.error('Ошибка: Приоритет должен быть числом!');
      return false;
    }

    return true;
  },

  formatTitle(title) {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
  },

  getTaskList() {
    return this.tasks;
  },

  addTask(title, priority) {
    if (!this.isValidTitle(title) || !this.isValidPriority(priority)) {
      return false;
    }

    const formattedTitle = this.formatTitle(title);
    const maxId = this.tasks.reduce(
      (max, task) => (task.id > max ? task.id : max),
      0
    );
    const nextId = maxId + 1;

    this.tasks.push({ title: formattedTitle, id: nextId, priority });

    return true;
  },

  deleteTask(id) {
    if (!this.isValidId(id)) {
      return false;
    }

    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      console.error(`Задача с ID ${id} не найдена!`);
      return false;
    }

    this.tasks.splice(index, 1);

    return true;
  },

  updateTask(id, title = 'без изменений', priority = -1) {
    if (!this.isValidId(id)) {
      return false;
    }

    if (!this.isValidTitle(title) || !this.isValidPriority(priority)) {
      return false;
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      console.error(`Задача с ID ${id} не найдена.`);
      return false;
    }

    if (title !== 'без изменений') {
      task.title = this.formatTitle(title);
    }

    if (priority !== -1) {
      task.priority = priority;
    }

    return true;
  },

  sortTask() {
    // return [...this.tasks].sort(...); // если нужна отсортированная копия
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

// новый объект
const newTask = {
  tasks: [
    {
      id: 1,
      name: 'тест',
      description: 'описание',
      order: 0,
    },
  ],
};

newTask.isValidId = todo.isValidId;
newTask.isValidTitle = todo.isValidTitle;
newTask.isValidPriority = todo.isValidPriority;
newTask.formatTitle = todo.formatTitle;

const getNewTaskList = todo.getTaskList.call(newTask);
console.log(getNewTaskList); // [ { id: 1, name: 'тест', description: 'описание', order: 0 } ]

const addNewTask = todo.addTask.call(newTask, 'Помыть окна', 3);
const addNewTask2 = todo.addTask.call(newTask, 'Поиграть в PS', 2);
console.log(newTask.tasks);
/*
[
  { id: 1, name: 'тест', description: 'описание', order: 0 },
  { title: 'Помыть окна', id: 2, priority: 3 },
  { title: 'Поиграть в ps', id: 3, priority: 2 }
]
*/

const deleteNewTask = todo.deleteTask.call(newTask, 2);
console.log(newTask.tasks);
/*
[
  { id: 1, name: 'тест', description: 'описание', order: 0 },
  { title: 'Поиграть в ps', id: 3, priority: 2 }
]
*/

const updateNewTask = todo.updateTask.call(newTask, 1, 'Погулять с собакой', 3);
console.log(newTask.tasks);
/*
[
  {
    id: 1,
    name: 'тест',
    description: 'описание',
    order: 0,
    title: 'Погулять с собакой',
    priority: 3
  },
  { title: 'Поиграть в ps', id: 3, priority: 2 }
]
*/

const sortNewTask = todo.sortTask.call(newTask);
console.log(newTask.tasks);
/*
[
  { title: 'Поиграть в ps', id: 3, priority: 2 },
  {
    id: 1,
    name: 'тест',
    description: 'описание',
    order: 0,
    title: 'Погулять с собакой',
    priority: 3
  }
]
*/
