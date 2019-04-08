pragma solidity >=0.4.21 <0.6.0;

// Выбор игрока: 0 - камень, 1 - бумага, 2 - ножницы
// Результат игры: 1 - игрок А проиграл, 2 - ничья, 3 - игрок А выиграл

contract Game {
  uint8[3][3] resultMatrix = [[2, 1, 3], [3, 2, 1], [1, 3, 2]];

  uint8 private firstChoice;

  struct GameState {
    bool firstChoiceWasMade;
    uint8 revealedFirstChoice;
    uint8 revealedSecondChoice;
    uint8 result;
  }
  
  GameState public gameState;

  constructor() public {
    gameState.firstChoiceWasMade = false;
    gameState.revealedFirstChoice = 0;
    gameState.revealedSecondChoice = 0;
    gameState.result = 0;
  }

  function submitChoice(uint8 choice) public {
    
    if (!gameState.firstChoiceWasMade) {
      firstChoice = choice;
      gameState.firstChoiceWasMade = true;
      gameState.result = 0;

    } else {
      gameState.firstChoiceWasMade = false;
      gameState.revealedFirstChoice = firstChoice;
      gameState.revealedSecondChoice = choice;
      gameState.result = resultMatrix[firstChoice][choice];
    }
  }
}