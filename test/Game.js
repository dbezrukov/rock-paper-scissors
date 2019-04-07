const Game = artifacts.require("./Game.sol");

// should display win or not win
contract("Game", accounts => {
  
  it("should display 5", async () => {
    const game = await Game.deployed();
    await game.add(3, 2, { from: accounts[0] });
    const storedSum= await game.sum.call();
    assert.equal(storedSum, 5);
  });
});