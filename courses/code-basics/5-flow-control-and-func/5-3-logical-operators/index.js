// логические операторы "и", "или", "НЕ" (их комбинация)
let isAdmin = false;
let canWrite = true;

console.log(
  `Есть ли права отработать системный файл? ..${isAdmin && canWrite}` // ..false
); //
console.log(`Есть ли права отработать обычный файл? ..${isAdmin || canWrite}`); // ..true
console.log(`Были админам стали.. т.е. есть права админа? ..${!isAdmin}`); // ..true

let isEdited = false;
let isSeniorAdmin = true;

console.log(
  `Есть ли права, для работы на удалённом сервере? ..${
    isSeniorAdmin || (isAdmin && canWrite && isEdited)
  }`
); // Есть ли права, для работы на удалённом сервере? ..true

let a = 11;

if (a >= -10 && a <= 10) {
  console.log('Число из соответствующего диапазона! ..true');
} else {
  console.log('Число не подошло ..false'); // ..false
}
