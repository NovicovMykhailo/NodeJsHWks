const fs = require("fs/promises");
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  // ...твой код. Возвращает массив контактов.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  const allContacts = await listContacts();
  const foundContact = allContacts.filter(contact => contact.id === contactId);
  return foundContact.length !== 0 ? foundContact : null;
};

const addContact = async ({ name, email, phone }) => {
  // ...твой код. Возвращает объект добавленного контакта.
  const allContacts = await listContacts();
  const newContact = { id: shortid.generate(), name, email, phone };
  const mergedContacts = JSON.stringify([...allContacts, newContact]);

  await fs.writeFile(contactsPath, mergedContacts).then(e => {
    if (e) console.log(e);
    else console.log("Contact Added Successfully: ");
  });
  const contacts = await listContacts();
  return contacts[contacts.length - 1];
};

const removeContact = async (contactId) => {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  const allContacts = await listContacts();
  const foundIndex = allContacts.findIndex(contact => contact.id === contactId);

  if (foundIndex >= 0) {
    const targetContact = await getContactById(contactId);
    const newArray = allContacts.filter(contact => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newArray), e => {
      if (error) console.log(error);
      else console.log("Contact Removed Successfully: ");
    });

    return targetContact;
  } else {
    return null;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
