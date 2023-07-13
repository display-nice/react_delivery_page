# React Delivery Page
Страница заказа доставки для интернет-магазина; https://wakadaka59.github.io/react_delivery_page/

Типовая логика для многих таких страниц: переключение режимов самовывоз\доставка, выбор адреса, отображение адреса на карте, выбор способа оплаты, валидация.

Особенности проекта:
* Кроссбраузерная вёрстка под ПК
* CSS: модульная структура, переменные, БЭМ, Flexbox
* React, Redux Toolkit
* Внешний стейт. Переиспользуемые компоненты.
* Карта и точки на API Leaflet со стилем 2GIS. Выбранный адрес отображается на карте
* Адреса точек в городе приходят с сервера в JSON через Fetch-запрос
* Обработка ошибок загрузки страницы и ошибок отправки данных на сервер
* Различные способы валидации: html, регулярные выражения, алгоритм Луна для номера карты
* Номер карты: при заполнении одного поля фокус перемещается в следующее поле
* Время доставки выбирается удобным бегунком
* При переключении "доставка\самовывоз" в форме сохраняются данные для каждого режима
* Собранные данные упаковываются в JSON и уходят на сервер через Fetch (POST-запрос), в консоль выводится результат отправки