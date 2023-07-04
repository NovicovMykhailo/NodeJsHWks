
Шаг 1
Инициализируй проект с помощью команды npm init
В корне проекта создай файл index.js

Установи пакет nodemon как зависимость разработки (devDependencies)
В файле package.json добавь "скрипты" для запуска index.js
Скрипт start, запускающий index.js с помощью node
Скрипт dev, запускающий index.js с помощью nodemon

Шаг 2
В корне проекта создай папку db. Для хранения контактов загрузи и используй файл contacts.json, положив его в папку db.
В корне проекта создай файл contacts.js.

Сделай импорт модулей fs (в версии, работающей с промисами – fs/promises) и path для работы с файловой системой.

Создай переменную contactsPath и запиши в нее путь к файлу contacts.json. Для составления пути используй методы модуля path.
Добавь функции для работы с коллекцией контактов. В функциях используй модуль fs и их методы readFile() и writeFile().

Сделай экспорт созданных функций через module.exports.

```js
// contacts.js


/*
 * Раскомментируй и запиши значение
const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код. Возвращает массив контактов.
}

function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. 
}
```js
```text
Шаг 3
Сделай импорт модуля contacts.js в файле index.js и проверь работоспособность функций для работы с контактами.

Шаг 4
В файле index.js должен импортироваться пакет yargs для удобного парса аргументов командной строки. Используй готовую функцию invokeAction(), получающую тип выполняемого действия и необходимые аргументы. Функция вызывает подходящий метод из файла contacts.js, передавая ему необходимые аргументы.
```text

```js
// index.js
const argv = require('yargs').argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
Также можно использовать модуль commander для парсинга аргументов командной строки. Это более популярная альтернатива модулю yargs

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

```js
```text

