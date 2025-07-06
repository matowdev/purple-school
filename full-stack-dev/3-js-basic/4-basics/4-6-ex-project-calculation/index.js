// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день, 5 дней в неделю (кроме выходных). К вам приходит заказчик и предлагает заказ на 40 часов работы.
// Сейчас понедельник.
// Вы должны уехать через 11 дней.
// Выведете в консоль:
// - Boolean ответ успеете ли вы выполнить работу до отъезда?
// - Сколько вы заработаете, если возьмётесь (если выполните в полном объёме)?

let payRateUSD = 80;
let workHoursPerDay = 5;
let daysBeforeTrip = 11 - 2;
let projectTime = 40;

console.log(
  `Успею ли я выполнить проект до отъезда? ${
    daysBeforeTrip * workHoursPerDay >= projectTime
  }`
);
console.log(`Возможный заработок (если успею): ${payRateUSD * projectTime}$`);

// Успею ли я выполнить проект до отъезда? true
// Возможный заработок (если успею): 3200$

// ? решение от PS
const payRatesUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + projectHours * payRatesUSD + '$');

// Смогу ли я работать? true
// Стоимость работ: 3200$
