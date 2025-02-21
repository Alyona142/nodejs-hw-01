import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Invalid data format: expected an array.');
    }

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);

    console.log('The last contact has been deleted.');
  } catch (error) {
    console.error(
      'An error occurred while processing contacts:',
      error.message,
    );
  }
};

removeLastContact();
