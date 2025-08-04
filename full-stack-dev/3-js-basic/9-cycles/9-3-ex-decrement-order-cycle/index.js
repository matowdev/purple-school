// Необходимо написать цикл, который проходит по исходному массиву в обратном порядке и формирует “новый” массив с обратным порядком элементов.
// - Исходный массив: ["!", "js", "люблю", "я"].
// - Цель: Получить строку "я люблю js !".

const mainArr = ['!', 'js', 'люблю', 'я'];
const newArr = [];

for (let i = mainArr.length - 1; i >= 0; i--) {
  newArr.push(mainArr[i]);
}

console.log(newArr.join(' ')); // я люблю js !

// ?? альтернативные решения (поверхностная копия ..или сразу вывод?)
const reversedString = [...mainArr].reverse().join(' ');
console.log(reversedString); // я люблю js !

console.log(mainArr.reverse().join(' ')); // я люблю js !
