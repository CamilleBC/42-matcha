import  db  from '../../db/getDb';
import  saveUser  from '../../db/saveUser';
import { validateUser } from '../../validation/validateUser';

export async function createUser(user) {
  if (!validateUser(user)) {
    console.log('Invalid user. Cannot save to db.');
    return;
  }
  console.log('createUser getDb');
  // const db = getDb();
  const matchaDb = db;
  console.log('createUser saveUser');
  await saveUser(matchaDb, user);
  console.log('User saved');
}

export default createUser;
