// Дан произвольный url вида - "https://purpleschool.ru/course/javascript"
// Нужно сделать функцию getUrlParts, которая выводит в консоль:
// - Протокол "https"
// - Доменное имя "purpleschool.ru"
// - Путь внутри сайта "/course/javascript"
// Используйте split(), join() методы. Оператор ...REST.
// Организуйте проверку на корректность входящего url.

const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'http://purpleschool.ru/course/react';
const url3 = 'ftp://purpleschool.ru/course/git';
const url4 = 'https://purpleschoolru/course/html&css';

function getUrlParts(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `Ошибка в протоколе! Должен быть http или https!`;
  }

  // const [protocol, domain, ...path] = url.split('/').filter(Boolean);
  const [protocol, , domain, ...path] = url.split('/');

  if (!domain.includes('.')) {
    return `Ошибка в доменном имени!`;
  }

  // return `Протокол - ${protocol.replace(':', '')}, доменное имя - ${domain}, путь - /${path.join('/')}`;
  // return `Протокол - ${protocol.slice(0,-1)}, доменное имя - ${domain}, путь - /${path.join('/')}`;
  return `Протокол - ${
    protocol.split(':')[0]
  }, доменное имя - ${domain}, путь - /${path.join('/')}`;
}

console.log(getUrlParts(url)); // "Протокол - https, доменное имя - purpleschool.ru, путь - /course/javascript"
console.log(getUrlParts(url2)); // "Протокол - http, доменное имя - purpleschool.ru, путь - /course/react"
console.log(getUrlParts(url3)); // "Ошибка в протоколе! Должен быть http или https!"
console.log(getUrlParts(url4)); // "Ошибка в доменном имени!"
