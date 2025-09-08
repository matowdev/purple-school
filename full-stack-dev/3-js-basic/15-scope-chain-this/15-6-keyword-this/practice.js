// Задание 1:
// Твоя задача: Исправь код, не используя стрелочные функции, чтобы setInterval корректно вызывал метод tick и счётчик увеличивался.
// Подумай, что происходит с this в момент вызова machine.tick внутри setInterval и как можно это исправить с помощью одного из методов, которые мы обсуждали.

const machine = {
  count: 0,
  tick() {
    this.count++;
    console.log(`Current count: ${this.count}`);
  },
};

setInterval(machine.tick.bind(machine), 1000); // "Current count: 1, Current count: 2, Current count: 3..."

// Задание 2:
// Вызови метод logger.logInfo один раз, но так, чтобы он использовал данные из объекта anotherService. Необходимо также передать в него два аргумента: type и message.
// Ограничения:
// 1. Нельзя изменять исходные объекты.
// 2. Нельзя использовать bind.

const logger = {
  name: 'Main Logger',
  logInfo(type, message) {
    console.log(`[${this.name}] ${type}: ${message}.`);
  },
};

const anotherService = {
  name: 'Payment Service',
};

logger.logInfo.call(anotherService, 'ERROR', 'Failed to process payment'); // "[Payment Service] ERROR: Failed to process payment."

// Задание 3:
// Исправь метод start так, чтобы таймер работал корректно. Ты можешь использовать любой из изученных способов, который считаешь наиболее подходящим.

const timer = {
  seconds: 5,
  message: "Time's up!",

  start() {
    console.log('Timer started for 5 seconds...');

    const countdown = setInterval(() => {
      this.seconds--;

      if (this.seconds > 0) {
        console.log(this.seconds);
      } else {
        console.log(this.message);
        clearInterval(countdown);
      }
    }, 1000);
  },
};

timer.start();

/*
Timer started for 5 seconds...
4
3
2
1
Time's up!
*/
