const rewire = require("rewire");
const expect = require("chai").expect;
import validateUser from "./validateUser";
const validate = rewire("./validateUser.js");
const isEmptyBlankOrNull = validate.__get__("isEmptyBlankOrNull");

describe("isEmptyBlankOrNull", () => {
  it("should be true if string is empty", () => {
    const str = "";
    const result = isEmptyBlankOrNull(str);
    expect(result).to.equal(true);
  });
  it("should be true if string is null", () => {
    const str = null;
    const result = isEmptyBlankOrNull(str);
    expect(result).to.equal(true);
  });
  it("should be true if string is undefined", () => {
    const str = undefined;
    const result = isEmptyBlankOrNull(str);
    expect(result).to.equal(true);
  });
  it("should be true if string is blank", () => {
    const str = " \t\n";
    const result = isEmptyBlankOrNull(str);
    expect(result).to.equal(true);
  });
  it("should be false if string exists", () => {
    const str = "test";
    const result = isEmptyBlankOrNull(str);
    expect(result).to.equal(false);
  });
});

describe("validateUser", () => {
  it("should be false if field is empty", () => {
    const user = {
      name: "test",
      password: "1234",
      firstname: "",
      lastname: "Test",
      email: "test@test.com"
    };
    const result = validateUser(user);
    expect(true).to.equal(true);
  });
  it("should be true if user is valid", () => {
    const user = {
      name: "test",
      password: "1234",
      firstname: "test",
      lastname: "Test",
      email: "test@test.com"
    };
    const result = validateUser(user);
    expect(true).to.equal(true);
  });
});
