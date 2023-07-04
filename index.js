const contactsApi = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const data = await contactsApi.listContacts();
      return console.log("All contacts =", data);

    case "get":
      // ... id
      const foundContact = await contactsApi.getContactById(id);
      return console.log(`Searched contact with id = ${id} `, foundContact);

    case "add":
      // ... name email phone
      const addedContact = await contactsApi.addContact({ name, email, phone });
      return console.log(addedContact);

    case "remove":
      // ... id
      const deletedContact = await contactsApi.removeContact(id);
      return console.log(deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


//  invokeAction({action : 'list'})
//  invokeAction({action : 'get', id: '1DEXoP8AuCGYc1YgoQ6hw'})
//  invokeAction({action : 'add', name: 'Mango', email: 'mango@gmail.com', phone: '322-22-22' })
//  invokeAction({ action: "remove", id: "FSjgXoizv" });
