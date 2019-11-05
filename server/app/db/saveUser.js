export async function saveUser(db, user) {
  const sqlQuery =
    'INSERT INTO user_table(username, password, firstname, lastname, email) VALUES($1, $2, $3, $4, $5) RETURNING id';

  const userId = await db.one(
    sqlQuery,
    [user.username, user.password, user.firstname, user.lastname, user.email],
    event => event.id
  );
  return { userId, ...user };
}

export default saveUser;
