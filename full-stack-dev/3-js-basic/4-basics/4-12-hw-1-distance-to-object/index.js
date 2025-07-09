// Написать код, который рассчитывает расстояние от текущей точки до точки назначения, представляя расчет как нахождение диагонали прямоугольника (используя основы тригонометрии или геометрии).
// Местоположение точки назначения (address latitude, address longitude).
// Текущее местоположение пользователя (position latitude, position longitude).

const addressLat = 62;
const addressLong = 10;
const positionLat = 55;
const positionLong = 30;

const differenceLat = addressLat - positionLat;
const differenceLong = addressLong - positionLong;
const distance = Math.sqrt(differenceLat ** 2 + differenceLong ** 2);

console.log(distance.toFixed(1)); // 21.2
