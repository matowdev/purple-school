// Нужно организовать логику/функцию для конвертации валют (нескольких пар), согласно входных параметров:
// - сумма средств, валюта (входящих) средств, целевая валюта (в какую конвертировать).
// - если такой (целевой) валюты нет, возврат - null.
// - поддерживаемые валюты (например, рубли, доллары, евро).

const CONVERSION_RU_USD = 79.55;
const CONVERSION_RU_EUR = 93.35;
const CONVERSION_USD_EUR = 0.92;

function getConversion(currencyAmount, inCurrency, outCurrency) {
  if (!currencyAmount || !inCurrency || !outCurrency) {
    return null;
  }

  if (typeof currencyAmount !== 'number') {
    return null;
  } else if (
    typeof inCurrency !== 'string' ||
    typeof outCurrency !== 'string'
  ) {
    return null;
  }

  const inCurr = inCurrency.toLowerCase();
  const outCurr = outCurrency.toLowerCase();
  let convertSum;

  if (inCurr !== 'rub' && inCurr !== 'usd' && inCurr !== 'eur') {
    return null;
  } else if (outCurr !== 'rub' && outCurr !== 'usd' && outCurr !== 'eur') {
    return null;
  }

  if (inCurr === outCurr) {
    return null;
  }

  if (inCurr === 'rub' && outCurr === 'usd') {
    return Number((convertSum = currencyAmount / CONVERSION_RU_USD).toFixed(2));
  } else if (inCurr === 'usd' && outCurr === 'rub') {
    return Number((convertSum = currencyAmount * CONVERSION_RU_USD).toFixed(2));
  }

  if (inCurr === 'rub' && outCurr === 'eur') {
    return Number((convertSum = currencyAmount / CONVERSION_RU_EUR).toFixed(2));
  } else if (inCurr === 'eur' && outCurr === 'rub') {
    return Number((convertSum = currencyAmount * CONVERSION_RU_EUR).toFixed(2));
  }

  if (inCurr === 'usd' && outCurr === 'eur') {
    return Number(
      (convertSum = currencyAmount * CONVERSION_USD_EUR).toFixed(2)
    );
  } else if (inCurr === 'eur' && outCurr === 'usd') {
    return Number(
      (convertSum = currencyAmount / CONVERSION_USD_EUR).toFixed(2)
    );
  }
}

console.log(getConversion(1000, 'RUB', 'USD')); // 12.57
console.log(getConversion(100, 'USD', 'RUB')); // 7955
console.log(getConversion(5000, 'RUB', 'EUR')); // 53.56
console.log(getConversion(500, 'EUR', 'RUB')); // 46675
console.log(getConversion(50, 'USD', 'EUR')); // 46
console.log(getConversion()); // null
console.log(getConversion(10, 'rub', 'RUB')); // null
console.log(getConversion(10, 'RUB', 'BLR')); // null
console.log(getConversion('10', 'eur', 'usd')); // null
console.log(getConversion(10, '123', 10)); // null
