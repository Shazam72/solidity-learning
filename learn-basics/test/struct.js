// const Struct = artifacts.require("Struct");

// /*
//  * uncomment accounts to access the test accounts made available by the
//  * Ethereum client
//  * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
//  */
// contract("Struct", function (accounts) {
//   it("should get 0 as balance for " + accounts[0], async function () {
//     let structContract = await Struct.deployed();
//     let balance = await structContract.getBalance();
//     return assert.equal(balance.words[0], 0, "Not equal to 0");
//   });
//   it("should get 0 payment for " + accounts[0], async function () {
//     let structContract = await Struct.deployed();
//     let numPayments = await structContract.getNumPayments();
//     return assert.equal(numPayments.words[0], 0, "Not equal to 0");
//   });
//   it(`should send 10 ether from ${accounts[0]}`, async function () {
//     let structContract = await Struct.deployed();
//     await structContract.send(10);
//     return assert.isTrue(true);
//   });
//   it("should get 10 as balance for " + accounts[0], async function () {
//     let structContract = await Struct.deployed();
//     let balance = await structContract.getBalance();
//     return assert.equal(balance.words[0], 10, "Not equal to 10");
//   });
//   it("should get 1 as payment for " + accounts[0], async function () {
//     let structContract = await Struct.deployed();
//     let numPayments = await structContract.getNumPayments();
//     return assert.equal(numPayments.words[0], 1, "Not equal to 1");
//   });
// });
