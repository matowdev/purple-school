function submitData(e) {
  /* Для работы с формой и вывода результата */
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const res = calculate(
    formProps.sum,
    formProps.day,
    formProps.percent,
    formProps.isCapital
  );
  document.querySelector('.main__result').innerHTML = `Ваш доход: ${res} руб.`;
}

function calculate(sum, day, percent, isCapital) {
  /* TODO: Нужно написать данную функцию */
  /* TODO: Вернуть получившееся значение */
}
