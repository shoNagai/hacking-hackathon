var Catbaby = artifacts.require("./Catbaby.sol");
var targetAddress = "";

module.exports = function(deployer) {
  deployer.deploy(Catbaby, targetAddress, {
    gas:5000000
  });
};