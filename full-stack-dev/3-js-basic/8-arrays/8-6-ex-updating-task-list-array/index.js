// Дан список задач:
// const tasks = ['Задача 1'];
// Сделать функции:
// - Добавление задачи в конец.
// - Удаление задачи по названию.
// - Перенос задачи в начало списка по названию.
// Всегда менять исходный массив.

const tasks = ['Задача 1'];

// проверка наличия задачи
function checkTaskPosition(task) {
  const taskPosition = tasks.indexOf(task);

  if (taskPosition >= 0) {
    return { hasTask: true, taskPosition };
  } else {
    return { hasTask: false, taskPosition };
  }
}

// добавление задачи
function addTask(task) {
  tasks.push(task);
  return `${task} добавлена!`;
}

// удаление задачи
function deleteTask(task) {
  const { hasTask, taskPosition } = checkTaskPosition(task);

  if (hasTask) {
    tasks.splice(taskPosition, 1);
    return `${task} удалена!`;
  } else {
    return `Нет такой задачи!`;
  }
}

// перемещение задачи (приоритизация)
function replaceTask(task) {
  const { hasTask, taskPosition } = checkTaskPosition(task);

  if (hasTask) {
    const getTask = String(tasks.splice(taskPosition, 1));
    // const [getTask] = tasks.splice(taskPosition, 1);
    // const getTask = tasks.splice(taskPosition, 1)[0];
    tasks.unshift(getTask);
    return `${task} перемещена в начало!`;
  } else {
    return `Нечего приоритизировать! Нет такой задачи!`;
  }
}

console.log(addTask('Задача 2')); // Задача 2 добавлена!
console.log(addTask('Задача 3')); // Задача 3 добавлена!
console.log(addTask('Задача 4')); // Задача 4 добавлена!
console.log(tasks); // [ 'Задача 1', 'Задача 2', 'Задача 3', 'Задача 4' ]

console.log(deleteTask('Задача 4')); // Задача 4 удалена!
console.log(tasks); // [ 'Задача 1', 'Задача 2', 'Задача 3' ]
console.log(deleteTask('Задача 6')); // Нет такой задачи!

console.log(replaceTask('Задача 3')); // Задача 3 перемещена в начало!
console.log(tasks); // [ 'Задача 3', 'Задача 1', 'Задача 2' ]
console.log(replaceTask('Задача 9')); // Нечего приоритизировать! Нет такой задачи!

// ?? изначально были такие решения (без DRY)
// function addTask(task) {
//   tasks.push(task);
//   return `${task} добавлена!`;
// }
//
// function deleteTask(task) {
//   const taskPosition = tasks.indexOf(task);
//
//   if (taskPosition >= 0) {
//     tasks.splice(taskPosition, 1);
//     return `${task} удалена!`;
//   } else {
//     return `Нет такой задачи!`;
//   }
// }
//
// function replaceTask(task) {
//   const taskPosition = tasks.indexOf(task);
//
//   if (taskPosition >= 0) {
//     const getTask = String(tasks.splice(taskPosition, 1));
//     tasks.unshift(getTask);
//     return `${task} перемещена в начало!`;
//   } else {
//     return `Нет такой задачи!`;
//   }
// }
