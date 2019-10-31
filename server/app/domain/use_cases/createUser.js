import { saveUser } from '../../db/user';

const isEmptyOrNull = str => {
  if (!str || str.trim().length === 0) {
    return true;
  }
  return false;
};
const validateUser = user => {
  if (isEmptyOrNull(user.username)) {
    return false;
  }
  return true;
};

export async function createUser(user) {
  if (!validateUser(user)) {
    console.log('Invalid user. Cannot save to db.');
    return;
  }
  saveUser(user);
  console.log('User saved');
}

export default createUser;
