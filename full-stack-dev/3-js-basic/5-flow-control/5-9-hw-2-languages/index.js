// Написать код, который при передаче пользователем языка: `en`, `ru`, `de` выводит в консоль соответствующее приветствие на указанном языке.
// - Пример: `de -> ‘Gutten tag!’`
// - Можно выбрать для поддержки 2-5 языков.
// - Отработать через switch/case.

const userLang = 'RU';
const userLangLower = userLang.toLowerCase(); // к нижнему регистру

switch (userLangLower) {
  case 'ru':
    console.log('Привет!');
    break;
  case 'en':
    console.log('Hello!');
    break;
  case 'de':
    console.log('Gutten tag!');
    break;
  default:
    console.log('Не известный язык..');
    break;
}
