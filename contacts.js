const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

//Возвращает массив контактов.
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// Возвращает объект контакта по id или null.
const getContactById = async contactId => {
  const allContacts = await listContacts();
  const foundContact = allContacts.find(contact => contact.id === contactId);
  return foundContact || null;
};

// Возвращает объект добавленного контакта.
const addContact = async data => {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(), ...data };

  await fs.writeFile(contactsPath, JSON.stringify([...allContacts, newContact], null, 2));
  return newContact;
};

// Возвращает объект удаленного контакта или null.
const removeContact = async contactId => {
  const allContacts = await listContacts();
  const foundIndex = allContacts.findIndex(contact => contact.id === contactId);

  if (foundIndex === -1) {
    return null;
  }
  const newArray = allContacts.filter(contact => contact.id !== contactId);

  await fs.writeFile(contactsPath, JSON.stringify(newArray, null, 2), e => {
    if (err) console.log(err);
    else console.log('Contact Removed Successfully: ');
  });
  return allContacts[foundIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
