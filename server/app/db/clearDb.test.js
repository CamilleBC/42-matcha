import db from "./getDb";
import clearDb from "./clearDb";
import populateDb from "./populateDb";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("clearDb", () => {

  beforeEach(async () => {
    await populateDb(db);
  });

  it("should empty db when called", async () => {
    await clearDb(db);
    const sqlQuery = "SELECT * FROM user_table";
    return expect(db.query(sqlQuery)).to.eventually.deep.equal([]);
  });
});
