// Задание 1:
// Посмотри на код ниже. Сейчас он не работает так, как задумано. Автор кода хотел, чтобы при нажатии на каждую кнопку выводился ее номер (0, 1 или 2), но вместо этого всегда выводится число 3.
// Как исправить этот код, используя знания о let, const и областях видимости?

// Получаем все кнопки со страницы
// const buttons = document.querySelectorAll('button');

// Перебираем кнопки и вешаем обработчик клика
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function () {
//     console.log(i); // <-- Проблема здесь
//   });
// }

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(i);
  }); // замена на ключевое слово "let" в цикле, решила это проблему (область видимости разная у let и var)
}

// Задание 2:
// Напиши функцию processArray.
// Эта функция должна принимать два аргумента:
// arr — массив данных.
// callback — функция, которую нужно применить к каждому элементу массива.
// Внутри processArray нужно перебрать все элементы массива arr.
// Для каждого элемента нужно вызвать функцию callback, передав в неё этот элемент.
// Ожидаемый результат в консоли: Привет, Иван! / Привет, Анна! / Привет, Петр!

const names = ['Иван', 'Анна', 'Петр'];

function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

processArray(names, function (name) {
  console.log('Привет, ' + name + '!');
});

/*
Привет, Иван!
Привет, Анна!
Привет, Петр!
*/
