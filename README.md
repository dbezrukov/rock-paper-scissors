## Rock Paper Scissors

Rock Paper Scissors DApp game.<br>
Smart contracts are written in Solidity.<br>
Smart contracts are compiled and deployed to a private Ganache blockchain using Truffle framework (solc, web3).<br>
Mocha framework is used for testing contracts.<br>
App frontend is implemented using the Drizzle library included in Truffle.<br>
App relies on React/Redux Store, synchronized with smart contract via web3 provider.<br>

## Game process

The game is designed for two participants.<br>
Each participant opens the game in their own browser.<br>
Players agree on who is Player A and who is B, and begin to take turns playing.<br>
The first player's bet is stored in the blockchain, and after the second player makes a bet, game result is displayed.<br>
This game implementation can be improved by encrypting the first player's bet.<br>

## Setting Up prerequisites
### Installing Node.js on AWS EC2 instance
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install lts/dubnium
```
### Installing Truffle framework and Ganache private blockchain
```
npm install -g yarn
yarn global add truffle
yarn global add ganache-cli
```

## Linux virtual screen 1
### Starting blockchain
```
ganache-cli --host 0.0.0.0
```

## Linux virtual screen 2
### Smart contract compilation and deployment
```
truffle compile
truffle test
truffle migrate
```

### Starting app frontend
```
cd app
yarn
yarn start
```
