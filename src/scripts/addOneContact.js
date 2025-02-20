import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

(async () => {
  try {
    let contacts = await readContacts();
    const newContact = createFakeContact();

    contacts.push(newContact);
    await writeContacts(contacts);
    console.log(`Added  new contacts:`, newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
})();
