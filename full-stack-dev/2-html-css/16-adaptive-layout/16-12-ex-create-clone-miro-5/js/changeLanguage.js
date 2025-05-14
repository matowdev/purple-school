(() => {
  // организация смены текста/языка (в lang-btn)
  const languageBtn = document.getElementById('lang-btn');
  const languageText = document.getElementById('lang-text');

  if (languageBtn && languageText) {
    languageBtn.addEventListener('click', () => {
      const currentLang = languageText.textContent;
      if (currentLang === 'RU') {
        languageText.textContent = 'EN';
      } else if (currentLang === 'EN') {
        languageText.textContent = 'RU';
      }
    });
  } else {
    console.error('Кнопка-иконка или текстовый элемент языка НЕ найдены!');
  }
})();
