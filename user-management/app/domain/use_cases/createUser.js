import  db  from '../../db/getDb';
import  saveUser  from '../../db/saveUser';
import { validateUser } from '../../validation/validateUser';

export async function createUser(user) {
  if (!validateUser(user)) {
    throw(Error, "Invalid user")
  }
  return await saveUser(db, user);
}

export default createUser;
