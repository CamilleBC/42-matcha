import db from "./getDb";
import clearDb from "./clearDb";
import populateDb from "./populateDb";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("populateDb", () => {
  beforeEach(async () => {
    await clearDb(db);
  });
  afterEach(async () => {
    await clearDb(db);
  });
  it("should populate 10000 rows", async () => {
    await populateDb(db);
    const sqlQuery = "SELECT COUNT(*) FROM user_table";
    return expect(db.query(sqlQuery)).to.eventually.deep.include({
      count: "10000"
    });
  });
});
