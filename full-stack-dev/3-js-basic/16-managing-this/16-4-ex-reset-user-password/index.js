// Нужно согласно объекта пользователя, и сторонней функции.. организовать возможность сброса пароля, посредствам отработки логики bind() или call() метода:
// function removePassword(reset) {
//   if (reset) {
//     this.password = undefined;
//   } else {
//     this.password = 1;
//   }
// }
//
// const user = {
//   login: 'example@mail.com',
//   password: '12345',
// };
// Функция принимает один аргумент reset, который определяет, стоит ли сбросить пароль пользователя (true - сбросить).

'use strict';

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = 1;
  }
}

const user = {
  login: 'example@mail.com',
  password: '12345',

  resetPassword(confirm) {
    removePassword.call(user, confirm);
  },
};

user.resetPassword(false);
console.log(user.password); // 1

user.resetPassword(true);
console.log(user.password); // undefined

// ?? альтернативное решение (через bind())
const newResetPassword = removePassword.bind(user);

newResetPassword(true);
console.log(user.password); // undefined

newResetPassword(false);
console.log(user.password); // 1
