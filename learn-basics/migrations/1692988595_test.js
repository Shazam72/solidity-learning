const Test = artifacts.require("Test")
module.exports = function(_deployer) {
  _deployer.deploy(Test)
};
