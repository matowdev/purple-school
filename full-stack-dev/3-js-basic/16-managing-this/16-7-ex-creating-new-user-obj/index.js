// Сделать функцию пользователя которая берет за основу userInfo и за счет замыкания создает новый объект, с которым можно работать как user1().increase(100)

const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function createUser(template) {
  const newUser = { ...template };
  return () => newUser;
}

const user1 = createUser(userInfo); // в итоге здесь функция, готовая вернуть/создать объект
user1().increase(100); // создание объекта и сразу отработка метода

console.log(user1()); // { balance: 100, operations: 1, increase: ƒ }
console.log(userInfo); // { balance: 0, operations: 0, increase: [Function: increase] }
