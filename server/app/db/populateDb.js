import faker from 'faker';
import pgp from 'pg-promise';
import { pgpInit } from './getDb';

function createFakeUserArray(quantity = 1) {
  return Array.from({ length: quantity }, () => ({
    username: faker.internet.userName().slice(0, 50),
    password: faker.internet.password().slice(0, 100),
    firstname: faker.name.firstName().slice(0, 200),
    lastname: faker.name.lastName().slice(0, 200),
    email: faker.internet.email().slice(0, 200)
  }));
}

export async function populateDb(db) {
  // console.time('createFakeUserArray');
  const userArray = createFakeUserArray(10000);
  // console.timeEnd('createFakeUserArray');
  // our set of columns, to be created only once (statically), and then reused,
  // to let it cache up its formatting templates for high performance:
  const columnSet = new pgpInit.helpers.ColumnSet(
    ['username', 'password', 'firstname', 'lastname', 'email'],
    { table: 'user_table' }
  );

  // console.time('populateDb');
  // executing a task:
  await db.task('populating-db', async t => {
    // data input values:
    // generating a multi-row insert query:
    const insert = pgpInit.helpers.insert(userArray, columnSet);
    //=> INSERT INTO "matcha-db"("username","password", ...) VALUES('username1','password1', ...),('username2','password2', ...)
    return t.none(insert);
  })
    // .then(() => {
      // console.timeEnd('populateDb');
    // })
    .catch(error => {
      console.log('Could not populate database');
      console.log(error.message);
    });
}

export default populateDb;
