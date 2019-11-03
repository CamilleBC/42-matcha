import { expect } from 'chai';
import { saveUser } from './saveUser';

describe('saveUser', () => {
  it('should be true if user is valid', () => {
    const user = {
      name: 'test',
      password: '1234',
      firstname: 'test',
      lastname: 'Test',
      email: 'test@test.com'
    };
    // const result = saveUser(user);
    const result = false;
    expect(result).to.equal(true);
  });
});
