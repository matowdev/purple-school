// Задание 1:
// У тебя есть массив playlists, где каждый элемент — это массив с названиями треков. Некоторые плейлисты для разнообразия содержат еще один вложенный массив с бонус-треками.
// Твоя задача — получить один общий массив со всеми названиями треков (включая бонусные).

const playlists = [
  ['Track 1', 'Track 2'],
  ['Track 3', 'Track 4', ['Bonus 1', 'Bonus 2']],
  ['Track 5'],
];

const getFlatList = playlists.flat(Infinity);
console.log(getFlatList); // ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Bonus 1', 'Bonus 2', 'Track 5']

// Задание 2:
// У тебя есть массив объектов authors. У каждого автора есть имя (name) и массив его книг (books).
// Нужно получить единый массив всех книг, при этом каждая книга должна быть строкой в формате "Название книги от Автор":

const authors = [
  { name: 'Author A', books: ['Book 1', 'Book 2'] },
  { name: 'Author B', books: ['Book 3'] },
  { name: 'Author C', books: [] }, // Обрати внимание: у этого автора нет книг
];

const allBooks = authors.flatMap((author) =>
  author.books.map((book) => `${book} от ${author.name}`)
);

console.log(allBooks); // ['Book 1 от Author A', 'Book 2 от Author A', 'Book 3 от Author B']

// Задание 3:
// У тебя есть массив с данными о покупках. Каждый элемент — это либо объект товара, либо массив из нескольких товаров (подарочный набор).
// Нужно посчитать общую стоимость всех товаров, включая те, что находятся во вложенных массивах.
// Как бы ты решил(а) эту задачу, используя изученные методы и один из методов для подсчета суммы в массиве (например, reduce)?

const cart = [
  { name: 'T-shirt', price: 20 },
  [
    // Подарочный набор
    { name: 'Socks', price: 5 },
    { name: 'Tie', price: 15 },
  ],
  { name: 'Hat', price: 10 },
];

const totalCost = cart.flat().reduce((sum, item) => sum + item.price, 0);

console.log(totalCost); // 50
