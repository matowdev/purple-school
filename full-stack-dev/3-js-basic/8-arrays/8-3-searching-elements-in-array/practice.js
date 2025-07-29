// Задание 1:
// Напиши функцию canJoinClub(name, memberList).
// Функция принимает два аргумента: name (имя, строка) и memberList (список участников, массив).
// 1. Она должна проверять, есть ли name в memberList.
// 2. Функция должна вернуть true, если имя есть в списке, и false, если его нет.
// Используй для решения метод includes(), так как он наиболее читаем для этой задачи.

const clubMembers = ['Peter', 'Kate', 'John'];

function canJoinClub(name, memberList) {
  return memberList.includes(name);
}

console.log(canJoinClub('John', clubMembers)); // true
console.log(canJoinClub('Alice', clubMembers)); // false

// Задание 2:
// Напиши функцию getTicketInfo(passengerName, passengerList).
// - Функция принимает passengerName (имя пассажира) и passengerList (список пассажиров в вагоне).
// - Если пассажир есть в списке, функция должна вернуть строку: "Пассажир [имя] сидит на месте #[номер места].". Номер места — это индекс + 1 (ведь в жизни мы считаем места с 1, а не с 0).
// - Если пассажира в списке нет, функция должна вернуть строку: "Пассажира с именем [имя] в списке нет."
// Используй для решения метод indexOf(), так как нам важна позиция элемента.

const passengers = ['Frodo', 'Sam', 'Pippin', 'Merry'];

function getTicketInfo(passengerName, passengerList) {
  let passengerSeat = passengerList.indexOf(passengerName);

  if (passengerSeat >= 0) {
    return `Пассажир '${passengerName}' сидит на месте #${passengerSeat + 1}.`;
  } else {
    return `Пассажира с именем '${passengerName}' в списке нет.`;
  }
}

console.log(getTicketInfo('Sam', passengers)); // Пассажир 'Sam' сидит на месте #2.
console.log(getTicketInfo('Aragorn', passengers)); // Пассажира с именем 'Aragorn' в списке нет.

// Задание 3:
// Напиши функцию findFirstTwo(item, array).
// - Функция ищет первое и второе вхождение элемента item в массиве array.
// - Она должна вернуть массив с двумя элементами: [индекс_первого, индекс_второго].
// - Если элемент найден только один раз, вторым значением в массиве должен быть -1.
// - Если элемент вообще не найден, оба значения должны быть -1.
// Используй indexOf() дважды: сначала для поиска первого вхождения, а затем, используя второй параметр (fromIndex), для поиска второго.

const letters = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];

function findFirstTwo(item, array) {
  const indexArr = [];

  indexArr.push(array.indexOf(item));

  if (indexArr[0] >= 0) {
    indexArr.push(array.indexOf(item, indexArr[0] + 1));
  } else {
    indexArr.push(-1);
  }

  return indexArr;
}

console.log(findFirstTwo('A', letters)); // [ 0, 5 ]
console.log(findFirstTwo('C', letters)); // [ 2, -1 ]
console.log(findFirstTwo('X', letters)); // [ -1, -1 ]

// Задание 4:
// Напиши функцию findAllOccurrences(item, array).
// - Функция принимает item (что ищем) и array (где ищем).
// - Она должна найти все вхождения item в array и вернуть новый массив с их индексами.
// - Если элемент не найден ни разу, функция должна вернуть пустой массив [].
// Подсказка: тебе понадобится indexOf() в цикле, и ты будешь использовать его второй аргумент (fromIndex), чтобы не находить один и тот же элемент снова и снова.

const scores = [10, 25, 10, 5, 30, 10, 15];

function findAllOccurrences(item, array) {
  const occurrencesArr = [];
  let currentIndex = 0;

  while (true) {
    const foundIndex = array.indexOf(item, currentIndex);

    if (foundIndex === -1) {
      break;
    }

    occurrencesArr.push(foundIndex);
    currentIndex = foundIndex + 1;
  }

  return occurrencesArr;
}

console.log(findAllOccurrences(10, scores)); // [ 0, 2, 5 ]
console.log(findAllOccurrences(5, scores)); // [ 3 ]
console.log(findAllOccurrences(99, scores)); // []
