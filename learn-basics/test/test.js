const TestContract = artifacts.require("Test");

contract("Test", (accounts) => {
  it("Should get 72 as number from contract", async () => {
    const testContract = await TestContract.deployed();
    let num = await testContract.getNumber();
    assert.equal(72, num, "Not equal to 72");
  });

  it("Should set number to 27", async () => {
    const testContract = await TestContract.deployed();
    await testContract.setNumber(27);
    let num = await testContract.getNumber();
    assert.equal(num, num, "Not equal to 27");
  });
});
