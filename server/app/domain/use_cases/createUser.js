import { saveUser } from '../../db/user';
import { validateUser } from '../../validation/validateUser';

export async function createUser(user) {
  if (!validateUser(user)) {
    console.log('Invalid user. Cannot save to db.');
    return;
  }
  saveUser(user);
  console.log('User saved');
}

export default createUser;
