// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
// выведите в консоле "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".

const userAnswer = prompt('Сколько будет 7 + или - 15?');

// предпочтительное решение
switch (userAnswer) {
  case '22':
  case '-8':
  case 'Я не робот':
  case 'я не робот':
    console.log('Успех!');
    break;
  default:
    console.log('Вы робот!');
    break;
}

// альтернатива (имитация логики if/else)
switch (true) {
  case userAnswer === '22':
  case userAnswer === '-8':
  case userAnswer === 'Я не робот' || userAnswer === 'я не робот':
    console.log('Успех!');
    break;
  default:
    console.log('Вы робот!');
    break;
}

// через if/else
const userAnswerLower = userAnswer.toLowerCase(); // к нижнему регистру

if (
  userAnswer === '22' ||
  userAnswer === '-8' ||
  userAnswerLower === 'я не робот'
) {
  console.log('Успех!');
} else {
  console.log('Вы робот!');
}
