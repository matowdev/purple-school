// Задание 1:
// У тебя есть объект Map, в котором хранится конфигурация пользователя.
// Напиши одну строку кода, которая преобразует этот userConfigMap в обычный JavaScript объект с именем userConfigObject, используя Object.fromEntries().

const userConfigMap = new Map();
userConfigMap.set('theme', 'dark');
userConfigMap.set('notifications', true);
userConfigMap.set('language', 'en');

console.log(userConfigMap);
/*
Map(3) {
  'theme' => 'dark',
  'notifications' => true,
  'language' => 'en'
}
*/

const userConfigObject = Object.fromEntries(userConfigMap);
console.log(userConfigObject); // { theme: 'dark', notifications: true, language: 'en' }

// Задание 2:
// У тебя есть объект playerScores, где хранятся очки игроков.
// Используя связку Object.entries(), .filter() и Object.fromEntries(), создай новый объект highScores, в котором будут только те игроки, чей счет больше 100.

const playerScores = {
  alex: 150,
  bob: 85,
  charlie: 200,
  diana: 99,
};

const highScores = Object.fromEntries(
  Object.entries(playerScores).filter(([_, value]) => value > 100)
);

console.log(highScores); // { alex: 150, charlie: 200 }

// Задание 3:
// У тебя есть объект productSKU, который сопоставляет названия продуктов с их уникальными артикулами (SKU).
// Представь, что тебе нужно "перевернуть" этот объект для быстрого поиска. Создай новый объект skuToProduct, в котором ключами будут артикулы, а значениями — названия продуктов.
// Подсказка: Тебе снова понадобится связка Object.entries(), Object.fromEntries(), но в середине будет метод .map() для того, чтобы поменять местами элементы в каждой паре.

const productSKU = {
  Laptop: 'SKU-LAP-123',
  Mouse: 'SKU-MOU-456',
  Keyboard: 'SKU-KEY-789',
};

const skuToProduct = Object.fromEntries(
  Object.entries(productSKU).map(([key, value]) => [value, key])
);

console.log(skuToProduct);

/*
{
  'SKU-LAP-123': 'Laptop',
  'SKU-MOU-456': 'Mouse',
  'SKU-KEY-789': 'Keyboard'
}
*/
