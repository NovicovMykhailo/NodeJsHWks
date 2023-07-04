# Скриншоти виконання команд cli застосунку
## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
  ```node index.js --action list```

![screenshot-action-list](https://i.ibb.co/W3TKVtK/01-action-list.jpg)
[Link to photo](https://ibb.co/mBxzN8z)


## Отримуємо контакт за id - виводимо в консоль об'єкт контакту або null, якщо контакту з таким id не існує.
  ```node index.js --action get --id 05olLMgyVQdWRwgKfg5J6```

![screenshot-action-get](https://i.ibb.co/dgL6Tmp/02-action-get.jpg)
[Link to photo](https://ibb.co/xHfGkFg)



## Додаємо контакт і виводимо в консоль створений контакт
  ```node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22```

![screenshot-action-add](https://i.ibb.co/yVHNT7m/03-action-add.jpg)

[Link to photo](https://ibb.co/FnRhvCk)


## Видаляємо контакт і виводимо в консоль видалений контакт або null, якщо контакту з таким id не існує.
 ```node index.js --action remove --id qdggE76Jtbfd9eWJHrssH```
![screenshot-action-remove](https://i.ibb.co/R23YN53/03-action-remove.jpg)
[Link to photo](https://ibb.co/y06dp36)



