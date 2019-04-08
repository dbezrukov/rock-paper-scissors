const Game = artifacts.require("./Game.sol");

// should display win or not win
contract("Game", accounts => {
  
  it ("rock should beat scissors", async () => {
    const game = await Game.deployed();
    
    await game.submitChoice(0, { from: accounts[0] });
    await game.submitChoice(2, { from: accounts[1] });

    const gameState = await game.gameState.call();

    assert.equal(gameState.result, 3);
  });
});