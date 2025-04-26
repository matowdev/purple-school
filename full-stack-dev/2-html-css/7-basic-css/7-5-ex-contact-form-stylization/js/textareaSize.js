(() => {
  // организация автоматически подстраиваемой высоты окна/textarea (после преодоления фиксированных размеров/высоты)
  const textarea = document.getElementById('textarea');

  if (textarea) {
    function autoResize() {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }

    textarea.addEventListener('input', autoResize);
  } else {
    console.error('Элемент <textarea /> не найден!?');
  }
})();
