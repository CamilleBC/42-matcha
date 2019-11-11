import db from "./getDb";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("getDb", () => {
  it("should be connected", () => {
    return expect(db.proc("version")).to.eventually.not.be.rejected;
  });
});
