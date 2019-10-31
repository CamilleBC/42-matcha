import { createUser as createUserCase } from '../domain/use_cases/createUser';

export async function createUser(req, res, next) {
  console.log(req.body);
  var userData = req.body;
  try {
    await createUserCase(userData);
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default { createUser };
