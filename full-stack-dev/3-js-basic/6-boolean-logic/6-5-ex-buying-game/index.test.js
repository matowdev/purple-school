const canUserBuyGame = require('./index');

describe('Game Purchase Logic', () => {
  it('should return true if the user can buy the game', () => {
    const user = {
      balance: 1500,
      bonusBalance: 99,
      isBanned: false,
      hasPurchased: false,
    };
    const game = {
      isSelling: true,
    };
    expect(canUserBuyGame(user, game)).toBe(true);
  });

  it('should return false if the user is banned', () => {
    const user = {
      balance: 1500,
      bonusBalance: 99,
      isBanned: true,
      hasPurchased: false,
    };
    const game = {
      isSelling: true,
    };
    expect(canUserBuyGame(user, game)).toBe(false);
  });

  it('should return false if the game is already purchased', () => {
    const user = {
      balance: 1500,
      bonusBalance: 99,
      isBanned: false,
      hasPurchased: true,
    };
    const game = {
      isSelling: true,
    };
    expect(canUserBuyGame(user, game)).toBe(false);
  });

  it('should return false if the game is not for sale', () => {
    const user = {
      balance: 1500,
      bonusBalance: 99,
      isBanned: false,
      hasPurchased: false,
    };
    const game = {
      isSelling: false,
    };
    expect(canUserBuyGame(user, game)).toBe(false);
  });

  it('should return true if the user has enough bonus balance', () => {
    const user = {
      balance: 500,
      bonusBalance: 150,
      isBanned: false,
      hasPurchased: false,
    };
    const game = { isSelling: true };
    expect(canUserBuyGame(user, game)).toBe(true);
  });
});
