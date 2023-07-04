# Скриншоти виконання команд cli застосунку
## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
  ```node index.js --action list```

![Alt-текст](https://ibb.co/mBxzN8z "Заголовок изображения")


## Отримуємо контакт за id - виводимо в консоль об'єкт контакту або null, якщо контакту з таким id не існує.
  node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

https://ibb.co/xHfGkFg

## Додаємо контакт і виводимо в консоль створений контакт
  node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

https://ibb.co/FnRhvCk

## Видаляємо контакт і виводимо в консоль видалений контакт або null, якщо контакту з таким id не існує.
  node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

https://ibb.co/y06dp36

