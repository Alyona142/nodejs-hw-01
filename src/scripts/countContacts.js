import { readContacts } from '../utils/readContacts.js';

(async () => {
  try {
    const contacts = await readContacts();
    console.log(`Number of contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error when counting contacts:', error);
  }
})();
