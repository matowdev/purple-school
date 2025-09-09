'use strict';

// Задание 1:
// Напиши функцию concatStrings().
// - Согласно Arguments, первым идёт separator, — строка, которая будет использоваться как разделитель.
// - Все остальные аргументы — это строки, которые нужно объединить.
// - Функция должна вернуть одну строку, где все строки (кроме первой) соединены через указанный разделитель.
// - Важное условие: реши эту задачу, используя именно объект arguments, без ...rest параметров.

function concatStrings() {
  const separator = arguments[0];

  return Array.from(arguments).slice(1).join(separator);
}

console.log(concatStrings(', ', 'яблоко', 'банан', 'апельсин')); // "яблоко, банан, апельсин"

// Задание 2:
// А теперь давай посмотрим на современную альтернативу. Перепиши эту же функцию concatStrings, но на этот раз используя остаточные параметры (...rest).

function newConcatStrings(separator, ...strings) {
  return strings.join(separator);
}

console.log(concatStrings(', ', 'яблоко', 'банан', 'апельсин')); // "яблоко, банан, апельсин"

// Задание 3:
// Напиши функцию findMostFrequent(), которая принимает произвольное количество аргументов (это могут быть числа или строки). Функция должна найти и вернуть тот аргумент, который встречается чаще всего. Если несколько аргументов встречаются одинаковое максимальное количество раз, можно вернуть любой из них.
// Важно: для решения этой задачи ты можешь использовать любой из двух подходов, который считаешь более удобным (arguments или ...rest).

function findMostFrequent(...args) {
  if (args.length === 0) {
    return null;
  }

  const uniqueArgs = args.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  let maxReps = 0;
  let mostFrequent;

  for (const el of uniqueArgs) {
    let reps = 0;

    for (const arg of args) {
      if (el === arg) reps++;
    }

    if (reps > maxReps || reps === maxReps) {
      maxReps = reps;
      mostFrequent = el;
    }
  }

  return { maxReps, mostFrequent };
}

const { maxReps, mostFrequent } = findMostFrequent(
  1,
  'a',
  'a',
  'b',
  2,
  'a',
  1,
  3,
  'a'
);
console.log(
  `У значения: ${mostFrequent}, больше всего повторений - ${maxReps}`
); // "У значения: a, больше всего повторений - 4"

// ?? альтернативное решение
function findMostFrequent(...args) {
  // 1. Создаём пустой объект для подсчёта частоты каждого элемента.
  const counts = {};

  // Если аргументов нет, возвращаем undefined.
  if (args.length === 0) {
    return undefined;
  }

  // 2. Проходим по всем аргументам ОДИН раз.
  for (const arg of args) {
    // Для каждого аргумента увеличиваем его счётчик в объекте.
    // Если счётчика ещё нет (arg встречается впервые), `counts[arg]` будет undefined.
    // `(undefined || 0)` даст `0`, и мы добавим 1.
    // Если счётчик уже есть, мы просто добавим 1 к его текущему значению.
    counts[arg] = (counts[arg] || 0) + 1;
  }

  // На этом этапе объект `counts` будет выглядеть так: { '1': 2, 'a': 4, 'b': 1, '2': 1, '3': 1 }

  // 3. Находим, какой же элемент (ключ) имеет максимальное значение в счётчике.
  let mostFrequent = args[0]; // Предположим, что первый элемент самый частый
  let maxCount = 1;

  for (const arg in counts) {
    if (counts[arg] > maxCount) {
      maxCount = counts[arg];
      mostFrequent = arg;
    }
  }

  // Важно: ключи в объекте всегда строки. Если нужно вернуть число, а не строку,
  // можно сделать дополнительную проверку и преобразование.
  // Но для общего случая этого достаточно.

  return mostFrequent;
}

// Пример вызова
console.log(findMostFrequent(1, 'a', 'a', 'b', 2, 'a', 1, 3, 'a')); // Выведет: 'a'
console.log(findMostFrequent('apple', 'banana', 'apple')); // Выведет: 'apple'
