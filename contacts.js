const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

function listContacts() {
  const contacts = fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
module.exports = {
  listContacts,
};
