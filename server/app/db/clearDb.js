export function clearDb(db) {
  db.none('TRUNCATE user_table RESTART IDENTITY');
}

export default clearDb;
