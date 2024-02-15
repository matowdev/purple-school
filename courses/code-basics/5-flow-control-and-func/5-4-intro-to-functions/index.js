// введение в функции (знакомство с синтаксисом)
function getPersonData(name, surname) {
  console.log(`Моё имя: ${name}, а фамилия: ${surname}!`);
}

getPersonData('Сергей', 'Стук'); // Моё имя: Сергей, а фамилия: Стук!

function countDepositSum(moneyInUSD, lengthOfTime, interestRate) {
  let totalSum = moneyInUSD * (1 + interestRate / 12) ** lengthOfTime;
  return (totalSum - moneyInUSD).toFixed(1);
}

let firstCalculation = countDepositSum(10000, 12, 0.03);
console.log(`Исходя из условий, проценты составят: ${firstCalculation}$`); // Исходя из условий, проценты составят: 304.2$
