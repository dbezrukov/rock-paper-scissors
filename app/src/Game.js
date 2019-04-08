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

  renderGameStatus = () => {
    const { Game } = this.props.drizzleState.contracts;
    const gameState = Game.gameState[this.state.dataKey];

    if (!gameState) {
      return (<p>Получение статуса...</p>);
    }

    const { 
      firstChoiceWasMade,
      revealedFirstChoice, 
      revealedSecondChoice, 
      result 
    } = gameState.value;

    const gameResult = parseInt(result);
    const gameFirstChoice = parseInt(revealedFirstChoice);
    const gameSecondChoice = parseInt(revealedSecondChoice);

    if (gameResult > 0) {
      return (
        <div>
          <p>Игра окончена.</p>
          <p>Выбор А: <b>{this.getChoiceByCode(gameFirstChoice)}</b></p>
          <p>Выбор Б: <b>{this.getChoiceByCode(gameSecondChoice)}</b></p>
          <p>Результат: <b>{this.getResultByCode(gameResult)}</b></p>
          <p>Игрок А, сделайте ход для продолжения игры:</p>
        </div>
      ) 
    }

    return (
      <div>
        <p>Игрок А сделал выбор.</p>
        <p>Игрок {firstChoiceWasMade ? 'Б' : 'А'}, ваш выбор:</p>
      </div>
    ); 
  }

  getChoiceByCode = (code) => {
    const choices = [
      'Камень',
      'Бумага',
      'Ножницы'
    ]
    return choices[code];
  }

  getResultByCode = (code) => {
    const results = [
      'Выиграл игрок Б',
      'Ничья',
      'Выиграл игрок А',
    ]
    return results[code - 1];
  }

  renderGameControls = () => {
    return (
      <div style={styles.buttonContainer}>
        <button onClick={this.handleRock}>Камень</button>
        <button onClick={this.handleScissors}>Ножницы</button>
        <button onClick={this.handlePaper}>Бумага</button>
      </div>
    )
  }

  renderTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.stackId];

    if (txHash && transactions[txHash]) {
      return (<p>Статус транзакции: {transactions[txHash].status}</p>);
    }
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
        {this.renderGameStatus()}
        {this.renderGameControls()}
        {/*this.renderTxStatus()*/}
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