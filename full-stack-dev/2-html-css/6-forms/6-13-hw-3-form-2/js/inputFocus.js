(() => {
  // организация автоматического добавления "focus" инпуту и помещения каретки курсора в конец присутствующего "value"
  const inputId = 'company';
  const inputElement = document.getElementById(inputId);

  if (inputElement) {
    inputElement.focus();

    // отработка setTimeout для надежности установки курсора
    setTimeout(() => {
      const length = inputElement.value.length;
      inputElement.setSelectionRange(length, length);
    }, 0); // без задержки
  } else {
    console.error(`Элемент с ID "${inputId}" не найден!`);
  }
})();
