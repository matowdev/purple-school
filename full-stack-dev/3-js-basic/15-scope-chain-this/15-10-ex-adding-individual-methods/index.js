// Нужно написать методы, позволяющие выводить имена различных сущностей компании (т.е. отдельно, для имени компании, для владельцев, для сотрудники) с использованием `this` для обращения к соответствующему/вложенному объекту.
// - точнее нужно правильно/потом организовать вызовы методов, что бы для всех/всё корректно выводилось!

'use strict';

const company = {
  name: 'LLC MDev',
  employees: [
    {
      name: 'Ann',
      getName() {
        return this.name;
      },
    },
  ],
  ceo: {
    name: 'Sergey',
    getName() {
      return this.name;
    },
  },
  getName() {
    return this.name;
  },
};

console.log(company.getName()); // "LLC MDev"
console.log(company.ceo.getName()); // "Sergey"
console.log(company.employees.map((employee) => employee.getName())); // [ 'Ann' ]
