// Задание 1:
// Как можно подкорректировать код, чтобы  внутри setTimeout контекст не терялся и мы то же увидели в консоли 'Маг кастует заклинание!'?

const player = {
  name: 'Маг',
  castSpell: function () {
    console.log(`${this.name} кастует заклинание!`);
  },
};

player.castSpell(); // "Маг кастует заклинание!"

setTimeout(player.castSpell.bind(player), 100); // "Маг кастует заклинание!"

// Задание 2:
// Внимательно изучи код. Твоя задача — предсказать, что будет выведено в консоль?

function createCounter(name) {
  let count = 0; // Эта переменная живёт в scope функции createCounter

  return {
    name: name,
    log: function () {
      count++;
      console.log(`${this.name} насчитал: ${count}`);
    },
  };
}

const counterA = createCounter('Счётчик А');
const counterB = createCounter('Счётчик Б');

counterA.log(); // "Счётчик А насчитал: 1"
counterB.log(); // "Счётчик Б насчитал: 1"
counterA.log(); // "Счётчик А насчитал: 2"
