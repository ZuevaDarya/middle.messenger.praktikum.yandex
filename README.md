# Проект «Мессенджер»

Проект представляет собой мессенджер для общения между людьми, позволяет создавать чаты и отправлять сообщения, а также поддерживает регистрацию пользователей и настройку личного профиля. Специально для данного проекта были разработаны оригинальные макеты прототипов в Figma.


## Дизайн
* Ссылка на прототипы страниц в Figma: [Figma](https://www.figma.com/file/me5oYcITEChaxIxB5qp7eb/Messenger?type=design&node-id=0%3A1&mode=design&t=WSzzQVo3A9UDVYMM-1)

## Сборка и запуск проекта

Запустить проект в режиме разработки: `npm run dev`

&nbsp;

**Для запуска проекта на localhost**

Установить зависимости проекта: `npm install`

Собрать проект: `npm run build`

Запустить проект на localhost: `npm run start`

Запустить тесты проекта: `npm run test`

## Ссылки

### На приложение

* Опубликованное в Netlify приложение: https://deploy--starlit-strudel-0a24f9.netlify.app/

### Ссылки на PR

Спринт 1: [PR](https://github.com/ZuevaDarya/middle.messenger.praktikum.yandex/pull/7)

Спринт 2: [PR](https://github.com/ZuevaDarya/middle.messenger.praktikum.yandex/pull/8) 
 * код разбит на компоненты и страницы, наследующие Block
 * реализован механизм EventBus
 * реализован HTTPTransport для работы с запросами
 * добавлена валидация на все формы
 * реализован сбор данных из форм в консоль

 Спринт 3: [PR](https://github.com/ZuevaDarya/middle.messenger.praktikum.yandex/pull/9)
 * Добавлен роутинг в проект (реализован роутер для регистрации роутов)
 * Внедрен HTTP API чатов
 * Подключен WebSocket для работы с real-time сообщениями
 * Реализованы функции: обновление аватара пользователя и данных в профиле, добавление и удаление чата,
 обновление аватара чата, добавление и удаление пользоватлей из чата, обмен сообщениями в чатах

 Спринт 4: [PR](https://github.com/ZuevaDarya/middle.messenger.praktikum.yandex/pull/10)
 * Настроена среда для unit-тестов: chai, mocha, sinon
 * Установлен husky и настроен pre-commit
 * Написаны unit-тесты для компонента Block, роутера и HTTP Transport
