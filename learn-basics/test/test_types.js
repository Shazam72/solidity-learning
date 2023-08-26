const test_types = artifacts.require("test_types");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("test_types", function (/* accounts */) {
  it("should assert true", async function () {
    await test_types.deployed();
    return assert.isTrue(true);
  });
});
