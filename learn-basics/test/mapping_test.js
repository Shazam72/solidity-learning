// const MappingTest = artifacts.require("MappingTest");

// contract("MappingTest", (accounts) => {
//   const valueToSend = 20;

//   it("should get 0 from address that doesn't send token to contract", async function () {
//     let mappingTest = await MappingTest.deployed();
//     let balance = await mappingTest.getBalance({
//       from: accounts[Math.floor(Math.random() * accounts.length)],
//     });
//     return assert.equal(balance.words[0], 0, "Not equal to 0");
//   });

//   it(`should send ${valueToSend} ether from ${accounts[0]}`, async function () {
//     let mappingTest = await MappingTest.deployed();
//     let balance = await mappingTest.send(valueToSend);
//     return assert.isTrue(true);
//   });
//   it(`should get ${valueToSend} for ${accounts[0]}`, async function () {
//     let mappingTest = await MappingTest.deployed();
//     let balance = await mappingTest.getBalance({ from: accounts[0] });
//     return assert.equal(
//       balance.words[0],
//       valueToSend,
//       "Not equal to " + valueToSend
//     );
//   });
// });
