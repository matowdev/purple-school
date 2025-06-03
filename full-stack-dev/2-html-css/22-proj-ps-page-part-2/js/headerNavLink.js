(() => {
  document.querySelectorAll('.header__nav-item').forEach((item) => {
    // обработка нажатия клавиш "enter" или "пробела"
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // предотвращение стандартного поведения (например, прокрутку страницы пробелом)

        // фиксация внутренней ссылки
        const link = this.querySelector('.header__nav-link');
        if (link && link.href) {
          window.location.href = link.href; // переход по ссылке
        }
      }
    });

    // организация прожатия по "всей" области .header__nav-item
    item.addEventListener('click', function (event) {
      // исключение как/есть ссылки (что бы без двойных открытий/переходов)
      if (event.target.tagName !== 'A') {
        const link = this.querySelector('.header__nav-link');
        if (link && link.href) {
          link.click(); // симуляция клика по ссылке
          // или window.location.href = link.href;
        }
      }
    });
  });
})();
