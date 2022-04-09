// 

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/12LL7B8Zkope32vM7WTxXhmwmzDo2iTx',
      accounts:['7a82952ac49b77fd48065068173b33629d9c0cdb1842f1784c958e94c044c465']
    }
  }
}
