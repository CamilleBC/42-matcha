export async function saveUser(db, user) {
  const sqlQuery =
    'INSERT INTO user_table(username, password, firstname, lastname, email) VALUES($1, $2, $3, $4, $5) RETURNING *';

  console.log('saveUser request');
  await db.none(sqlQuery, [
    user.username,
    user.password,
    user.firstname,
    user.lastname,
    user.email
  ]);
  console.log('saveUser SUCCESS');
}

export default saveUser;
