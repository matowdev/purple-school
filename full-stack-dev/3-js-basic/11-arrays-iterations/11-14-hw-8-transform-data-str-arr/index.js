// Дан массива строк:
// ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
// Необходимо написать функцию, которая бы удаляла бы из массива все строки, которые нельзя перевести в дату (можно: 10-02-2022 и 11/12/2023).
// Условия валидации дат:
// - Форматы дат: DD.MM.YY или MM/DD/YY.
// - День не может быть больше 31.
// - Месяц не может быть больше 12.
// - Учитывать високосные года для февраля (опционально).
// Итоговый вид:
// ['10-02-2022', '12-11-2023']

const data = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function getTransformData(dataArr = []) {
  if (!dataArr || dataArr.length === 0) {
    return []; // указание !dataArr, это явная защита от передачи null
  }

  let transformData = [];
  let euroData = [];
  let usaData = [];

  for (const data of dataArr) {
    if (typeof data === 'string' && data !== '') {
      if (data.includes('-')) {
        euroData.push(data);
      } else if (data.includes('/')) {
        usaData.push(data);
      }
    }
  }

  if (euroData.length !== 0) {
    euroData.map((data) => transformData.push(data.split('-')));
  }

  if (usaData.length !== 0) {
    // usaData.map((data) => {
    //   const [month, day, year] = data.split('/');
    //   transformData.push([day, month, year]);
    // });
    usaData.map((data) => transformData.push(data.split('/')));
  }

  return transformData
    .filter(
      (data, index, arr) =>
        arr[index][0] <= 31 &&
        arr[index][0] > 0 &&
        arr[index][1] <= 12 &&
        arr[index][1] > 0
    )
    .map((data) => data.join('-'));
}

console.log(getTransformData(data)); // [ '10-02-2022', '12-11-2023' ]

// ?? альтернативное решение (первичное, только.. немного доработанное)
// function getTransformData(dataArr = []) {
//   if (!dataArr || dataArr.length === 0) {
//     return []; // указание !dataArr, это явная защита от передачи null
//   }
//
//   let transformData = [];
//   let euroData = [];
//   let usaData = [];
//
//   for (const data of dataArr) {
//     if (typeof data === 'string' && data !== '') {
//       if (data.includes('-')) {
//         euroData.push(data);
//       } else if (data.includes('/')) {
//         usaData.push(data);
//       }
//     }
//   }
//
//   if (euroData.length !== 0) {
//     // Используем forEach, так как нам не нужен новый массив, мы просто наполняем transformData
//     euroData.forEach((dateString) => {
//       const parts = dateString.split('-');
//
//       // Шаг 1: Преобразуем каждую часть в число
//       const day = parseInt(parts[0], 10);
//       const month = parseInt(parts[1], 10);
//       const year = parseInt(parts[2], 10);
//
//       // Шаг 2: Проверяем, что все части успешно преобразовались в числа
//       if (isNaN(day) || isNaN(month) || isNaN(year)) {
//         return; // Если нет — просто пропускаем эту итерацию
//       }
//
//       transformData.push([day, month, year]);
//     });
//   }
//
//   if (usaData.length !== 0) {
//     usaData.forEach((dateString) => {
//       const parts = dateString.split('/');
//
//       // Шаг 1: Преобразуем, учитывая порядок MM/DD/YYYY
//       const month = parseInt(parts[0], 10);
//       const day = parseInt(parts[1], 10);
//       const year = parseInt(parts[2], 10);
//
//       // Шаг 2: Проверяем на NaN
//       if (isNaN(day) || isNaN(month) || isNaN(year)) {
//         return;
//       }
//
//       // Сразу кладем в правильном порядке [день, месяц, год]
//       transformData.push([day, month, year]);
//     });
//   }
//
//   console.log(transformData);
//
//   // Теперь этот блок работает с ЧИСЛАМИ, а не строками. Это надежно!
//   return transformData
//     .filter(
//       (dateParts) =>
//         dateParts[0] <= 31 &&
//         dateParts[0] > 0 &&
//         dateParts[1] <= 12 &&
//         dateParts[1] > 0
//     )
//     .map((dateParts) => {
//       // Добавим форматирование, чтобы числа снова стали красивыми строками
//       const day = String(dateParts[0]).padStart(2, '0');
//       const month = String(dateParts[1]).padStart(2, '0');
//       const year = dateParts[2];
//       return `${day}-${month}-${year}`;
//     });
// }
//
// console.log(getTransformData(data)); // [ '10-02-2022', '12-11-2023' ]

// ?? альтернативное решение (через reduce)
// function getValidDates(dataArr = []) {
//   if (!dataArr || dataArr.length === 0) {
//     return [];
//   }
//
//   // Используем reduce для преобразования исходного массива в новый
//   // Это позволяет обойтись без создания промежуточных массивов
//   return dataArr.reduce((acc, dateString) => {
//     if (typeof dateString !== 'string') {
//       return acc;
//     }
//
//     let parts;
//     let day, month, year;
//
//     // 1. РАЗБИРАЕМ СТРОКУ НА ЧАСТИ
//     if (dateString.includes('-')) {
//       parts = dateString.split('-');
//       // Преобразуем строки в числа с помощью parseInt
//       [day, month, year] = parts.map((part) => parseInt(part, 10));
//     } else if (dateString.includes('/')) {
//       parts = dateString.split('/');
//       // Для формата MM/DD/YYYY сразу меняем день и месяц местами
//       let monthUsa, dayUsa;
//       [monthUsa, dayUsa, year] = parts.map((part) => parseInt(part, 10));
//       day = dayUsa;
//       month = monthUsa;
//     } else {
//       // Если в строке нет ни '-', ни '/', пропускаем ее
//       return acc;
//     }
//
//     // Если после parseInt получилось не число (например, для 'тест'), пропускаем
//     if (isNaN(day) || isNaN(month) || isNaN(year)) {
//       return acc;
//     }
//
//     // 2. ВАЛИДАЦИЯ ДАТЫ
//     const isDayValid = day > 0 && day <= 31;
//     const isMonthValid = month > 0 && month <= 12;
//
//     // Опционально: базовая проверка на количество дней в месяце
//     // Например, в феврале не может быть 31 дня
//     if (month === 2 && day > 29) {
//       // Упрощенная проверка, без високосных лет
//       return acc;
//     }
//
//     // 3. ДОБАВЛЯЕМ РЕЗУЛЬТАТ
//     if (isDayValid && isMonthValid) {
//       // Форматируем, чтобы день и месяц всегда были двузначными
//       const formattedDay = String(day).padStart(2, '0');
//       const formattedMonth = String(month).padStart(2, '0');
//
//       acc.push([formattedDay, formattedMonth, year].join('-'));
//     }
//
//     return acc;
//   }, []); // Начальное значение аккумулятора - пустой массив
// }
//
// console.log(getValidDates(data)); // [ '10-02-2022', '12-11-2023' ]
