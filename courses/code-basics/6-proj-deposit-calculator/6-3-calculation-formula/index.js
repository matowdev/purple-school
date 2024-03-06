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
  document.querySelector('.main__result').innerHTML = `Ваш доход: ${res.toFixed(
    1
  )} руб.`;
}

function calculate(sum, day, percent, isCapital) {
  let result = 0;

  if (isCapital === 'yes') {
    result = sum * (1 + percent / 100 / 365) ** day - sum;
  } else {
    result = (sum * percent * day) / 365 / 100;
  }

  return result;
}
