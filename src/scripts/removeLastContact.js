import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContacts = () => {
  try {
    const contacts = readContacts();
    if (contacts.length === 0) {
      console.log('There are no contacts to delete.');
      return;
    }

    contacts.pop();
    writeContacts(contacts);
    console.log('The last contact has been deleted.');
  } catch (error) {
    console.error(
      'An error occurred while processing contacts:',
      error.message,
    );
  }
};

removeLastContacts();
