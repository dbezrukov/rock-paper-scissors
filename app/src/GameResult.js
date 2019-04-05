import React from "react";

class GameResult extends React.Component {
  
  state = { dataKey: null }

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Game;
    
    // let drizzle know we want to watch 'sum'
    var dataKey = contract.methods["sum"].cacheCall();
    
    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { Game } = this.props.drizzleState.contracts;
    
    // using the saved `dataKey`, get the variable we're interested in
    const sum = Game.sum[this.state.dataKey];
    
    // if it exists, then we display its value
    return <p>Sum: {sum && sum.value}</p>
  }
}

export default GameResult;