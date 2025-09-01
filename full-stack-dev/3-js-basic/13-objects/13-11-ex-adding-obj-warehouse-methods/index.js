// Нужно создать объект/склад с методами:
// - добавления на склад,
// - поиском по складу (по id),
// - расчёт веса всех товаров.

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: 'Ford',
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: 'red',
};

const warehouse = {
  goods: [],

  addGood(good = {}) {
    if (!good || !good.id) {
      console.error('Нельзя добавить пустой объект или товар без id.');
      return; // если без сообщения, можно возвращать false.. да и всё
    }

    const isGoodExist = this.goods.some((thisGood) => thisGood.id === good.id); // поиск совпадения

    if (!isGoodExist) {
      this.goods.push(good); // если нет такого/ещё id, тогда добавление
    }
  },

  findGoodById(id) {
    if (!id || typeof id !== 'number') {
      return false;
    }

    return this.goods.find((good) => good.id === id); // возврат undefined, ну или соответствующего объекта
  },

  getWeightKg() {
    return this.goods.reduce((acc, good) => {
      if (good?.weight?.kg) {
        return acc + good.weight.kg; // проверка согласно опциональной ?. цепочки, если есть/вес.. прибавление
      }

      return acc;
    }, 0);
  },
};

warehouse?.addGood(car);
warehouse?.addGood(chair);
warehouse?.addGood(paper);
warehouse?.addGood(paper); // дублирования не будет

console.log(warehouse?.goods);
/*
[
  { id: 1, weight: { kg: 1000 }, brand: 'Ford' },
  { id: 2, weight: { kg: 2 } },
  { id: 3, color: 'red' }
]
*/

console.log(warehouse?.findGoodById(2)); // { id: 2, weight: { kg: 2 } }
console.log(warehouse?.findGoodById()); // false
console.log(warehouse?.findGoodById('2')); // false
console.log(warehouse?.findGoodById(99)); // undefined

console.log(warehouse?.getWeightKg()); // 1002

// ?? альтернативное решение (от PS)
const newWarehouse = {
  goods: [],

  findGoodById: function (id) {
    return this.goods.find((g) => g.id == id);
  },

  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);

    if (existedGood) {
      console.log('Этот товар уже есть на складе');
      return;
    }

    this.goods.push(good);
  },

  getWeightKg: function () {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
      0
    );
  },
};
