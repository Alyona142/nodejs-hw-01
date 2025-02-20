import { readContacts } from '../utils/readContacts.js';

(async () => {
  try {
    const contacts = await readContacts();
    console.log(' All contacts:', contacts);
  } catch (error) {
    console.error('Error while receiving contacts:', error);
  }
})();
