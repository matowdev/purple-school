// Пользователь:
// - Возраст
// - Наличие работы
// - Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$?
// Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае.
// Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false;

const LAPTOP_PRICE = 2000;
const user = {
  name: 'Вася',
  age: 24,
  hasWork: false,
  money: 1900,
};

function getCredit(user = {}) {
  let creditSum = 0;

  if (user.age > 24 && user.hasWork) {
    creditSum = 500;
    console.log(`Одобрен кредит в ${creditSum}`);
    return user.money + creditSum >= LAPTOP_PRICE;
  } else if (user.age > 24) {
    creditSum = 100;
    console.log(`Одобрен кредит в ${creditSum}`);
    return user.money + creditSum >= LAPTOP_PRICE;
  } else {
    console.log('Кредит не одобрен..');
    return false;
  }
}

function buyLaptop(user = {}) {
  if (user.money >= LAPTOP_PRICE) {
    return true;
  }

  return getCredit(user);
}

const result = buyLaptop(user);
console.log(
  `Сможет ли ${user.name} купить себе ноутбук за ${LAPTOP_PRICE}$? ${
    result ? 'Да, сможет!' : 'Нет.. не сможет!'
  }`
);

// ?? альтернативное решение (чёткое разделение)
/**
 * "Чистая" функция. Её единственная задача — рассчитать и вернуть сумму кредита.
 * Она ничего не выводит в консоль и не принимает решений.
 * @param {object} userData - Данные пользователя.
 * @returns {number} - Сумма одобренного кредита (500, 100 или 0).
 */
function getCreditAmount(userData) {
  if (userData.age > 24 && userData.hasWork) {
    return 500;
  }
  if (userData.age > 24) {
    return 100;
  }
  return 0;
}

/**
 * Основная функция, которая принимает решение о покупке.
 * @param {object} userData - Данные пользователя.
 * @param {number} productPrice - Цена товара.
 * @returns {boolean} - Возвращает true, если покупка возможна, иначе false.
 */
function canUserBuyProduct(userData, productPrice) {
  // 1. Проверка на свои собственные деньги (может хватает)
  if (userData.money >= productPrice) {
    console.log('Денег достаточно, кредит не требуется.');
    return true;
  }

  // 2. Если своих денег не хватило, ТОЛЬКО ТОГДА обращаемся за кредитом.
  const credit = getCreditAmount(userData);

  if (credit > 0) {
    console.log(`Одобрен кредит в ${credit}$`);
  } else {
    console.log('В кредите отказано.');
  }

  // 3. Финальное решение с учётом кредита.
  return userData.money + credit >= productPrice;
}

const resultMessage = canUserBuyProduct(user, LAPTOP_PRICE);
console.log(
  `Сможет ли ${user.name} купить ноутбук? ${
    result ? 'Да, сможет!' : 'Нет, не сможет.'
  }`
);
