// Реализовать методы увеличения и уменьшения баланса, при котором каждая операция сохраняется в массив operations в виде { reason: 'Оплата налогов', sum: -100 }.
// Возвращается true, если успешно и false, если не хватает баланса. Так же реализовать метод вывода числа операций по кошельку.
// Основные компоненты:
// Объект "Кошелек": Содержит начальный баланс (balance) и массив операций (operations).
// Методы:
// increase(sum, reason): Увеличивает баланс на sum, добавляет операцию с reason в массив operations. Возвращает true.
// decrease(sum, reason): Уменьшает баланс на sum если достаточно средств, иначе возвращает false. Добавляет операцию с reason в массив operations при успехе.
// getOperationLength(): Возвращает количество выполненных операций.

const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    if (sum <= 0) {
      return false; // при увеличении сумма не может быть нулевой или отрицательной
    }

    this.balance += sum;
    this.operations.push({ reason, sum });

    return true;
  },
  decrease: function (sum, reason) {
    if (sum <= 0 || this.balance < sum) {
      return false; // не можем отнимать 0 и если на балансе меньше денег
    }

    this.balance -= sum;
    this.operations.push({ reason, sum: -sum });

    return true;
  },
  getOperationLength: function () {
    return this.operations.length;
  },
  getBalance: function () {
    return this.balance;
  },
};

console.log(wallet.increase(1500, 'Пополнение баланса')); // true
console.log(wallet.decrease(1600, 'Покупка ноутбука')); // false
console.log(wallet.decrease(700, 'Покупка телефона')); // true

console.log(wallet.operations);
/*
[
{ reason: 'Пополнение баланса', sum: 1500 },
{ reason: 'Покупка телефона', sum: -700 }
]
*/

console.log(wallet.getOperationLength()); // 2
console.log(wallet.getBalance()); // 800
