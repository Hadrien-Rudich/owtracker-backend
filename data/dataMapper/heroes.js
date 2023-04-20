const heroesList = require('../heroes')

const dataMapper = {

  async findAll() {
  
    const allHeroes = []
    for(hero of heroesList) {
      allHeroes.push(hero)
    }
  
    return allHeroes
  },

  
  async findBySlug(slug) {
const hero = heroesList.filter(hero => hero.slug === slug)
return hero

  },
  async findByRole(role) {
    const heroesByRole = heroesList.filter(hero => hero.role === role)
return heroesByRole

  },
  };
  
  module.exports = dataMapper;