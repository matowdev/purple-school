// Пользователь хочет приобрести игру в магазине
// Он может это сделать только если:
// - Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// - Он не забанен (isBanned)
// - Игра не куплена (isExist)
// - Игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат

const userBalance = 1500;
const userBonusBalance = 99;
const isUserBanned = false;
const isGamePurchased = false;
const isGameSelling = true;

const result =
  (userBalance > 1000 || userBonusBalance > 100) &&
  !isUserBanned &&
  !isGamePurchased &&
  isGameSelling;

console.log(`Пользователь может купить игру: ${result ? 'Да!' : 'Нет..'}`); // Пользователь может купить игру: Да!

// ? альтернативное решение (несколько переменных - нагляднее формирование результата)
// const canAfford = userBalance > 1000 || userBonusBalance > 100;
// const isAvailable = !isUserBanned && !isGamePurchased && isGameSelling;
// const result = canAfford && isAvailable;

// ? альтернативное решение (через функцию и объекты, с авто-тестами)
function canUserBuyGame(user, game) {
  const { balance, bonusBalance, isBanned, hasPurchased } = user;
  const { isSelling } = game;

  return (
    (balance > 1000 || bonusBalance > 100) &&
    !isBanned &&
    !hasPurchased &&
    isSelling
  );
}

module.exports = canUserBuyGame;

const user = {
  balance: 1500,
  bonusBalance: 99,
  isBanned: false,
  hasPurchased: false,
};
const game = { isSelling: true };

const canBuy = canUserBuyGame(user, game);
console.log(`Пользователь может купить игру: ${canBuy ? 'Да!' : 'Нет..'}`); // Пользователь может купить игру: Да!
