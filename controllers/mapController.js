const dataMapper = require('../data/dataMapper/maps')

const mapController = {

  async findAll(req, res) {

    const maps = await dataMapper.findAll()
    res.send(maps)
    console.log('Finding All')
    
  },

  async findBySlug(req, res) {

    const slug = req.params.slug.toLowerCase()
    const map = await dataMapper.findBySlug(slug)
    res.send(map)
    console.log('Finding One By Slug')
  
  },

  async findByType(req, res) {

    const type = req.params.type.toLowerCase()
    const maps = await dataMapper.findByType(type)
    res.send(maps)
    console.log('Finding All By Type')
  }
  
  };
  
  module.exports = mapController;