import createUser from "./createUser";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import db from "../../db/getDb";

chai.use(chaiAsPromised);
const { expect } = chai;

const validUser = {
  username: "createUser-test",
  password: "1234",
  firstname: "createUser",
  lastname: "Test",
  email: "create.user@test.com"
};

describe("createUser", () => {
  let user;

  after(async () => {
    const sqlQuery = "DELETE FROM user_table WHERE id = $1";
    await db.query(sqlQuery, user.userId);
  });

  it("should throw if user is invalid", () => {
    let invalidUser = Object.assign({}, validUser);
    invalidUser.username = null;
    return expect(createUser(invalidUser)).to.eventually.be.rejectedWith(
      "Invalid user"
    );
  });

  it("should return user if valid", async () => {
    user = await createUser(validUser);
    return expect(user)
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
