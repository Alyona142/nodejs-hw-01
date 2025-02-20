import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = () => {
  try {
    const contacts = readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('The data from the file is not an array!');
    }

    if (contacts.length === 0) {
      console.log('There are no contacts to delete.');
      return;
    }

    const updatedContacts = contacts.slice(0, contacts.length - 1);
    writeContacts(updatedContacts);

    console.log('The last contact has been deleted.');
  } catch (error) {
    console.error(
      'An error occurred while processing contacts:',
      error.message,
    );
  }
};

removeLastContact();
