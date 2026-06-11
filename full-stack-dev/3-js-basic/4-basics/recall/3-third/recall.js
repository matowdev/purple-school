'use strict';

// теоретическая часть, была..
console.log(10 - 3 + 5); // 12
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof Infinity); // "number"
console.log(typeof NaN); // "number"

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Задание 1:
// Необходимо написать скрипт расчета итоговой стоимости образовательного курса:
// - Базовая стоимость одного модуля курса — 150 (значение фиксировано, меняться не будет).
// - Количество приобретаемых модулей — 3 (в будущем пользователь может изменить это значение).
// - Персональная скидка — 25 (значение фиксировано).
// Что нужно:
// 1. Объяви эти три переменные, используя правильные ключевые слова (let или const) исходя из условий выше.
// 2. Вычисли итоговую стоимость по формуле: (стоимость модуля * количество) - скидка. Сохрани результат в новую переменную.
// 3. Сформируй строку с использованием обратных кавычек и выведи в консоль точный текст: "К оплате: [вычисленная сумма] USD."

const modulePrice = 150;
const discount = 25;
let purchasedModules = 3;

let totalPrice = modulePrice * purchasedModules - discount;
console.log(`К оплате: ${totalPrice} USD`); // К оплате: 425 USD

// Задание 2:
// Необходимо написать скрипт для обработки и отображения данных профиля пользователя (имя и баланс):
// - Имя пользователя: пустая строка "" (пользователь не заполнил поле).
// - Баланс пользователя: 0 (на счету нет средств, но это корректные данные).
// Что нужно:
// 1. Объяви две переменные: userNickname со значением "" и userBalance со значением 0.
// 2. Создай переменную displayNickname. Используй правильный логический оператор, чтобы при пустой строке значением по умолчанию стало слово "Аноним".
// 3. Создай переменную displayBalance. Используй правильный логический оператор, чтобы число 0 воспринималось как валидное значение и сохранялось, а резервное слово "Ошибка" применялось только в случае null или undefined.
// 4. Выведи displayNickname и displayBalance в консоль.

let userNickname = '';
let userBalance = 0;

let displayNickname = userNickname || 'Аноним';
let displayBalance = userBalance ?? 'Ошибка';

console.log(displayNickname); // "Аноним"
console.log(displayBalance); // 0

// Задание 3:
// Необходимо написать скрипт подсчета общих часов работы над совместным проектом OnSuite.
// - Твои отработанные часы: "15" (тип строка, имитация данных из формы ввода).
// - Отработанные часы Паши: "12" (тип строка, имитация данных из формы ввода).
// Что нужно:
// 1. Объяви две переменные с указанными строковыми значениями.
// 2. Вычисли общее количество часов. Используй унарный плюс (+) прямо в выражении сложения для неявного перевода обеих строк в числа, чтобы результатом стало число 27, а не строка "1512". Сохрани результат в новую переменную.
// 3. Преобразуй полученную сумму часов обратно в строку, используя хак с конкатенацией пустой строки. Сохрани результат в отдельную переменную.
// 4. Выведи в консоль результат проверки типа (typeof) последней переменной, чтобы подтвердить, что это "string".

let workedTimeSergey = '15';
let workedTimePasha = '12';

let totalWorkedTime = +workedTimeSergey + +workedTimePasha;
let timeToString = totalWorkedTime + '';

console.log(typeof timeToString); // string

// Задание 4:
// Необходимо написать скрипт счетчика выполненных задач:
// - Текущее количество задач: 5 (число).
// Что нужно:
// 1. Объяви переменную tasksCompleted со значением 5 (используй let).
// 2. Создай переменную previousTasks. Присвой ей значение tasksCompleted, используя постфиксный инкремент (tasksCompleted++) прямо в выражении присваивания.
// 3. Создай переменную isStrictEqual и запиши в нее результат строгого сравнения (===) переменной tasksCompleted со строкой '6'.
// 4. Создай переменную isLooseEqual и запиши в нее результат нестрогого сравнения (==) переменной tasksCompleted со строкой '6'.
// 5. Выведи все четыре переменные в консоль.

let tasksCompleted = 5;
let previousTasks = tasksCompleted++;

const isStrictEqual = tasksCompleted === '6';
const isLooseEqual = tasksCompleted == '6';

console.log(tasksCompleted); // 6
console.log(previousTasks); // 5
console.log(isStrictEqual); // false
console.log(isLooseEqual); // true

// Задание 5:
// Необходимо написать скрипт проверки прав доступа:
// Что нужно:
// 1. Объяви три переменные через let: guestAccess, userAccess, adminAccess. Не присваивай им значения при объявлении.
// 2. В следующей строке используй множественное присваивание, чтобы записать во все три переменные значение false (одной строкой).
// 3. Переопредели переменную adminAccess, задав ей значение true.
// 4. Создай переменную currentAccess. Используя цепочку логического ИЛИ (||), проверь по очереди guestAccess, userAccess и adminAccess. Запиши результат в currentAccess.
// 5. Выведи currentAccess в консоль.
// 6. Напиши краткий комментарий к console.log, указав, какое именно значение вернулось и на какой переменной остановилась проверка ||.

let guestAccess, userAccess, adminAccess;
guestAccess = userAccess = adminAccess = false;
adminAccess = true;

let currentAccess = guestAccess || userAccess || adminAccess;
console.log(currentAccess); // true.. получено из последней переменной adminAccess

// Задание 6:
// Необходимо написать скрипт для расчета времени на завершение учебного курса:
// - Всего модулей в курсе: 12.
// - Уже пройдено модулей: 4.
// - Дней до конца подписки: 14.
// - На прохождение одного модуля требуется: 2 дня.
// Что нужно:
// 1. Объяви 4 переменные с указанными выше вводными данными (используй const или let).
// 2. Вычисли количество оставшихся модулей и сохрани в переменную.
// 3. Вычисли, сколько всего дней потребуется на прохождение оставшихся модулей, и сохрани в переменную.
// 4. Создай логическую (boolean) переменную canFinishInTime. Запиши в неё результат оператора сравнения: меньше или равно требуемое время количеству оставшихся дней подписки.
// 5. Выведи в консоль результат с помощью шаблонной строки: "Успею ли я закончить курс: [значение canFinishInTime]. Потребуется дней: [вычисленное количество дней]."

const totalModulesInCourse = 12;
let completedModules = 4;
let daysToSubscriptionEnds = 14;
let daysToHackOneModule = 2;

let quantityModulesNeedsHack = totalModulesInCourse - completedModules;
let quantityDaysToHackAllCourse =
  quantityModulesNeedsHack * daysToHackOneModule;

let canFinishInTime = daysToSubscriptionEnds >= quantityDaysToHackAllCourse;
console.log(
  `Успею ли я закончить курс: ${canFinishInTime}. Потребуется дней: ${quantityDaysToHackAllCourse}`,
); // Успею ли я закончить курс: false. Потребуется дней: 16
