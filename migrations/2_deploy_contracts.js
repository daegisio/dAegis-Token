const DAE = artifacts.require("token/DAE");

module.exports = function(deployer) {
    deployer.deploy(DAE);
};