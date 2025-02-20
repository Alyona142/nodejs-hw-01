import { writeContacts } from '../utils/writeContacts.js';

(async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been deleted!');
  } catch (error) {
    console.error(' Error deleting all contacts:', error);
  }
})();
