# garpix-testovoe


Цель:
Создание SPA приложение на React.js с SSR, роутингом, CRUD.
В приложении обязательно должен быть реализован роутинг через html5 history api (не через хэши #!), CRUD, адаптивная верстка (можно использовать Bootstrap или любой другой css-фреймворк).
Результат выложить на github.com или архивом прислать ссылку на репозиторий . 
Приложение должно устанавливаться с помощью команды npm install (или yarn) и запускаться командой npm start (или yarn). Это необходимо для проверки работоспособности приложения.

Описание приложения:
Приложение представляет собой виртуальную библиотеку. Есть два типа данных - Автор и Книга. Каждая Книга должна быть привязана к конкретному Автору (только одному). В приложении должна быть возможность создания, просмотра, изменения, удаления Книг и Авторов.

В Книге должны быть следующие поля:
ID (id), число
Название книги (title), строка
Автор (author_id), внешний ключ
Дата добавления книги (created_at), число
Первая публикация (year), число
Обложка книги (image), изображение base64, необязательное

В Авторе должны быть следующие поля:
ID (id), число
Фамилия (last_name), строка
Имя (first_name), строка

Данные формирует сам кандидат.

Структура приложения:
Меню:
Верхнее меню
Главная страница
Книги
Авторы
Страницы и их содержимое:
Главная страница
Ссылка на страницу "Книги"
Ссылка на страницу "Авторы"


Книги
Список книг в виде таблицы, отображаются поля
"Название книги"
"Фамилия автора"
"Имя автора"
"Первая публикация"
Ссылка на просмотр книги
Ссылка на редактирование книги
Кнопка удаления книги
Кнопка создания книги

Просмотр книги, отображаются поля
"Название книги"
"Фамилия автора"
"Имя автора"
"Первая публикация"
«Обложка книги»

Редактирование книги, возможность отредактировать поля
"Название книги"
Select для выбора автора
"Первая публикация"
«Обложка книги»
!!! Для полей обязательна HTML5 валидация данных по типу данных
Создание книги (поля аналогичны редактированию книги)


Авторы
Список авторов в виде таблицы, отображаются поля
"Фамилия автора"
"Имя автора"
Ссылка на просмотр автора
Ссылка на редактирование автора
Кнопка удаления автора
Кнопка создания автора
Просмотр автора, отображаются поля
"Фамилия автора"
"Имя автора"
Редактирование автора, возможность отредактировать поля
"Фамилия автора"
"Имя автора"
!!! Для полей обязательна HTML5 валидация данных по типу данных
Создание автора (поля аналогичны редактированию автора)


Дополнительно:
Реализовать SSR для данного проекта (обрабатывать только чтение).
Данные сохранять в localstorage.
Осуществить защиту от XSS.
Разрешается использовать любые дополнительные npm-модули (redux и т.п.).

На основе тестового задания выделяем следующие навыки кандидата:
* Правильность архитектуры проекта.
* Правильность работы проекта.
* Знание JavaScript.
* Понимание React.
* Умение работы с внешними системами.
* Умение писать автотесты.
* Умение читать задание.
* Аккуратность вывода данных для пользователя
