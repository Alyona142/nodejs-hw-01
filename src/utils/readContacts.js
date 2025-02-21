import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('The data from the file is not an array!');
    }

    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
};
