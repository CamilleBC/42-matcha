import connect from './connect';

const matchaDb = connect();
const sqlQuery =
  'INSERT INTO user_table(username, password, firstname, lastname, email) VALUES($1, $2, $3, $4, $5) RETURNING *';

export async function saveUser(user) {
  try {
    const db = await matchaDb;
    console.log('db saveUser: ' + db);
    const res = await db.query(sqlQuery, [
      user.username,
      user.password,
      user.firstname,
      user.lastname,
      user.email
    ]);
    console.log(res.rows[0]);
  } catch (err) {
    console.log(err.stack);
  }
}

export default { saveUser };
