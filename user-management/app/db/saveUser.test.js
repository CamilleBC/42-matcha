import db from "./getDb";
import saveUser from "./saveUser";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const { expect } = chai;

const validUser = {
  username: "saveUser-test",
  password: "1234",
  firstname: "saveUser",
  lastname: "Test",
  email: "save.user@test.com"
};

describe("saveUser", () => {
  let user;

  after(async () => {
    const sqlQuery = "DELETE FROM user_table WHERE id = $1";
    await db.query(sqlQuery, user.userId);
  });
  it("should throw if username is null", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.username = null;
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      'null value in column "username" violates not-null constraint'
    );
  });
  it("should throw if username is more than 50 characters long", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.username = "a".repeat(51);
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      "value too long for type character varying(50)"
    );
  });
  it("should throw if password is null", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.password = null;
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      'null value in column "password" violates not-null constraint'
    );
  });
  it("should throw if password is more than 200 characters long", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.password = "a".repeat(201);
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      "value too long for type character varying(200)"
    );
  });
  it("should throw if firstname is null", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.firstname = null;
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      'null value in column "firstname" violates not-null constraint'
    );
  });
  it("should throw if firsname is more than 200 characters long", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.firstname = "a".repeat(201);
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      "value too long for type character varying(200)"
    );
  });
  it("should throw if lastname is null", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.lastname = null;
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      'null value in column "lastname" violates not-null constraint'
    );
  });
  it("should throw if lastname is more than 200 characters long", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.lastname = "a".repeat(201);
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      "value too long for type character varying(200)"
    );
  });
  it("should throw if email is null", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.email = null;
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      'null value in column "email" violates not-null constraint'
    );
  });
  it("should throw if email is more than 200 characters long", async () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.email = "a".repeat(201);
    return expect(saveUser(db, invalidUser)).to.eventually.be.rejectedWith(
      "value too long for type character varying(200)"
    );
  });

  it("should return user if valid", async () => {
    user = await saveUser(db, validUser);
    expect(user)
      .to.include({
        username: validUser.username,
        password: validUser.password,
        firstname: validUser.firstname,
        lastname: validUser.lastname,
        email: validUser.email
      })
      .and.have.property("userId");
  });
});
