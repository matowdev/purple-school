// Нужно написать функцию проверки номера карты алгоритмом “Луна”. В функцию передаётся карта: 4561-2612-1234-5464, а функция возвращает true, если карта проходит алгоритм и false, если нет.

const cardNum = '4561-2612-1234-5464'; // здесь контрольная, т.е. "крайняя" цифра не корректная.. она должна быть 7

function checkLuhn(cardNum) {
  if (!cardNum || typeof cardNum !== 'string') {
    return false;
  }

  cardNum = cardNum.replaceAll('-', '');

  if (cardNum.length !== 16) {
    return false;
  }

  for (const num of cardNum) {
    if (isNaN(Number(num))) {
      return false;
    }
  }

  cardNum = cardNum.split('').map(Number).reverse(); // обязательное преобразование элементов к типу Number (а то в reduce() потом получиться одна большая строка, а не сумма)

  const totalSum = cardNum.reduce((acc, num, index) => {
    if (index % 2 !== 0) {
      if (num * 2 > 9) {
        return acc + (num * 2 - 9);
      } else if (num * 2 <= 9) {
        return acc + num * 2;
      }
    } else if (index % 2 === 0) {
      return acc + num;
    }
  }, 0);

  console.log(totalSum); // 57
  return totalSum % 10 === 0;
}

const hasCheckPass = checkLuhn(cardNum);
console.log(hasCheckPass); // false

// ?? альтернативное решение (универсальное, для разной длинный номера)
// ?? Классический алгоритм Луна применяется к номерам разной длины (например, Amex — 15 цифр). В нём удвоение всегда начинается со второй цифры справа, после переворота (что является эквивалентным, если бы перебирали с лева).
// function checkLuhnUniversal(cardNum) {
//   if (!cardNum || typeof cardNum !== 'string') {
//     return false;
//   }
//
//   cardNum = cardNum.replaceAll('-', '');
//
//   // Превращаем строку в массив цифр и переворачиваем его (это обязательно)
//   const digits = cardNum.split('').map(Number).reverse();
//
//   const totalSum = digits.reduce((acc, num, index) => {
//     let digit = num;
//
//     // Удваиваем каждую вторую цифру, начиная с индекса 1 (т.е. вторая справа)
//     if (index % 2 !== 0) {
//       digit *= 2;
//       if (digit > 9) {
//         digit -= 9;
//       }
//     }

//     return acc + digit;
//   }, 0);
//
//   console.log(totalSum); // 57
//   return totalSum % 10 === 0;
// }
//
// console.log(checkLuhnUniversal(cardNum)); // false
