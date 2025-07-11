// Рассчитай, сможет ли Вася купить дом стоимостью 13.500 долларов через 2 года, положив на счет 12.000 долларов под 7% годовых с ежемесячной капитализацией процентов.

/**
 * @param {number} initialSum - начальная сумма вклада
 * @param {number} requiredSum - необходимая сумма (для покупки дома)
 * @param {number} rate - годовая ставка в %
 * @param {number} depositPeriod - количество месяцев
 */

function depositCalculation(initialSum, requiredSum, rate, depositPeriod) {
  const resultSum = Math.round(
    initialSum * Math.pow(1 + rate / (100 * 12), depositPeriod)
  );
  const message =
    resultSum >= requiredSum
      ? `У Васи получилось, он накопил за 2 года ${resultSum}! Теперь он купит дом за ${requiredSum}!`
      : `Васи не хватило.. он накопил за 2 года ${resultSum}, а нужно было ${requiredSum}!`;

  console.log(message);
}

depositCalculation(12000, 13500, 7, 24); // У Васи получилось, он накопил за 2 года 13798! Теперь он купит дом за 13500!
depositCalculation(11000, 13500, 7, 24); // Васи не хватило.. он накопил за 2 года 12648, а нужно было 13500!

// ? решение от PS

const deposit = 10000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;
const res = deposit * (1 + rate / 12) ** 24;

if (res > houseCost) {
  console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
  console.log(`Мы накопили: ${res}. Купить не сможем (((`);
}
