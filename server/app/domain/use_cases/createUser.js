import  db  from '../../db/getDb';
import  saveUser  from '../../db/saveUser';
import { validateUser } from '../../validation/validateUser';

export async function createUser(user) {
  if (!validateUser(user)) {
    console.log('Invalid user. Cannot save to db.');
    return;
  }
  const matchaDb = db;
  return await saveUser(matchaDb, user);
}

export default createUser;
