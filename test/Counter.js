const Counter = artifacts.require("Counter");

contract("Counter", function (/* accounts */) {
    it("should assert true", async function () {
        await Counter.deployed();
        return assert.isTrue(true);
    });
});