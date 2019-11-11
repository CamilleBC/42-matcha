export async function clearDb(db) {
  await db.none('TRUNCATE user_table RESTART IDENTITY');
}

export default clearDb;
