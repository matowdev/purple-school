// На примере рекурсивной функции посмотреть/понять как наполняется Call stack, функциональным контекстом.. один контекст на один и так пока всё не разрешиться.. ended

const sum = 1;
console.log('start');
console.log(sum);

function add5(n) {
  // n = n; // такое равенство заставит переполниться stack.. согласно ошибки/сообщения "maximum call stack size exceeded"
  n = n + 5;
  if (n > 100) {
    return n;
  }
  console.log(n);
  return add5(n);
}

add5(sum);
console.log('ended'); // выведется после всего
