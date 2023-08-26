// const Wallet = artifacts.require("Wallet");

// contract("Wallet", function (accounts) {
//   const senderAddress = accounts[0];
//   const senderAddress2 = accounts[1];
//   const receiverAddress = accounts[2];

//   it("should get 0 ethers for " + receiverAddress, async function () {
//     let walletContract = await Wallet.deployed();
//     let balance = await walletContract.getBalance({
//       from: receiverAddress,
//     });
//     return assert.equal(balance.words[0], 0, "Not equal to 0");
//   });
//   it("should send 30 ethers from " + senderAddress, async function () {
//     let walletContract = await Wallet.deployed();
//     let tx = await walletContract.send(30, { from: senderAddress });
//     assert.isTrue(tx.receipt.status);
//     assert.equal(
//       tx.receipt.from.toLowerCase(),
//       senderAddress.toLowerCase(),
//       "transaction sender address to equal to " + senderAddress
//     );
//     assert.equal(
//       tx.receipt.to.toLowerCase(),
//       walletContract.address.toLowerCase(),
//       `contract address (${walletContract.address.toLowerCase()}) to equal to transaction receiver address (${tx.receipt.to.toLowerCase()})`
//     );
//   });

//   it("should get 30 ethers for " + senderAddress, async function () {
//     let walletContract = await Wallet.deployed();
//     let balance = await walletContract.getBalance({ from: senderAddress });
//     return assert.equal(balance.words[0], 30, "Not equal to 30");
//   });

//   it("should send 10 ethers from " + senderAddress2, async function () {
//     let walletContract = await Wallet.deployed();
//     let tx = await walletContract.send(10, { from: senderAddress2 });
//     assert.isTrue(tx.receipt.status);
//     assert.equal(
//       tx.receipt.from.toLowerCase(),
//       senderAddress2.toLowerCase(),
//       "transaction sender address to equal to " + senderAddress2
//     );
//     assert.equal(
//       tx.receipt.to.toLowerCase(),
//       walletContract.address.toLowerCase(),
//       `contract address (${walletContract.address.toLowerCase()}) to equal to transaction receiver address (${tx.receipt.to.toLowerCase()})`
//     );
//   });

//   it("should get 10 ethers for " + senderAddress2, async function () {
//     let walletContract = await Wallet.deployed();
//     let balance = await walletContract.getBalance({ from: senderAddress2 });
//     return assert.equal(balance.words[0], 10, "Not equal to 10");
//   });

//   it("should get 40 as total balance", async function () {
//     let walletContract = await Wallet.deployed();
//     let balance = await walletContract.getTotalBalance();
//     return assert.equal(balance.words[0], 40, "Not equal to 40");
//   });

//   it(`should send ${senderAddress} balance to ${receiverAddress}`, async function () {
//     let walletContract = await Wallet.deployed();
//     let tx = await walletContract.transferBalanceTo(receiverAddress);
//     return assert.isTrue(tx.receipt.status);
//   });

//   it("should get 0 ethers for " + senderAddress, async function () {
//     let walletContract = await Wallet.deployed();
//     let balance = await walletContract.getBalance({ from: senderAddress });
//     return assert.equal(balance.words[0], 0, "Not equal to 0");
//   });
// });
