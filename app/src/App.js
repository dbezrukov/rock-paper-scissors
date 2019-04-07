import React, { Component } from 'react';

import Game from "./Game";

class App extends Component {

  /*
  loading — Indicates if Drizzle has finished initializing and the app is ready. 
  The initialization process includes instantiating web3 and our smart contracts, 
  fetching any available Ethereum accounts and listening for new blocks.

  drizzleState — This is where we will store the state of the Drizzle store in our top-level component.
  */

  state = { 
		loading: true, 
		drizzleState: null 
  }

  componentDidMount() {
		const { drizzle } = this.props;

		// subscribe to changes in the store
		this.unsubscribe = drizzle.store.subscribe(() => {

	  	// every time the store updates, grab the state from drizzle
	  	const drizzleState = drizzle.store.getState();

	  	// check to see if it's ready, if so, update local component state
	  	if (drizzleState.drizzleStatus.initialized) {
				this.setState({ loading: false, drizzleState });
	  	}
		})
  }

  compomentWillUnmount() {
		this.unsubscribe();
  }

  render() {
		if (this.state.loading) {
	  	return (<p>Загрузка игры...</p>)
		}

		return (
	  	<div className="App">
        <Game
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
		)
  }
}

export default App;
