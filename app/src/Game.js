import React from "react";

class Game extends React.Component {
  
  state = { 
    dataKey: null,
    stackId: null
  }

  componentDidMount() {
    const { Game } = this.props.drizzle.contracts;
    var dataKey = Game.methods.gameState.cacheCall();

    this.setState({ dataKey });
  }

  getGameStatus = () => {
    const { Game } = this.props.drizzleState.contracts;
    const gameState = Game.gameState[this.state.dataKey];

    return `${gameState && gameState.value.description}`;
  }

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.stackId];

    if (!txHash || !transactions[txHash]) {
      return null;
    }
    
    return `Статус транзакции: ${transactions[txHash].status}`;
  }

  handleRock = () => this.submitUserChoice(0)
  handlePaper = () => this.submitUserChoice(1)
  handleScissors = () => this.submitUserChoice(2)

  submitUserChoice = (choice) => {
    const { drizzle, drizzleState } = this.props;
    const { Game } = drizzle.contracts;
    const { Game: GameState } = drizzleState.contracts;
    
    const gameState = GameState.gameState[this.state.dataKey];
    const accountNumber = gameState.value.firstChoiceWasMade ? 1 : 0;

    const stackId = Game.methods.submitChoice.cacheSend(choice, {
      from: drizzleState.accounts[accountNumber]
    })

    this.setState({ stackId });
  }
  
  render() {
    return (
      <React.Fragment>
        <p>{this.getGameStatus()}</p>
        <div style={styles.buttonContainer}>
          <button onClick={this.handleRock}>Камень</button>
          <button onClick={this.handleScissors}>Ножницы</button>
          <button onClick={this.handlePaper}>Бумага</button>
        </div>
        <p>{this.getTxStatus()}</p>
      </React.Fragment>
    )
  }
}

const styles = {
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

export default Game;