const dataMapper = require('../../data/dataMapper/heroes/heroes')

const heroController = {

  async findAll(req, res) {

    const heroes = await dataMapper.findAll()
    res.send(heroes)
    console.log('Finding All')
    
  },

  async findBySlug(req, res) {

    const slug = req.params.slug.toLowerCase()
    const hero = await dataMapper.findBySlug(slug)
    res.send(hero)
    console.log('Finding One By Slug')
  
  },

  async findByRole(req, res) {

    const role = req.params.type.toLowerCase()
    const heroes = await dataMapper.findByRole(role)
    res.send(heroes)
    console.log('Finding All By Role')
  }
  
  };
  
  module.exports = heroController;