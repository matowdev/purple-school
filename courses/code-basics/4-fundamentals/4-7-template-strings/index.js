// шаблонные строки (в сравнении)
let projectName = 'сайт, для ООО "Инвест"';
let projectPrice = 2000;
let projectPerformer = 'Sergey Stuk';

let template =
  projectPerformer +
  ' разработает ' +
  projectName +
  ',' +
  ' за ' +
  projectPrice +
  '$';
console.log(template);

let template2 = `${projectPerformer} разработает ${projectName}, за ${projectPrice}$`;
console.log(template2);

let template3 = 'Проект: \n' + '- стоимостью ' + projectPrice + '$';
console.log(template3);

let template4 = `Проект:
- стоимостью ${projectPrice}$`;
console.log(template4);
