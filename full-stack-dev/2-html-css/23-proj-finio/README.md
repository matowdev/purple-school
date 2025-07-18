# Finio, лендинг для сервиса финансового учёта

### Описание проекта

Данный проект представляет собой адаптивный лендинг (посадочную страницу) для сервиса "Finio", который помогает продавцам на маркетплейсах вести финансовый учёт. Страница подробно презентует возможности сервиса, его преимущества, тарифы и отзывы клиентов. Проект полностью выполнен с использованием чистого HTML и CSS, с особым акцентом на **семантическую верстку**, **доступность (Accessibility)** и **безупречный адаптивный дизайн** для корректного отображения на всех типах устройств.

[🔗 Демо-версия на GitHub Pages](https://matowdev.github.io/purple-school/full-stack-dev/2-html-css/23-proj-finio)

---

### Функциональность

- **Полностью адаптивная верстка**: Дизайн сайта идеально адаптируется под любые разрешения экранов, от компактных мобильных телефонов до больших десктопных мониторов.
- **Семантическая структура**: Код написан с использованием семантических тегов HTML5 (`<section>`, `<nav>`, `<address>` и др.), что улучшает индексацию поисковыми системами и обеспечивает понятную структуру документа.
- **Доступность (Accessibility)**: Широко используются ARIA-атрибуты (`aria-label`, `role` и др.) и продумана навигация, что делает сайт удобным для пользователей со специальными потребностями.
- **Продвинутый CSS**: Стилизация выполнена с применением современных техник. Использование **Flexbox** обеспечивает гибкость и адаптивность макета.
- **Оптимизация изображений**: Для разных разрешений экрана подгружаются разные версии изображений с помощью тега `<picture>`, что ускоряет загрузку страницы. Ленивая загрузка (`loading="lazy"`) применяется для изображений, находящихся вне первого экрана.

---

### Внешний вид страницы

![Finio page](https://github.com/matowdev/purple-school/blob/main/full-stack-dev/2-html-css/23-proj-finio/images/final-page-view.png?raw=true)

---

### Используемые технологии

- **HTML5**: Для создания структуры и семантики веб-страницы.
- **CSS3**: Для стилизации всех элементов. Ключевые особенности использования:
  - **Flexbox** для построения адаптивных сеток.
  - **CSS Custom Properties (переменные)** для централизованного управления палитрой, шрифтами и размерами, что делает код гибким и легко поддерживаемым.
  - **Media Queries** для создания полностью адаптивного дизайна.

> **Примечание**: В данном проекте сознательно не используется JavaScript и CSS Grid, чтобы продемонстрировать создание сложного и адаптивного макета с помощью чистого HTML и CSS (Flexbox).

---

### Структура кода

#### Основные принципы кода:

- **Именование по БЭМ**: Для CSS-классов используется строгая БЭМ-методология (Блок, Элемент, Модификатор). Это делает компоненты независимыми, легко переиспользуемыми и значительно повышает читаемость кода.
- **Модульность CSS**: Стили разделены на отдельные файлы по компонентам (`header.css`, `hero.css`, `footer.css`, `btn.css` и т.д.), что упрощает их поддержку. Все стили импортируются в один главный файл `style.css` через директиву `@import`.
- **Централизованные переменные**: Все основные цвета, шрифты, отступы и другие константы вынесены в файл `css/variables.css`, что позволяет легко менять визуальный стиль всего сайта в одном месте.
- **Чистый код**: Переменные и классы имеют понятные названия, что облегчает чтение и понимание кода.

#### Основные файлы и папки:

```
23-proj-finio/
│── css/                  # Стили:
│   ├── variables.css     # CSS переменные (цвета, шрифты, размеры)
│   ├── fonts.css         # Подключение шрифтов
│   ├── global-page.css   # Глобальные стили страницы
│   ├── btn.css           # Стили для кнопок
│   ├── header.css        # Стили для шапки
│   ├── hero.css          # Стили для главной секции
│   └── ... (и другие файлы для каждой секции)
│── images/               # Изображения, иконки и логотипы
│── index.html            # Главная и единственная страница
└── README.md             # Это описание проекта
```

---

### На что обратить внимание?

1.  **Строгая БЭМ-методология**: Именование CSS-классов полностью следует подходу "Блок, Элемент, Модификатор", что делает код самодокументируемым и предсказуемым.
2.  **Модульная CSS-архитектура**: Стили разделены на логические блоки по компонентам, что делает их легко поддерживаемыми и масштабируемыми.
3.  **Продвинутая адаптивность**: Дизайн отлично смотрится на любых устройствах. Для этого грамотно используются `media queries`, Flexbox, и даже тег `<picture>` для показа разных изображений на разных экранах.
4.  **Использование CSS Custom Properties**: Централизованное управление стилями через переменные в файле `variables.css` позволяет легко и быстро изменять цветовую палитру, шрифты и отступы всего проекта.
5.  **Высокий уровень доступности (a11y)**: Применение ARIA-ролей и атрибутов, семантических тегов и продуманных `:focus-visible` состояний для интерактивных элементов значительно улучшает пользовательский опыт.

---

### Запуск проекта

Поскольку это статический сайт, для его запуска не требуется сервер.

```sh
# Просто откройте файл index.html в вашем браузере
open index.html
```

---

### Заключение

Этот проект является отличным примером создания качественной, адаптивной и доступной веб-страницы с использованием современных подходов в верстке без применения JavaScript или сторонних CSS-фреймворков. Чистая структура проекта и строгое следование методологии БЭМ делают его прекрасным образцом профессиональной верстки.
