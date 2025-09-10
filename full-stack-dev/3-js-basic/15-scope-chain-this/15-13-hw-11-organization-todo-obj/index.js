// Нужно написать todo объект, который хранит в себе tasks массив, типа { title: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:
// - Получить список задач.
// - Добавить задачу.
// - Удалить задачу по id.
// - Обновить имя или приоритет по id.
// - Отсортировать задачи по приоритету.

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

console.log(todo.getTaskList()); // []
console.log(todo.addTask('Помыть посуду', 1)); // true
console.log(todo.addTask('Убрать В КВАртире', 2)); // true
console.log(todo.deleteTask(1)); // true
console.log(todo.addTask('поспать')); // false
console.log(todo.addTask('Выгулять собаку', 1)); // true
console.log(todo.getTaskList());
/* 
[
  { title: 'Убрать в квартире', id: 2, priority: 2 },
  { title: 'Выгулять собаку', id: 3, priority: 1 }
]
*/
console.log(todo.updateTask(2, 'Поиграть в PS', 1)); // true
console.log(todo.getTaskList());
/*
[
  { title: 'Поиграть в ps', id: 2, priority: 1 },
  { title: 'Выгулять собаку', id: 3, priority: 1 }
]
*/
console.log(todo.addTask('Дочитать книгу', 2)); // true
console.log(todo.addTask('Найти зарядное устройство', 3)); // true
console.log(todo.sortTask());
/*
[
  { title: 'Поиграть в ps', id: 2, priority: 1 },
  { title: 'Выгулять собаку', id: 3, priority: 1 },
  { title: 'Дочитать книгу', id: 4, priority: 2 },
  { title: 'Найти зарядное устройство', id: 5, priority: 3 }
]
*/
