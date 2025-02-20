import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = (number) => [...Array(number)].map(createFakeContact);

(async () => {
  try {
    const number = Number(process.argv[2]) || 5;
    let contacts = await readContacts();
    const newContacts = generateContacts(number);
    contacts = [...contacts, ...newContacts];

    await writeContacts(contacts);
    console.log(`Added ${number} new contacts!`);
  } catch (error) {
    console.error(
      'An error occurred during the generateContacts process:',
      error,
    );
  }
})();
