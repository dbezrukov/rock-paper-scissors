/*
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraProjectId = "22499662b4a84006a0a90a1c539e84b6";

// Not for production, generated with https://iancoleman.io/bip39
const mnemonic = "twist best false drip indoor style siege rely host member dignity crush fatigue absorb bachelor";
*/

module.exports = {
  networks: {
    // Using Ganache personal blockchain
    development: {
      host: "localhost",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*"        // Any network (default: none)
    },

    // Using Ropsten public testnet
    // https://truffleframework.com/tutorials/using-infura-custom-provider
    /*
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraProjectId}`),
      network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
    */
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
