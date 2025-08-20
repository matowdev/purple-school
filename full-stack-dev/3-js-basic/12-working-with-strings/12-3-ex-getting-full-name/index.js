// Из длинной строки, содержащей имя, фамилию пользователя и его никнейм, необходимо выделить только имя и фамилию.

let userName = 'Мирон aka Roni-Mironi, Матылёнок';

function getFullName(userName, firstName = 'John', lastName = 'Doe') {
  if (!userName || userName === '') {
    return null;
  }

  if (userName.includes(firstName) && userName.includes(lastName)) {
    const firstNameLength = firstName.length;
    const lastNameLength = lastName.length;
    const firstNameIndex = userName.indexOf(firstName);
    const lastNameIndex = userName.indexOf(lastName);

    const fullName = `${userName.slice(
      firstNameIndex,
      firstNameIndex + firstNameLength
    )} ${userName.slice(lastNameIndex, lastNameIndex + lastNameLength)}`;

    return fullName;
  } else {
    return null;
  }
}

console.log(getFullName(userName, 'Мирон', 'Матылёнок')); // Мирон Матылёнок

// ?? альтернативное решение (очевидно проще/короче)
function getFullName(userName, firstName = 'John', lastName = 'Doe') {
  if (!userName || userName === '') {
    return null;
  }

  // Если строка содержит и имя, и фамилию...
  if (userName.includes(firstName) && userName.includes(lastName)) {
    // ...просто возвращаем их, объединенных пробелом.
    return `${firstName} ${lastName}`;
  } else {
    return null;
  }
}

console.log(getFullName(userName, 'Мирон', 'Матылёнок')); // Мирон Матылёнок

// ?? альтернативный вариант (если не понятно расположение имени и фамилии.. самостоятельный поиск)
function extractFullName(rawString) {
  if (!rawString) {
    return null;
  }

  const nameParts = [];
  // 1. Разбиваем строку по запятой на несколько частей.
  const parts = rawString.split(',');

  // 2. Обрабатываем каждую часть.
  for (const part of parts) {
    let cleanedPart = part;

    console.log(part); // первая часть 'Мирон aka Roni-Mironi' и вторая часть ' Матылёнок'

    // 3. Если в части есть никнейм, отрезаем его.
    if (cleanedPart.includes('aka')) {
      // Берем только то, что было до "aka".
      console.log(cleanedPart.split('aka')); // деление по aka даст [ 'Мирон ', ' Roni-Mironi' ]
      cleanedPart = cleanedPart.split('aka')[0]; // выберем первое[0]
    }

    // 4. Убираем лишние пробелы в начале и в конце.
    cleanedPart = cleanedPart.trim();

    // 5. Если после очистки что-то осталось, добавляем в наш список.
    if (cleanedPart) {
      nameParts.push(cleanedPart);
    }
  }

  // 6. Соединяем все найденные части имени через пробел.
  return nameParts.join(' ');
}

console.log(extractFullName(userName)); // "Мирон Матылёнок"
