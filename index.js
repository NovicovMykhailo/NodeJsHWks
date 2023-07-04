const { Command } = require('commander');
const contactsApi = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const data = await contactsApi.listContacts();
      return console.table(data);
    case 'get':
      const foundContact = await contactsApi.getContactById(id);
      return console.log(`Found contact with current id: ${id} `, foundContact);
    case 'add':
      const addedContact = await contactsApi.addContact({ name, email, phone });
      return console.log('Added Contact: ', addedContact);
    case 'remove':
      const deletedContact = await contactsApi.removeContact(id);
      return console.log('Deleted Contact: ', deletedContact);
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);

