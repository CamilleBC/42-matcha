import { createUser as createUserCase } from '../domain/use_cases/createUser';

export async function createUser(req, res, next) {
  var userData = req.body;
  console.log('Request body: ' + req.body);
  try {
    let userId = await createUserCase(userData);
    res.json(userId);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default { createUser };
