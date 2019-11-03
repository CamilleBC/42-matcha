import rewire from 'rewire';
import { expect } from 'chai';
import validateUser from './validateUser';
const validate = rewire('./validateUser.js');
const isEmptyBlankOrNull = validate.__get__('isEmptyBlankOrNull');

describe('validateUser', () => {
  describe('isEmptyBlankOrNull', () => {
    it('should be true if string is empty', () => {
      const str = '';
      const result = isEmptyBlankOrNull(str);
      expect(result).to.equal(true);
    });
    it('should be true if string is null', () => {
      const str = null;
      const result = isEmptyBlankOrNull(str);
      expect(result).to.equal(true);
    });
    it('should be true if string is undefined', () => {
      const str = undefined;
      const result = isEmptyBlankOrNull(str);
      expect(result).to.equal(true);
    });
    it('should be true if string is blank', () => {
      const str = ' \t\n';
      const result = isEmptyBlankOrNull(str);
      expect(result).to.equal(true);
    });
    it('should be false if string exists', () => {
      const str = 'test';
      const result = isEmptyBlankOrNull(str);
      expect(result).to.equal(false);
    });
  });

  describe('validateUser', () => {
    it('should be false if user field is empty', () => {
      const user = {
        username: 'test',
        password: '1234',
        firstname: '',
        lastname: 'Test',
        email: 'test@test.com'
      };
      const result = validateUser(user);
      expect(result).to.equal(false);
    });
    it('should be false if user field is blank', () => {
      const user = {
        username: '   ',
        password: '1234',
        firstname: 'test',
        lastname: 'Test',
        email: 'test@test.com'
      };
      const result = validateUser(user);
      expect(result).to.equal(false);
    });
    it('should be false if user field is undefined', () => {
      const user = {
        username: undefined,
        password: '1234',
        firstname: 'test',
        lastname: 'Test',
        email: 'test@test.com'
      };
      const result = validateUser(user);
      expect(result).to.equal(false);
    });
    it('should be false if user field is null', () => {
      const user = {
        username: null,
        password: '1234',
        firstname: 'test',
        lastname: 'Test',
        email: 'test@test.com'
      };
      const result = validateUser(user);
      expect(result).to.equal(false);
    });
    it('should be true if user is valid', () => {
      const user = {
        username: 'test',
        password: '1234',
        firstname: 'test',
        lastname: 'Test',
        email: 'test@test.com'
      };
      const result = validateUser(user);
      expect(result).to.equal(true);
    });
  });
});
