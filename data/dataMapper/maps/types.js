const mapTypesList = require('./typesData')

const dataMapper = {

  async findAll() {
  
    const allMapTypes = []
    for(mapType of mapTypesList) {
      allMapTypes.push(mapType)
    }
  
    return allMapTypes
  },

  };
  
  module.exports = dataMapper;