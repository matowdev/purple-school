let projectTime = 40;
let daysToComplete = 11;
let myDaytimeHours = 5;
let myHourlyRate = 80;

function getResult(time, days, hours, rate) {
  let result = false;
  let paycheck = 0;
  let maxWorkingHours = days * hours;

  if (maxWorkingHours >= time) {
    result = true;
    paycheck = time * rate;

    return [result, paycheck];
  } else {
    return [result, paycheck];
  }
}

let result = getResult(
  projectTime,
  daysToComplete,
  myDaytimeHours,
  myHourlyRate
);
console.log(
  `Получится выполнить проект - ${result[0]}!? Возможный заработок - ${result[1]}$!?`
); // Получится выполнить проект - true!? Возможный заработок - 3200$!?

// решение purple-school
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Смогу ли я отработать? ' + (availableHours > projectHours)); // Смогу ли я отработать? true
console.log('Стоимость работ: ' + projectHours * payRateUSD + '$'); // Стоимость работ: 3200$
