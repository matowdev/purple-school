// Есть выгрузка операций пользователя
// const operations = [1000, -700, 300, -500, 10000];
// а так же начальный баланс в 100$
// Необходимо сделать функции расчёта:
// - Итогового баланса
// - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
// - Расчёта среднего расхода и среднего дохода

const operations = [1000, -700, 300, -500, 10000];
const initBalance = 100;

// ** Получение баланса
function getBalance(operations = [], initBalance = 0) {
  let totalBalance = initBalance;

  for (const operation of operations) {
    totalBalance += operation;
  }

  return totalBalance;
}

const balance = getBalance(operations, initBalance);
console.log(`Баланс: ${balance}$`); // "Баланс: 10200$"

// ** Проверка операций
function checkOperations(operations = [], initBalance = 0) {
  let currentBalance = initBalance;
  let isPositiveBalance = true;

  for (const operation of operations) {
    currentBalance += operation;

    if (currentBalance < 0) {
      isPositiveBalance = false;
      break;
    }
  }

  return isPositiveBalance;
}

const operationBalance = checkOperations(operations, initBalance);
console.log(
  operationBalance
    ? `Баланс остаётся положительным!`
    : `Внимание: отрицательный баланс!`
); // "Баланс остаётся положительным!"

// ** Определение доходов/расходов
function averageOperations(operations = []) {
  let income = 0;
  let incomeCount = 0;
  let expenses = 0;
  let expensesCount = 0;

  for (const operation of operations) {
    if (operation > 0) {
      income += operation;
      incomeCount++;
    } else if (operation < 0) {
      expenses += operation;
      expensesCount++;
    }
  }

  const averageIncome = incomeCount > 0 ? Math.round(income / incomeCount) : 0; // если не учесть 0, может быть NaN
  const averageExpenses =
    expensesCount > 0 ? Math.round(expenses / expensesCount) : 0; // если не учесть 0, может быть NaN

  return [averageIncome, averageExpenses];
}

const [averageIncome, averageExpenses] = averageOperations(operations);
console.log(
  `Средний доход: ${averageIncome}$, средний расход: ${averageExpenses}$`
); // "Средний доход: 3767$, средний расход: -600$"
