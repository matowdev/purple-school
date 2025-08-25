// Нужно замаскировать номер кредитной карты, т.е. исходя из длинный, нужно:
// 1. Получить последние 4-ре цифры.
// 2. Добавить символы “звёздочка” вместо остальных цифр (не крайних).

const cardNum = '1385289911368878';

const lastDigits = cardNum.slice(-4);
const maskCardNum = lastDigits.padStart(cardNum.length, '*');

console.log(maskCardNum); // "************8878"
