// Написать код (одной строкой), который позволяет проверить возможность вести машину по следующим параметрам:
// hasLicence - имеет права
// age - возраст
// isDrunk - пьян

const hasLicence = true;
const age = 21;
const isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk;
console.log(
  `Данный человек может вести машину? ${
    canDrive ? 'Да, может!' : 'Нет.. не может!'
  }`
); // Данный человек может вести машину? Да, может!
