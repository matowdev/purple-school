'use strict';

// Задание 1:
// Нужно определить процент скидки на основе типа клиента и суммы покупки, полученных из аргументов командной строки.

function getDiscountPercentage(customerType, purchaseAmount) {
  if (!customerType || typeof customerType !== 'string') {
    return `0%`;
  }

  if (!purchaseAmount || typeof purchaseAmount !== 'number') {
    return `0%`;
  }

  customerType = customerType.trim();
  let discountPercent = 0;

  if (customerType === 'vip') {
    discountPercent = 15;
  } else if (customerType === 'premium') {
    discountPercent = 10;
  } else if (customerType === 'regular') {
    if (purchaseAmount >= 1000) {
      discountPercent = 5;
    }
  }

  return `${discountPercent}%`;
}

console.log(getDiscountPercentage('regular', 500)); // "0%"
console.log(getDiscountPercentage('regular', 1500)); // "5%"
console.log(getDiscountPercentage('premium', 300)); // "10%"
console.log(getDiscountPercentage('vip', 800)); // "15%"
console.log(getDiscountPercentage('', 800)); // "0%"
console.log(getDiscountPercentage('vip')); // "0%"

// Задание 2:
// Определить тип подписки (BASIC, STANDARD, PREMIUM) на основе количества входов, статуса обучения и возраста аккаунта.

function getSubscriptionType(
  monthlyLogins,
  hasCompletedTutorialStr,
  accountAge
) {
  if (!monthlyLogins || typeof monthlyLogins !== 'number') {
    return '';
  }

  if (!hasCompletedTutorialStr || typeof hasCompletedTutorialStr !== 'string') {
    return '';
  }

  if (!accountAge || typeof accountAge !== 'number') {
    return '';
  }

  hasCompletedTutorialStr = hasCompletedTutorialStr.trim().toLowerCase();
  const hasCompletedTutorial = hasCompletedTutorialStr === 'true';

  if (hasCompletedTutorial === false || monthlyLogins < 5) {
    return 'BASIC';
  } else if (
    hasCompletedTutorial === true &&
    monthlyLogins >= 20 &&
    accountAge > 30
  ) {
    return 'PREMIUM';
  } else {
    return 'STANDARD';
  }
}

console.log(getSubscriptionType(3, 'false', 45)); // "BASIC"
console.log(getSubscriptionType(25, 'true', 60)); // "PREMIUM"
console.log(getSubscriptionType(12, 'true', 15)); // "STANDARD"
console.log(getSubscriptionType(8, 'false', 100)); // "BASIC"
console.log(getSubscriptionType(1, ' TRUE', 10)); // "BASIC"
console.log(getSubscriptionType()); // ""
