'use strict';

// Нужно создать функцию, которая будет конвертировать передаваемую сумм из одной валюты в другую.. согласно следующих параметров:
// - сумма для конвертации.
// - исходная валюта (initial currency).
// - целевая валюта для конвертации (convert currency).
// При этом возвращая строку сконвертированной суммы. Если не получилось, то `null`.
// - на примере 3 валют.

function convert(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    { name: 'USD', mult: 1 },
    { name: 'RUB', mult: 1 / 60 },
    { name: 'EUR', mult: 1.1 },
  ];

  const initial = allCurrencies.find(
    (currency) => currency.name === initialCurrency
  );

  if (!initial) {
    return null;
  }

  const convert = allCurrencies.find(
    (currency) => currency.name === convertCurrency
  );

  if (!convert) {
    return null;
  }

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: convert.name,
  }).format((sum * initial.mult) / convert.mult);
}

console.log(convert(10000, 'RUB', 'USD')); // 166,67 $
console.log(convert(10000, 'RUB', 'EUR')); // 151,52 €
console.log(convert(100, 'USD', 'RUB')); // 6 000,00 ₽
console.log(convert(100, 'USD', 'EUR')); // 90,91 €
console.log(convert(100, 'EUR', 'RUB')); // 6 600,00 ₽
console.log(convert(100, 'TG', 'RUB')); // null
console.log(convert(100, 'EUR', 'TG')); // null
