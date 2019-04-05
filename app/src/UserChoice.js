import React from "react";

class UserChoice extends React.Component {
  
  state = { stackId: null }
  
  handleMakeChoice = () => {
    this.sendChoice(1);
  }

  sendChoice = (value) => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Game;
    
    const stackId = contract.methods["add"].cacheSend(value, value + 1, {
      from: drizzleState.accounts[0]
    })

    this.setState({ stackId });
  }

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.stackId];

    if (!txHash) {
      return null;
    }

    const transactionStatus = transactions[txHash] ? transactions[txHash].status : 'unknown';

    return `Transaction status: ${transactionStatus}`;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleMakeChoice}>Make choice</button>
        <div>{this.getTxStatus()}</div>
      </div>
    )
  }
}
export default UserChoice;