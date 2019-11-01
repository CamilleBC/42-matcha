const isEmptyBlankOrNull = str => {
  if (!str || str.trim().length === 0) {
    return true;
  }
  return false;
};

export function validateUser(user) {
  if (isEmptyBlankOrNull(user.username)
  ||isEmptyBlankOrNull(user.password)
  ||isEmptyBlankOrNull(user.firstname)
  ||isEmptyBlankOrNull(user.lastname)
  ||isEmptyBlankOrNull(user.email)
  ) {
    return false;
  }
  return true;
}

export default validateUser;
