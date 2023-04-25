const dataMapper = require('../../data/dataMapper/maps/types')

const mapTypesController = {

  async findAll(req, res) {

    const mapTypes = await dataMapper.findAll()
    res.send(mapTypes)
    console.log('Finding all mapTypes')
    
  },  
  };
  
  module.exports = mapTypesController;