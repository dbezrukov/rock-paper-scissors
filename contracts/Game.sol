pragma solidity >=0.4.21 <0.6.0;

// User choices: 0 - ROCK, 1 - PAPER, 2 - SCISSORS
// Game result: 0 - LOSE, 1 - DRAW, 2 - WIN

contract Game {
  uint8[3][3] resultMatrix = [[1, 0, 2], [2, 1, 0], [0, 2, 1]];

  uint8 private firstChoice;

  struct GameState {
    bool firstChoiceWasMade;
    string description;
  }
  
  GameState public gameState;

  constructor() public {
    gameState.firstChoiceWasMade = false;
    gameState.description = "Игрок А, ваш ход.";
  }

  function submitChoice(uint8 choice) public {
    
    if (!gameState.firstChoiceWasMade) {
      firstChoice = choice;
      gameState.firstChoiceWasMade = true;
      gameState.description = "Игрок Б, ваш ход.";

    } else {
      uint8 gameResult = resultMatrix[firstChoice][choice];
      gameState.firstChoiceWasMade = false;
      gameState.description = "Игра закончена. Игрок А, ваш ход.";
    }
  }
}