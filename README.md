# Структура проекта
project/
├── public/              # Статические файлы (картинки, CSS, JS)
│   ├── css/             # Стили
│   ├── js/              # Скрипты
│   ├── images/          # Изображения
│   └── fonts/           # Шрифты
├── src/                 # Исходный код
│   ├── components/      # Компоненты (если используете фреймворки)
│   ├── pages/           # Страницы сайта
│   ├── layouts/         # Общие шаблоны (например, header, footer)
│   ├── utils/           # Вспомогательные функции и хелперы
│   ├── services/        # Логика для работы с API и базами данных
│   ├── styles/          # Стилевые файлы (если используете CSS препроцессоры)
│   ├── assets/          # Необработанные статические файлы (иконки, изображения)
│   └── index.js         # Точка входа (если это SPA или приложение)
├── tests/               # Тесты (юнит-тесты, интеграционные)
├── server/              # Серверная логика (если используется backend)
│   ├── routes/          # Роуты API
│   ├── models/          # Модели данных
│   ├── controllers/     # Логика работы с данными
│   └── app.js           # Точка входа для сервера
├── config/              # Конфигурации проекта
│   ├── db/              # Настройки баз данных
│   └── env/             # Переменные окружения
├── node_modules/        # Зависимости Node.js (автогенерируется)
├── package.json         # Файл с настройками проекта и зависимостями
├── README.md            # Описание проекта
└── .gitignore           # Список исключений