const operations = require("./contacts");
const { Command } = require("commander");
const program = new Command();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await operations.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContact = await operations.getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const newContact = await operations.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await operations.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

invokeAction(argv);
