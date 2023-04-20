const historyList = require('../history')

const dataMapper = {

  async findAll() {
  
    const history = []
    for(game of historyList) {
      history.push(game)
    }
  
    return history
  }
  };
  
  module.exports = dataMapper;